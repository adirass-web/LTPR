# Cloudflare deployment

## Production contract

- Cloudflare account: `Adirassner@gmail.com's Account`
- Pages project: `cyberdrtabansky`
- Pages hostname: `https://cyberdrtabansky.pages.dev`
- Source: `adirass-web/LTPR`
- Production branch: `main`
- Build command: `npm run build`
- Build output: `dist`
- Root directory: repository root
- Node.js: `22.12.0`
- Canonical domain: `https://cyberdrtabansky.com`

Cloudflare Pages is the sole production deployer. Every push to `main` starts a
production build and every pull request receives an isolated preview. GitHub
Actions runs the same checks without publishing.

The site is a static Astro build. It does not use Pages Functions or a Worker,
has no runtime bindings and requires no production secrets.

## Release checks

Before merge:

```bash
npm ci
npm run check
npm run build
SITE_TARGET=github-pages npm run build
```

Review the Cloudflare preview and confirm:

- `/` redirects to `/en/`.
- `/en/`, `/en/media/` and `/en/about/` return successful HTML responses.
- `/he/` remains a noindex translation-stage route.
- The response includes the security headers emitted from `public/_headers`.
- Canonical and sitemap URLs use `https://cyberdrtabansky.com`.

After merge, record the Git commit SHA and Cloudflare deployment ID, then repeat
the route and header checks on the canonical domain.

## Automatic deployment

Cloudflare's Git integration watches the repository. The production branch is
deliberately configured in Cloudflare rather than in a repository secret or a
GitHub deployment workflow, avoiding long-lived Cloudflare credentials in
GitHub.

The build must fail closed: a broken lockfile, failed install, failed check or
failed Astro build prevents the new deployment from replacing production.

## Rollback

For an immediate hosting rollback, use Cloudflare Pages deployment rollback to
promote the last verified production deployment. Then create a
`rollback/<timestamp>` branch, revert the faulty merge through a pull request,
and let the corrected `main` deployment restore source and production alignment.
Do not rewrite branch history or move release tags.
