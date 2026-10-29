import { readFile, cp, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const manifest = JSON.parse(await readFile('review-manifest.json', 'utf8'));
for (const [path, hash] of Object.entries(manifest.files)) {
  const bytes = await readFile(`public/${path}`);
  if (createHash('sha256').update(bytes).digest('hex') !== hash) throw new Error(`Changed snapshot: ${path}`);
}
for (const path of ['en/index.html', 'en/media/index.html']) {
  const html = await readFile(`public/${path}`, 'utf8');
  if (!html.includes('noindex') || !html.includes('Dr. Lior Tabansky')) throw new Error(`Unexpected page: ${path}`);
}
await rm('dist', { recursive: true, force: true });
await cp('public', 'dist', { recursive: true });
console.log(`Verified ${Object.keys(manifest.files).length} review files from ${manifest.source_commit}`);
