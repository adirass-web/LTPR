# Full-site composition review

Historical review scope (subsequently approved, deployed through PR #30 and superseded by the [current handoff](2026-10-12-current-site-handoff.md)): approved cinematic profile and latest revised aligned media study as current; a tighter proposed pair as refined. No production route promotion, merge or deployment is authorized by this pass. Both pairs use identical approved facts and source destinations, apart from review-local cross-page links.

## Design plan review

1. Information architecture: profile establishes adviser and enterprise scope, then private-work/public-record bridge, Singapore and World Bank engagements, anonymous electricity account, research and contact. Media opens with a labelled featured RAI appearance, then publications, remaining broadcasts, quoted press, further coverage, forums and contact. Existing section and publication IDs remain.
2. Interaction states: images reserve their layout dimensions; all source context and descriptions are present without disclosures; static pages remain usable without client scripting. Evidence enlargements use native modal dialog with labelled close control. Source destinations remain available if an enlargement fails.
3. Journey: meet the person and scope, inspect applied work, follow the public-record link, recognize outlets and countries, distinguish authorship from commentary and invitations, find contact.
4. Generic-design risks: preserve original images, Plex 400 and mineral/black/forest palette. No new service cards, logos, decorative effects or sales calls. Deliberate major lead and supporting image rows replace indiscriminate tall image fields.
5. Design alignment: use the approved name-only fixed header and common spacing rhythm. Portrait remains below the opening. Personal photographs continue as atmosphere, not work documentation.
6. Responsive/accessibility: test at 1440×900 and 390×844, plus narrow/intermediate checks. Profile public-record link must be within the first mobile screen. Media source identity appears before its image on mobile. Preserve full descriptions, source/institution context, focus indication and evidence access.
7. Decisions: retain the full-height ambient profile opening; shorten accumulated spacing below it. Use aligned revised media A as baseline. Show one concrete refined pair rather than restart variant exploration. Independent art and editorial reviewers assess complete screenshots before presentation.

## Capture plan

Capture both stages and both pages at desktop and mobile sizes: eight full-page views and eight opening views. Side-by-side complete pages use matching scales within each device group. First-screen views have a fold marker in the comparison surface. Capture-only URLs freeze the opening at the requested viewport height and eagerly load images; normal working previews keep responsive viewport sizing.

Record measured page heights, section positions and content-retention checks, then resolve reviewer findings. This document is updated with the final results.

## Final results

| View            |    Before |     After | Reduction |
| --------------- | --------: | --------: | --------: |
| Desktop profile |  4,727 px |  3,994 px |       16% |
| Desktop media   |  7,285 px |  5,207 px |       29% |
| Mobile profile  |  6,134 px |  5,602 px |        9% |
| Mobile media    | 12,012 px | 11,460 px |        5% |

All eight full captures and eight opening captures were rendered through the existing in-app browser harness at 1440×900 and 390×844. Screenshot dimensions were verified from the actual files. Capture-only scrollbar suppression avoids the harness omitting the scrollbar gutter from the requested image width. Normal previews retain normal scrollbar behavior. Full-page profile capture preserves the 900/844 px opening rather than letting screenshot expansion stretch the viewport-based hero.

Main spacing decisions: 64 px desktop and 40 px mobile chapter spacing, grouped captions, smaller engagement padding, a wider story measure, three-column supporting media groups on desktop, and shorter image fields. Full publication descriptions and 22 publisher/institution context blocks remain visible. Portrait starts below the opening on both sizes; mobile record link remains within the first screen. The mobile media archive remains long because no entries or context were removed.

Independent art director reviewed complete before/after pages and all openings: composition/order 8.5/10, shared system 8.5/10, image hierarchy 8 desktop / 7.5 mobile, whitespace 8.5/10. The required correction to an orphaned desktop “Bank.” line was made through paragraph measure and wrapping, then visually confirmed. No required findings remain.

Independent editorial/PR reviewer inspected all four proposed full pages and openings: practical authority 8/10, international standing 8.5/10, evidence-type clarity 9/10, opening priorities 8.5/10. No required factual or context findings. Optional later work: better evidence crops, approved simplification of repeated provenance, and additional real enterprise cases. These are not silently added to this layout pass.

Validation: Astro diagnostics, ESLint, Prettier and static build pass. Exact-size captures show no horizontal overflow or failed loaded images. An intermediate 768 px check found no overflow. Native article evidence dialog opens and closes. Rendered word comparison verifies identical profile copy and no lost media words; the sole added label is “Featured broadcast.” All current stage anchors remain.

Working Astro preview: http://127.0.0.1:4342/lab/full-site/refined/profile/ and http://127.0.0.1:4342/lab/full-site/refined/media/. Comparison board: http://127.0.0.1:4343/. Artifacts are in the sibling full-site-review folder. Current/refined toggles show complete matching-scale pages and readable openings with a fold marker. Public routes have not been promoted, pushed, merged or deployed by this pass.

## Approval and follow-up discussion

User approved this design direction. Removed both visible personal-photo credits as requested; refreshed proposed profile captures and rebuilt the local review preview. Follow-up layout choices remain under discussion: more factual evidence in the opening, substantially denser media metadata arranged across the width, and a single compact contact line. Preserve the portrait below the fold and visible publisher/country context. No further layout or asset privacy changes have been implemented from this discussion request.
