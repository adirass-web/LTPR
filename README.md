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

`dist/` is the static production artifact. GitHub Pages deploys from `main`.

The current editorial, accessibility and release rules are in [CLAUDE.md](CLAUDE.md). Historical implementation material is retained under `archive/` and Git history.
