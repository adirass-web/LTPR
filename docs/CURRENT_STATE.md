# LTPR current state

Reconciled 25 October 2026 in the existing cloud task. This is the operational entry point; dated handoffs and frozen pack snapshots preserve history.

## Durable content and recovery

The development branch is `codex/editorial-cloud-workspace`, reviewed through draft PR #35. Production remains `main` at `ef5e01f487dc92bc2a3ccdcf6a451d6cbe195939` as checked during reconciliation. No merge or production release is authorized.

- [Portable pack and recovery command](template-comparison/README.md): 199 English copy blocks, 92 link/embed occurrences, 127 public-image manifest entries and 17 reusable public derivatives. Exact source snapshots and approval qualifications accompany normalized text.
- [Current media metadata inventory](media-inventory/README.md): 23 original recording rows, 27 current-site semantic records, 8 historically declared missing source assets. These are different units, not additive appearance counts.
- [Approval ledger](DECISION_LOG.md) and [approved copy register](APPROVED_COPY.md) distinguish production approval, reported later decisions and proposals.
- The two 24 October discovery documents are retained as historical planning snapshots. Project-local skills retain their upstream attribution and licenses.

A fresh remote task can clone/check out this development branch and run `python3 scripts/export-template-pack.py /tmp/ltpr-comparison.zip`. No previous chat's `/workspace/outputs` folder is required. GitHub stores the pack's text; existing tracked public images supply the image payloads. The original cloud archive and untracked-file preservation archive remain supplemental copies, not recovery dependencies.

## Current decisions and outstanding evidence

The owner wants striking, purposeful design that conveys discovery of a hidden gem with a substantial track record, without direct selling. Content and design should be separable for controlled template comparisons.

Owner-supplied reference: https://www.edoardolunardi.dev/works/aspen-search#f156c3d66c45 . Its HTML is reachable (HTTP 200); no visual assessment or selection has been completed. Earlier statements that no reference was supplied are superseded. Do not independently research additional design references unless requested.

Media A/B remain unselected. RAI 2017 04:45.000 approval is reported by a handoff, with original decision/frame files still absent. Frame approval does not approve placement, card count, motion or publication. Private A/B previews and original masters were not recovered by the portable-pack extraction. Reported local imports cover 73 press and 20 TV-grab files; expanded manifests and broader-parent coverage still need reconciliation. Do not repeat source collection or claim those originals were imported into this cloud task.

## Environment and next work

The existing cloud executor works. Install/check/build and local HTTP startup were validated on Node 24.19.0. GitHub API and hosted-preview/reference HTTP access work after publication/resume. Provider phase/policy metadata remains inconsistent with operational access; Cloudflare dashboard branch controls are not verified here. The optional Dev Container is untested.

Next: assess the supplied reference and use the same content subset across isolated template comparisons. Discuss and select composition before applying production-source changes. Keep missing evidence explicitly labelled. Follow OPEN_ISSUES.md for unresolved work; do not restart completed setup or inventory hashing.
