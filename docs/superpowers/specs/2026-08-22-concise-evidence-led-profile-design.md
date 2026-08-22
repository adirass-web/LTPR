# Concise, evidence-led profile design

**Status:** approved for implementation
**Scope:** English primary site only; Media remains the public evidence archive.

## Purpose

The primary site is a brand and reference destination. It should establish Dr. Lior Tabansky's intellectual territory and public record for visitors arriving from third-party business sites. It is not a lead-generation page, and it must not add a prominent contact CTA, social funnel, newsletter, or sales language.

The resulting experience should be restrained, premium, discreet, and confident. Authority comes from named public work, clear claims, and links to evidence rather than repeated assertions of expertise.

## Content architecture

`/en/` becomes the complete English profile page. It will have five compact parts, in this DOM order:

1. **Thesis** — retain the H1, `Advantage is created, not bought.` Use one short, concrete supporting statement about institutions turning technology into operational advantage. Keep the portrait as the only priority image. Remove the hero inquiry CTA and generic eyebrow.
2. **Work** — four short sections: Innovation systems, AI and organizational advantage, Digital trust and critical systems, and National resilience. Each makes one evidence-led point in plain English; no numbered labels, generic eyebrows, or repeated rhetorical devices.
3. **Selected record** — a short factual list taken from the existing verified record: doctorate, book, cyber-power research, Singapore strategy work, parliamentary briefings, and international consulting. It provides proof without a separate long biography.
4. **Method** — one compact paragraph linking public work on PROGRESS and sectoral cybersecurity maturity to the site thesis. Retain source citations already represented by the content model.
5. **Public record** — a quiet internal link to `/en/media/`, making Media the home for international appearances, articles, language breadth, and original headlines.

The full multi-section autobiography, investor vignette, and all statements about discretion do not move to Home. Their useful facts either enter the concise profile or disappear.

## Copy discipline

Apply the supplied Pinker-Orwell prose brief as an editing standard, not as an editorial-page template:

- Name actors, institutions, work, and outcomes before abstract concepts.
- Prefer concrete verbs and short factual sentences over nominalized claims.
- Preserve one strong thesis; do not make every section compete to be the thesis.
- Keep original-language media headlines in Media. They are evidence of international work, not a localisation problem.
- Remove generic labels such as `Selected appearances`, `Twenty years, briefly`, `The credentials, once`, and repeated `Private inquiries` labels.
- Preserve factual source metadata: outlet, title, date, language, location, and public source.

## Navigation and routes

### English

- The site name stays the home link.
- Primary navigation becomes `Profile` and `Media`.
- `Profile` points to the meaningful `#profile` landmark on `/en/`; it is not a contact CTA.
- `Media` remains `/en/media/`.
- Do not add a language switch, contact item, social menu, or inquiry CTA.

### About compatibility route

`/en/about/` leaves primary navigation and redirects permanently to `/en/#profile` on Cloudflare Pages. The static About page remains a small `noindex` fallback for local development only, with a canonical URL of `/en/`.

Use Cloudflare Pages' `_redirects` file for both `/en/about` and `/en/about/`. A URL fragment is valid in its redirect destination.

### Hebrew

Hebrew remains out of scope. Its current page structure and navigation must not be rewritten or translated as part of this change. Any shared navigation logic must preserve the existing Hebrew menu and RTL behavior.

## Footer

Keep the footer intentionally sparse. It contains only the name and the existing email address. It contains neither a conversion CTA nor duplicated primary navigation.

## Implementation boundaries

Expected files:

- `src/content/en-v3.ts` — replace the English Home/About long-form data with concise profile data; retain and use existing sources.
- `src/components/HomePage.astro` — render the compact profile sections and its Media reference.
- `src/components/AboutPage.astro` and `src/pages/en/about.astro` — retain a minimal local fallback with the agreed canonical/noindex behavior.
- `src/components/SiteShell.astro` and `src/content/site.ts` — represent English `Profile`/`Media` navigation while preserving Hebrew navigation and update footer copy.
- `src/assets/styles/tailwind.css` — remove obsolete home-close and long-form layout rules, then add semantic profile/compatibility styles using existing tokens and logical properties.
- `public/_redirects` and `astro.config.ts` — redirect legacy About URLs on Cloudflare Pages and remove the legacy page from the sitemap.

`src/components/MediaPage.astro`, media cards, `src/data/media.ts`, media assets, and third-party source links are out of scope except for the new quiet internal route from Home to Media.

## Layout and performance requirements

- Preserve one semantic DOM hierarchy at every size.
- Use the project tokens only: canvas `#f6f6f6`, ink `#000`, accent `#02291f`, 1px rules, square geometry, Heebo 400.
- Use intrinsic layout, logical properties, and `minmax(0, …)` safeguards. Prefer component container queries over viewport-specific patch rules where a component changes internally.
- Do not reorder interactive content visually relative to DOM order.
- Preserve the hero portrait as the sole `fetchpriority="high"` image. Below-the-fold imagery remains lazy-loaded and dimensioned.
- Retain the existing native `<details>` mobile menu behavior and clear focus treatment.

## Acceptance criteria

1. `/en/` reads as a concise, evidence-led profile and contains no large inquiry CTA.
2. The English header shows only Profile and Media besides the home/name link.
3. `/en/about` and `/en/about/` redirect permanently to `/en/#profile` on Cloudflare Pages; the fallback page is unlinked, readable, noindexed and canonicalized to `/en/`.
4. Media retains all original-language titles, press cards, sources, and routes.
5. Hebrew pages remain structurally unchanged and RTL-safe.
6. The footer remains informational, sparse, and non-conversion-oriented.
7. `npm ci`, `npm run check`, and `npm run build` succeed.
8. Desktop, tablet, 390px, and 430px checks confirm no horizontal overflow, readable text, correct nav behavior, visible focus, and stable image loading.
