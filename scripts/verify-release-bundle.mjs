import { createHash } from 'node:crypto';
import { lstat, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

// A manifest is a pinned release input, not a directory-wide permission bypass.
export async function verifiedReleaseFiles(repo) {
  const release = path.join(repo, 'release');
  const root = path.join(release, 'english');
  const manifestPath = path.join(release, 'manifest.json');
  for (const entry of [release, root, manifestPath]) {
    if ((await lstat(entry)).isSymbolicLink()) throw new Error('Release symbolic link is forbidden');
  }
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  if (!manifest.files || typeof manifest.files !== 'object' || Array.isArray(manifest.files)) {
    throw new Error('Invalid release manifest files');
  }
  const expected = Object.keys(manifest.files).sort();
  for (const file of expected) {
    if (
      !file ||
      file.startsWith('/') ||
      file.includes('\\') ||
      file.split('/').some((p) => !p || p === '.' || p === '..') ||
      !/^[a-f0-9]{64}$/.test(manifest.files[file])
    ) {
      throw new Error('Invalid release manifest path or hash');
    }
  }
  const actual = [];
  async function walk(dir, prefix = '') {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const relative = prefix + entry.name;
      if (entry.isSymbolicLink()) throw new Error('Release symbolic link is forbidden');
      if (entry.isDirectory()) await walk(path.join(dir, entry.name), relative + '/');
      else if (entry.isFile()) actual.push(relative);
      else throw new Error('Unexpected release filesystem entry');
    }
  }
  await walk(root);
  if (JSON.stringify(actual.sort()) !== JSON.stringify(expected))
    throw new Error('Release bundle differs from manifest');
  for (const file of expected) {
    const hash = createHash('sha256')
      .update(await readFile(path.join(root, file)))
      .digest('hex');
    if (hash !== manifest.files[file]) throw new Error(`Release hash mismatch: ${file}`);
  }
  return new Set(expected.map((file) => 'release/english/' + file));
}
