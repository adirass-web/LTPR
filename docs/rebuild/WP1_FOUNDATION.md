# WP1 — Astrowind foundation

**Status:** Complete
**Target branch:** `rebuild/astrowind`
**Upstream pin:** `arthelokyo/astrowind@522530a242f5855f22a44a001f7b2e199669073d`

## Retained foundation

- Astro 6 static output.
- Tailwind CSS 4 through the Vite plugin.
- TypeScript, Astro type checking, ESLint, and Prettier.
- MDX and a typed content collection for future bilingual essays.
- Sitemap generation and GitHub Pages base-path support.
- Local public-image handling; no remote image service is configured.
- Node `>=22.12.0` and a reproducible lockfile to be generated from this manifest.

## Deliberately excluded

- AstroWind demo routes, demo posts, copy, stock imagery, favicons, logos, generic widgets, pricing, testimonials, FAQs, statistics, sales CTAs, analytics, remote-image tooling, dark-mode system, dropdown navigation, categories, tags, pagination, RSS, and generic blog framing.
- The preceding LTPR source implementation. Its history remains recoverable from the approved remote recovery branch and `main`; its source is not migrated into the new architecture.

## Preserved LTPR material

- All portrait and institutional-logo assets in `public/images/`, byte-for-byte.
- Existing documentation, approved copy, asset manifest, checksums, Git history, production branch, domain configuration, and Pages deployment boundary.

## Verification completed

1. Generated a lockfile under Node `v24.14.0` with the upstream-compatible Vite 7 override, then completed a clean `npm ci` install.
2. Updated verification and Pages workflows from Node 20 plus `npm install` to Node 22 plus `npm ci`; both run `npm run check` before building.
3. Passed `npm run check`, the canonical production build, and the `SITE_TARGET=github-pages` build.
4. Confirmed that source and runtime configuration contain no excluded AstroWind demo, remote-image, analytics, dark-mode, generic-blog, or startup-widget references.
5. Confirmed that the portrait and logo assets are byte-identical to the recovery baseline. The prior checksum record for `singapore-csa.png` was incorrect; it has been corrected to the baseline file's actual SHA-256.
