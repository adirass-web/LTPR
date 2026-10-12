import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import { validate } from './check-image-assets.mjs';

const tempRoot = await mkdtemp(path.join(os.tmpdir(), 'image-asset-check-'));
const relative = 'images/media/fixture.jpg';
const policy = { category: 'media', maxWidth: 1000, maxHeight: 1000 };
const layout = { assets: { [`public/${relative}`]: policy } };

async function writeFixture(name, bytes) {
  const root = path.join(tempRoot, name);
  const file = path.join(root, relative);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, bytes);
  return root;
}

function hasFinding(findings, fragment) {
  assert(
    findings.some((finding) => finding.includes(fragment)),
    `Expected finding containing: ${fragment}`
  );
}

try {
  const approved = await sharp({
    create: { width: 100, height: 50, channels: 3, background: '#888' },
  })
    .jpeg()
    .toBuffer();
  assert.deepEqual(await validate(await writeFixture('approved', approved), layout, 'public'), []);
  console.log('PASS approved derivative');

  const oversized = await sharp({
    create: { width: 1200, height: 50, channels: 3, background: '#888' },
  })
    .jpeg()
    .toBuffer();
  hasFinding(await validate(await writeFixture('oversized', oversized), layout, 'public'), 'limit is 1000x1000');
  console.log('PASS oversized derivative rejected');

  const withExif = await sharp({
    create: { width: 100, height: 50, channels: 3, background: '#888' },
  })
    .jpeg()
    .withMetadata()
    .toBuffer();
  hasFinding(await validate(await writeFixture('metadata', withExif), layout, 'public'), 'embedded EXIF');
  console.log('PASS metadata-bearing derivative rejected');

  const withXmp = await sharp({
    create: { width: 100, height: 50, channels: 3, background: '#888' },
  })
    .jpeg()
    .withXmp('<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="urn:rdf"/></x:xmpmeta>')
    .toBuffer();
  hasFinding(await validate(await writeFixture('xmp', withXmp), layout, 'public'), 'embedded XMP');
  console.log('PASS XMP-bearing derivative rejected');

  const cameraRoot = path.join(tempRoot, 'camera');
  const cameraFile = path.join(cameraRoot, 'images/media/camera.heic');
  await mkdir(path.dirname(cameraFile), { recursive: true });
  await writeFile(cameraFile, approved);
  hasFinding(await validate(cameraRoot, { assets: {} }, 'public'), 'camera or TIFF format is forbidden');
  console.log('PASS camera format rejected');

  const tiffBytes = await sharp({
    create: { width: 100, height: 50, channels: 3, background: '#888' },
  })
    .tiff()
    .toBuffer();
  hasFinding(
    await validate(await writeFixture('renamed-tiff', tiffBytes), layout, 'public'),
    'camera or TIFF image content is forbidden'
  );
  console.log('PASS TIFF content rejected when renamed as JPEG');

  const rawRoot = path.join(tempRoot, 'raw-extension');
  const rawFile = path.join(rawRoot, 'images/media/camera.cr3');
  await mkdir(path.dirname(rawFile), { recursive: true });
  await writeFile(rawFile, approved);
  hasFinding(await validate(rawRoot, { assets: {} }, 'public'), 'camera or TIFF format is forbidden');
  console.log('PASS camera RAW extension rejected');

  const unapprovedRoot = path.join(tempRoot, 'unapproved');
  const unapprovedFile = path.join(unapprovedRoot, 'review/extra.jpg');
  await mkdir(path.dirname(unapprovedFile), { recursive: true });
  await writeFile(unapprovedFile, approved);
  hasFinding(
    await validate(unapprovedRoot, { assets: {} }, 'public'),
    'raster path is not in the approved derivative manifest'
  );
  console.log('PASS unapproved raster path rejected');
} finally {
  const resolvedTempRoot = path.resolve(tempRoot);
  const resolvedOsTemp = path.resolve(os.tmpdir());
  assert.equal(
    path.dirname(resolvedTempRoot),
    resolvedOsTemp,
    'fixture cleanup target must be directly inside os.tmpdir'
  );
  assert(
    path.basename(resolvedTempRoot).startsWith('image-asset-check-'),
    'fixture cleanup target must have the expected prefix'
  );
  await rm(resolvedTempRoot, { recursive: true, force: true });
}
