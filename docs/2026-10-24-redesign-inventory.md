# Redesign inventory and proposed discovery process

> Historical inventory/planning snapshot. For current status and next actions, read [CURRENT_STATE.md](CURRENT_STATE.md). Later source-import reports, supplied references and the durable comparison pack supersede pending-work statements here.

24 October 2026. Inventory only. No detailed visual system or implementation plan has been selected here. The owner requested collaborative discovery, technical workflow planning, guided design research, and selection before development; the later handoff reports a broad film-led direction.

Latest continuation: an uploaded handoff supplies accepted reviews and media metadata. The [media/source inventory](media-inventory/README.md) now reconciles that metadata with current local source and historical declarations. The owner confirmed that the two actual Windows/OneDrive source folders have not been transferred; their contents cannot yet be merged. See [request/decision provenance](media-inventory/decision-provenance.md) for the handoff-reported broad film-led direction and why no broadcast count or layout has been selected.

## Current implementation

| Area | Current source / evidence |
| --- | --- |
| English profile | `src/pages/en/index.astro` → `src/layouts/Forest.astro` → `src/components/ForestProfile.astro` |
| English public record | `src/pages/en/media.astro` → `src/layouts/Forest.astro` → `src/components/ForestMedia.astro` |
| Current presentation | `forest-shared.css`, `forest-profile.css`, and `forest-media.css` in `src/assets/styles/` |
| Metadata | `src/content/site.ts` and `src/components/PageHead.astro` |
| Content/data candidates | `src/content/en-v3.ts`, `src/content/sources.ts`, and `src/data/` |
| Assets | Approved local portrait, broadcast, press, book, and ambient derivatives under `public/images/`; local Plex font |
| Other routes | Hebrew routes and historical `/lab/` experiments remain present |
| Latest handoff | `docs/2026-10-12-current-site-handoff.md`, updated 13 October, and `docs/2026-10-13-forest-static-release.md` |

The English production components contain substantial authored copy directly in Astro. Earlier content/data files also exist, but some wording and structure differ from the current release. A content inventory must reconcile these against the latest owner decisions; `en-v3.ts` must not be assumed to be the canonical current copy.

## Owner-confirmed intent

The owner wants a much more striking design whose purpose is to convey an impression, rather than visual novelty for its own sake. The desired visitor experience is discovering a hidden gem: an exceptional expert with a substantial track record. The site does not sell directly.

Working interpretation for discussion: the visual experience should invite curiosity, and the public work and evidence should earn confidence as visitors explore. “Hidden gem” is a desired visitor reaction, not proposed public-facing copy. Audience priorities, discovery context, and the visual qualities that would create this impression remain open.

The owner will provide reference links and explicitly instructed the agent not to research independently. Wait for those links before analyzing references or proposing visual directions.

Working audience assumption, drawn from the repository and not yet owner-confirmed: senior institutional decision-makers and potential collaborators arriving through referrals, publications, or a search for the owner's name.

## Decisions to classify with the owner

The following are repository evidence, not newly confirmed requirements for this redesign.

### Content, purpose, and evidence

- The documented purpose is a personal authority profile with intellectual authority and demonstrated practical work, international perspective, discretion, and source integrity.
- The latest English opening describes cybersecurity, AI, critical infrastructure, enterprises and public institutions, and advanced/emerging economies including World Bank assignments.
- The profile contains Singapore and World Bank / PROGRESS records, a private-work explanation and official-record links, the approved anonymous electricity account, research, a book, laboratory affiliation, and contact.
- The deeper page distinguishes publications, broadcasts, quoted press, further coverage, and invited forums. Source names, countries, descriptions, original titles, dates, citations, and institutional context have been deliberately retained.
- Prior decisions rejected a services grid, sales-funnel language, career chronology, and invented or additional confidential case studies. AI was positioned as thought/method rather than equally evidenced project delivery.
- New claims, measured outcomes, client affiliations, or interpretations require their own evidence and owner decision.

### Presentation decisions from the current release

- Forest/mineral colors and Plex typography.
- A fixed, centered name header.
- Night-city atmosphere, including the L-shaped opening composition.
- Portrait below the opening; equal prominence for Singapore and World Bank.
- A coordinated two-page editorial composition with compact source metadata.
- Static presentation, native evidence-enlargement dialogs, and accessible source links.

These presentation decisions need explicit classification as retain, reconsider, or discard. No replacement palette, type system, image treatment, composition, or navigation has been selected.

### Operational constraints already documented

- Approved public image derivatives and metadata/dimension guards; originals stay outside Git/public output.
- Existing routes, source URLs, useful fragment anchors, structured metadata, and keyboard access.
- Hebrew source text/localization remains an unresolved separate scope question.
- Publication and deployment are separate actions from local design work.

