# LTPR media inventory

Initial cloud inventory prepared 24 October 2026. The supplied metadata is reconciled. A later successful read of the local task reports completed imports for 73 press-subfolder files and 20 TV-grab files; its expanded registers have not yet reached this workspace. See the [local-task synchronization record](local-task-sync.md) for evidence, broader-parent scope caveats, new conflicts, and the small package needed next. This is an inventory, with no broadcast selection, excerpt, player arrangement, or layout proposal.

Current continuation: [../CURRENT_STATE.md](../CURRENT_STATE.md). The reusable comparison pack is a baseline export, not completion of original-source recovery.

## What is available

The uploaded `ltpr-design-inventory-handoff.zip` contains 48 files: a handoff, media metadata and historical manifests, accepted impression-review records, and existing site captures. It contains no source videos, original PDFs, or contents from the two owner folders. The package is preserved outside the checkout. Its SHA-256 and the imported records' SHA-256 are recorded in `inventory.json`.

The owner confirmed that the actual folders have not been copied here. The first source root is the broader site-source folder, including its nested TV-grab material; the second is the PR folder. Their private Windows locations and historical source filenames are retained outside the repository under neutral source IDs. Broader-parent coverage remains unverified. The later local-task report covers 73 press-subfolder files and 20 TV-grab files; these are reported local imports, not source files recovered in this cloud checkout.

| Source | Coverage | Imported source files |
| --- | --- | ---: |
| Supplied handoff metadata | Imported and reconciled against current local source | No original source files in package |
| `site-source-folder` | Not transferred; includes the broader site-source tree, not only TV grabs | 0 |
| `pr-source-folder` | Not transferred | 0 |

## Inventory files

- [`inventory.json`](inventory.json): canonical metadata package, provenance, source coverage, recording records, current-site records, historical asset declarations, and unresolved checks.
- [`recordings.csv`](recordings.csv): the 23 supplied recording rows with source/site links, separate geographic fields, and explicit review status. UTF-8 with BOM for spreadsheet handling of Hebrew and Cyrillic text.
- [`current-site-records.csv`](current-site-records.csv): current local Astro template/data records and their displayed source context. This is local-source reconciliation, not a fresh live-site or remote-link check.
- [`source-assets.csv`](source-assets.csv): eight historically declared assets, all marked not supplied; expected sizes/checksums are historical evidence, not freshly measured properties.
- [`open-checks.md`](open-checks.md): missing-source, date, overlap, language, topic, and footage-review questions.
- [`repo-source-assessment.md`](repo-source-assessment.md): what can be reviewed for repository inclusion and what should remain outside Git/public output.
- [`decision-provenance.md`](decision-provenance.md): current request, handoff-reported decisions, and historical instructions kept distinct.
- [`local-task-sync.md`](local-task-sync.md): later local import progress and the transfer needed to reconcile the expanded registers here.

## Counts and their limits

There are **23 recording records: 20 broadcast-candidate rows and 3 talks**. The handoff's channel listing contains 19 uploads, supplemented by four off-list/source records. This does not establish a complete overall collection. It includes an unlisted recording and sources outside the channel listing.

Six recording rows correspond to the current site's broadcast selection. The current archive also contains 5 publication records, 6 press records, 4 further-coverage records, and 6 forum records: **27 current-site records in total**. These are linked views; the six shared broadcasts must not be added a second time to produce an appearance count. The supplied handoff mentioned 26 records, while current markup contains 26 article elements plus the separate featured-broadcast section; the inventory records all 27 semantic entries explicitly.

Two Channel 9 uploads may contain overlapping footage. A conflicting date is preserved for each of two recordings. No unique-appearance total is asserted. Talks remain separate from broadcasts, and the Norwegian academy denotes an event venue rather than a Norwegian broadcaster.

All recording annotations remain metadata/site based. None of the 23 recordings was watched during this merge. Supplied ASR labels are retained as evidence without treating them as authoritative spoken-language identification. The original combined country field is preserved for import fidelity; separate broadcaster-country, venue-country, institutional-context, and subject-geography fields avoid silently conflating those concepts. Unconfirmed fields remain empty.

The supplied standalone JSON, its embedded working inventory, and every field of the supplied CSV agree. The repository HEAD used for local-source reconciliation is recorded in `inventory.json`; it matches the handoff baseline. Existing review/capture artifacts are retained outside the checkout and have not been rerun or copied into public output.

## Completing the two folder imports

The local task has since reported completion of the two named subfolder imports. Continue from its manifests rather than repeating that work. For the next cloud reconciliation, transfer its latest `ltpr-inventory-review-pack.zip`; keep raw originals local. Broader-parent coverage still needs checking against those manifests. A Windows/OneDrive path by itself remains unreadable from this Linux cloud instance.

The source import method and remaining checks are:

1. Preserve the transferred payload outside the checkout and serving roots, and enumerate every file, including previously omitted/non-selected material.
2. Assign neutral asset IDs; keep any private location/filename mapping outside the repository. Record SHA-256, byte count, media/document type, and independently measured video duration/dimensions where available.
3. Match exact bytes first. Compare historical expected digests, public video IDs, titles, event dates, and footage to link multiple copies/excerpts to the same appearance. Do not merge on title similarity alone or count uploads as appearances.
4. Inspect the documents and actual footage needed to resolve dates, language, broadcaster/venue/subject geography, uncertain topics, source quality, and possible overlap. Look for the longer undersea-cable source and the distinct English i24 appearance.
5. Report imported, duplicate, newly surfaced, unresolved, and inaccessible files separately, and update source coverage. Review repository suitability before transferring any source contents into Git.
6. Only after this inventory is complete, discuss broadcast selections and layout alternatives using the actual breadth and quality of the collection.
