# Microsoft Health Common User Interface

[![Deploy Pages bundle to GitHub Pages](https://github.com/ajdench/Microsoft-Health-Common-User-Interface/actions/workflows/deploy-mkdocs-material.yml/badge.svg)](https://github.com/ajdench/Microsoft-Health-Common-User-Interface/actions/workflows/deploy-mkdocs-material.yml)
[![Preferred Wiki](https://img.shields.io/badge/wiki-Material%20for%20MkDocs-526CFE?logo=materialformkdocs&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/mkdocs_wiki/)
[![Alternate Wiki](https://img.shields.io/badge/wiki-Astro%20Starlight-DD6B20?logo=astro&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/starlight_wiki/)
[![Demo App](https://img.shields.io/badge/demo-React%20%2B%20Vite-646CFF?logo=vite&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/demo/)
[![MkDocs Material](https://img.shields.io/badge/docs-MkDocs%20Material-526CFE?logo=materialformkdocs&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/mkdocs_wiki/)
[![Astro Starlight](https://img.shields.io/badge/docs-Astro%20Starlight-DD6B20?logo=astro&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/starlight_wiki/)
[![React 19](https://img.shields.io/badge/app-React%2019-149ECA?logo=react&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/demo/)
[![Vite 7](https://img.shields.io/badge/build-Vite%207-646CFF?logo=vite&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/demo/)
[![shadcn/ui](https://img.shields.io/badge/ui-shadcn%2Fui-111111?logo=shadcnui&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/demo/)
[![Radix UI](https://img.shields.io/badge/ui-Radix-161618?logo=radixui&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/demo/)
[![Tailwind CSS 4](https://img.shields.io/badge/css-Tailwind%204-06B6D4?logo=tailwindcss&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/demo/)
[![PWA](https://img.shields.io/badge/app-PWA-5A0FC8?logo=pwa&logoColor=white)](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/demo/)

Durable research and implementation repo for the Microsoft Health Common User Interface (MSH CUI / Health CUI) programme.

This repo has three distinct surfaces:

- a canonical LLM Wiki corpus in markdown, manifests, metadata, and derived inventories
- a preferred published wiki built with Material for MkDocs
- an alternate Astro/Starlight wiki UI and a clinician-facing demo app in `prototypes/`

## Quick links

| Surface | Status | Link |
| --- | --- | --- |
| GitHub Pages landing | published root | [Landing page](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/) |
| Preferred wiki | published at `/mkdocs_wiki/` | [Material for MkDocs](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/mkdocs_wiki/) |
| Alternate wiki UI | published at `/starlight_wiki/` | [Astro/Starlight app](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/starlight_wiki/) |
| Demo app | published at `/demo/` | [EHR shadcn prototype](https://ajdench.github.io/Microsoft-Health-Common-User-Interface/demo/) |
| Canonical index | source in repo | [index.md](index.md) |
| Working rules | source in repo | [AGENTS.md](AGENTS.md) |
| Work log | source in repo | [log.md](log.md) |

## Repo shape

- `raw/` — immutable source artefacts, manifests, and metadata
- `derived/` — extracted text, normalized markdown, and inventories
- `wiki/` — maintained knowledge pages
- `msh-cui-wiki/` — alternate Astro/Starlight presentation layer
- `mkdocs-material/` — generated Material for MkDocs workspace
- `prototypes/ehr-shadcn-pwa/` — current React/Vite clinical demo app
- `scripts/` — sync, extraction, and inventory tooling

## Publishing model

Material for MkDocs remains the preferred published wiki.

This does not need three separate GitHub Pages sites. The repo now targets one GitHub Pages site with a landing page at `/` and fixed subpaths for each surface:

- `/mkdocs_wiki/` for the preferred MkDocs wiki
- `/starlight_wiki/` for the alternate Astro/Starlight wiki
- `/demo/` for the React/Vite clinical demo app

## Local development

### Preferred wiki

```sh
python -m pip install -r requirements-mkdocs.txt
python scripts/sync_mkdocs_material.py
mkdocs serve
```

### Alternate wiki

```sh
cd msh-cui-wiki
npm install
npm run dev
```

### Demo app

```sh
cd prototypes/ehr-shadcn-pwa
npm install
npm run dev -- --host 127.0.0.1 --port 5175
```

## Notes

- The canonical source of truth remains the root corpus: `index.md`, `log.md`, `wiki/`, `derived/`, `raw/metadata/`, and `raw/manifests/`.
- `msh-cui-wiki/` is a presentation layer over the canonical corpus; do not treat `src/content/docs/` as source of truth.
- GitHub Pages deployment is wired through `.github/workflows/deploy-mkdocs-material.yml` and builds a single artifact containing the landing page plus all three published subpaths.
