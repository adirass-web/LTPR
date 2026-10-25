# Durable comparison pack

The `2026-10-25/` directory is a **frozen historical export**, with 41 text/source/manifest files. Its 17 image payloads already live under the repository's `public/images/`; they are deliberately not duplicated here. All 58 original payload files can be reconstructed and hash-checked:

```bash
python3 scripts/export-template-pack.py /tmp/ltpr-comparison.zip
```

Requires Python 3 only; no dependency installation or network access. Choose a new output filename: the exporter refuses to overwrite an existing ZIP. It verifies every frozen payload against the manifest before creating the archive and verifies the archive contents afterward. If a public asset later changes, recover its original bytes from Git history or create an explicitly versioned new pack; do not silently change the old manifest.

The export contains 199 copy blocks, 92 link/embed occurrences, 127 image manifest entries and 17 public derivatives. Its source-snapshots preserve evidence as it stood when extracted. Statements about pending uploads, missing references or cloud-only storage in those snapshots are historical. Current operational state belongs in [CURRENT_STATE.md](../CURRENT_STATE.md); current inventories live in [media-inventory](../media-inventory/README.md).

These are existing public site derivatives, not freely licensed stock assets. No private media masters or private A/B reviews are stored here. The exported rendered HTML comes from the public production baseline and is reference material, not private review HTML. Toolkit guidance and prompts are in the frozen pack; selecting a toolkit or layout remains a separate decision.
