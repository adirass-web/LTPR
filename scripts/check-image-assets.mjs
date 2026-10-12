import { execFileSync } from 'node:child_process';
import { lstat, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const configPath = path.join(repo, 'config/image-assets.json');
const rasterExt =
  /\.(?:arw|avif|bmp|cr2|cr3|dng|gif|heic|heif|icns|ico|j2k|jp2|jpe?g|jpf|jpx|jxl|nef|orf|pbm|pef|pgm|png|pnm|ppm|raf|raw|rw2|srw|tga|tiff?|webp)$/i;
const cameraExt = /\.(?:arw|cr2|cr3|dng|heic|heif|nef|orf|pef|raf|raw|rw2|srw|tiff?)$/i;

function posix(value) {
  return value.split(path.sep).join('/');
}

async function walk(root) {
  const found = [];
  const symlinks = [];
  if ((await lstat(root)).isSymbolicLink()) return { files: found, symlinks: [root] };
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) symlinks.push(fullPath);
      else if (entry.isDirectory()) await visit(fullPath);
      else if (entry.isFile() && rasterExt.test(entry.name)) found.push(fullPath);
    }
  }
  await visit(root);
  return { files: found, symlinks };
}

function metadataChunks(buffer, ext) {
  const kinds = [];
  if (buffer.includes(Buffer.from('Exif\0\0')) || buffer.includes(Buffer.from('eXIf'))) kinds.push('EXIF');
  if (
    buffer.includes(Buffer.from('http://ns.adobe.com/xap/1.0/')) ||
    buffer.includes(Buffer.from('XML:com.adobe.xmp')) ||
    buffer.includes(Buffer.from('<x:xmpmeta')) ||
    buffer.includes(Buffer.from('adobe:ns:meta/'))
  ) {
    kinds.push('XMP');
  }
  if (buffer.includes(Buffer.from('IPTC')) || buffer.includes(Buffer.from('iptc'))) kinds.push('IPTC');
  if (/\.jpe?g$/i.test(ext)) {
    for (let i = 2; i + 4 < buffer.length && buffer[i] === 0xff;) {
      const marker = buffer[i + 1];
      if (marker === 0xda || marker === 0xd9) break;
      const length = buffer.readUInt16BE(i + 2);
      if (length < 2 || i + 2 + length > buffer.length) break;
      const payload = buffer.subarray(i + 4, i + 2 + length);
      if (marker === 0xe1 && payload.subarray(0, 6).toString('ascii') === 'Exif\0\0') kinds.push('EXIF');
      if (marker === 0xe1 && payload.toString('latin1').includes('http://ns.adobe.com/xap/1.0/')) kinds.push('XMP');
      if (marker === 0xed || payload.toString('latin1').includes('Photoshop 3.0')) kinds.push('IPTC/Photoshop');
      i += 2 + length;
    }
  } else if (/\.png$/i.test(ext)) {
    for (let i = 8; i + 12 <= buffer.length;) {
      const length = buffer.readUInt32BE(i);
      if (i + 12 + length > buffer.length) break;
      const type = buffer.subarray(i + 4, i + 8).toString('ascii');
      const data = buffer.subarray(i + 8, i + 8 + length);
      if (type === 'eXIf') kinds.push('EXIF');
      if (type === 'iTXt' && data.toString('latin1').includes('XML:com.adobe.xmp')) kinds.push('XMP');
      if (type === 'iTXt' && data.toString('latin1').includes('iptc')) kinds.push('IPTC');
      i += 12 + length;
    }
  } else if (/\.webp$/i.test(ext)) {
    for (let i = 12; i + 8 <= buffer.length;) {
      const type = buffer.subarray(i, i + 4).toString('ascii');
      const length = buffer.readUInt32LE(i + 4);
      if (i + 8 + length > buffer.length) break;
      if (type === 'EXIF') kinds.push('EXIF');
      if (type === 'XMP ') kinds.push('XMP');
      if (type === 'IPTC') kinds.push('IPTC');
      i += 8 + length + (length % 2);
    }
  }
  return [...new Set(kinds)];
}

