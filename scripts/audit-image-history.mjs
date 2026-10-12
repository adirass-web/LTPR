import { execFileSync } from 'node:child_process';
import process from 'node:process';
import sharp from 'sharp';

const imagePath =
  /\.(?:arw|avif|bmp|cr2|cr3|dng|gif|heic|heif|icns|ico|j2k|jp2|jpe?g|jpf|jpx|jxl|nef|orf|pbm|pef|pgm|png|pnm|ppm|raf|raw|rw2|srw|tga|tiff?|webp)$/i;
const objects = execFileSync('git', ['rev-list', '--objects', '--all'], {
  encoding: 'utf8',
  maxBuffer: 32 * 1024 * 1024,
})
  .split(/\r?\n/)
  .map((line) => line.match(/^([0-9a-f]{40,64}) (.+)$/i))
  .filter((match) => match && imagePath.test(match[2]));

const unique = new Map(objects.map(([, id, file]) => [id, file]));
if (!unique.size) {
  console.log('No reachable historical raster-image blobs found.');
  process.exit(0);
}

console.log(`Read-only audit of ${unique.size} reachable historical raster blob(s):`);
for (const [id, file] of unique) {
  try {
    const bytes = execFileSync('git', ['cat-file', 'blob', id], { maxBuffer: 128 * 1024 * 1024 });
    const metadata = await sharp(bytes, { failOn: 'error' }).metadata();
    const data = bytes.toString('latin1');
    const signals = [];
    if (data.includes('Exif\0\0') || data.includes('eXIf')) signals.push('EXIF signal');
    if (data.includes('http://ns.adobe.com/xap/1.0/') || data.includes('XML:com.adobe.xmp')) signals.push('XMP signal');
    if (data.includes('Photoshop 3.0') || data.includes('IPTC')) signals.push('IPTC/Photoshop signal');
    const limits = file.includes('/ambient/')
      ? { width: 2560, height: 1800 }
      : file.includes('/portraits/')
        ? { width: 1024, height: 1536 }
        : file.includes('/media/')
          ? { width: 1024, height: 1536 }
          : null;
    const oversized =
      limits && (metadata.width > limits.width || metadata.height > limits.height)
        ? ` [exceeds current ${limits.width}x${limits.height} category limit]`
        : '';
    console.log(
      `${id} ${metadata.width}x${metadata.height}${oversized}${signals.length ? ` [${signals.join(', ')}]` : ' [no common metadata marker]'} ${file}`
    );
  } catch (error) {
    console.log(`${id} [unreadable by Sharp: ${error.message}] ${file}`);
  }
}
console.log('This reports reachable Git blobs only; it does not establish removal of cached or third-party copies.');
