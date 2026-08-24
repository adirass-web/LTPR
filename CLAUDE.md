# Current production guide — cyberdrtabansky.com

## Release status

- **English is the production site.** Its public architecture is **Profile · Media**: `/en/` is the profile page and `/en/media/` is the media page. Do not add About or Writing navigation or publish standalone About/Writing routes.
- The approved English source is [`src/content/en-v3.ts`](src/content/en-v3.ts). Preserve substantive published wording and factual claims unless the owner explicitly approves a change. Structural redesign is much freer than copy rewriting.
- Deferred owner-held materials are tracked in [`docs/SOURCE_AND_DEPENDENCY_REGISTER.md`](docs/SOURCE_AND_DEPENDENCY_REGISTER.md). Media provenance is tracked separately in [`docs/media-sources/SOURCE_MANIFEST.md`](docs/media-sources/SOURCE_MANIFEST.md).
- Hebrew Profile and Media routes are retained as `noindex` translation staging. Build genuine RTL and route parity now, but do not present Hebrew as a published equivalent, link to it from the English menu, emit Hebrew `hreflang`, or machine-translate missing copy.
- Writing is removed from the public site. Git history preserves retired work.
- Private inquiries: `liortabansky@gmail.com`.

## Positioning and design

- Identity: first-principles strategy for defense innovation, AI and national resilience.
- Audience: governments and investors.
- Voice: restrained, precise, first-person and non-promotional. No sales funnel, booking flow or contact page.
- The site must communicate intellectual authority, demonstrated practical success in complex problems, international experience, discretion, precision and restrained mystique. Israel, cyber and technology are provenance, not visual motifs.
- Design qualities: **modern, premium, restrained, editorial, warm and confident**.
- The old 1 px black-rule / square-grid aesthetic is obsolete. Whitespace is the default separator; keep deep forest only as a functional accent.
- IBM Plex Sans is the English family and IBM Plex Sans Hebrew is the Hebrew family. Use Regular 400 and Medium 500 unless a real design need is approved.
- [`docs/design/REDESIGN_BRIEF.md`](docs/design/REDESIGN_BRIEF.md) is the governing design brief. Older profile specifications under `docs/superpowers/specs/` are historical only and have no authority over the current redesign.
- [`docs/MEDIA_EDITORIAL_BRIEF.md`](docs/MEDIA_EDITORIAL_BRIEF.md) is the governing Media hierarchy and selection brief.

## Content and factual guardrails

- Do not invent political-name sequences, claims, credentials, audience labels or source metadata.
- Preserve verified source links and original-language Media titles.
- Media outlet names are quiet metadata; mastheads may appear inside authentic editorial crops, never as a freestanding logo wall.
- Delete redundant UI language such as “Selected,” “Featured,” “Discover,” “Explore” or “Learn more” when the heading or destination already supplies that information.

## Accessibility and implementation

- Keep Astro static output and the existing Cloudflare Pages deployment architecture.
- Preserve semantic headings, keyboard-accessible controls, visible focus states, responsive AVIF/WebP/fallback images, reduced-motion support and logical CSS properties.
- RTL must be structural: semantic DOM order, logical properties and bidi-safe mixed Hebrew/Latin content. Do not mirror photography or nondirectional brand marks.
