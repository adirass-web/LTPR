# Canonical Implementation Brief — cyberdrtabansky.com

**Status:** Active source of truth for implementation  
**Version:** 2.2
**Updated:** 2026-07-20  
**Repository:** `adirass-web/LTPR`  
**Production domain:** `https://cyberdrtabansky.com`  
**Stack:** Astro static site; English and Hebrew; mobile-first

## 1. Purpose and authority

This brief converts the approved planning work into build rules for the public repository. It reconciles the positioning brief, content architecture, asset plan, locked English copy, Hebrew Home draft, handovers, `CLAUDE.md`, and the merged Astro baseline.

Use this order when sources conflict:

1. The owner’s latest explicit instruction.
2. Approved factual corrections and fact-fidelity rules.
3. Locked page copy for exact published wording.
4. This implementation brief and `CLAUDE.md`.
5. Content architecture and asset plan.
6. Older positioning drafts and handovers.

This brief governs implementation. It does not unlock the English copy for rewriting and does not authorize new factual claims.

## 2. Resolved decisions

The following decisions are final unless the owner changes them explicitly:

- The later positioning refinement supersedes the original G1 identity line.
- Canonical identity: **First-principles strategy for defense innovation, AI, and digital trust.**
- Three pillars: **defense innovation · AI · cybersecurity capacity building**.
- Audience emphasis: governments and investors/commercial principals. Boards, media, event organizers, and senior peers are supporting audiences.
- Site role: a personal-authority and credibility hub, not a services funnel, academic CV, venture directory, or speaker-booking site.
- Voice: restrained, premium, almost covert, non-bragging, first-person, and spare.
- Conversion: one quiet **Private inquiries** path. No pricing, services menu, calendar funnel, or “book a call.”
- Ventures remain unnamed and unlinked unless the owner reverses the venture-agnostic decision.
- English and Hebrew must have equivalent page coverage and materially equivalent claims.
- Contact remains in the footer/CTA; there is no Contact page.
- Writing is a top-level page and a curated collection, not a blog feed.
- The public client strip contains World Bank, Singapore CSA, IISS, and IAI in uniform grayscale.
- Georgia and Sierra Leone are not separate marquee logos; their contribution is captured through the approved regional capacity-building line.
- The site remains static Astro and owns its code.

## 3. Open decisions

These remain deliberately unresolved:

- final typography selection and color-palette tuning within the approved layout direction;
- final hero portrait;
- real contact email;
- RAI highlight edit, subtitle approval, and hosting location;
- final 5–8 YouTube appearances;
- verified press deep-links;
- inclusion and wording of any harder executive-education commercial proof;
- final Hebrew wording after native review;
- essay source packages and publication order after the AI essay;
- static hosting provider, analytics choice, and deployment access.

Do not silently decide these through implementation.

## 4. Positioning and message hierarchy

### Primary identity

**First-principles strategy for defense innovation, AI, and digital trust.**

### Supporting idea

“Strategy is choosing what not to do,” attributed to Michael Porter where it appears. The doctorate in national cybersecurity is practical ballast: the discipline to reason from first principles, distinguish signal from noise, map the whole system, and identify the few decisions that create advantage.

### Three pillars

1. **Defense innovation** — how technology and organization combine to create advantage in defense and security, and what those dynamics reveal about innovation in civilian markets.
2. **AI** — AI already delivers insight, decision support, and autonomy. The challenge is whether organizations can use it: successful adoption is an organizational problem, not a model problem.
3. **Cybersecurity capacity building** — national strategies, sectoral resilience, and institutional capability designed to endure, not another one-off report.

### Order of persuasion

Applied value → verifiable proof → three areas of substance → first-principles rigor → discreet credentials → private contact.

Media and institutional proof should carry more visual weight than academic credentials.

## 5. Editorial and factual guardrails

- Preserve locked English copy. If a locked passage conflicts with a factual guardrail, flag it for approval rather than silently rewriting it.
- Tie every credential to a practical payoff; never lead with academic status.
- Name only approved public anchors. Do not invent or imply a confidential client roster.
- Keep most engagements private and state that discretion plainly.
- Avoid promotional adjectives, jargon dumps, inflated authority claims, and generic consultant language.
- Use “Dr. Lior Tabansky” consistently.
- Attribute the Porter formulation where used and avoid unnecessary repetition across pages.
- Do not describe the current essay deks as completed essays.

Mandatory claim controls:

