# Source and Dependency Register — cyberdrtabansky.com

**Status:** Active implementation register  
**Updated:** 2026-07-20  
**Scope:** public-site inputs only; not a license to publish any listed asset

## How to use this register

This is the release gate for source material, assets, links, and claims. A row is:

- **Ready** when the approved production file or verified URL is available, rights are clear, and the related copy is factually approved.
- **Pending** when the source is known but an owner action, preparation, or verification remains.
- **Blocked** when implementation must not proceed without a required input or approval.
- **Excluded** when the material must not be put on the public site.

The source inventory was reviewed from the handover and asset plan. The current repository contains **no production portrait, logo, press, book, event, video, or subtitle asset**; those materials remain in the owner-local `LT Personal Site/` library. Do not treat the visual placeholders in the Astro pages as assets.

## Release-critical dependencies

| Dependency | Intended use | Status | Owner input / completion condition |
|---|---|---|---|
| Hero portrait | Home hero, About, press kit | **Blocked** | Select one approved high-resolution portrait (the navy-suit or Kfir Ziv studio option were previously shortlisted), provide the production file and usage approval, then approve its mono/duotone treatment. |
| Contact email | Footer and Private inquiries links | **Blocked** | Supply the final monitored email address. `[email]` must not ship. |
| RAI highlight | Home feature and Media lead | **Blocked** | From the 1.1 GB master, approve a 60–90 second edit, EN/HE subtitles, poster frame, accessibility caption, and an external YouTube/Vimeo host URL. Never commit the master. |
| Press deep-links | Home and Media press walls | **Blocked** | Verify each original article URL, including the intended Newsweek and Washington Post/AP references. A logo is not a publication-ready link without its target URL. |
| Logo usage | Home and About institutional strip | **Pending** | Provide or approve final World Bank, Singapore CSA, IISS, and IAI artwork and confirm permitted web use; normalize as consistent monochrome SVGs where feasible. |
| Hebrew release copy | `/he/about/`, `/he/media/`, `/he/writing/` and Home QA | **Blocked** | Translate from locked English, then complete parity, bidirectional, back-translation, and native-speaker review. |
| Hosting and domain | Production release | **Blocked** | Select static host, configure `cyberdrtabansky.com`, TLS, redirects, and deployment access. The non-`www` domain is canonical. |

## Approved institutional and editorial sources

| Source / proof | Planned placement | Factual / editorial rule | Rights and link handling | Status |
|---|---|---|---|---|
| Singapore Cyber Security Agency proof | Home, About | Say: “authored the vision, goals, and 70+ recommendations behind Singapore’s National Cybersecurity Strategy.” Do not say he authored the Strategy. | Use only owner-verified source URL and approved CSA logo. | **Pending** URL and logo approval |
| World Bank-backed capacity work | Home, About | Say “World Bank-backed” critical-infrastructure resilience/capacity work across a dozen countries. Do not say he ran a World Bank program. | Verify supporting public URL before creating a linked proof item; World Bank logo requires permission/approved use. | **Pending** |
| IISS and IAI | Institutional logo strip / About proof | Names may appear only as approved public institutional proof; do not infer additional engagements. | Final artwork and use approval required. | **Pending** |
| Georgia and Sierra Leone work | Regional capacity-building line | Keep as the regional line; not independent marquee logos. | Supporting source only if owner approves public citation. | **Pending** |
| Israel Air Force experience | About narrative | “An elite Israel Air Force technology unit”; never name the unit. | Copy-only unless a specifically approved asset is supplied. | **Ready** for guarded copy |
| *The National Interest* byline | Writing | Treat as his own bylined commentary, never third-party coverage or a press-wall outlet. | Link only to verified original publication page. | **Pending** verified URL |
| *Cybersecurity in Israel* | Writing and About ballast | Use restrained bibliographic treatment; do not overstate scope or influence. | Obtain an approved cover image or use text-only citation; verify cover-image rights. | **Pending** |

## Media, press, and event source register

