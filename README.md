<h1>Microsoft Health (MSH)<br>Common User Interface (CUI)<br>[MSH CUI LLM Wiki]</h1>

This repository is a durable local research and knowledge base for the Microsoft Health (MSH) Common User Interface (CUI) [interchangeably Health CUI] programme.

## Purpose
- Preserve the toolkit source and historically significant design-guidance corpus locally.
- Maintain traceable provenance, manifests, inventories, and source notes.
- Build a markdown wiki that separates retrieved fact, synthesis, modern interpretation, and uncertainty.
- Translate historically valuable clinician-facing interaction guidance into modern web and design-system work.

## Repo shape
- `raw/` — immutable source artefacts, manifests, metadata
- `derived/` — extracted text, normalized markdown, inventories
- `wiki/` — maintained markdown knowledge base
- `prompts/` — prompts for Codex / Claude Code / other agents
- `scripts/` — helper scripts for extraction, normalization, and inventory generation

## Entry points
- `index.md` — human/LLM navigation entrypoint
- `log.md` — append-only work chronology
- `AGENTS.md` — repository rules and operating model
- `msh-cui-wiki/` — existing Astro/Starlight wiki UI
- `mkdocs.yml` — Material for MkDocs mirror config, deployed through GitHub Pages

## Wiki UI builds
The existing Astro/Starlight UI remains under `msh-cui-wiki/`.

The Material for MkDocs version is generated from the same canonical corpus:

```sh
python -m pip install -r requirements-mkdocs.txt
python scripts/sync_mkdocs_material.py
mkdocs serve
```

GitHub Pages deployment is configured in `.github/workflows/deploy-mkdocs-material.yml`.

## Version control
This repo now has a colocated `jj` and `git` setup.

- Use `jj` if you want stronger local-history ergonomics for research-heavy iterative work.
- Use `git` if you want conventional tooling compatibility.
- The project remains a normal file-based repo; no repo content depends on `jj`.

Useful commands:
- `jj st`
- `jj diff`
- `jj log`
- `git status`

Repository note:
- `.playwright-cli/` is ignored because it is local browser automation scratch state, not durable corpus data.

See `AGENTS.md` and `prompts/codex-bootstrap.md`.
