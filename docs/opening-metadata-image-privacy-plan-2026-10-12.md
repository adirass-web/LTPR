# Approved direction and next refinements

The whole-site composition direction is approved. These are the user's selected refinements and the image-privacy plan; implementation remains in the review preview before production promotion.

Current sequencing, confirmed by the user: finish the accepted layout, metadata, header/footer and master-image safeguards first. Automated facial matching, impersonation and additional facial-detail exposure all matter. Revisit facial processing after the first phase is complete; no blur, geometry alteration, face substitution or cloaking in this phase. The request to present this execution plan does not itself authorize a production release.

Execution update: the user subsequently authorized this plan and its model allocation. The first phase is complete in the local review preview. See [completed QA](updated-site-qa-2026-10-12.md), [private asset workflow](image-asset-workflow.md), and http://127.0.0.1:4344/ for four complete final views, their approved baselines and fold-marked openings. Sol implemented the layout, Luna implemented the asset checks, and separate Astra art/editorial reviews verified the final captures. Facial processing and production release remain subsequent steps.

## Opening

Keep the ambient opening and centered fixed name header. Add only two factual linked entries: Singapore — National cybersecurity strategy; World Bank — Four sectors across 11 countries. No electricity-sector outcome in the strip. Put the strip after the factual introduction and public-record link, with a compact two-column desktop arrangement and natural mobile wrapping. Reduce excessive title weight/spacing as needed so both facts and the link fit within 1440×900 and 390×844. Portrait remains below the fold. Evidence labels must not imply commissioning or authorship beyond approved source copy.

## Media metadata

Use the English subject as the primary readable heading. Keep publisher name, country and plain-English context visibly grouped across the width. Put the full original linked title, its external-link arrow and the date in one compact inline reference block. It must wrap naturally on narrow screens or for long original titles; do not truncate the approved title, force microtype or create horizontal overflow to make a literal single line.

Delete the repeated Read article action. Link both the image and original title to the article. Retain a separate small evidence-enlargement control wherever the local screenshot establishes the quote or credit. Article navigation and local enlargement must be distinct sibling controls, with no nested interactive elements. Preserve all full publication descriptions, source destinations, section IDs and record facts.

## Header and footer

Footer: compact shared row for name and full email, wrapping tightly as necessary. Header remains the centered fixed name alone. It should fit on one line at the normal 390 px test size, and may wrap at unusually narrow widths or enlarged text; the header must grow with its content instead of clipping or overlapping the page.

## Master-image handling

Audit conducted against current public files and tracked raster assets. 123 files examined. Personal portrait derivatives reach 1024×1536; media derivatives reach 1024 px wide; ambient derivatives reach 2560 px wide. None of the examined public image files contained EXIF, XMP or IPTC blocks. No HEIC/TIFF camera files or tracked raster files outside public were found in the current checkout. This identifies the present web variants, not an assertion that historical Git blobs or third-party copies have been erased.

1. Keep originals in a private folder outside every repository and every public-serving directory, with controlled private backup. Store import instructions and a neutral asset ID in the repo, not the private file or its contents.
2. Create approved web derivatives locally. Apply class-specific size limits: ambient images may need larger widths than portraits or media stills. Strip embedded personal metadata. Do not publish a full-resolution original or a download-original URL.
3. Copy only approved derivatives into public. Export every selected image format from the reviewed derivative, so a fallback or srcset variant cannot expose an unreviewed original.
4. Add a build check for camera formats, unapproved raster paths, image-dimension limits and EXIF/XMP/IPTC blocks. Inspect the actual deployment output as well as repository files.
5. Before release, inspect Git history for prior originals. If any were publicly exposed, removing them from the current checkout is insufficient; decide appropriate history/host cleanup, while acknowledging cached or third-party copies may persist.

## Facial alteration: discussion, no processing applied

Light blur is not a reliable privacy guarantee; strong masking removes more facial information but changes the site’s impression. Subtle changes to geometry or AI substitution risk weakening the authenticity of public-record evidence, without establishing resistance to facial matching. Facial cloaking is experimental and model-dependent; existing unaltered public appearances limit how much this site alone can protect. Programme framing and logos are editorial context, not a biometric-security control.

Recommendation for this public professional profile: keep truthful selected images, publish only reviewed derivatives, limit unnecessary close-up variants, and optionally compare one strong-obfuscation example before deciding whether its visual cost is acceptable. Do not claim recognizability to humans plus guaranteed immunity to machines. Do not upload photographs to an external recognition tester without a separate explicit decision.

Primary research consulted: https://www.cs.cornell.edu/~shmat/shmat_imgobfuscation.pdf and https://arxiv.org/abs/2106.14851 . Both establish limitations of particular tested obfuscation/cloaking methods; neither provides a personalized present-day risk estimate for this site.

## Review gates

Render both pages at exact desktop/mobile sizes. Measure metadata height against the approved baseline and report achieved reduction rather than promising 66–80% for entire entries. Verify first-screen evidence, portrait position, retained text/links/anchors, natural wrapping and enlargement behavior. Facial alteration remains a separate unresolved preference; do not let that block preparation of the accepted layout refinements.

## Execution sequence

