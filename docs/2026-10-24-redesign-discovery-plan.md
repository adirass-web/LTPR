# Personal-site redesign: collaborative discovery and selection plan

> Historical inventory/planning snapshot. For current status and next actions, read [CURRENT_STATE.md](CURRENT_STATE.md). Later source-import reports, supplied references and the durable comparison pack supersede pending-work statements here.

24 October 2026. This plans the work from inventory through design selection and a subsequent implementation plan. It does not select a visual direction or authorize application changes.

## Governing brief so far

### Latest continuation: source inventory

The owner supplied a media/design handoff and requested completion of the two source-folder imports before broadcast selections or layout alternatives. The [media inventory](media-inventory/README.md) reconciles the supplied metadata and current local source. Actual site-source/PR folders are not transferred to this cloud environment; their file import remains pending. The [decision-provenance record](media-inventory/decision-provenance.md) distinguishes this direct request from handoff-reported prior decisions and superseded historical briefs. Reuse the accepted review/capture artifacts rather than repeating them during inventory gathering.

A later successful read of **Continue from LTPR handoff** reports local imports of 73 press-subfolder files and 20 TV-grab files into a larger local index. That index is saved in a separate Git folder without a remote; its latest review package has not been transferred into this application checkout. See [local-task sync](media-inventory/local-task-sync.md). Reconcile the package and broader-folder coverage before treating the overall inventory as complete; retain the owner's collaborative design and reference-link requirements.

The owner's desired experience is discovering a hidden gem: an exceptional expert with a substantial track record. The design should be much more striking, with the visual impression serving that purpose. The site does not sell directly.

The owner will supply reference links. Do not research independently. No palette, typeface, composition, motion treatment, navigation, or image direction has been selected.

Working assumptions pending discussion: senior institutional decision-makers and potential collaborators are the priority audience; referrals, publications, and name searches are plausible entry paths. Use the existing English profile and public-record pages as the baseline scope. These are agent assumptions, not owner decisions.

## How we will work together

- Use the existing checkout for inventory and planning. Make decisions explicit and distinguish owner statements, repository history, agent proposals, and unresolved questions.
- Ask focused questions as they become consequential. Use repository evidence before asking for information it already answers. Do useful independent inventory work while awaiting replies.
- Separate purpose, factual content, evidence integrity, and asset constraints from visual choices. Earlier approvals document history; they do not automatically constrain this new design effort.
- Use Superpowers **brainstorming** for intent, reference discussion, alternatives, and the written design. Use **writing-plans** after design selection to define implementation tasks. Apply execution/review skills only when development is authorized.
- Project-local **frontend-design** is available for RD-06 after the brief/reference discussion; its visual choices remain subordinate to owner decisions. Project-local **webapp-testing** supports RD-04's Python Playwright capture and interaction workflow. Both were copied unchanged with licenses from the official Anthropic skills repository at commit `dbd4588f9e1033efb41dad4bef2f7947c8993d44`; see `.agents/skills/UPSTREAM.md`.
- Use GitHub for the agreed task hierarchy, dependencies, decisions, and acceptance criteria. Tool availability is currently a prerequisite to syncing tasks; keep the definitions below as the local source in the meantime. Do not claim tasks were created until GitHub returns their identifiers.

## Task hierarchy and dependencies

Proposed GitHub parent: **Personal-site redesign — discovery, review harness, and direction selection**.

| Task | Depends on | Deliverable | Status |
| --- | --- | --- | --- |
| RD-01 Reconcile the inventory and decision history | — | Source map and decision ledger | Initial inventory prepared; reconciliation pending |
| RD-02 Establish the creative brief | RD-01 | Audience, desired impression, success criteria, boundaries | Core impression confirmed; audience/context provisional |
| RD-03 Establish the content baseline | RD-01 | Canonical copy/evidence inventory and change rules | Planned |
| RD-04 Prepare the technical review harness | RD-01 | Repeatable previews, captures, comparisons, and checks | Installed browser tools inventoried; launch smoke passed |
| RD-05 Discuss owner-supplied references | RD-02; owner links | Annotated reference board and design criteria | Waiting for owner links; independent research prohibited |
| RD-06 Develop distinct design directions | RD-03, RD-04, RD-05 | Comparable concept presentations | Future work after reference discussion |
| RD-07 Select and refine the design | RD-06 | Chosen complete experience and written design | Future owner decision |
| RD-08 Produce the implementation plan | RD-07 | Concrete development tasks with acceptance criteria | Future work after approved written design |