| Subject | Permitted formulation | Prohibited drift |
|---|---|---|
| Singapore | Authored the vision, goals, and 70+ recommendations behind Singapore’s National Cybersecurity Strategy | “Authored Singapore’s Strategy” |
| World Bank | World Bank-backed critical-infrastructure resilience/capacity work across a dozen countries | “Ran a World Bank program” |
| Israel Air Force | Served in an elite Israel Air Force technology unit | Naming the unit |
| Private work | Most engagements are private; selected public work shown | Fabricated or implied client roster |
| *The National Interest* | His bylined commentary/publication, shown under Writing | Press coverage of him or a press-wall logo |

An earlier asset list included *The National Interest* among premium press. The later copy QA and `CLAUDE.md` correction control: it must remain outside the press wall.

## 6. Canonical sitemap and route contract

| Page | English | Hebrew | Current state |
|---|---|---|---|
| Home | `/en/` | `/he/` | EN implemented; HE draft implemented |
| Media | `/en/media/` | `/he/media/` | EN implemented; HE missing |
| About | `/en/about/` | `/he/about/` | EN implemented; HE missing |
| Writing | `/en/writing/` | `/he/writing/` | EN frame implemented; HE missing; essays unfinished |

`/` redirects to `/en/`. The language toggle should map visitors to the equivalent page when that route exists, not always return them to the language homepage.

Navigation is Home · Media · About · Writing · EN/עברית. It must be responsive, keyboard-accessible, RTL-safe, and free of links to nonexistent pages at release.

## 7. Page contracts

### Home

1. Portrait hero, canonical identity, Porter subline, and quiet inquiry link.
2. Four-logo client strip and approved regional capacity-building line.
3. Defense innovation, AI, and cybersecurity-capacity-building pillars.
4. First-principles/PhD-as-edge block.
5. Featured RAI appearance and linked press wall.
6. Singapore and World Bank-backed public anchors plus discretion line.
7. Compact book, PhD, Coller, and selected-work ballast.
8. Private-inquiries close.

### Media

1. RAI lead video with poster, caption, runtime, and EN/HE subtitles.
2. Curated 5–8 video appearances with outlet, topic, and runtime.
3. Linked international and regional press wall using verified original URLs.
4. Restrained, dated speaking record using institutions rather than adjectives.
5. Press kit with approved headshots, short and long EN/HE bios, and media contact.

### About

1. Applied opening and operational-to-strategic narrative.
2. Israel Air Force technology-unit grounding, cyber-power theory, Singapore, World Bank-backed work, and current government/investor relevance.
3. First-principles method and sectoral capability-maturity framework.
4. Selected public engagements and discretion.
5. Compact credentials ballast.
6. Private inquiries.

### Writing

The page is curated and must distinguish finished work from planned work:

1. **AI is an organizational problem, not a model problem** — cornerstone essay, not yet written.
2. **From cybersecurity to cyber-power** — not yet written/adapted.
3. **Capacity that outlasts the report** — not yet written.
4. *Cybersecurity in Israel* and a restrained selected-publications list.

Each essay requires a dedicated reading route, source-grounded drafting, independent fact/guardrail review, and owner approval before publication.

## 8. Visual implementation constraints

The approved layout direction combines Pojo Frame/Firma for the main-site tone with Zapa for Writing and Media architecture. The semantic layout system and responsive behavior are productionized. Typography selection and color-palette tuning are explicitly deferred. Every later refinement must preserve:

- restrained, editorial, covert-premium character;
- strong typographic hierarchy and generous whitespace;
- one controlled accent color;
- portrait and media used as evidence rather than decoration;
- unboxed article bodies;
- uniform grayscale/monochrome logo treatment;
- no stock imagery, decorative clutter, loud gradients, or sales-site card grids;
- limited purposeful motion with reduced-motion support;
- mobile-first behavior and correct RTL mirroring;
- clean print/PDF behavior where practical.

The current global CSS is the approved production layout system. Its typography and color tokens remain provisional until the owner opens the deferred fine-tuning phase.

## 9. Asset, rights, and media rules

Required production assets:

- one approved high-resolution portrait;
- World Bank, Singapore CSA, IISS, and IAI logos prepared consistently;
- a 60–90 second RAI highlight with poster frame and approved subtitles;
- 5–8 selected video appearances;
- verified press URLs and normalized outlet logos;
- approved book-cover image;
- approved press-kit headshots and biographies;
- optional approved event images with credits/permissions.

Legal handling:

