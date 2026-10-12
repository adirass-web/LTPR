# Completed layout and asset QA

Status: pass within the tested scope. Review-only local preview; no push, merge or production deployment. Faces, source photographs and existing image pixels remain unchanged.

## Changes

Two factual hero entries: Singapore — National cybersecurity strategy; World Bank — Four sectors across 11 countries. Both entries and public-record link fit within the requested first screens; portrait remains below. Media identities are inline and visible; English subjects lead, full original source titles and dates share naturally wrapping references. Six photographs/title links navigate to articles, with six separate overlay enlargement controls; duplicate Read article actions removed. The complete AssoSoftware hosting explanation is secondary and visible. Fixed centered name headers grow with text; footers are about 64 px at standard sizes and wrap at narrower sizes. Photo credits removed.

## Measured page heights

Baseline is the last approved refined pair, not the older production pages.

| View | Approved before | Updated | Less height |
| --- | ---: | ---: | ---: |
| desktop profile | 3,994 px | 3,952 px | 1% |
| desktop media | 5,207 px | 4,837 px | 7% |
| mobile profile | 5,602 px | 5,520 px | 1% |
| mobile media | 11,460 px | 10,191 px | 11% |

Metadata comparison — representative NRC item:

- desktop: outlet/country/context 91 → 33 px (64% shorter); all identity plus appearance/action text blocks 233 → 139 px (41% shorter).
- mobile: outlet/country/context 89 → 33 px (63% shorter); all identity plus appearance/action text blocks 282 → 139 px (51% shorter).

The target of 66–80% overhead reduction was not met across every text block. Complete original references, visible context and readable 14 px secondary type were preserved; this report shows actual measured reduction rather than treating the entire item as boilerplate.

## Browser and content QA

- Four full-page and four opening-screen after captures at 1440×900 and 390×844; actual file dimensions verified. Four matching approved before views retained.
- Exact-size views: no horizontal overflow, failed images, nested interactive controls or unfinished font loading.
- 320 px and 768 px reflow passes on both pages. 200% CSS zoom/reflow simulation passes with wrapping, growing headers and no overlap or overflow. Native browser zoom was not available through the existing in-app harness, so this is explicitly a CSS simulation rather than a native browser-zoom claim. Cross-browser testing was not performed.
- All approved words retained after excluding the authorized duplicate CTA removal and added evidence strip. All anchors and distinct external source destinations retained. 22 publisher/institution context blocks and 5 full publication descriptions visible.
- All 6 native evidence dialogs open by Enter, load the expected image, close by Escape and return focus. Photograph/title destination pairs match.
- Section links settle below the fixed header: Singapore/work and media/Press checked. No new browser warning/error logs observed.

## Technical and image QA

Astro diagnostics: 50 files,0 errors/warnings/hints. ESLint and Prettier pass. Static build and both source/dist image validation pass. No dependency additions.

An exact reviewed asset manifest allows 123 image exports. The checker rejects unexpected raster paths, symlinks, excessive dimensions, camera/RAW extensions, disguised TIFF/HEIF content and embedded EXIF/XMP/IPTC. Temporary tests verify approved success and rejection of oversized, EXIF, XMP, camera-format, renamed TIFF, RAW-path and unapproved-path fixtures. Original source files stay outside the repository and serving/build roots; the private import/backup/export process is documented in docs/image-asset-workflow.md. Existing originals were not moved.

Read-only historical audit:122 reachable raster blobs, within current category limits and with no common metadata markers found. Scope is local reachable Git refs; it does not establish absence or deletion of copies elsewhere.

## Independent final reviews

GPT-6 Astra, extra-high reasoning, art direction: pass; hierarchy 9/10, geometry 9/10, image balance 9/10, whitespace 8.5/10, cross-page/device continuity 9/10 and fit to quiet premium direction 9/10. Confirmed final 14 px metadata remains readable and Il Sole refinement resolved.

Separate GPT-6 Astra, high reasoning, editorial/PR: pass; practical authority 8.5/10, international reach 9/10, evidence distinctions 9/10, readability 8.5/10 and opening priorities 9.5/10. Final source/context presentation passes. No required findings remain. Inherited RAI programme name remains the approved title; no unverified episode description was invented.

Execution: GPT-6.1 Sol high for implementation; GPT-6 Luna medium for asset safeguards; root coordinated browser tests, captures and integration.

## Working previews

- http://127.0.0.1:4342/lab/full-site/refined/profile/
- http://127.0.0.1:4342/lab/full-site/refined/media/
- Comparison board: http://127.0.0.1:4344/

Facial privacy processing and final release remain subsequent steps, as instructed.
