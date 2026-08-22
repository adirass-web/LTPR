# LTPR Media Page — Authoritative Implementation Brief

**Repository:** `adirass-web/LTPR`  
**Working branch:** `feature/media-12-item-expansion`  
**Status:** editorial selection locked; implementation in progress; do not merge without owner approval  
**Release mode:** English first. Hebrew Media is later. Build components/data so RTL/HE can be added without redesign.

## 1. Objective

Rebuild the Media page as strong, verifiable visual proof of international media presence. The page must feel selective, authoritative, international, and editorial. It must not read like a CV, archive dump, scrapbook, or generic card template.

The site navigation remains:

**Home · Media · About · EN / עברית**

Do not restore a Writing page. Authored writing will eventually link externally.

## 2. Non-negotiable implementation rules

- Build a **custom Media composition on the existing LTPR design system**. Do not use a generic Astro/template layout.
- **Mobile-first** with one DOM hierarchy.
- Use the existing design tokens from `docs/design/TOKENS.md` and `TYPEFACE.md`:
  - canvas `#f6f6f6`
  - ink `#000000`
  - accent `#02291f`
  - rule `1px solid #000000`
  - radius `0px`
  - Heebo Regular 400 only; no synthetic bold
- Use GoogleChrome `modern-web-guidance` principles, especially:
  - intrinsic layouts
  - container-size-driven styling
  - fluid scaling with `clamp()` / container units where useful
  - semantic reusable variants
  - design-token reactivity only where it buys real reuse
  - accessible semantic HTML
  - optimized image delivery
- **No per-item CSS exceptions.** No `nth-child`, source-name selectors, item-specific margin/width fixes, or breakpoint patch piles.
- Source identity belongs in data. Presentation may vary only by reusable semantic type/variant such as `lead`, `video`, `press`, `archive`.
- Prefer intrinsic grids and container queries. Small/default layout should work without JavaScript.
- No embedded YouTube players in the grids. Use optimized posters that link to original sources.
- Do not enlarge full newspaper scans or republish substantial third-party article pages.
- Ask the owner before sourcing any third-party visual **except RaiNews 2019**, for which public sourcing is already approved.

## 3. Locked page architecture

1. Media intro
2. **MAIN lead — RAI `Codice: la vita è digitale`, 2020**
3. **On Screen** — five recurring TV/video cards
4. **Press & Features** — six recurring editorial cards
5. **More Coverage / From the Archive** — compact secondary evidence
6. Stages
7. Press Kit

The main visual tier remains **12 items total**: 1 lead + 5 On Screen + 6 Press.

## 4. MAIN lead — 2020 RAI Codice

Owner master:
`Clip Codice La vita è digitale - RaiPlay 20406082_1800.mp4-.mp4`

Poster instructions:

- primary still: **00:41** — clear close-up of Lior Tabansky with RAI 1 / CODICE branding and lower third
- secondary/network still: approximately **00:15** — visible `the art of connection` / network-science installation
- crop must preserve network art where the secondary composition is shown

Owner-provided episode context:

- `Codice: la vita è digitale`
- 10 May 2020
- post-lockdown special hosted by Barbara Carfagna
- Albert-László Barabási appeared alongside other experts
- discussion concerned future social structure, digital tracking, cybersecurity, AI, blockchain, and the post-COVID environment
- Lior Tabansky also appeared

**Publication rule:** the above detailed episode description is owner-supplied. Before publishing detailed on-page claims, verify against an official/public RAI source if practical. The owner has supplied the verified public destination: `https://youtu.be/pb8YD_ic1xE`. Use that precise destination; do not substitute a generic channel or RAI URL.

The previous 2017 RAI lead is demoted to More Coverage / secondary RAI evidence, not removed.

## 5. On Screen — locked five

### A. Channel Economy — 18 Aug 2026

Owner master:
`20260818 ד_ר טבנסקי על תביעת בנק לאומי נגד מטא ישראל.mp4`

Public source supplied by owner:
`https://youtu.be/-M2fTsR8YC8`

Poster:

- use **06:12–06:14**
- selected working timestamp: **06:13**
- preserve Channel Economy visual identity and the Bank Leumi/Meta topic lower third

Working English descriptor:
`Bank Leumi v. Meta Israel: responsibility for fraudulent advertising`

Do not treat this English descriptor as an exact broadcast headline unless verified.

### B. Channel 14 — 19 Jan 2022

Owner master:
`2022-01-19  ע14 _gbgmatu6_0_zukp4kat_2.mp4`

Topic:
`האם המשטרה פורצת לטלפונים באמצעות פגסוס?`

English descriptor:
`Is the police hacking phones using Pegasus?`

Poster:

- use approximately **05:30 / 330s**
- clear close-up, Channel 14 branding, and the topic lower-third visible

Owner-supplied public destination: `https://youtu.be/6e5bnT04vO8`. Use that precise destination; do not link to a generic YouTube homepage.

### C. NTV — 8 Dec 2021

