# Current production guide — cyberdrtabansky.com

## Release status

- **English is the production site.** Its public architecture is **Profile · Media**: `/en/` is the profile page and `/en/media/` is the media page. Do not add About or Writing navigation or publish standalone About/Writing routes.
- The approved English source is [`src/content/en-v3.ts`](src/content/en-v3.ts). Do not change its published wording without the owner's explicit approval.
- The owner-held asset inventory is [`docs/SOURCE_AND_DEPENDENCY_REGISTER.md`](docs/SOURCE_AND_DEPENDENCY_REGISTER.md). Its legacy readiness fields will be reconciled during the next Media work package.
- Hebrew Profile and Media routes are retained as noindex translation staging. Build genuine RTL and route parity now, but do not present Hebrew as a published equivalent, link to it from the English menu, or emit `hreflang` alternates until native Hebrew copy is approved.
- Writing is removed from the public site. Git history preserves retired work.
- Private inquiries: `liortabansky@gmail.com`.

## Positioning and voice

- Identity: **first-principles strategy for defense innovation, AI and national resilience.**
- Audience: governments and investors.
- Voice: restrained, precise, first-person and non-promotional. One quiet **Private inquiries** path; no sales funnel, booking flow or contact page.
- The visual system must communicate intellectual authority and practical success in complex problems, international experience, discretion, precision and restrained mystique, with Israel, cyber and technology present as context rather than motifs.
- Design qualities: **modern, premium, restrained, editorial, warm and confident**. The old “1 px black rule + square grid” aesthetic is obsolete and must not govern the redesign. Retain deep forest only as a functional accent. Avoid stock imagery and generic security motifs.
- Structural rewriting of the Profile page is permitted more freely than copy rewriting. The approved English source remains authoritative; preserve its claims and wording unless the owner explicitly approves copy changes.

## Copy and factual guardrails

- Home's AI thesis is **“turn AI into strategic advantage.”**
- The phrase **“the week the consultants fly home”** appears once: Home only.
- PROGRESS is about resilience. It was applied in four critical sectors across eleven economies, within multi-year World Bank development programs each worth hundreds of millions of dollars.
- Singapore is the institutional proof anchor.
- Retain Michael Porter once, in About only.
- Retain **“peer-reviewed research”** only in the About credentials section.
- Do not add political-name sequences, speculative claims, invented audience labels or machine-translated Hebrew.

## Media and accessibility

- Media items use the original outlet or platform link. Logos and thumbnails are supporting evidence, not decoration.
- Do not add generic labels such as “Featured appearance” or “Hebrew television interview.” Use the outlet, title and useful date/language/duration only.
- Preserve semantic headings, keyboard-accessible controls, visible focus states, responsive AVIF/WebP/fallback images, reduced-motion support and logical CSS properties for future RTL work.
