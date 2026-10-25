# LTPR working instructions

Read docs/PROJECT_BRIEF.md, docs/DECISION_LOG.md and docs/OPEN_ISSUES.md first.
Use docs/REMOTE_ENVIRONMENT.md for commands and environment status.

- GitHub holds durable technical specifications and decisions. Keep full conversation exports outside this public repository.
- Work on a development branch. Preserve other work; inspect git status before changing branches.
- main is the production branch. No merge, production deployment, hosting migration or production settings change is authorized by the workspace setup request.
- Separate current production approval from proposals for the next redesign. Follow the newest explicit owner decision; record source, date, status and supersession.
- Preserve approved facts, source links and historical localized routes. No automatic translation. Present exact before/after copy for approval before replacing approved copy.
- Image/frame approval does not approve placement, an additional card, a moving excerpt or publication.
- Source masters, private review HTML/screenshots and personal source paths stay outside Git and public hosting. .media-sources/ is private working storage, not a backup.
- Run npm run check and npm run build. For UI changes also verify desktop/mobile rendering, images, keyboard navigation, dialogs and anchors.
- Review all staged files before commit. Do not add raw footage, private originals, environment secrets or chat transcripts.
- Record what was actually verified. A successful local build does not prove cloud setup, preview deployment or production health.
