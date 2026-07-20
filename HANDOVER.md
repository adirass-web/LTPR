# Handover - dev & operations

Static **Astro** site (EN + Hebrew RTL), mobile-first, for **cyberdrtabansky.com**. On-brand rules live in **`CLAUDE.md`**. Full design/strategy source of truth is the owner's local `_site-plan/` folder (intentionally not committed).

## Build & deploy
```bash
npm install
npm run dev        # localhost:4321
npm run build      # -> dist/
```
Deploy `dist/` to any static host (Netlify / Vercel / Cloudflare Pages / GitHub Pages).

## Structure
- `src/pages/en/*` - Home, About, Media, Writing
- `src/pages/he/*` - Hebrew (RTL); Home draft plus route-complete translation placeholders
- `src/layouts/Base.astro` - `src/components/{Nav,Footer}.astro` - `src/styles/global.css`
- `src/pages/index.astro` - redirects `/` -> `/en/`

## Current implementation status (2026-07-20)
- [x] Approved Pojo Frame/Firma tone and Zapa editorial architecture productionized in semantic page layouts.
- [x] Page-order CSS selectors removed; all production rules now live in `src/styles/global.css`.
- [x] Four English routes populated with approved copy and explicit pending states for unavailable assets.
- [x] LTR/RTL parity implemented through shared classes, CSS logical properties, equivalent locale routes, and route-aware language switching.
- [x] Semantic/accessibility pass: skip link, landmarks, heading hierarchy, lists, figures, focus-visible treatment, coarse-pointer targets, forced-colors and print fallbacks.
- [x] Astro production and GitHub Pages-target builds pass with all eight localized routes.
- [ ] **Deferred by owner:** final typography selection and color-palette tuning. Current approved preview values remain temporary design tokens.

## Open tasks
- [ ] Fill placeholders: `public/portrait`, RAI + YouTube embeds, press **deep-links**, contact **email**.
- [ ] Complete and native-review Hebrew About/Media/Writing copy; routes and RTL layouts are already in place.
- [ ] Run visual QA with approved production assets at desktop and mobile sizes.
- [ ] Replace provisional typography and colors only after the owner opens the deferred fine-tuning phase.

## Guardrails (full in CLAUDE.md)
Restrained/covert-premium - no selling (soft "Private inquiries") - media leads - PhD as first-principles edge (attribute Porter). Identity: defense innovation, AI, and digital trust. Pillars: defense innovation, AI, and cybersecurity capacity building. Fact-fidelity: Singapore = "vision, goals & 70+ recommendations"; World Bank = "World Bank-backed"; IAF unit unnamed; The National Interest = byline (Writing), not the press wall.