### RD-01 — Reconcile the inventory and decision history

Read the latest handoffs, production components, content/data candidates, source records, image policy, routes, and historical experiments. Produce a ledger with each decision's source/date, category, current implementation, and status: confirmed, historical, proposed, or unresolved.

Acceptance: identify which source currently owns each visible page's copy; identify contradictions without silently choosing older text; record the current route/asset/interaction inventory. Classify visual history separately from factual/evidence constraints. The [inventory](2026-10-24-redesign-inventory.md) is the starting point.

Superpowers: brainstorming's context inspection. GitHub: inventory task with linked source files and decision ledger.

### RD-02 — Establish the creative brief

Build on the owner's confirmed “hidden gem / exceptional expert / track record / no direct selling” intent. Discuss priority visitors and entry paths, what they should understand first and discover later, the balance of intrigue/warmth/intellectual authority, and what would make the site feel wrong. Ask one focused question at a time, using reference discussion where that makes the question easier to answer.

Acceptance: a short brief in plain language identifies the visitor, desired experience, evidence that earns it, and failure conditions. Mark assumptions explicitly. The owner confirms the brief before it drives concept selection.

Superpowers: brainstorming. GitHub: brief task and decision notes; do not turn desired reactions into self-promotional public copy.

### RD-03 — Establish the content baseline

Inventory the current English profile and public-record page's visible text, claims, records, URLs, fragment IDs, image roles, and contact paths. Reconcile current Astro prose with earlier data files. Discuss whether this pass should preserve copy exactly or allow separately reviewed editorial changes.

Define a future content contract: authored copy and record/source data have a canonical home; the visual layer consumes that content. Do not refactor or rewrite product code during this planning stage. Track proposed editorial changes separately so they cannot quietly influence visual comparisons.

Acceptance: a reviewable baseline and a clear rule for content changes. All compared design directions use the same agreed content. Required facts, source context, images, and useful interactions are enumerated without prescribing their layout.

Superpowers: brainstorming. GitHub: content-baseline task; later data-refactoring work belongs in RD-08.

### RD-04 — Prepare the technical review harness

Retain Astro as the provisional platform because the site already builds and runs there. Identify a reason before proposing a platform/dependency change. Use the installed Python Playwright and Chromium as the provisional browser tooling; their basic launch passed, while site capture and comparison remain unverified.

Plan the harness to provide:

- Repeatable local rendering of the baseline and candidate pages with the same content and viewport dimensions.
- Complete-page and opening-viewport captures at 1440 × 900 and 390 × 844, plus 320 px and 768 px reflow checks. Wait for fonts/images and verify actual capture dimensions; keep full-page capture from stretching viewport-based layouts.
- A comparison surface with matching scales and a way to inspect text and details. Agree a supported delivery method; do not manufacture public preview links from loopback URLs.
- Basic measurements for overflow, failed images, anchor targets, source-link retention, and evidence-dialog keyboard behavior. Keep browser evidence separate from subjective design judgments.
- Existing repository checks and build/image guards. Store capture tooling and review artifacts outside public output; keep private source images outside the repository and serving roots.

Acceptance: capture the current two pages reproducibly and demonstrate one comparison before relying on the harness for design selection. Record installed tool versions, working commands, output locations, and limitations. Historical QA reports are context, not proof of current results.

Skills: project-local webapp-testing; Superpowers systematic-debugging if a harness problem occurs; verification-before-completion for readiness claims. GitHub: harness task with reproducible commands and evidence.

### RD-05 — Discuss owner-supplied references

Wait for the owner's links. Inspect only the supplied references and material necessary to understand them; ask before broadening into independent research. Discuss what the owner responds to in each reference before adopting any visual quality.

