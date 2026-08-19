# English production release

**Status:** current as of 2026-08-19

This document supersedes older planning documents where they conflict with the owner's later approval.

## Public scope

English is production-ready at `/en/`, `/en/media/` and `/en/about/`. The public navigation is Home · Media · About. Writing is retired.

Hebrew routes are retained only for the forthcoming native translation workflow. They are noindex, are not linked from English navigation, and must not be emitted as `hreflang` equivalents until approved Hebrew page copy exists.

## Source of truth

- Exact English page wording: `src/content/en-v3.ts`
- English metadata and route labels: `src/content/site.ts`
- Editorial/design/release guardrails: `CLAUDE.md`

## Release requirements

- `npm run check` and both standard and GitHub Pages Astro builds pass.
- The production branch is `main`; GitHub Pages deploys from it.
- Retired implementation documents and the pre-production site state are preserved in `archive/` and the remote `archive/pre-en-production-20260819` branch.