1. Freeze the approved reference captures, word/record/source/anchor inventory and current image inventory. Use the latest approved refined pair as the next before/after baseline. Keep existing language and visual tokens intact. Read repository specifications and the Noë composition references during the design pass; do not substitute a new generic aesthetic.
2. Refine the profile opening: two factual evidence entries, Singapore and World Bank, with approved scope wording and links. Fit the evidence and public-record link in the normal first screen. Preserve the portrait below the fold and the accepted editorial sequence.
3. Refine the media templates together: grouped outlet/country/context, English subjects at the primary reading level, complete original linked title plus date in one wrapping inline reference block. Link article photographs to their source and use a separate enlargement button. Remove duplicate Read article actions. Keep authored publications and institutional records semantically distinct; preserve their full descriptions.
4. Apply the shared compact footer and resilient fixed name-only header. Maintain common gutters, type sizes and section rhythm. Keep tap targets and focus indicators usable while reducing surrounding empty space.
5. Complete the master-image workflow: document private source storage outside Git and public output, an approved derivative manifest and category-specific size limits. Do not relocate or overwrite the user's current originals. Add an asset preflight to existing check/build/CI entry points that validates allowed raster paths, dimensions, camera formats and embedded metadata. Check fallbacks, srcsets, copied files and final dist output. Scan historical Git image objects read-only for prior masters; report any exposure before proposing cleanup.
6. Run the browser loop: compose, render, inspect both entire pages, critique, refine, compare. Fix concrete visual, factual and functional findings, then recapture affected views. Keep the previous approved captures available.
7. Package the refreshed working preview, four full proposed page views, four opening-screen views with folds marked, matching baseline captures, page/metadata height comparison and the QA report. Have separate art-direction and editorial/PR reviewers inspect the actual full captures. Resolve required findings.
8. After this phase passes, revisit all three facial risks with the final composition and public asset inventory in hand. Production promotion, merge and deployment follow the final site/face decision and release authorization. Keep the present live site untouched while reviewing.

## QA matrix and acceptance criteria

| Gate | Required evidence |
| --- | --- |
| Exact viewports | Profile and media at 1440×900 and 390×844; actual image file dimensions verified; full captures use matching scale within each device group. |
| Profile opening | Person, scope, practical experience, public-record link and both evidence entries visible before the default fold; portrait below it. |
| Media opening | Meaningful image and recognizable outlet/country/plain-English context visible within the default opening. |
| Compact metadata | Measure identity and reference block heights on short and long broadcast/press entries. Aim for 66–80% reduction in the marked overhead where readable; report actual results. No loss of original titles or context to meet a number. |
| Content integrity | Same records, approved factual text, publication descriptions, countries, dates, archive labels, institutional credits, external destinations and anchors; only expressly authorized labels/actions removed or rearranged. |
| Article interactions | Photograph/title source links point to the correct article; enlargement control opens the correct readable evidence image, closes by button and Escape, and returns keyboard focus. No nested interactive controls. |
| Responsive/accessibility | Test 320, 390 and 768 px widths and 200% enlarged text/browser zoom. No horizontal overflow, clipping, header overlap or hidden sources. Permit vertical reflow at enlarged text rather than shrinking type. |
| Images/privacy | No new public master, camera-format file or embedded personal metadata. Every raster variant allowed by the manifest and size policy. CI checks fail on temporary negative fixtures outside public output. Git-history scan findings recorded separately from current-tree results. |
| Technical validation | Astro diagnostics, ESLint, Prettier and static build pass; no new console errors or failed image loads. Inspect changed above-fold image loading and bytes for regressions. |
| Independent reviews | Art director checks geometry, hierarchy, visual continuity and whitespace; editorial/PR reviewer checks practical authority, international reach and source distinctions. Required findings resolved in final rendered output. |
| Release boundary | Deliver a review preview and release-ready diff; face processing remains pending the next discussion, and no production release occurs in this phase. |

The asset preflight is a meaningful behavioral check: prove both that approved derivatives pass and that a forbidden camera file, oversized image, metadata-bearing export and unapproved image path fail. Do not add unit tests mirroring individual CSS declarations.

## Model allocation recommendation

These are recommended tiers, not changes to the current chat or agent settings.

| Responsibility | Recommended model and reasoning effort | Rationale |
| --- | --- | --- |
| Astro implementation and responsive refinements | GPT-6.1 Sol · high | Coordinate the two pages and preserve existing content and behavior. |
| Final art-direction review | GPT-6 Astra · extra high | Spend the strongest reasoning on demanding whole-site visual judgment. |
| Independent editorial/PR review | GPT-6 Astra · high | Assess practical authority, international standing and accurate evidence distinctions separately from implementation. |
| Asset inventories, manifest checks and QA report assembly | GPT-6 Luna · medium | Well-scoped, verifiable tasks with explicit rules; scripts/browser evidence determine acceptance. |
| Git-history audit and final integration/release review | GPT-6.1 Sol · high | Validate provenance findings and cross-file effects; escalate to Astra if a consequential ambiguity remains. |

Recommended practical setup: Sol high for the main execution, with two independent Astra reviews at the end. Luna is optional for mechanical work; do not add another agent solely to fill a tier. Scripts handle deterministic validation and the existing browser harness supplies screenshots and DOM measurements. Model selection does not replace evidence or independent review.

Official guidance checked: [OpenAI model selection](https://developers.openai.com/api/docs/guides/model-selection) and [reasoning effort](https://developers.openai.com/api/docs/guides/reasoning). The assignment of these tiers to this particular site is our workflow recommendation; it is not a benchmark claim or a quoted per-task guarantee.
