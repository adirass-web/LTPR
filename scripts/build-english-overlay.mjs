import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const mode = process.env.LTPR_ENGLISH_RELEASE_MODE;
if (!['preview', 'production'].includes(mode))
  throw new Error('Explicit LTPR_ENGLISH_RELEASE_MODE=preview|production is required.');
if (mode === 'production' && process.env.LTPR_PRODUCTION_ARTIFACT_APPROVED !== '1') {
  throw new Error('Production artifact preparation marker is required.');
}
const manifest = JSON.parse(fs.readFileSync('release/manifest.json', 'utf8'));
function filesUnder(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isSymbolicLink()) throw new Error('Symlinks are not permitted in release bundle');
    const name = prefix + entry.name;
    return entry.isDirectory() ? filesUnder(path.join(dir, entry.name), name + '/') : [name];
  });
}
if (JSON.stringify(filesUnder('release/english').sort()) !== JSON.stringify(Object.keys(manifest.files).sort())) {
  throw new Error('Release bundle differs from audited manifest');
}
for (const [file, expected] of Object.entries(manifest.files)) {
  if (file.includes('..') || path.isAbsolute(file)) throw new Error('Invalid artifact path');
  const actual = crypto
    .createHash('sha256')
    .update(fs.readFileSync(path.join('release/english', file)))
    .digest('hex');
  if (actual !== expected) throw new Error(`English artifact hash mismatch: ${file}`);
}
const baseline = spawnSync('npm', ['run', 'build:baseline'], { stdio: 'inherit', env: process.env });
if (baseline.status !== 0) process.exit(baseline.status || 1);
const output = fs.mkdtempSync(path.resolve('.english-build-'));
fs.rmdirSync(output); // Assembler requires a new output directory.
// Cloudflare supplies this deployment's origin; an explicit origin takes precedence.
// Production never rewrites canonical identity or image URLs.
const previewOrigin = mode === 'preview' ? process.env.LTPR_PREVIEW_ORIGIN || process.env.CF_PAGES_URL : undefined;
const assembly = spawnSync(
  'python3',
  [
    'scripts/assemble-english.py',
    '--baseline',
    'dist',
    '--english',
    'release/english',
    '--output',
    output,
    '--mode',
    mode,
    '--report',
    'english-overlay-report.json',
    ...(previewOrigin ? ['--preview-origin', previewOrigin] : []),
  ],
  { stdio: 'inherit' }
);
if (assembly.status !== 0) process.exit(assembly.status || 1);
fs.renameSync('dist', `${output}-baseline`);
fs.renameSync(output, 'dist');
console.log('English overlay verified. Baseline output retained for comparison. No deployment performed.');
