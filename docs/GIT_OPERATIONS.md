# Git Operations and Recovery Policy

**Applies to:** `adirass-web/LTPR`  
**Purpose:** preserve a recoverable, verifiable history while Codex implements and releases from the sandbox.

## Operating authority and durable record

Codex is the sole Git operator. The sandbox is the active working copy; GitHub is the durable recovery record. The user does not run Git, npm, authentication, file-transfer, or conflict-resolution commands for this project.

`pre-astrowind-rebuild-20260723` is an immutable, annotated remote recovery tag for `260abd7a96ab3ba516820e50c0f9f17e04bc2d11`. Its tag object is `aa446bed3ba0047d33067d18dd9f214e4d41ed6d`. It is the recovery point for the pre-rebuild production tree.

## Branch and checkpoint model

- `main`: protected production branch. No direct pushes.
- `rebuild/astrowind`: single long-lived integration branch and the only writable rebuild worktree.
- `experiment/<slug>`: optional, short-lived and clearly bounded; must be remotely published before handoff. It never deploys or merges to `main` directly.
- `rollback/<timestamp>`: created only for a production rollback PR.

Before starting or resuming any work, Codex fetches the relevant remote branch, records local and remote SHAs, and inspects `git status`. Codex never overwrites an unexpected remote advance.

No meaningful work may be left only in the sandbox. At the end of every testable slice or session, Codex stages only the scoped files, commits them, and fast-forward publishes the checkpoint to GitHub. A checkpoint commit is not a release approval; it prevents work loss. `git stash`, `git reset --hard`, `git clean`, rebasing a published branch, amending a published commit, and force-pushes are prohibited.

## Commit and tag policy

- Each commit has a narrow imperative subject and contains only one task’s source, configuration, documentation, or asset changes.
- Before commit: inspect status and diff; run the checks applicable to that slice; record the changed paths and results.
- After publish: verify the remote SHA and tree; record it in the relevant WP evidence.
- Milestone tags are annotated and immutable: `rebuild-wp<N>-complete-YYYYMMDD`, `rebuild-rc-YYYYMMDD.N`, and `production-YYYYMMDD`.
- Every tag is confirmed locally and by `git ls-remote --tags` before it is reported. If the Codex environment cannot create a required remote tag, that release gate stops; a branch is not a substitute.

## Pull request, CI, and deployment policy

The draft PR originates at `rebuild/astrowind` and targets `main`. It is opened after the first implementation package is ready for review, and remains draft until WP6 passes. If `main` advances, Codex merges the latest `main` into the rebuild branch, reruns the required checks, and never rebases published work.

CI failures block the relevant gate. They are fixed by a new commit; no check is bypassed. The release PR records the baseline tag, candidate SHA, `main` SHA, required-check results, deployment target, and rollback target. Codex asks for explicit user release approval before marking the PR ready or merging.

The release must use a merge commit. Production deploys only from the resulting `main` SHA. A manual deployment dispatch may not target a candidate branch. After deployment, Codex records the workflow run, deployed SHA, production URL, and live verification result.

## Rollback

For a verified production defect, Codex creates `rollback/<timestamp>` from current `main`, reverts the release merge, opens a rollback PR, and verifies CI and the restored production deployment. No history is rewritten; the pre-rebuild tag remains untouched. The rollback commit, PR, workflow run, and resulting deployment SHA are recorded.

## Current CI and lockfile state

The pre-rebuild `main` workflow is baseline-only: Node 20 and `npm install --no-audit --no-fund`. WP1 replaces it with the Astrowind-required Node 22.12+ runtime and a verified `package-lock.json` using `npm ci`. The verification workflow is read-only and does not access secrets or publish repository content. Pages deployment continues to be a `main`-only action unless WP5 deliberately adds an approved, isolated comparison-preview mechanism.
