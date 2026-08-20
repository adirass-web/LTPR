# Handover — English production release

Static Astro site for `cyberdrtabansky.com`.

## Current state

- English Home, Media and About are the production scope.
- Shared navigation is mobile-first, keyboard accessible and progressively enhanced.
- English uses responsive AVIF, WebP and JPEG/PNG fallbacks for portraits and media.
- Hebrew routes remain RTL-safe, noindex source placeholders for a future native translation pass. They are intentionally excluded from English language navigation and alternate-language metadata.
- Writing is not a public route.

## Verification

```bash
npm ci
npm run check
npm run build
SITE_TARGET=github-pages npm run build
```

Cloudflare Pages deploys `main` automatically with `npm run build` and publishes
`dist/`. Pull requests receive Cloudflare preview deployments. GitHub Actions is
the non-deploying verification gate and retains the GitHub Pages-target build as
a base-path regression check.

The production settings and rollback runbook are in
[`docs/CLOUDFLARE_DEPLOYMENT.md`](docs/CLOUDFLARE_DEPLOYMENT.md). Keep generated
`dist/`, `node_modules/`, local Wrangler state and local secret files out of
commits.

## Next editorial work

Translate from the locked English source in `src/content/en-v3.ts`; do not machine translate or reopen approved English wording. Restore published English/Hebrew language links only after the matching Hebrew pages are native-reviewed.
