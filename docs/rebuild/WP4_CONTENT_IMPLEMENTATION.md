# WP4 — locked EN content implementation record

Date: 2026-07-25
Base checkpoint: `9ec2380` (`rebuild/astrowind`)

## Source of truth

The following supplied files supersede all earlier English copy and the WP3 Home prototype copy.

| Source | SHA-256 | Implemented route |
| --- | --- | --- |
| `Home_EN_v3.md` | `7875a4d44627cd3a3e31663a366d73bcb7f8896a89ebcd6d6dbcfc63e1b59177` | `/en/` |
| `About_EN_v3.md` | `909ffb799f368a047e61c2e94ccc332899119bffdda3b12c3a2d6eac60cc6f35` | `/en/about/` |
| `Writing_EN_v3.md` | `10475e8ed9192f6f2133b4f5a42b583cea0bed718c5f147ee55a3222dfbddb37` | `/en/writing/` |

The visible EN content is held in `src/content/en-v3.ts`; the page components compose it without adding claims.

## Superseded source and routes

- `HomePrototype.astro` is removed.
- `/prototype/evidence/en/` and `/prototype/evidence/he/` are removed.
- The prior prototype Home copy is not retained as current page content.

## Portrait decision

The only approved portrait treatment is the refined monochrome pair created earlier in ChatGPT on 2026-07-23: 2:3 for Home and 1:1 for About. Original/color portrait files remain preserved and must not be deleted, recolored, CSS-grayscaled, or substituted.

The monochrome files are not available in the sandbox or Git repository. The available color files were examined and have non-equal RGB channels:

| Retained color derivative | SHA-256 |
| --- | --- |
| `lior-tabansky-portrait-2x3-1280.jpg` | `69ae6da4ea3795b4ec30941879b96dbf92b835a12d851dd3099494942e5562bf` |
| `lior-tabansky-portrait-square-960.jpg` | `bfda730c7b3982667ada11d0958f7ab1b9dd73cadfcfd92d6a0fb4b150465bfc` |

`MonochromePortrait.astro` intentionally renders a reserved asset frame, never the color files or a synthetic grayscale substitute. Once the already-approved monochrome files are restored, the component will receive responsive AVIF, WebP, and JPEG derivatives for both ratios and this release gate can close.

## Citation release gate

The v3 sources identify these missing source URLs. They are retained as component data attributes and are not invented:

- CyCon / NATO CCDCOE paper
- SpringerLink book
- World Bank Sectoral Cybersecurity Maturity Model
- Two PROGRESS DOIs

The affected EN routes are `noindex` until those URLs are inserted and reviewed. This checkpoint is therefore implementation-complete only for structure, styling, and supplied text; it is not eligible for production merge or deployment.

## Hebrew status

The shared EN/HE route architecture, document direction, language switching, and RTL-safe logical layout remain in place. New native Hebrew v3 source has not been supplied. Hebrew pages state this plainly rather than presenting a machine translation or stale copy as current.
