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

## Portrait decision — superseded

On 2026-07-25, the owner superseded the monochrome-only decision: use the existing color portrait derivatives. The color files remain preserved without editing, recoloring, CSS grayscale, upscaling, or re-encoding.

The implementation uses responsive `<picture>` sources with AVIF, WebP, and JPEG fallbacks:

| Page | Ratio | Largest JPEG derivative | SHA-256 |
| --- | --- |
| Home | 2:3 | `lior-tabansky-portrait-2x3-1280.jpg` | `69ae6da4ea3795b4ec30941879b96dbf92b835a12d851dd3099494942e5562bf` |
| About | 1:1 | `lior-tabansky-portrait-square-960.jpg` | `bfda730c7b3982667ada11d0958f7ab1b9dd73cadfcfd92d6a0fb4b150465bfc` |

`ColorPortrait.astro` renders the approved color derivatives; `MonochromePortrait.astro` is removed. The portrait release gate is closed.

## Citation release gate — superseded

Verified source URLs are now held in `src/content/sources.ts` and linked on `/en/writing/` where the underlying publication is named. The source map includes:

- CyCon / NATO CCDCOE paper and its IEEE Xplore record
- SpringerLink book
- World Bank Sectoral Cybersecurity Maturity Model
- Two PROGRESS DOIs
- IEEE Engineering Management Review article
- The National Interest article
- The owner-supplied SC Magazine, RSAC, and Stiennon industry sources
- *Israel Defense Forces and National Cyber Defense* in *Connections*

The three industry sources are retained for future Israel-industry writing. They are not used to introduce new numerical claims into the locked v3 copy. The citation release gate is closed; EN routes remain `noindex` because the native Hebrew v3 source is still incomplete.

## Hebrew status

The shared EN/HE route architecture, document direction, language switching, and RTL-safe logical layout remain in place. New native Hebrew v3 source has not been supplied. Hebrew pages state this plainly rather than presenting a machine translation or stale copy as current.
