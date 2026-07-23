# Rebuild asset manifest

**Baseline commit:** `260abd7a96ab3ba516820e50c0f9f17e04bc2d11`
**Checksum file:** [`ASSET_CHECKSUMS.sha256`](ASSET_CHECKSUMS.sha256)

## Binary assets

| Material | Baseline location | Classification | Rebuild handling | Status |
|---|---|---|---|---|
| Home portrait, 2:3 | `public/images/portraits/lior-tabansky-portrait-2x3-*` | reuse unchanged | Preserve every AVIF, WebP and JPEG file byte-for-byte; retain declared dimensions and unmirrored use. | ready |
| About portrait, 1:1 | `public/images/portraits/lior-tabansky-portrait-square-*` | reuse unchanged | Preserve every AVIF, WebP and JPEG file byte-for-byte; retain declared dimensions and unmirrored use. | ready |
| World Bank mark | `public/images/client-strip/world-bank.svg` | migrate structurally | Retain current source pending rights/variant confirmation; use only in the four-mark proof strip. | usable with review |
| IAI mark | `public/images/client-strip/iai.svg` | migrate structurally | Retain current source pending rights/variant confirmation; use only in the four-mark proof strip. | usable with review |
| Singapore CSA mark | `public/images/client-strip/singapore-csa.png` | migrate structurally | Retain current source pending rights/variant confirmation; use only in the four-mark proof strip. | usable with review |
| IISS mark | `public/images/client-strip/iiss.png` | migrate structurally | Retain current source pending rights/variant confirmation; use only in the four-mark proof strip. | usable with review |
| Original site archive | `cdt-personal.zip` | exclude | Keep as repository history/archive material; never serve or import as a runtime asset. | archived |

The portrait checksum set is the verification anchor for the instruction not to crop, retouch, recolor, upscale or re-encode approved portraits. The four institutional marks are the only primary proof-strip candidates. Sierra Leone and Georgia are excluded from that strip.

## Content and data inventory

| Material | Baseline location | Classification | Status |
|---|---|---|---|
| Approved English Home/About/Media/Writing copy | `src/pages/en/` | migrate structurally | ready; no silent rewriting |
| Hebrew Home copy | `src/pages/he/index.astro` | migrate structurally | draft; native review pending |
| Hebrew About/Media/Writing | `src/pages/he/` | migrate structurally | structure exists; publication copy pending |
| Fact, rights and claim controls | `CLAUDE.md`, `docs/IMPLEMENTATION_BRIEF.md` | migrate structurally | binding |
| SEO/domain/Pages configuration | `astro.config.mjs`, `.github/workflows/` | replace | preserve behavior, modernize toolchain in WP1/WP2 |
| RAI video master | not in repository | exclude | never commit; hosted rights-cleared subtitled cut required before embedding |
| Press deep links and fair-use materials | not complete | pending | verify before publication |
| Contact email | not supplied | pending | no placeholder or invented value |
| Environmental photography | not supplied | pending | author will provide a small set of singular images suggesting protection through environment and mood; no stock or generated substitute |
| Monochrome portrait variants | not part of this baseline | pending separate asset task | do not substitute for the approved color portrait sets under this rebuild specification |

## Metadata and deployment inventory

| Material | Classification | Rebuild handling |
|---|---|---|
| Canonical domain `https://cyberdrtabansky.com` | migrate structurally | retain as canonical production identity |
| GitHub Pages path `/LTPR` | migrate structurally | retain as non-canonical preview base path |
| Four EN + four HE route contract | migrate structurally | required exactly; no additional content route without approval |
| Current semantic CSS and page markup | replace | preserved only in Git history; do not migrate styling into the new identity |