export async function validate(root, layout, label) {
  const errors = [];
  const allowed = new Map(Object.entries(layout.assets));
  let files;
  try {
    const scan = await walk(root);
    files = scan.files;
    for (const link of scan.symlinks) {
      errors.push(
        `${label}: symbolic links are forbidden in scanned asset trees: ${posix(path.relative(root, link)) || '.'}`
      );
    }
  } catch (error) {
    return [`${label}: cannot scan ${root}: ${error.message}`];
  }
  for (const file of files) {
    const rel = posix(path.relative(root, file));
    if (cameraExt.test(rel)) errors.push(`${label}: camera or TIFF format is forbidden: ${rel}`);
    let manifestPath = rel;
    if (label === 'public') manifestPath = `public/${rel}`;
    if (label === 'dist') manifestPath = `public/${rel}`;
    const policy = allowed.get(manifestPath);
    if (!policy) errors.push(`${label}: raster path is not in the approved derivative manifest: ${rel}`);
    let metadata;
    let bytes;
    try {
      [metadata, bytes] = await Promise.all([sharp(file, { failOn: 'error' }).metadata(), readFile(file)]);
    } catch (error) {
      errors.push(`${label}: cannot read raster ${rel}: ${error.message}`);
      continue;
    }
    if (metadata.format === 'tiff' || (metadata.format === 'heif' && metadata.compression !== 'av1')) {
      errors.push(
        `${label}: camera or TIFF image content is forbidden: ${rel} (${metadata.format}/${metadata.compression ?? 'unknown'})`
      );
    }
    const embedded = metadataChunks(bytes, path.extname(file));
    for (const kind of ['exif', 'xmp', 'iptc']) {
      if (metadata[kind] && !embedded.includes(kind.toUpperCase())) embedded.push(kind.toUpperCase());
    }
    if (embedded.length) errors.push(`${label}: embedded ${embedded.join(', ')} metadata in ${rel}`);
    if (metadata.width > policy?.maxWidth || metadata.height > policy?.maxHeight) {
      if (policy)
        errors.push(
          `${label}: ${rel} is ${metadata.width}x${metadata.height}; limit is ${policy.maxWidth}x${policy.maxHeight}`
        );
    }
  }
  const seen = new Set(files.map((f) => `public/${posix(path.relative(root, f))}`));
  if (label === 'public') {
    for (const item of allowed.keys())
      if (!seen.has(item)) errors.push(`${label}: approved derivative is missing: ${item}`);
  }
  if (label === 'dist') {
    for (const item of allowed.keys()) {
      const outPath = item.replace(/^public\//, '');
      if (!seen.has(`public/${outPath}`)) errors.push(`${label}: approved derivative is missing: ${outPath}`);
    }
  }
  return errors;
}

async function main() {
  const layout = JSON.parse(await readFile(configPath, 'utf8'));
  const targets = process.argv.slice(2);
  const requested = targets.length ? targets : ['--public', '--tracked'];
  const errors = [];
  for (const target of requested) {
    if (target === '--public') errors.push(...(await validate(path.join(repo, 'public'), layout, 'public')));
    else if (target === '--dist') errors.push(...(await validate(path.join(repo, 'dist'), layout, 'dist')));
    else if (target === '--tracked') {
      const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: repo }).toString().split('\0').filter(Boolean);
      for (const file of tracked.filter((name) => rasterExt.test(name))) {
        if (!file.startsWith('public/')) errors.push(`tracked: raster outside public is forbidden: ${file}`);
      }
    } else {
      errors.push(`Unknown option: ${target}`);
    }
  }
  if (errors.length) {
    console.error(`Image asset validation failed (${errors.length} finding${errors.length === 1 ? '' : 's'}):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
  } else {
    console.log(`Image asset validation passed: ${requested.join(', ')}`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(`Image asset validation could not complete: ${error.message}`);
    process.exitCode = 1;
  });
}
