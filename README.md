# cyberdrtabansky.com

Production English authority site for Dr. Lior Tabansky: first-principles strategy for defense innovation, AI and national resilience.

## Live English scope

- `/en/` — Home
- `/en/media/` — selected television, press and speaking appearances
- `/en/about/` — background, method and credentials

The Hebrew routes are deliberately noindex translation staging. They are not linked as published equivalents until approved native Hebrew copy is available.

## Build

```bash
npm ci
npm run check
npm run build
```

`dist/` is the static production artifact. Cloudflare Pages builds and deploys
`main` automatically; pull requests receive isolated preview deployments.

GitHub Actions verifies every pull request and `main` push but does not publish
the production site. The Cloudflare project settings, release checks and
rollback procedure are documented in
[`docs/CLOUDFLARE_DEPLOYMENT.md`](docs/CLOUDFLARE_DEPLOYMENT.md).

The current editorial, accessibility and release rules are in [CLAUDE.md](CLAUDE.md). Git history preserves retired implementation material. The inventory of materials held in the owner's separate asset folder is recorded in [`docs/SOURCE_AND_DEPENDENCY_REGISTER.md`](docs/SOURCE_AND_DEPENDENCY_REGISTER.md).