- do not commit the 1.1 GB RAI master;
- host the short RAI cut externally and embed it;
- do not republish complete articles, clipping PDFs, or scans;
- link outlet logos to original articles or clips;
- use only limited fair-use thumbnails or short pull-quotes where justified;
- verify photo, logo, video, and subtitle rights before release;
- frame Pegasus/NSO coverage as independent expert analysis, not industry affiliation.

## 10. Copy status

| Deliverable | Status | Rule |
|---|---|---|
| Home EN | Revised and approved 2026-07-20 | Preserve the approved identity and three-pillar revision |
| About EN | Revised and approved 2026-07-20 | Preserve the approved identity and AI revision |
| Media EN | Locked | Build gate remains for Newsweek and AP/WaPo links |
| Writing EN page | Revised frame approved 2026-07-20 | Full essays remain outstanding |
| Home HE | Revised first draft | Requires parity, bidi, and native review |
| About HE | Missing | Translate from locked EN; review and back-translate |
| Media HE | Missing | Translate from locked EN; review and back-translate |
| Writing HE | Missing | Translate page after English content state is confirmed |

One potential wording conflict must be reviewed during copy integration: some locked Home wording says work “with the World Bank,” while the governing fact rule prefers “World Bank-backed.” Do not change it without presenting the exact proposed correction.

## 11. Verified repository state

Current `main` includes:

- four English Astro pages;
- Hebrew Home only;
- shared `Base`, `Nav`, and `Footer` components;
- global CSS and Astro/i18n configuration;
- `site: 'https://cyberdrtabansky.com'` in Astro configuration;
- the original ZIP retained at repository root;
- project guardrails and handover files.

Verified locally on 2026-07-20:

- dependency installation completed;
- Astro static production build completed successfully;
- generated routes included four English pages, Hebrew Home, and the root redirect.

Not yet verified by CI. No dependency lockfile is committed. The optional `@claude` workflow from the ZIP was not committed; the current handover’s references to that workflow and an unverified local build are stale.

Known product gaps:

- Hebrew About, Media, and Writing routes exist as RTL-safe translation placeholders; final native copy is still missing;
- placeholder portrait, email, media embeds, press links, and press kit;
- text-only logo/media walls;
- no production asset/data model;
- final typography selection and color-palette tuning are deferred;
- no essay reading routes or completed essays;
- responsive and baseline accessibility implementation is complete; final visual, SEO, structured-data, performance, link, rights, and deployment QA remains for the real production assets.

## 12. Work packages and gates

### WP1 — Source and dependency register

Inventory every available asset and source; record owner, intended use, rights status, factual status, link status, and missing inputs.  
**Gate:** every required page slot is marked ready, pending, excluded, or blocked.

### WP2 — Visual directions

Produce two or three homepage directions using the same locked content and asset assumptions.  
**Gate:** owner selects one direction and resolves portrait assumptions.

### WP3 — Design system and shell

Implement typography, spacing, color, responsive navigation, language routing, layout primitives, media treatments, and print/reduced-motion rules.  
**Gate:** Home shell approved on desktop and mobile in EN and RTL.

### WP4 — English production integration

Replace placeholders with approved assets, links, data, embeds, metadata, and press-kit structures while preserving locked copy.  
**Gate:** all four English pages are complete and link-valid.

### WP5 — Hebrew completion

Create About, Media, and Writing; revise Home; run parity, back-translation, bidi, and native review.  
**Gate:** four Hebrew pages approved with no dead routes.

### WP6 — Essays

Draft from supplied sources, review independently, revise once, and obtain owner approval.  
**Gate:** three finished essays and their reading pages.

### WP7 — Production QA and deployment

Run build, responsive/RTL, accessibility, performance, metadata, structured-data, link, rights, and deployment checks.  
**Gate:** production domain passes the release checklist.

## 13. Required owner inputs

- final hero portrait;
- real contact email;
- press deep-links, particularly Newsweek and Washington Post/AP;
- selected YouTube appearances;
- RAI clip/hosting and subtitle decisions;
- essay source material;
- photo/logo/video rights confirmations;
- native Hebrew approval;
- visual-direction selection;
- hosting, analytics, and domain access.

## 14. Definition of done

The site is complete only when:

- all eight language/page routes and the root redirect work;
- no user-facing placeholder remains;
- language toggles preserve page context;
- English and Hebrew claims are materially equivalent and RTL/bidi behavior is correct;
- all images, logos, videos, captions, and links are approved and rights-checked;
- all three essays are complete and source-grounded;
- accessibility, responsive, performance, metadata, structured-data, and link QA pass;
- the static production build passes reproducibly;
- the deployed domain is tested on representative mobile and desktop browsers.
