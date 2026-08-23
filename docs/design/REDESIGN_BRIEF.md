# Premium bilingual redesign — governing brief

**Status:** current design authority for Profile and Media.

The older profile specification under `docs/superpowers/specs/` is obsolete. It may be consulted for history only and must not constrain this redesign.

## Mission

Build a modern, premium, restrained, editorial and warm authority site that communicates:

- intellectual authority with demonstrated practical success solving complex problems;
- international experience;
- discretion and precision;
- some controlled mystique;
- credible Israel, cyber and technology provenance without visual cliché.

The site should imply that the person understands difficult systems, has operated in consequential environments and has made things work. Substance, evidence, composition and editing should establish that before promotional language does.

## Non-negotiable direction

- IBM Plex is the typographic identity: IBM Plex Sans for English and IBM Plex Sans Hebrew for Hebrew.
- Use Regular 400 and Medium 500 only unless a demonstrated need survives review.
- Self-host fonts; no external runtime font requests.
- Warm near-white canvas, starting at `#f7f6f3`; never beige.
- Keep deep forest `#02291f` only as a functional accent.
- Do not preserve the old 1 px black-rule / square-grid aesthetic. Space is the default separator.
- Delete redundant labels and interface language aggressively.
- Outlet names are quiet metadata. Publication mastheads may appear inside authentic editorial crops, never as a freestanding logo wall.
- English publishes now. Hebrew publishes after approved native copy, but design-system parity and genuine RTL are implemented now.
- Structural rewriting of Home is much freer than copy rewriting. Approved substantive copy and factual claims remain protected.

## Israel / cyber / technology

Signal provenance through real work, institutions, source material, technically precise typography and authentic imagery. Do not use shields, locks, circuits, binary backgrounds, blue cyber gradients, decorative Israeli flags, military insignia or skyline wallpaper.

## Design review consensus

Five expert lenses were applied before implementation:

1. **Luxury digital direction:** premium quality must come from proportion, image scale, negative space and restraint rather than effects.
2. **Brand systems:** centralize only the decisions that need to propagate; avoid replacing old complexity with a large token bureaucracy.
3. **Editorial art direction:** create hierarchy through typography, pacing and evidence; avoid repetitive equal-weight card grids.
4. **Hebrew/Latin typography:** treat RTL as a native composition mode, not a mirrored patch; use IBM Plex Sans Hebrew directly and logical CSS throughout.
5. **Interaction/front-end craft:** preserve semantic HTML, intrinsic layout, accessible focus, reduced motion, responsive images and low-JS behavior.

### Decisions

| Issue | Decision |
| --- | --- |
| Existing Home architecture | Recompose from first principles; existing DOM is raw material, not a template. |
| Typography | IBM Plex Sans / IBM Plex Sans Hebrew, 400 + 500, modest Latin tracking, natural Hebrew tracking. |
| Canvas | `#f7f6f3` warm white; dark neutral ink; muted neutral text. |
| Lines | Remove most section/card/header/footer rules; retain subtle separators only for dense archive-like rows. |
| Accent | Deep forest only for focus, active states and occasional functional emphasis. |
| Hero | Asymmetric editorial composition rather than a hard bordered split-screen. |
| Evidence | Bring practical/international record into the main narrative; do not render it as a CV wall. |
| Media | Editorial hierarchy: one strong lead, quieter grids/lists, authentic crops, no logo wall. |
| Mystique | Achieve through selective disclosure, asymmetry, negative space and confidence, never theatrical effects. |
| RTL | Same semantic components and logical properties; no duplicated RTL component tree. |

## Home rules

Home must establish identity, intellectual territory, practical credibility and international scope quickly. It must not read as a CV, services page, academic biography or succession of equally weighted topic boxes.

Permitted structural changes include removing, combining, splitting and reordering sections; changing image/text relationships; converting lists to editorial compositions; varying density and scale; and removing weak presentation elements.

Freedom hierarchy:

1. visual structure/composition — highly flexible;
2. redundant UI labels — remove freely;
3. section headings — edit where needed for structure;
4. approved substantive prose — preserve by default;
5. facts, credentials and claims — do not alter without authority.

## Media rules

Media is evidence of international relevance, not a portfolio gallery. Preserve original source URLs, titles, dates, languages and useful metadata. Not every item needs equal visual weight. Dense secondary material can become compact editorial lists.

## Bidi rules

Use `lang` and `dir` at the root, logical properties, semantic DOM order and bidi isolation for mixed Hebrew/Latin text. Do not mirror photography or nondirectional marks. Directional arrows may mirror only when their meaning is directional.

Hebrew staging must remain `noindex` and must not be linked or emitted as `hreflang` until approved native copy exists.

## Implementation constraints

Keep Astro and the static Cloudflare Pages architecture. No framework migration, animation library or design-system dependency. Prefer modern CSS Grid/Flexbox, `clamp()`, `minmax(0, …)`, logical properties and container queries where they solve component-local behavior.

## Acceptance

The redesign is successful when the site is materially more contemporary and premium before the copy is read; the old black-rule aesthetic is clearly gone; practical achievement and international reach are evident; Israel/cyber/tech provenance is present without cliché; Media feels editorial; mobile is deliberately composed; and the shared system is genuinely RTL-ready.
