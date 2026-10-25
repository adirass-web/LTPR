#!/usr/bin/env python3
"""Reconstruct the frozen comparison pack from Git-tracked text and public assets."""
import argparse
import hashlib
import json
from pathlib import Path
import zipfile


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('output', type=Path, help='New ZIP path; existing files are never overwritten')
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    pack = root / 'docs/template-comparison/2026-10-25'
    manifest = pack / 'MANIFEST-SHA256.json'
    records = json.loads(manifest.read_text())
    payloads = {}
    for name, expected in records.items():
        rel = Path(name)
        if rel.is_absolute() or '..' in rel.parts:
            raise ValueError(f'Unsafe manifest path: {name}')
        source = root / rel if rel.parts[0] == 'public' else pack / rel
        data = source.read_bytes()
        if hashlib.sha256(data).hexdigest() != expected:
            raise ValueError(f'Frozen pack hash mismatch: {name}')
        payloads[name] = data
    payloads['MANIFEST-SHA256.json'] = manifest.read_bytes()
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(args.output, 'x', zipfile.ZIP_DEFLATED) as archive:
        for name, data in sorted(payloads.items()):
            archive.writestr(name, data)
    with zipfile.ZipFile(args.output) as archive:
        if archive.testzip() is not None:
            raise ValueError('Archive integrity failed')
        for name, data in payloads.items():
            if archive.read(name) != data:
                raise ValueError(f'Archive payload mismatch: {name}')
    print(f'Verified {len(payloads)} files: {args.output}')


if __name__ == '__main__':
    main()
