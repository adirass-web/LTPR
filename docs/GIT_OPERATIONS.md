# Git Operations and Recovery Policy

**Applies to:** `adirass-web/LTPR`  
**Purpose:** preserve a recoverable, verifiable history while direct implementation to `main` remains authorized.

## What is already backed up

Every published change is a normal Git commit on GitHub's `main` branch. The GitHub connector creates the same durable Git objects a `git push` would create: a blob/tree/commit followed by a fast-forward update of `main`.

The commits currently form a recoverable chain from the Astro baseline through the source register and Field Notes art direction. GitHub's commit history permits rollback, compare, restore, or cherry-pick of any of those checkpoints.

## Required publish sequence

1. Fetch `origin/main` and record its commit SHA before editing or publishing.
2. Run the production check from the lockfile: `npm ci && npm run build`.
3. Commit one coherent work package with an imperative message.
4. Fast-forward `main` only from the fetched parent. Never force-push.
5. Fetch `origin/main` again and verify the exact commit SHA and changed paths.
6. GitHub Actions runs the same clean install and build after every push to `main`.

When a normal local Git identity and credential helper are available, the equivalent command-line sequence is:

```bash
git fetch origin main
git switch -c work/<package> origin/main
# edit and test
npm ci && npm run build
git add <files>
git commit -m "Describe the work package"
git push -u origin work/<package>
```

For the currently authorized direct-to-`main` path, the final command is instead a non-force fast-forward push after a fresh fetch. The GitHub connector is used only when the local CLI cannot authenticate.

## Checkpoints and recovery

- Create an annotated milestone tag after each completed release gate, e.g. `v0.1.0-art-direction`.
- To undo a published change, create a new revert commit; do not rewrite `main` history.
- To restore selected work, cherry-pick its known commit onto a new branch or revert the later commit deliberately.
- Keep the production deployment tied to a recorded commit SHA, so a host rollback can target the prior verified commit.
- Before launch, create a second private mirror or scheduled encrypted `git bundle` archive outside the primary GitHub account. That requires selecting a backup destination and credentials; it is not enabled by this repository alone.

## Main-branch policy

Direct `main` commits are currently allowed by owner instruction. They must still be small, built, and verified. If collaboration expands, switch to a protected-main policy requiring the `Verify site / Astro production build` check and a pull request before merge.

The workflow at `.github/workflows/verify.yml` has only `contents: read` permission. It deliberately does not access secrets, publish deployments, write repository content, or invoke AI agents.
