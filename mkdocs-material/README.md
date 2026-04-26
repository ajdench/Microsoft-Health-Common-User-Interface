# Material for MkDocs Mirror

This directory holds the generated-source workspace for the Material for MkDocs version of the MSH CUI LLM Wiki.

The canonical corpus remains in the repository root, `wiki/`, `derived/`, and `raw/`. Do not edit `mkdocs-material/docs/` directly; regenerate it with:

```sh
python scripts/sync_mkdocs_material.py
```

Local preview:

```sh
python -m pip install -r requirements-mkdocs.txt
python scripts/sync_mkdocs_material.py
mkdocs serve
```

GitHub Pages deployment is wired through `.github/workflows/deploy-mkdocs-material.yml`.
