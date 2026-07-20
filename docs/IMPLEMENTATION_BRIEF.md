# Implementation Brief — cyberdrtabansky.com

**Status:** Canonical implementation brief  
**Updated:** 2026-07-20  
**Repository:** `adirass-web/LTPR`  
**Stack:** Astro static site, English + Hebrew, mobile-first

This document reconciles the project handover, positioning brief, benchmark/template review, content architecture, asset plan, locked English copy, Hebrew Home draft, and the merged Astro baseline. It governs implementation work. It does not replace the source copy files, and it does not authorize factual additions that are not supported by the source material.

## 1. Project outcome

Build a restrained, premium, almost-covert personal-authority hub for Dr. Lior Tabansky. The site should communicate, within five seconds, applied authority in defense innovation, artificial intelligence, cyber-power, and national resilience to governments, investors, boards, journalists, and senior commercial principals.

The site is a credibility hub, not a services funnel, speaker-booking site, academic CV, or venture landing page.

## 2. Canonical positioning

### Primary identity

**First-principles strategy for defense innovation, AI, and national resilience.**

### Supporting idea

“Strategy is choosing what not to do,” attributed to Michael Porter where used. The doctorate is presented as a practical discipline: first-principles reasoning that produces clarity, prioritization, and better decisions when existing playbooks fail.

### Three pillars

1. **Defense innovation** — from an elite Israel Air Force technology unit and cyber-power theory to the translation of technology and organization into strategic advantage.
2. **AI** — insight, decision support, and autonomy depend on organizational conditions. The core thesis is that AI is an organizational problem, not a model problem.
3. **Capacity building** — national cyber resilience, sectoral capability, and durable capability-maturity work that leaves capacity behind rather than another report.

### Audience

Primary: governments and agencies; investors and strategic funds; boards and senior executives; journalists, producers, and conference organizers.  
Secondary: senior professional peers.  
Not primary: students, procurement audiences, or an academic readership.

## 3. Non-negotiable editorial rules

- Preserve the restrained, first-person, spare, confident voice.
- Do not add overt selling, pricing, service menus, funnels, or “book a call” language.
- Use one quiet **Private inquiries** path for advisory, investment, and media inquiries.
- Let media, institutions, and logos provide proof; do not inflate claims with adjectives.
- Keep academia subordinate. Every credential must connect to practical judgment or outcomes.
- Keep most engagements private; name only approved public anchors.
- Use logical CSS and correct bidirectional handling for Hebrew, Latin names, numerals, arrows, and URLs.
- Preserve locked English copy unless an editorial or factual problem is presented for approval.
- Every new essay or translated page requires independent factual and guardrail review before publication.

## 4. Fact-fidelity rules

These formulations are mandatory:

- **Singapore:** Dr. Tabansky authored the vision, goals, and 70+ recommendations behind Singapore’s National Cybersecurity Strategy. Do not say he authored the Strategy itself.
- **World Bank:** describe World Bank-backed critical-infrastructure resilience roadmaps/capacity work across a dozen countries. Do not say he ran the World Bank or a World Bank program.
- **Israel Air Force:** use “elite Israel Air Force technology unit”; do not name the unit.
- **The National Interest:** it is his byline/commentary, not press coverage of him. Keep it in Writing/publications, not the press wall.
- **Private work:** do not fabricate a client roster. Use “most engagements are private” or equivalent approved wording.
- **Logos:** use only logos and institutional references approved in the asset plan, with appropriate links and rights treatment.

## 5. Information architecture

Each page must exist in both English and Hebrew:

| Page | English | Hebrew | Purpose |
|---|---|---|---|
| Home | `/en/` | `/he/` | Complete authority story in one restrained scroll |
| Media | `/en/media/` | `/he/media/` | TV, video, press, speaking, and press kit |
| About | `/en/about/` | `/he/about/` | Applied narrative, method, engagements, credentials |
| Writing | `/en/writing/` | `/he/writing/` | Three cornerstone arguments, book, selected publications |

`/` remains a lightweight redirect to `/en/`. Contact is not a standalone page; it is the footer and recurring Private inquiries CTA.

Global navigation: Home, Media, About, Writing, and EN/עברית. It should remain minimal, responsive, keyboard-accessible, and usable in RTL.

## 6. Page requirements

### Home

Order of persuasion:

