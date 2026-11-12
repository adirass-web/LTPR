import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { verifiedReleaseFiles } from './verify-release-bundle.mjs';

async function fixture(run) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ltpr-release-test-'));
  try {
    await fs.mkdir(path.join(root, 'release/english/images'), { recursive: true });
    const data = Buffer.from('approved fixture');
    await fs.writeFile(path.join(root, 'release/english/images/portrait.webp'), data);
    await fs.writeFile(
      path.join(root, 'release/manifest.json'),
      JSON.stringify({
        files: {
          'images/portrait.webp': createHash('sha256').update(data).digest('hex'),
        },
      })
    );
    await run(root);
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
}
test('accepts only exact manifest-bound release files', () =>
  fixture(async (root) => {
    assert.deepEqual([...(await verifiedReleaseFiles(root))], ['release/english/images/portrait.webp']);
  }));
test('rejects changed bytes', () =>
  fixture(async (root) => {
    await fs.writeFile(path.join(root, 'release/english/images/portrait.webp'), 'changed');
    await assert.rejects(verifiedReleaseFiles(root), /hash mismatch/);
  }));
test('rejects unlisted files', () =>
  fixture(async (root) => {
    await fs.writeFile(path.join(root, 'release/english/images/unlisted.webp'), 'other');
    await assert.rejects(verifiedReleaseFiles(root), /differs from manifest/);
  }));
test('rejects missing files', () =>
  fixture(async (root) => {
    await fs.unlink(path.join(root, 'release/english/images/portrait.webp'));
    await assert.rejects(verifiedReleaseFiles(root), /differs from manifest/);
  }));
test('rejects file symlinks', () =>
  fixture(async (root) => {
    await fs.rename(path.join(root, 'release/english/images/portrait.webp'), path.join(root, 'outside.webp'));
    await fs.symlink(path.join(root, 'outside.webp'), path.join(root, 'release/english/images/portrait.webp'));
    await assert.rejects(verifiedReleaseFiles(root), /symbolic link/);
  }));
test('rejects manifest traversal', () =>
  fixture(async (root) => {
    await fs.writeFile(
      path.join(root, 'release/manifest.json'),
      JSON.stringify({ files: { '../outside.webp': 'a'.repeat(64) } })
    );
    await assert.rejects(verifiedReleaseFiles(root), /Invalid release manifest/);
  }));