For each reference, record the relevant page/state, an attributed image or capture where appropriate, the owner's reaction, and observations about composition, type, imagery, rhythm, interaction, and the treatment of evidence. Distinguish transferable principles from features that depend on a different audience or content volume.

Acceptance: an annotated board and a concise set of design criteria the owner can correct. Include disliked qualities and tensions, not just an attractive moodboard. No design direction is selected through reference analysis alone.

Superpowers: brainstorming and visual discussion. GitHub: reference-analysis task with source URLs and decision notes.

### RD-06 — Develop distinct design directions

After the brief, reference criteria, content baseline, and harness are established, propose two or three genuinely different visual approaches. Explain how each would create the desired discovery and what each trades off. Let the owner choose which approaches merit prototypes.

Use the same real content to demonstrate the profile and public-record experience at phone and desktop sizes. Treat prototypes as review artifacts, with their completeness and limitations stated. Avoid changing copy, hiding records, or using image abundance to make a concept appear stronger.

Acceptance: alternatives differ in meaningful art direction and reading experience; each is assessable as a whole page and through representative navigation/evidence interactions. A comparison states what differs and why it serves the brief, without claiming an AI review proves how real visitors will react.

Skills: Superpowers brainstorming's alternatives and agreed prototypes, with project-local frontend-design for purposeful, distinctive visual exploration. GitHub: concept tasks linked to the same content baseline.

### RD-07 — Select and refine the design

Compare directions against the owner's brief: striking and purposeful first impression; an earned sense of expertise; discovery and curiosity; legible public evidence; personal character; ease of reading and exploration. Use technical checks as usability constraints, not a substitute for the owner's judgment.

Record the owner's selection and reasons. Refine the selected direction across the complete profile and public-record pages, including responsive behavior, contact, navigation, and evidence interactions. Write the resulting design specification with clear goals, constraints, selected approach, retained content, component behavior, and outstanding decisions.

Acceptance: the owner selects the direction and approves the written design. Any unresolved item with a material effect on the site is visible rather than filled in silently.

Superpowers: brainstorming's written design and review. GitHub: selection decision and refinement task.

### RD-08 — Produce the implementation plan

Use Superpowers writing-plans to turn the approved design into concrete work: files/data interfaces, component/style boundaries, task dependencies, accessibility behavior, required verification, regression risks, review artifacts, and separate release steps. Choose execution and review methods together; do not assume delegation or model choices.

Acceptance: a developer can implement the selected design without inventing missing design/content decisions. GitHub tasks carry concrete acceptance criteria and links to the selected design, content baseline, and harness. The owner reviews this implementation plan before product development begins.

## Tooling and GitHub readiness

The GitHub plugin currently provides no callable tools in this session; no exposed tool can connect/reload that plugin. GitHub CLI is installed. Investigation confirmed that the API request fails at the proxy's CONNECT step with HTTP 403 before reaching GitHub. `api.github.com` was absent from the runtime policy. An existing `GH_TOKEN` variable is present; its value was not inspected, and API authorization remains unverified.

The required `api.github.com` addition has now been saved and read back successfully from the environment draft. Existing network presets and installation/startup instructions were preserved. The current runtime policy still lacks this host. Applying the saved change requires review/save and publication in environment settings, as required by the configuration tool; a draft save does not itself apply runtime access. After it is applied, retry the read-only repository API request before diagnosing credential/permission issues. Plugin tool registration is a separate prerequisite from CLI network access. No issues, PRs, or comments were written.

Keep task definitions local until the supported GitHub connection/API path is usable. When it is available, first inspect existing repository tasks to avoid duplicates, then sync the agreed hierarchy and report the actual issue links. Do not invent issue numbers or request raw tokens in chat. The owner explicitly authorized the access repair; no unrelated network destinations were added.

## Current stopping point

Repository changes consist of inventory/planning documents and the two project-local tooling skills. Await the owner's reference links. The next collaborative work is to connect those references to the brief and resolve the remaining intent questions; no independent design-reference research or application implementation is underway.