## Technical baseline and harness inventory

- Astro static site with TypeScript and Tailwind/Vite integration. Node requirement: >=22.12.0; this machine currently provides Node 24.19.0 and npm 11.9.0.
- Frozen installation succeeded using `npm ci --cache /tmp/ltpr-npm-cache --no-audit --no-fund`.
- In this image Astro commands require `ASTRO_TELEMETRY_DISABLED=1` to avoid an unavailable home-config write path.
- During environment onboarding, existing asset fixtures, Astro diagnostics, ESLint, Prettier, production build, and a representative local HTTP request passed. These are baseline results, not verification of a redesign.
- Existing CI runs `npm ci`, `npm run check`, and `npm run build`.
- Earlier documents contain browser captures and interaction QA. They are historical evidence. Current inventory found Chromium 154 and Python Playwright 1.62 already installed. A headless Chromium launch with a 390 × 844 viewport passed; page capture/comparison and complete site interaction checks have not yet been exercised for the new process. The project does not contain a JavaScript Playwright/Puppeteer dependency.
- GitHub repository read access worked through the supplied Git configuration. The requested GitHub plugin currently exposes no callable GitHub tools in this session. GitHub CLI is installed, but a read-only API request for this repository returned `Forbidden`; `api.github.com` is absent from the reported effective policy, whose enforcement state was `unknown` at that check. No missing credential or lack of repository permission is inferred. No issue writes were attempted. Superpowers skills are available.
- Follow-up access diagnosis: the proxy rejects CONNECT to `api.github.com` with HTTP 403 before reaching GitHub. `GH_TOKEN` is already present (value not inspected). The API hostname addition was saved and verified in the environment draft, preserving presets and setup/startup instructions. It still requires application/publication in environment settings before runtime access can be verified. Plugin registration remains separate: GitHub tools are absent from this session's tool catalog.
- Project tooling skills added at the owner's request: `.agents/skills/frontend-design` and `.agents/skills/webapp-testing`, unchanged from official `anthropics/skills` commit `dbd4588f9e1033efb41dad4bef2f7947c8993d44`, with upstream licenses and provenance. All eight copied files matched upstream SHA-256 digests. The browser helper's `--help` command passed. These additions do not select a design or change the application.
- Setup/startup instructions were saved in the cloud environment draft during onboarding. That save did not publish a new environment version.

## Proposed collaborative process

This is a discussion outline, not authorization to begin design or implementation.

| Stage | Work and concrete output | Owner decision / checkpoint | Planned tooling |
| --- | --- | --- | --- |
| 1. Inventory | Reconcile current copy, records, assets, routes, prior approvals, and conflicting historical instructions. Produce a decision ledger separating purpose/content from presentation. | Correct the inventory and classify inherited decisions. | GitHub repository/history/tasks; Superpowers brainstorming |
| 2. Understand intent | Discuss intended visitors, desired understanding/feeling, what is missing today, personal identity, practical goals, and failure conditions. Produce a concise creative brief and success criteria. | Confirm the brief in the owner's words. | Superpowers brainstorming; GitHub discovery task |
| 3. Agree the technical harness | Decide how previews, realistic content, responsive captures, accessible interactions, comparisons, source preservation, and versioning will work. Inventory existing tools before choosing additions. | Agree what can be demonstrated and how decisions will be reviewed. | GitHub technical task; repository scripts and selected browser/capture tools |
| 4. Guided reference discussion | Wait for owner-supplied links, then analyze and annotate them against the brief; explain what each teaches about hierarchy, typography, imagery, rhythm, and evidence. Do not conduct independent research. Produce a shortlist and selection criteria. | Explain what resonates and narrow the visual territory. | Superpowers brainstorming; GitHub reference-analysis tasks; available browsing/design tools |
| 5. Explore and select | Develop a small number of distinct directions using identical approved content. Compare complete profile/public-record experiences at phone and desktop sizes, then refine the chosen direction. | Select a direction and approve a written design. | Superpowers brainstorming; agreed comparison harness; GitHub decision record |
| 6. Plan development | Translate the selected design into a full implementation plan with task dependencies, file/content boundaries, acceptance criteria, verification, and review/release steps. | Approve the concrete implementation plan before development. | Superpowers writing-plans; GitHub issues/task dependencies |

GitHub tasks should track agreed work and link the brief, references, decisions, and acceptance criteria. No issues, pull requests, code, deployment, or design prototypes have been created for this redesign.

## Next input

The owner will provide reference links. Continue from the [collaborative discovery plan](2026-10-24-redesign-discovery-plan.md); no visual direction has been selected.
