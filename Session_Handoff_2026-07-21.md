# Session handoff — 2026-07-21

## Project and repository

- Repository: `adirass-web/LTPR`
- Branch: `main`
- Local working copy used in this session: `/workspace/scratch/eaecfb3db1d2/ltpr-production`
- GitHub Pages preview: <https://adirass-web.github.io/LTPR/>
- Intended production domain remains `cyberdrtabansky.com` (no `www`).
- Current deployed commit at handoff start: `1cce76a290c1582460ac4964fb1840df769c42d6` (`Add responsive production portraits`)

The canonical product and implementation constraints remain in `docs/IMPLEMENTATION_BRIEF.md`, `HANDOVER.md`, and `CLAUDE.md`.

## Work completed in this session

### Production portraits

Two owner-supplied portraits were integrated without cropping, generative editing, or retouching:

- 2:3 portrait source: 1365 × 2048, sRGB — used on EN/HE Home.
- 1:1 portrait source: 2048 × 2048, sRGB — used on EN/HE About.

The implementation adds:

- reusable `src/components/Portrait.astro`;
- AVIF, WebP, and JPEG responsive derivatives under `public/images/portraits/`;
- 2:3 widths: 480, 720, 960, and 1280 px;
- 1:1 widths: 320, 640, and 960 px;
- explicit intrinsic dimensions to prevent layout shift;
- eager loading and `fetchpriority="high"` for the Home hero;
- lazy loading for the About portrait;
- equivalent EN/HE markup and mirrored RTL shadow treatment.

The standard Astro build and the GitHub Pages-target build both passed. GitHub Actions `Verify site` and `Deploy GitHub Pages preview` also passed. Live Pages returned the expected portrait markup and a `200` response with `content-type: image/avif`.

Commit: <https://github.com/adirass-web/LTPR/commit/1cce76a290c1582460ac4964fb1840df769c42d6>

## Client-logo review and decision

The owner supplied these WebP references during the session:

- `mic sl.webp` — Sierra Leone Ministry of Information and Communications seal;
- `wb.webp` — World Bank;
- `CSA 500x500.webp` — Cyber Security Agency of Singapore;
- `ge .webp` and `ge2.webp` — Georgian ministry;
- `iai_israel_defence_logo_png.webp` — Israel Aerospace Industries;
- `iiss d.webp` and `iiss e.webp` — IISS presentation graphics.

These uploads have **not** been added to the repository.

### Approved direction

- The primary institutional proof strip remains limited to World Bank, Singapore CSA, IISS, and IAI.
- Sierra Leone and Georgia remain supporting evidence in the regional capacity-building line, not marquee logos.
- Use official standalone vector assets, ideally an approved one-color SVG variant.
- Do not manufacture monochrome branding by applying a CSS grayscale filter to the supplied raster images.
- If an organization does not provide an approved monochrome mark, use its official full-color mark on the neutral site background rather than unofficially recoloring it.
- Normalize optical prominence and visual height, not literal image width.
- Preserve official proportions and clear space.
- Avoid individual cards, shadows, decorative logo backgrounds, or taglines that become illegible at strip size.

### Suitability of supplied files

- **World Bank:** transparent and potentially usable as a temporary fallback, but its canvas needs trimming. Replace with an official vector for production if possible.
- **CSA:** recognizable but has an opaque white background. Replace with a transparent SVG/PNG master.
- **IAI:** opaque white square; the tagline will be too small. Obtain the primary standalone IAI mark, preferably without the tagline.
- **IISS:** neither supplied image is suitable; both include presentation backgrounds. Obtain the standalone wordmark.
- **Sierra Leone MIC:** transparent but only 400 × 400 and visually intricate. Keep out of the primary strip; source a higher-resolution official asset if later used in a case study.
- **Georgia:** both files have opaque backgrounds and small Georgian text. Keep out of the primary strip; source an official vector if later used in an engagement section.

## Current product state

- EN Home, About, Media, and Writing are populated.
- HE Home is populated and fully RTL.
- HE About, Media, and Writing routes exist with RTL-safe status content; final Hebrew copy and native review remain pending.
- Semantic shared CSS is productionized for LTR and RTL.
- Final typography selection and color-palette tuning remain explicitly deferred by the owner.
- Portrait placeholders are resolved.
- Media embeds, verified press links, official logo assets, real contact email, book cover, press kit, and essays remain incomplete.

## Recommended next work package

### Institutional proof strip

1. Obtain official World Bank, CSA Singapore, IISS, and IAI vector/transparent masters and confirm permitted variants.
2. Prepare a consistent one-color set only where official variants allow it; retain official color otherwise.
3. Replace the current text-only institutional grid with semantic image marks and accessible organization names.
4. Apply consistent optical sizing, clear space, and responsive wrapping in both EN and HE.
5. Keep organization names available to assistive technology even when the visible asset is a symbol or abbreviated wordmark.
6. Build both targets and visually inspect desktop/mobile LTR and RTL.
7. Publish one scoped commit to `main`, then verify both GitHub Actions workflows and the live Pages asset responses.

Do not use the supplied Sierra Leone or Georgia files in this primary strip.

## Remaining priorities after logos

1. Supply and integrate the real contact email.
2. Add the approved RAI highlight and selected YouTube appearances.
3. Verify and link press coverage to original deep URLs.
4. Complete and native-review Hebrew About, Media, and Writing.
5. Add the approved book cover and press-kit assets.
6. Draft the three source-grounded essays and their reading routes.
7. Open the deferred typography/color fine-tuning phase only when the owner explicitly requests it.
8. Complete final accessibility, performance, metadata, structured-data, link, rights, responsive, RTL, and production-domain QA.

## Build and deployment notes

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
ASTRO_TELEMETRY_DISABLED=1 SITE_TARGET=github-pages npm run build
```

Run these builds sequentially because both write to `dist/`.

The GitHub connector can create blobs, trees, commits, and update `main` successfully. In this environment, `gh` was not installed and a plain HTTPS `git push` had no credential helper; use the connected GitHub app unless the shell authentication setup changes. Before any direct-main write, resolve the latest remote SHA and use a non-force fast-forward update.

## Guardrails to preserve

- Tone: restrained, editorial, covert-premium; no overt sales funnel.
- Main-site visual influence: Pojo Frame/Firma; Writing/Media architecture: Zapa.
- Identity: first-principles strategy for defense innovation, AI, and digital trust.
- Three pillars: defense innovation, AI, and cybersecurity capacity building.
- Singapore claim: authored the vision, goals, and 70+ recommendations behind the strategy.
- World Bank work is described as World Bank-backed.
- The Israel Air Force unit remains unnamed.
- The National Interest remains a Writing/byline credential, not press coverage.
- Preserve equivalent EN/HE structure, CSS logical properties, correct bidi handling, and route-aware language switching.
