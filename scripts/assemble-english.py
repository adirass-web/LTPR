#!/usr/bin/env python3
"""Build an English-only overlay. Never upload or deploy; keep baseline unchanged."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import re
from urllib.parse import urlsplit

PAGES = {'en/index.html', 'en/media/index.html'}
PREFIXES = ('_astro/', 'images/', 'licenses/')

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def inventory(root):
    files = {}
    for path in root.rglob('*'):
        if path.is_symlink():
            raise ValueError(f'Symlink is not allowed: {path}')
        if path.is_file():
            files[path.relative_to(root).as_posix()] = digest(path)
    return files

def validate_preview_origin(origin):
    # Bare HTTPS origin only: safe to insert into a quoted HTML attribute.
    if not isinstance(origin, str) or not re.fullmatch(r'https://[A-Za-z0-9.-]+(?::[0-9]{1,5})?/?', origin):
        raise ValueError('Invalid preview origin: expected a bare HTTPS origin')
    parsed = urlsplit(origin)
    try:
        if not parsed.hostname or any(not re.fullmatch(r'[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?', label) for label in parsed.hostname.split('.')) or parsed.port == 0:
            raise ValueError('Invalid host or port')
    except ValueError as error:
        raise ValueError('Invalid preview origin host or port') from error
    return origin.rstrip('/')

def rewrite_preview_social_images(html, origin):
    brand_url = 'https://cyberdrtabansky.com/images/brand/social.jpg'
    def rewrite(match):
        tag = match.group(0)
        attrs = {name.lower(): value for name, quote, value in re.findall(r"([\w:-]+)\s*=\s*([\"'])(.*?)\2", tag)}
        if attrs.get('property', attrs.get('name')) not in ('og:image', 'twitter:image') or attrs.get('content') != brand_url:
            return tag
        return re.sub(r"(\bcontent\s*=\s*)([\"'])(.*?)\2", lambda content: content[1] + content[2] + origin + '/images/brand/social.jpg' + content[2], tag, count=1)
    return re.sub(r'<meta\b[^>]*>', rewrite, html, flags=re.IGNORECASE)

def assemble(baseline, english, output, mode, preview_origin=None):
    preview_origin = validate_preview_origin(preview_origin) if mode == 'preview' and preview_origin is not None else None
    baseline, english, output = [Path(x).resolve() for x in (baseline, english, output)]
    if output.exists() or output == baseline or output == english or baseline in output.parents or english in output.parents:
        raise ValueError('Output must be a new directory; inputs are never modified')
    original = inventory(baseline)
    source = inventory(english)
    if not {'he/index.html', 'he/media/index.html', '_redirects'} <= original.keys():
        raise ValueError('Baseline must include Hebrew pages and legacy redirects')
    if not PAGES <= source.keys():
        raise ValueError('English artifact is incomplete')
    copy_paths = sorted(p for p in source if p in PAGES or p.startswith(PREFIXES))
    # Media, fonts, styles, scripts and notices only; never private source/reviews.
    allowed = {'.html', '.css', '.js', '.woff2', '.webp', '.jpg', '.jpeg', '.png', '.svg', '.ico', '.txt'}
    for p in copy_paths:
        if Path(p).suffix.lower() not in allowed:
            raise ValueError(f'Unexpected artifact type: {p}')
        if p not in PAGES and p in original and original[p] != source[p]:
            raise ValueError(f'Shared-asset collision: {p}')
    for p in PAGES:
        html = (english / p).read_text()
        if not re.search(r'<html\b[^>]*\blang=(?:"en"|en)(?:\s|>)', html):
            raise ValueError(f'English page language missing: {p}')
        robots = re.findall(r'<meta\b[^>]*name="robots"[^>]*>', html)
        if len(robots) != 1:
            raise ValueError(f'Expected exactly one robots directive: {p}')
        expected = 'index,follow' if mode == 'production' else 'noindex,nofollow'
        current = re.search(r'content="([^"]+)"', robots[0]).group(1).replace(' ', '')
        if current not in ('index,follow', 'noindex,nofollow') or (mode == 'production' and current != expected):
            raise ValueError(f'{p} robots {current!r} does not match {mode}')
    shutil.copytree(baseline, output)
    for p in copy_paths:
        target = output / p
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(english / p, target)
        if mode == 'preview' and p in PAGES:
            html = target.read_text()
            html = re.sub(r'<meta\b(?=[^>]*\bname="robots")[^>]*>', '<meta name="robots" content="noindex,nofollow">', html)
            if preview_origin:
                html = rewrite_preview_social_images(html, preview_origin)
            target.write_text(html)
    # Retain the existing whole-site robots and sitemap. Scope changes to English.
    headers = (output / '_headers').read_text() if (output / '_headers').exists() else ''
    value = 'index, follow' if mode == 'production' else 'noindex, nofollow'
    scope = '/en/*' if mode == 'production' else '/*'
    (output / '_headers').write_text(headers.rstrip() + f'\n\n# English release overlay; preview indexing is blocked site-wide.\n{scope}\n  X-Robots-Tag: {value}\n')
    result = inventory(output)
    modified = sorted(p for p in original if original[p] != result.get(p))
    removed = sorted(set(original) - set(result))
    if removed or set(modified) - PAGES - {'_headers'}:
        raise ValueError(f'Unexpected baseline change: modified={modified}, removed={removed}')
    report = {
        'mode': mode, 'deployment_performed': False, 'preview_origin': preview_origin,
        'baseline_files': len(original), 'output_files': len(result),
        'modified': modified, 'added': sorted(set(result) - set(original)), 'removed': removed,
        'preserved': {p: h for p, h in original.items() if p not in modified},
        'english_files': {p: result[p] for p in sorted(PAGES)},
        'artifact_sha256': hashlib.sha256(json.dumps(result, sort_keys=True).encode()).hexdigest(),
        'note': 'Private review and archive material excluded. Review noindex is not access control.',
    }
    return report

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--baseline', required=True)
    parser.add_argument('--english', required=True)
    parser.add_argument('--output', required=True)
    parser.add_argument('--mode', choices=['preview', 'production'], default='preview')
    parser.add_argument('--report', required=True)
    parser.add_argument('--preview-origin')
    args = parser.parse_args()
    report = assemble(args.baseline, args.english, args.output, args.mode, args.preview_origin)
    Path(args.report).write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({k: report[k] for k in ('mode', 'baseline_files', 'output_files', 'modified', 'removed', 'artifact_sha256')}, indent=2))
