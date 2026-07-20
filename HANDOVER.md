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
- `src/pages/he/*` - Hebrew (RTL); Home stub in place
- `src/layouts/Base.astro` - `src/components/{Nav,Footer}.astro` - `src/styles/global.css`
- `src/pages/index.astro` - redirects `/` -> `/en/`

## Open tasks
- [ ] Local `npm run build` to verify (sandbox couldn't install Astro).
- [ ] Fill placeholders: `public/portrait`, RAI + YouTube embeds, press **deep-links**, contact **email**.
- [ ] Finish Hebrew (About/Media/Writing) + native review; RTL QA.
- [ ] Choose a design reference -> re-skin (current design is a deliberate **baseline**).
- [ ] Add `ANTHROPIC_API_KEY` repo secret to enable `.github/workflows/claude.yml` (`@claude`).

## Guardrails (full in CLAUDE.md)
Restrained/covert-premium - no selling (soft "Private inquiries") - media leads - PhD as first-principles edge (attribute Porter). Identity: defense innovation, AI, and digital trust. Pillars: defense innovation, AI, and cybersecurity capacity building. Fact-fidelity: Singapore = "vision, goals & 70+ recommendations"; World Bank = "World Bank-backed"; IAF unit unnamed; The National Interest = byline (Writing), not the press wall.