1. Portrait hero, canonical identity line, Porter subline, Private inquiries.
2. Grayscale client strip: World Bank, Singapore CSA, IISS, IAI.
3. Three pillars with short payoff-framed descriptions.
4. First-principles / PhD-as-edge block.
5. Featured RAI appearance and “As featured in” press wall.
6. Selected public engagements: Singapore and World Bank-backed capacity work.
7. Compact credibility ballast: book, PhD, Coller School, selected work.
8. Quiet private-inquiries close.

### Media

1. Lead RAI video with poster frame, runtime, and EN/HE subtitles.
2. Curated 5–8 appearance grid from the YouTube channel, including i24 and international broadcasts where verified.
3. Press/logo wall linking to original articles or clips.
4. Speaking log using institutions and dates, not promotional adjectives.
5. Press kit with approved portrait, short/long bios, headshots, and media contact.

### About

1. Applied opening: strategy that survives contact with reality.
2. Arc: Israel Air Force technology unit → cyber-power theory → Singapore and World Bank-backed work → government and investor advice.
3. First-principles method and proprietary sectoral capability-maturity framework.
4. Selected engagements and discretion line.
5. Compact credentials ballast.
6. Private inquiries.

### Writing

The page is curated, not a news feed. It must contain:

1. **AI is an organizational problem, not a model problem.**
2. **From cybersecurity to cyber-power.**
3. **Capacity that outlasts the report.**
4. *Cybersecurity in Israel* book link and selected publications.

The three full essays are not yet written. Do not publish the current deks as if they were finished essays.

## 7. Visual direction

The approved direction is restrained/covert-premium editorial minimalism:

- one controlled accent color;
- strong serif/sans hierarchy;
- generous air and compact paragraphs;
- portrait and media as evidence, not decoration;
- article bodies unboxed;
- monochrome/grayscale logo treatment;
- no decorative stock imagery, noisy animation, or marketing-card clutter;
- mobile-first layouts with graceful single-column degradation;
- easy PDF/print rendering.

The current CSS is a functional baseline only. A design direction must be selected and then implemented consistently across all pages.

## 8. Asset and legal gate

Priority assets:

- one approved hero portrait, treated consistently in grayscale/duotone;
- RAI “Codice — La vita è digitale” highlight cut, 60–90 seconds, hosted externally;
- four approved client logos in uniform grayscale;
- 5–8 curated TV/YouTube appearances;
- verified article deep-links and outlet logos;
- approved book cover and press-kit assets.

Do not commit or host the 1.1 GB RAI source file. Do not republish full press clippings or PDFs. Use outlet logos linking to originals and only limited fair-use thumbnails or pull-quotes where legally appropriate. Verify image, event-photo, logo, and video rights before launch.

## 9. Current repository state

The merged Astro baseline contains:

- `src/pages/en/index.astro`, `about.astro`, `media.astro`, `writing.astro`;
- `src/pages/he/index.astro` only;
- shared `Base`, `Nav`, and `Footer` components;
- global CSS and Astro configuration;
- `CLAUDE.md`, `HANDOVER.md`, `README.md`, and `package.json`;
- the original `cdt-personal.zip` retained as source reference.

Known implementation gaps:

- Hebrew About, Media, and Writing routes are missing.
- Portrait, email, RAI, YouTube, and press links remain placeholders.
- The navigation currently points to missing Hebrew routes.
- Media and press walls are text placeholders, not asset-backed components.
- No production asset directory, press data model, essay reading template, or press-kit download exists.
- Accessibility, performance, SEO, structured data, and responsive QA are not complete.

## 10. Implementation sequence

1. Complete source and asset inventory; record unresolved factual, legal, and input dependencies.
2. Produce and approve two or three visual homepage directions.
3. Implement the selected design system and reusable components.
4. Replace English placeholders with approved assets and links without rewriting locked copy.
5. Add and review all Hebrew routes with RTL/bidi QA and native sign-off.
6. Draft, fact-check, and publish the three essays from supplied source material.
7. Integrate media, press, speaking, and press-kit data.
8. Run full responsive, accessibility, performance, metadata, link, and legal QA.
9. Deploy to a static host and connect `cyberdrtabansky.com`.

## 11. Required owner inputs

- final hero portrait;
- real contact email;
- verified press URLs, especially Newsweek and Washington Post/AP;
- selected YouTube appearances;
- RAI clip/hosting decision and subtitle review;
- essay source material;
- image/logo/video rights confirmations;
- native Hebrew review;
- hosting and domain access.

## 12. Definition of done

The project is complete only when all eight routes work, no placeholders remain, EN/HE claims are materially equivalent, RTL is correct, assets and links are verified, the three essays are finished, legal presentation is acceptable, the static production build passes, and the deployed domain is tested on mobile and desktop.
