# Media editorial authority

**Status:** current authority for the English Media page and later Hebrew parity
**Implementation:** `src/data/mediaPrestige.ts`, `src/data/internationalForums.ts`, and the Media components
**Provenance:** [`media-sources/SOURCE_MANIFEST.md`](media-sources/SOURCE_MANIFEST.md)

## Purpose

Media is evidence of international relevance, not a portfolio gallery or exhaustive archive. Lead with the institution or outlet that carries the authority signal. Show proof rather than describe prestige. Do not order primarily by recency.

## Page hierarchy

1. RAI 1 `Codice: la vita è digitale` lead
2. **Broadcast**
3. **International press**
4. **More coverage**
5. **Selected international forums**
6. Compact Press kit disclosure

## Broadcast

Keep RAI 1 as the dominant lead. Supporting appearances follow this institutional order:

1. NTV
2. RaiNews 24
3. Channel 10 · London et Kirschenbaum
4. Channel 14
5. Channel Economy

Channel Economy is the provisional replacement slot if a stronger verified broadcast appearance becomes available.

## International press

Keep the primary set selective:

1. POLITICO Europe — `How did Israel blow up Hezbollah pagers?` — 19 September 2024
2. Le Figaro — AI and warfare — 4 December 2023
3. Associated Press — Iran steel cyberattack — 27 June 2022
4. NRC — Israeli surveillance industry and Pegasus — 4 January 2022
5. France 24 — NSO, diplomacy and statecraft — 21 July 2021
6. la Repubblica — Israel–Iran cyber conflict — 20 May 2020

POLITICO remains typography-led until an appropriate source-derived visual is installed. Do not substitute an unrelated image or decorative logo treatment.

## More coverage

Use the compact tier for breadth and continuity. It includes Le Figaro 2024, Newsweek 2017, Il Sole 24 Ore 2020, Il Giornale 2018, RAI 2017, Jerusalem Post and Ynet 2007.

Do not list Financial Times without a verified substantive Tabansky source. Do not multiply syndicated publication of the same reporting into separate prestige claims. Do not add items merely to increase outlet count.

## Selected international forums

Institution or forum is the primary signal; location, topic and year are subordinate. The institution-first order and official source links in `src/data/internationalForums.ts` are authoritative.

## Source and presentation rules

- Preserve original source URLs, dates and original-language titles.
- Source originals and reference PDFs are internal evidence, never public runtime assets.
- Publication mastheads may appear inside authentic editorial crops, never as a freestanding logo wall.
- Use optimized AVIF/WebP/JPEG derivatives; do not upscale weak sources.
- Use one semantic component tree, intrinsic grids, container queries and logical properties.
- Recurring cards remain consistent. Do not add source-specific CSS or `nth-child` layout patches.
- Keep English published and Hebrew unpublished until approved native copy exists.

Superseded build plans, experimental ordering and earlier label sets remain available in Git history.