Owner master:
`Силиконовая долина в Москве как создают научно-технологический центр МГУ.mp4`

Canonical source:
`https://www.ntv.ru/novosti/2642205/`

Owner YouTube copy:
`https://youtu.be/_4FKfxnDSJU`

Original title:
`Силиконовая долина в Москве: как создают научно-технологический центр МГУ`

Working English descriptor:
`Building innovation ecosystems: Silicon Valley, universities and the Israeli experience`

Poster:

- selected working timestamp: **02:00 / 120s**
- strong close-up of Tabansky with NTV branding and the program lower third

Use **8 Dec 2021** as original publication/broadcast date unless the official NTV source proves otherwise. A later YouTube upload date is not the card date.

### D. RaiNews — 12 May 2019

Canonical source:
`https://www.rainews.it/archivio-rainews/media/La-Russia-e-le-strategie-informatiche-per-la-sicurezza-nazionale-intervista-a-Lior-Tabansky-0b82acc3-a13f-4956-83d7-eccd5bee6229.html`

Title/descriptor:
`Russia and national cybersecurity strategy`

Interview by Annamaria Esposito; Italian.

**Public poster sourcing is explicitly approved.** Source the still from the verified RaiNews/public source, not from a generic Russia image. If the page cannot yield a defensible still, use a typography-led RaiNews visual rather than fabricating a screenshot.

### E. Channel 10 · London et Kirschenbaum — 27 Oct 2015

Owner master:
`23.mp4`

Program:
`לונדון את קירשנבאום`

Topic:
`האם ספינות רוסיות ינתקו לנו את האינטרנט?`

English descriptor:
`Could Russian ships cut off the internet?`

Poster:

- use approximately **00:01**
- clean close-up with Channel 10 identity visible

Owner-supplied public destination: `https://youtu.be/EyymYGiIbxg`. Use that precise destination; do not substitute a generic channel/profile URL.

## 6. Press & Features — locked six

1. **Le Figaro — 4 Dec 2023**  
   `Guerre Hamas-Israël: Tsahal fait entrer l’intelligence artificielle dans la bataille`  
   `https://www.lefigaro.fr/international/guerre-hamas-israel-tsahal-fait-entrer-l-intelligence-artificielle-dans-la-bataille-20231204`

2. **Associated Press — 27 Jun 2022**  
   `Cyberattack forces Iran steel company to halt production`  
   `https://apnews.com/article/technology-middle-east-iran-dubai-b0404963ae23e5008439a0b607952de1`

3. **NRC — 4 Jan 2022**  
   `Surveillance-industrie Israël in schijnwerpers door Pegasus-schandaal`  
   `https://www.nrc.nl/nieuws/2022/01/04/surveillance-industrie-israel-in-schijnwerpers-door-pegasus-schandaal-a4075654`

4. **France 24 — 21 Jul 2021**  
   `Entre NSO et le pouvoir israélien, des liens troubles`  
   `https://www.france24.com/fr/moyen-orient/20210721-entre-nso-et-le-pouvoir-isra%C3%A9lien-des-liens-troubles`

5. **la Repubblica — 20 May 2020**  
   `Israele vs Iran: il nuovo fronte di guerra è il cyberspazio`  
   `https://www.repubblica.it/tecnologia/sicurezza/2020/05/20/news/israele_vs_iran_il_nuovo_fronte_di_guerra_e_il_cyberspazio-257140929/`

6. **Il Giornale — 7 Jul 2018**  
   `Difesa e cyber-sicurezza, l’Italia è in ritardo di 10 anni`  
   `https://www.ilgiornale.it/news/politica/difesa-e-cyber-sicurezza-litalia-ritardo-10-anni-1549933.html`

Press cards are large because of editorial composition, not because article scans are enlarged. Prefer publication identity + headline + date + restrained source thumbnail or owner-held photo where defensible.

## 7. More Coverage / archive

Keep secondary and historical evidence compact. At minimum:

- RAI `Codice` — 18 Aug 2017 — `Cybersicurezza, esperti a confronto`  
  `https://www.raiplay.it/video/2017/08/Cybersicurezza-esperti-a-confronto---18082017-753fa4f2-2a8e-4437-827f-7e2053734062.html`
- Jerusalem Post — 22 Jul 2021 — NSO/surveillance feature
- Ynet — 4 Jul 2007 — early work on technology and military adaptation

Ynet 2007 is intentionally archival, not a primary tile. Its role is to show intellectual continuity rather than dominate the current positioning.

Additional reserves may include Le Figaro 2021, Gazeta Wyborcza, Times of Israel, CyberDefence24 and other verified outlets.

## 8. Pegasus concentration rule

Primary 12 may contain at most three surveillance/Pegasus items, and each must demonstrate a different analytical dimension:

- Channel 14 — domestic police/governance
- NRC — industrial/institutional ecosystem
- France24 — technology and statecraft/diplomacy

Jerusalem Post remains secondary to avoid topic over-concentration.

