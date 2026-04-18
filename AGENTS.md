# AGENTS.md

## Project purpose
This repository is a local LLM Wiki for the Microsoft Health Common User Interface (Health CUI) programme.

It stores:

- immutable raw source material
- extracted and normalized derivatives
- a maintained markdown wiki
- provenance, inventories, and mappings into modern web UI practice

The repo follows the LLM Wiki pattern:

- `raw/` = source-of-truth artefacts, immutable except for adding new source material
- `derived/` = machine-produced extractions, normalizations, and inventories
- `wiki/` = maintained markdown knowledge base
- `index.md` = navigational entrypoint
- `log.md` = append-only chronology of work done

## Repository rules

### 1) Raw sources are immutable
Do not edit files under `raw/` after acquisition.
Allowed actions:
- add new source files
- add manifests and metadata
- fix obviously broken filenames only when unavoidable, and log it

### 2) Preserve provenance
Every acquired source must have:
- original URL if known
- access date if known
- local file path
- source category
- brief trust/caveat note

Store structured metadata in `raw/metadata/`.
Create human-readable source notes in `wiki/source-notes/`.

### 3) Derived artefacts must link back to raw
Every file in `derived/` should retain traceability to its raw source.
Use stable filenames where possible.

### 4) Wiki content must distinguish fact from interpretation
In `wiki/`, clearly separate:
- directly retrieved source material
- synthesis / inference
- modern reinterpretation
- uncertainty / missing material

### 5) Do not invent missing documents
If a referenced artefact cannot be retrieved, record it as missing.
Do not fabricate content.

### 6) Prefer durable local capture over remote dependence
Remote URLs may be used for discovery and provenance, but important artefacts should be localized into `raw/` whenever possible.

### 7) Structure before polish
Prioritize:
1. acquisition
2. manifests
3. source notes
4. inventories
5. first-pass synthesis
6. refinement

## Expected workflow

### Acquisition phase
- discover toolkit source and design-guidance artefacts
- download or snapshot them into `raw/sources/...`
- record provenance in `raw/metadata/` and manifests in `raw/manifests/`

### Processing phase
- extract text from PDFs/docs into `derived/extracted-text/`
- create cleaned markdown in `derived/normalized-markdown/`
- generate inventories in `derived/inventories/`

### Wiki phase
Build structured pages in:
- `wiki/overview/`
- `wiki/concepts/`
- `wiki/guidance-domains/`
- `wiki/controls/`
- `wiki/source-notes/`
- `wiki/mappings/`

## Minimum page set for first pass
Create at least:
- `wiki/overview/health-cui-overview.md`
- `wiki/overview/history-and-context.md`
- `wiki/concepts/design-guidance.md`
- `wiki/concepts/toolkit-controls.md`
- `wiki/concepts/patient-safety.md`
- `wiki/guidance-domains/patient-identification.md`
- `wiki/guidance-domains/medication.md`
- `wiki/guidance-domains/alerts-and-decision-support.md`
- `wiki/controls/toolkit-control-inventory.md`
- `wiki/mappings/health-cui-to-modern-web-ui.md`

## Logging
Append every substantial action to `log.md` with:
- date/time if available
- action performed
- inputs used
- outputs created
- unresolved issues

Create a `jj` commit after each meaningful research stage, wiki-writing stage, and UI-development stage so the working history is checkpointed incrementally.

## Quality bar
Good outputs are:
- source-aware
- reproducible
- conservative
- easy to navigate
- useful for later AI-assisted coding and design-system work
