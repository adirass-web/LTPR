# WP3 preview checkpoint

This checkpoint implements two Home-only identity directions using the same locked English Home copy, the existing Hebrew Home draft, the approved 2:3 portrait, and the four approved proof-strip assets.

## Review routes

- Editorial: `/en/` and `/he/`
- Evidence-led alternative: `/prototype/evidence/en/` and `/prototype/evidence/he/`

The prototype-only routes exist for candidate-branch review and are not part of the release sitemap.

## Deliberately provisional

- Canvas is `#f6f6f6` for this review. The approved alternative, `#ebebeb`, has not been selected.
- `system-ui` is a temporary rendering fallback, not a selected typeface. No font files or weights are being added before the owner chooses one bilingual family.

## Locked rules implemented

- `#f6f6f6` canvas, `#000000` ink, and `#02291f` for the single hero CTA.
- One visible accent-filled CTA per viewport; other inquiries use the ink outline.
- Square geometry and hairline rules only; no card rounding, shadows, gradients, stock imagery, generated imagery, or security-industry motifs.
- The 2:3 portrait and four proof-strip files are referenced without modification.
- English and Hebrew share sections, density, responsive behavior, and logical layout. Hebrew-specific tracking is neutralized and mixed-script names are isolated where appropriate.

## Gate still open

The owner must select one composition direction, one canvas, and one production bilingual typeface family/weight. No non-Home page has received the visual system yet.
