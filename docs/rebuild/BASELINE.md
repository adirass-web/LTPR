# Astrowind rebuild baseline

**Recorded:** 2026-07-23
**Repository:** `adirass-web/LTPR`
**Canonical production URL:** `https://cyberdrtabansky.com`
**GitHub Pages preview:** `https://adirass-web.github.io/LTPR/`

## Resolved production baseline

| Item | Value |
|---|---|
| Remote `main` commit | `260abd7a96ab3ba516820e50c0f9f17e04bc2d11` |
| Subject | `Add EN and HE institutional client logo strip` |
| Temporary remote recovery branch | `recovery/pre-astrowind-20260723` at the exact baseline commit; approved for WP0–WP5 implementation and verified from the sandbox on 2026-07-23 |
| Rebuild branch | `rebuild/astrowind` at the exact baseline commit |
| Local recovery tag | Annotated `pre-astrowind-rebuild-20260723` at the exact baseline commit in the original sandbox clone only |
| Remote recovery tag | Not created. Verified 2026-07-23: the GitHub connector exposes no tag-ref mutation and direct sandbox Git cannot authenticate to push the tag. Do not treat the local tag as recovery. |
| Runtime used for verification | Node `v24.14.0`, npm `11.9.0`, Git `2.51.1` |
| Current baseline toolchain | Astro `4.16.19`; no committed lockfile |

## Baseline verification

The following passed sequentially on a clean clone of `main`:

```text
npm --cache /tmp/ltpr-npm-cache install --no-package-lock --no-audit --no-fund
ASTRO_TELEMETRY_DISABLED=1 npm run build
ASTRO_TELEMETRY_DISABLED=1 SITE_TARGET=github-pages npm run build
```

Both builds generated the eight contracted locale routes and the root route:

- `/en/`, `/en/about/`, `/en/media/`, `/en/writing/`
- `/he/`, `/he/about/`, `/he/media/`, `/he/writing/`
- `/`

## Baseline findings carried into WP1

1. `main` has no valid `package-lock.json`; therefore `npm ci` fails by design. The baseline has been verified using a temporary, no-lockfile install only. WP1 must restore reproducibility with a valid committed lockfile and move CI to Node 22.
2. The existing GitHub workflows install with `npm install` and run on Node 20. Those are baseline behavior only and must not be copied into the rebuild workflow.
3. This record does not modify `main`. The rebuild work starts only on `rebuild/astrowind`.

## Recovery procedure

The approved temporary WP0 recovery branch, `recovery/pre-astrowind-20260723`, resolves to `260abd7a96ab3ba516820e50c0f9f17e04bc2d11`. It may authorize WP1–WP5 implementation but must never be repointed or deleted. It is not a tag. The configured GitHub integration cannot apply branch-protection rules, so Codex verifies this remote ref against the recorded SHA before every risky operation and release gate.

Before WP6 release readiness, merge, or production cutover, Codex must create the immutable remote annotated tag `pre-astrowind-rebuild-20260723` at the same commit, confirm it with `git ls-remote --tags`, and record the tag-object SHA. The local tag is not sufficient. No user-operated checkout is part of this process.