| Source collection | Available inventory | Intended use | Required preparation | Status |
|---|---|---|---|---|
| RAI “Codice — La vita è digitale” master | One Italian-language MP4, approximately 1.1 GB | Lead video on Home and Media | Highlight edit, EN/HE subtitles, poster, runtime, captions, and external hosting; master excluded from git. | **Blocked** |
| YouTube channel `@ltabansky6248` | Owner-confirmed channel | 5–8 selected Media embeds | Owner selects appearances; record title, outlet, topic, runtime, and embed URL; ensure the hosted video remains public/embeddable. | **Pending** |
| TV screenshots | 39 files | Optional 5–8 image “On screen” gallery on Media | Curate only strong, legible, current-relevance stills; confirm screenshot/fair-use basis and captions. | **Pending** |
| Other TV clips | i24 and two Russian clips noted in asset review | Secondary Media video | Confirm rights, host/embed availability, language framing, and the value of inclusion. | **Pending** |
| Press clippings / PDFs | 37 files; 31 curated records in `press_page_data.json` | Evidence for a linked press wall and limited pull-quotes | Mine metadata and deep URLs only. Do not upload or republish full articles, scans, or PDFs. | **Pending** |
| Premium press set | FT; Washington Post/AP; Le Figaro; La Repubblica; Il Sole 24 Ore; NRC; Newsweek | Home wall and Media press wall | Supply exact original URLs and permitted logo assets. The Le Figaro Dec. 2023 AI feature is the approved AI-pillar proof candidate. | **Blocked** on links |
| Event and speaking photos | 22 files, including CyCon, ISPI Rome, Israel Forum, Chen-Galili, Cyber Influence Operations | Optional About / Media speaking support | Choose only evidence-bearing images; obtain photographer credits and publication permissions. | **Pending** |
| Book assets | Covers for *Cybersecurity in Israel* | Writing / About ballast | Verify high-resolution cover and rights. | **Pending** |
| Social/LinkedIn cache | 40 mostly cached files | None | Do not use. | **Excluded** |
| Low-resolution, duplicate, and WhatsApp-export images | Various | None | Do not use. | **Excluded** |

## Page-slot readiness

| Page and slot | Required source | State | Implementation note |
|---|---|---|---|
| Home — hero | Approved portrait | **Blocked** | Keep an explicit layout slot; do not substitute stock imagery. |
| Home — institutional strip | Four approved logos | **Pending** | Text labels can remain a development fallback, not final presentation. |
| Home — three pillars | Approved copy; Le Figaro AI proof when linked | **Pending** | Pillar copy is implemented; proof link/visual remains pending. |
| Home — featured media | RAI highlight | **Blocked** | Replace placeholder only with externally hosted, captioned embed. |
| Home — press wall | Verified original URLs and logo rights | **Blocked** | No live outlet link until its target is verified. |
| Home — Singapore / World Bank proof | Guarded copy and optional verified sources | **Ready** for copy; **Pending** for links | Preserve exact claim controls. |
| Media — video section | RAI plus selected YouTube/TV items | **Blocked** | Build data-backed cards only after selection and metadata are supplied. |
| Media — press wall | Verified URLs / logo approvals | **Blocked** | The National Interest remains under Writing. |
| Media — speaking | Curated event facts and optional approved imagery | **Pending** | Existing text list needs verification before final launch. |
| Media — press kit | Headshots, short/long EN/HE bios, contact | **Blocked** | Add downloadable assets only after permissions and final email. |
| About — narrative evidence | Optional curated events and book image | **Pending** | Copy can lead; imagery is supporting evidence, not decoration. |
| Writing — essays | Source packets and owner-approved final essays | **Blocked** | Current titles/deks are not published essays. |
| Hebrew routes | Reviewed translated copy | **Blocked** | Do not expose language-toggle destinations before the routes exist. |

## Engineering and release dependencies

| Dependency | Current state | Required action |
|---|---|---|
| Astro production build | Verified locally on 2026-07-20 | Re-run after each implementation package and in the production host pipeline. |
| Asset pipeline | Absent | Add optimized, named assets and an image/media data model only after source approval; record attribution and rights alongside files. |
| Navigation parity | Hebrew Home exists; three Hebrew page routes are absent | Add equivalent Hebrew routes before release, and map the language switcher route-to-route. |
| Accessibility | Not release-verified | Test keyboard navigation, semantic landmarks, alt text, captions/transcripts, focus state, contrast, and reduced motion. |
| SEO / metadata | Baseline only | Add per-page metadata, canonical URLs, sitemap/robots, social images, and appropriate structured data after final sources are known. |
| Analytics / consent | Unselected | Choose a privacy-appropriate provider and consent behavior, or deliberately ship without analytics. |
| CI | No current CI verification | Add a safe build/check workflow after the package manager and lockfile approach are finalized. Do not restore the previously excluded broad-permission Claude workflow without a separate security review. |

## Ownership checklist for the next implementation gate

1. Choose and deliver the hero/press-kit portrait.
2. Supply the final contact email.
3. Approve the RAI 60–90 second edit, subtitle language, poster, and host.
4. Provide a verified press URL list and approve outlet/logo usage.
5. Confirm the four institutional logo files and permissions.
6. Supply source packs and approve the first finished essay before an article route is built.
7. Confirm the hosting, analytics, and deployment owner.

Until the release-critical rows are resolved, implementation may safely proceed on structure, visual directions, responsive behavior, guarded copy, and data-model preparation—but not on publication of the associated media or claims.
