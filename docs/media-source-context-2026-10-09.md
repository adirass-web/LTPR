# Media source context — 9 October 2026

## Approved scope

Apply recognisable names, visible plain-English context and official links throughout the English Media archive, not just to less familiar institutions. Preserve the separate Media archive. The homepage bridge wording remains pending; no homepage or Hebrew copy changes are included.

## Implementation

- All 16 current broadcast and press entries have publisher context and an official publisher or programme-archive link, backed by `src/data/mediaSources.ts`.
- All six international-forum entries have expanded institutional names and visible context, while retaining the official event or proceedings destination.
- Press Kit publication references identify Springer as an academic publisher and the World Bank as an international development institution.
- Article and recording destinations remain separate from publisher links. Owner-uploaded YouTube recordings are not described as official broadcaster uploads.
- The former Channel 10 programme links to its historical archive at Channel 13. It is not conflated with Channel Economy / TV10.
- The Il Sole 24 Ore reproduction identifies AssoSoftware as the hosting industry association, not the original publisher.
- Context remains visible on mobile, rather than hidden in tooltips. New links have keyboard focus treatment and announce new-tab behaviour. No nested anchors.
- No new images, affiliation claims, delivery claims or promotional prestige language.

## Source checks

The registry contains the official publisher destinations. Supporting institutional checks included:

- [Channel Economy / TV10](https://tv10.co.il/about/)
- [Historical London et Kirschenbaum programme archive](https://13tv.co.il/writer/tentv_writer_1568823827/)
- [Associated Press](https://www.ap.org/about/)
- [France Médias Monde](https://www.francemediasmonde.com/en/)
- [RSIS at Nanyang Technological University](https://rsis.edu.sg/about-rsis/welcome-message/)
- [CyCon 2016 proceedings](https://ccdcoe.org/library/publications/8th-international-conference-on-cyber-conflict-proceedings-2016/)
- [World Bank critical-infrastructure event](https://www.worldbank.org/en/events/2023/06/21/cybertalk-on-securing-critical-infrastructure1#3)
- [AssoSoftware](https://www.assosoftware.it/chi-siamo/lassociazione/)

Some publishers block automated retrieval. Retaining their canonical official homepage is not a claim that every external page was successfully fetched. Existing article and event destinations have not been replaced with generic homepages.

## Validation

- `npm run check`: Astro, ESLint and Prettier pass.
- `npm run build`: pass, 12 pages.
- `SITE_TARGET=github-pages npm run build`: pass, 12 pages.
- Browser review at 390, 430, 768 and 1440 CSS pixels: no horizontal overflow in the Media content; institutional names wrap; publisher context remains visible.
- DOM verification: 16 publisher-context blocks, six forum-context blocks, no nested anchors.
- Keyboard navigation shows visible focus and separate article/publisher destinations.

Production is not changed by this branch. Review and approval are required before merging.
