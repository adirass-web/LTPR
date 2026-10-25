# Remote development environment

Audit date: 25 October 2026.

## Reuse decision

Continue the existing cloud task "Set up LTPR" (01a16aa7-ef4d-701a-8697-781ba8070068), whose reported repository is /workspace/LTPR. Do not start a replacement until its work is preserved and its actual readiness is checked.

A reusable Codex environment is a setup, not one permanent shared filesystem. New tasks have separate files; reopen the same task for continuity. Official documentation says saved VM state is recoverable by default for up to seven days after last start/resume. GitHub and separately backed-up private assets must hold durable state.
Source: https://learn.chatgpt.com/docs/environments/cloud-environments

## Verified framework and commands

Astro ^7.2.4, Tailwind ^4.3.0, static output dist/, npm lockfile. package.json requires Node >=22.12.0. CI uses Node 22; .nvmrc and Dev Container use that major. Audit validation passed locally on Node 24.14.1 and on Node 22.23.4 (matching the CI major). This is not a cloud-runtime test.

From the repository root:

- Install: npm ci
- Develop: npm run dev -- --host 0.0.0.0 --port 4321
- Validate: npm run check
- Build: npm run build
- Inspect built output: npm run preview -- --host 0.0.0.0 --port 4173

scripts/cloud-setup.sh runs install, checks and build, failing on any error. It does not start a long-running server or deploy.
Use the development command in a separate terminal when a preview is needed.

## Browser IDE

.devcontainer/devcontainer.json uses the official Node 22 Dev Container and forwarded ports 4321/4173; keep their visibility private in the IDE. Its post-create step installs dependencies. The configuration is provided for browser VS Code/Codespaces; it does not provision a paid service or install a Codex browser IDE. No container runtime test has run.

## Cloud environment completion

In the existing environment's setup workflow:

1. Inspect git status, current branch, remotes and all untracked discovery/inventory work; preserve it before checkout/pull.
2. Confirm the selected repository is adirass-web/LTPR. Use the development branch produced by this setup, with focused feature branches for later changes.
3. Confirm Node 22.12+ and Git. Run bash scripts/cloud-setup.sh.
4. Inspect fresh environment_status and network policy in that remote task. Verify package registry access and api.github.com separately. The earlier saved draft is unverified.
5. Record the tested installation command and start guidance in the environment configuration. Review/save and publish or republish through the environment workflow.
6. Recheck fresh readiness and actual GitHub API access in the running task; configuration and observations are different.
7. Record the branch, commit, commands, result and preview URL. No cloud readiness is claimed by this repository change.

## Hosting and production safety

The repository has a Cloudflare Pages integration and only a verification Actions workflow. main at audit time is ef5e01f487dc92bc2a3ccdcf6a451d6cbe195939. Its protection requires the strict Astro production build check, includes admins, and blocks force pushes/deletion. Required approving review count is zero; the PR gate is not an owner-approval policy.

Keep experimental work on the development branch. Do not merge or push changes to main without the owner's production authorization.
Before relying on a preview, verify in Cloudflare Pages that production tracks main and the development branch is preview-only. Keep production settings untouched. Record the returned preview URL and SHA and inspect both /en/ and /en/media/ at desktop/mobile widths.
A branch name alone does not prove hosting isolation. No Cloudflare dashboard branch setting was changed in this audit.

## Validation gates

- Existing check/build must pass.
- No source app or production workflow change in setup.
- New documents must have sources and explicit proposal/approval status.
- Confirm only intended files are staged and private material remains ignored.
- Remote environment, container runtime and hosted preview each need their own evidence.
