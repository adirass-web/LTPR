# Pinned Astrowind upstream

## Source

| Item | Value |
|---|---|
| Upstream | `https://github.com/arthelokyo/astrowind.git` |
| Pinned commit | `522530a242f5855f22a44a001f7b2e199669073d` |
| Upstream package version | `@onwidget/astrowind@1.0.0-beta.63` |
| Node requirement | `>=22.12.0` |
| License | MIT, copyright (c) 2023 onWidget |
| Attribution requirement | Preserve the MIT copyright notice and license text for imported substantial portions. |

The pin was checked out and verified locally. The rebuild must not track Astrowind `main` or accept automatic upstream updates.

## Selected foundation material

The following are candidates for controlled adoption in WP1/WP2, subject to dependency review:

- Astro 6 static-build configuration and TypeScript setup.
- Tailwind CSS 4 integration, with all final design tokens owned by LTPR.
- `@astrojs/check`, ESLint, Prettier and their verification scripts.
- `@astrojs/sitemap` and metadata patterns, adapted to the two-locale route contract.
- Content Collections/MDX schema patterns for later essays.
- Local image handling patterns where they preserve LTPR portrait derivatives unchanged.
- Small accessible primitives only when a direct LTPR need exists.

## Explicitly excluded upstream material

- All demo routes, demo copy, demo images, favicon/brand assets and public marketing files.
- Startup, SaaS, product, landing, pricing, statistics, testimonials, FAQ and feature-grid widgets.
- Dark mode, theme toggle, decorative gradients, external analytics, icon grids and generic call-to-action patterns.
- Generic blog categories, tags, pagination, RSS framing and “latest posts” behavior.
- Auto-embedded media, external-image services and third-party tracking.

Astrowind supplies a technical substrate only. It supplies no visual identity, copy, content hierarchy or brand claims to LTPR.