## 9. i24 status

**TODO, not a blocker.**

Owner will provide the preferred i24 English video after the page is substantially built. When supplied, compare it against the five existing On Screen cards and replace the weakest if warranted; do not automatically expand the main tier to 13.

## 10. Mobile-first layout specification

Use one semantic DOM tree.

### Base / narrow containers

- RAI lead: poster, optional secondary network image, then copy
- On Screen: one full-width card per row
- Press: one full-width card per row
- More Coverage: compact vertical list/grid
- Stages: text-only linked event list
- Press Kit: stacked utility resources

### Wider containers

- RAI lead: asymmetric editorial composition, media dominant
- On Screen: intrinsic two-column grid when container permits
- Press: intrinsic two-column grid when container permits
- More Coverage: 2–3 columns as space allows
- Stages: intrinsic linked event list
- Press Kit: intrinsic resource grid

Do not enlarge specific cards using source identity or DOM position. RAI supplies the dominant hierarchy; recurring card components should be consistent.

## 11. Component/data architecture

Use a small structured Media data model. Suggested fields:

```ts
{
  (id, kind, outlet, title, date, runtime, language, url, image, imageAlt, visualMode, status);
}
```

Reusable components are appropriate for:

- `MediaVideoCard`
- `MediaPressCard`
- `MoreCoverageItem`
- responsive picture helper if it remains simple

Keep the lead custom.

Avoid over-engineering or creating a CMS.

## 12. Poster/asset pipeline

Owner MP4 masters are **source originals**, not production runtime assets. Do not commit large masters to the normal Git history unless the owner explicitly changes that policy. Store production posters/derivatives in `public/images/media/` and source provenance in `docs/media-sources/SOURCE_MANIFEST.md`.

Approved owner-MP4 poster timestamps:

| Base              | Timestamp | Source                                 |
| ----------------- | --------: | -------------------------------------- |
| `codice-2020`     |     00:41 | 2020 RAI Codice clip                   |
| `codice-network`  |     00:15 | same clip; network-art secondary still |
| `channel-economy` |     06:13 | Channel Economy file                   |
| `channel14-2022`  |     05:30 | Channel 14 file                        |
| `ntv-2021`        |     02:00 | NTV file                               |
| `channel10-2015`  |     00:01 | `23.mp4`                               |

Generate only widths needed by the real card geometry. Preferred formats: AVIF, WebP, JPEG fallback. Do not upscale weak source images.

Current derivative plan:

- lead/network: 480 / 768 / 1024 where useful
- Channel Economy: 480 / 640 maximum (source is 640×360)
- Channel 14: 480 / 768
- NTV: 480 / 768
- Channel 10: 480 / 768

## 13. Source/reference archive policy

`docs/media-sources/` is an internal source/reference folder, not a public web asset folder.

Keep:

- implementation brief
- source manifest with hashes/provenance
- reference snapshots / extracted text from supplied press PDFs
- small rights-safe source material as needed

Do not serve source PDFs/scans from the public site. The owner's original PDFs and MP4s are also included in the handoff package supplied separately to Codex.

## 14. Existing branch work to inspect before modifying

The branch already contains an in-progress refactor. **Audit it rather than assuming it is correct.** At the time of this brief, it includes:

- `src/data/media.ts`
- `src/components/media/MediaVideoCard.astro`
- `src/components/media/MediaPressCard.astro`
- `src/components/media/MoreCoverageItem.astro`
- `src/components/media/ResponsiveMediaImage.astro`
- `src/assets/styles/media.css`
- modified `src/components/MediaPage.astro`
- several preliminary JPG posters in `public/images/media/`

Known issues to correct:

- placeholder/generic URLs must not ship (`rai.it`, generic `youtube.com`, generic channel/profile links)
- poster filename/data conventions must match actual production derivatives
- ensure `media.css` is correctly imported/integrated and does not duplicate obsolete Media rules in `tailwind.css`
- remove superseded preliminary poster files if exact responsive derivatives replace them
- ensure no hardcoded source-specific CSS or manual layout exceptions were introduced

## 15. QA and release gate

Before requesting owner approval:

```bash
npm ci
npm run check
npm run build
```

Then verify:

- desktop
- tablet
- ~390px mobile
- ~430px mobile
- no horizontal overflow
- keyboard/focus states
- semantic heading order
- meaningful link labels
- alt text and decorative-image handling
- external source URLs
- responsive crops and image loading
- no unnecessary JS for card layout
- RAI lead remains dominant
- exact 12-item main tier
- English page only; HE remains staging/noindex until later

Use Cloudflare PR preview if available.

**Do not merge to `main` without explicit owner approval.**

## 16. Final TODO list

- source RaiNews 2019 official/public poster (permission already granted)
- validate Channel Economy exact broadcast title; current English wording is a descriptor
- later: owner supplies preferred i24 English video
- later: Hebrew Media translation/content parity
- later: add the owner-approved downloadable bio PDF to the Press Kit
