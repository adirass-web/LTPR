# Integrated profile release handoff

Date: 2 October 2026

Status: released and verified in production on 2 October 2026.

## Release decision

The English homepage direction is an integrated editorial profile. Its role is to establish intellectual authority and demonstrated practical success through hierarchy, public work and provenance. It is not a consulting sales page, a résumé or a gallery of press appearances.

The design source was PR [#23](https://github.com/adirass-web/LTPR/pull/23), `codex/a3-mobile-review` into `main`. That PR intentionally created a review route only. Follow-up PR [#24](https://github.com/adirass-web/LTPR/pull/24), merged as `0200d79063babfd478a67a6c6b00f042c7be3dc3`, promoted the approved shared profile component to the actual `/en/` route. The release does not extend to Hebrew. The dedicated Media archive remains a separate English page.

## Editorial decisions now in force

- The opening introduces the person and proposition together: portrait, “Advantage is created, not bought.” and the existing standfirst.
- Two public-work records immediately follow and carry the delivery proof: World Bank / PROGRESS, then national cybersecurity strategy. The World Bank implementation language remains attributed to the 2025 field record. The national-strategy client stays unnamed.
- Israel appears as provenance through the institutional-system argument, the existing book and the Tel Aviv University laboratory affiliation. It is not a visual theme or national brand treatment.
- AI is framed as strategic method and thought: begin with the consequential decision, then the organization, data and operating model. It must not be represented as an equivalently evidenced delivery record.
- Press, broadcasts and international forums are removed from the profile because their editorial role is global public reach, not proof of delivery. They remain intact in `/en/media/`, linked once from the profile as “Media & international record.”
- Contact stays discreet: footer email only. Do not add a service menu, lead-generation language or a sales CTA.
- No new publicly supportable detail was added. Existing source links, wording and assets set the factual boundary.

## Preservation and archive

- Previous production is preserved remotely at annotated tag `archive/production-before-profile-2026-10-02`, pointing to `160d2d59efba21cca6509a0fc06f59462d961eac`.
- The earlier A3 exploration remains preserved at `archive/a3-review-2026-10-02`, pointing to `b4f378ee4435c9f1997ec28b6dc2203b86091df9`.
- No site files, assets, MP4 masters or source archives were deleted as part of the release.

## Verification completed before release

- Astro check: 0 errors, warnings or hints.
- ESLint and scoped Prettier check: pass.
- Standard production build and `SITE_TARGET=github-pages` build: pass.
- The review page was checked at 320, 390, 430, 768 and 1440px. No horizontal overflow or broken visible images were found. The Media link was followed and verified.

## Operational state after release

- Production target: `main`; Cloudflare deployed the homepage-promotion merge and `https://www.cyberdrtabansky.com/en/` was verified after propagation.
- The live page contains the approved AI/method language, links to the separate Media archive, has no broken visible images and reports no browser-console errors. PR #23 and PR #24 are merged. The archive tags are the recovery points and must not be deleted.
- Existing unrelated untracked local folders, `.playwright-cli/` and `output/`, are not release material and were deliberately left untouched.

## Likely next work

1. Verify the production home page after Cloudflare deploy.
2. Keep `/en/media/` as the fuller public record and resume asset/editorial improvements there independently of the profile.
3. Treat Hebrew as a later, separately approved localization effort.
