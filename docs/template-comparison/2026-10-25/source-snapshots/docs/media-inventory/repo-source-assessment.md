# Assessment of storing sources in the repository

The current request asks to consider repository upload. It does not authorize publishing all attached or privately held source material. Nothing has been pushed, uploaded to GitHub, or added to public output by this inventory work.

## Prepared locally for repository review

The inventory JSON/CSV, public source URLs, neutral asset IDs, checksums, expected/measured-property distinctions, provenance digests, and unresolved checks are suitable review artifacts. They contain no private Windows paths or original-media contents. These files are currently local additions under `docs/media-inventory/`.

The later Windows task reports a larger inventory in a separate initialized Git folder without a remote. Its manifests include private absolute paths. Before bringing that package into the actual application repository, retain a private mapping outside Git and prepare sanitized neutral-ID records. A local save in that separate folder is not a remote repository upload or an application-checkout update. See [local-task sync](local-task-sync.md).

## Source material to keep outside the checkout

The repository's existing [image workflow](../image-asset-workflow.md) keeps originals private, with neutral IDs and reviewed web derivatives in Git. Full-resolution images, camera files, and broadcast masters belong in the private source archive. The supplied historical media manifest likewise identifies MP4 masters as originals outside public runtime assets. Adding Git LFS would not turn a source upload into private storage or establish permission to publish it.

Keep the two source folders and full handoff package outside the checkout during reconciliation. The handoff contains private location information, historical instructions, and capture images that are unnecessary to version in full. The image checker rejects Git-tracked rasters outside the approved public asset set, so copying review screenshots or original stills into `docs/` would also conflict with the current safeguards.

## Documents and future web derivatives

The three historical PDF declarations are not actual supplied documents. Their contents, embedded metadata, source rights, and suitability for storage cannot yet be assessed. Prefer a public publisher/source link plus bibliographic metadata for third-party articles. Review any proposed document copy separately before adding it to Git; placement in `docs/` does not prevent it from being exposed through repository access.

Any later broadcast excerpt, poster, or other web derivative needs an explicit content/rights decision, an intended role, and technical review after the footage has been inspected. Existing image-path/dimension/metadata guards remain relevant to poster derivatives. Creating, selecting, or publishing those derivatives is not part of this inventory merge.

## Recommendation

Version the neutral inventory and provenance after review. Keep raw source folders in the controlled private archive. Decide on individual document or media derivatives only after the missing files are available and reconciled. The current public-source links and source IDs already let the repository retain a useful, reviewable connection to the material without copying the originals.
