# Portrait asset transition — 2026-07-25

## Decision

The owner approved the refined monochrome v2 portraits as the site's live portrait treatment. They replace the color runtime set installed at `41b63fc`.

| Placement | Runtime stem | Approved master | Responsive widths | Ratio |
| --- | --- | --- | --- | --- |
| Home | `lior-tabansky-portrait-2x3-*` | `lior-tabansky-portrait-2x3-monochrome-v2.png` | 480, 720, 960, 1024 | 2:3 |
| About | `lior-tabansky-portrait-square-*` | `lior-tabansky-portrait-square-monochrome-v2.png` | 320, 640, 960 | 1:1 |

Each runtime width ships as AVIF, WebP, and progressive JPEG. The `Portrait.astro` picture component selects the format and width from its existing `<picture>`/`srcset` structure.

## Fidelity and technical limits

- The approved 2:3 master is 1024 × 1536 px. Its largest derivative is the native-resolution 1024 px version; no 1280 px upscale was created.
- The approved square master is 1254 × 1254 px. Its 960 px maximum derivative remains below native resolution.
- The portraits retain their approved framing and monochrome treatment. No crop, additional retouching, recoloring, or AI generation was performed during installation.

## Archive treatment

The complete former color derivative set was moved byte-for-byte from `public/images/portraits/` to [`archive/portraits/color-20260725/`](../../archive/portraits/color-20260725/). It is outside the static public directory and therefore cannot be served accidentally. Git history independently retains the prior public paths.

## Verification

- Every `.avif` file was inspected as an ISO Media AVIF image, not a renamed fallback format.
- Dimensions, format coverage, asset paths, and the emitted site `srcset` are validated by the regular Astro and GitHub Pages builds.
- Current runtime asset checksums are recorded in [`ASSET_CHECKSUMS.sha256`](ASSET_CHECKSUMS.sha256).
