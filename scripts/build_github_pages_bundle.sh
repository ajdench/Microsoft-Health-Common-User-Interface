#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_DIR="${1:-$ROOT_DIR/site}"
PYTHON_BIN="${PYTHON_BIN:-python3}"

PAGES_SITE_ORIGIN="${PAGES_SITE_ORIGIN:-https://ajdench.github.io}"
REPO_BASE_PATH="${REPO_BASE_PATH:-/Microsoft-Health-Common-User-Interface/}"
MKDOCS_BASE_PATH="${MKDOCS_BASE_PATH:-${REPO_BASE_PATH}mkdocs_wiki/}"
STARLIGHT_BASE_PATH="${STARLIGHT_BASE_PATH:-${REPO_BASE_PATH}starlight_wiki/}"
DEMO_BASE_PATH="${DEMO_BASE_PATH:-${REPO_BASE_PATH}demo/}"

rm -rf "$SITE_DIR"
mkdir -p "$SITE_DIR"

"$PYTHON_BIN" "$ROOT_DIR/scripts/sync_mkdocs_material.py"
MKDOCS_SITE_URL="${PAGES_SITE_ORIGIN}${MKDOCS_BASE_PATH}" \
  mkdocs build --strict --config-file "$ROOT_DIR/mkdocs.yml" --site-dir "$SITE_DIR/mkdocs_wiki"

(
  cd "$ROOT_DIR/msh-cui-wiki"
  npm ci
  ASTRO_SITE_URL="$PAGES_SITE_ORIGIN" \
    ASTRO_BASE_PATH="$STARLIGHT_BASE_PATH" \
    npm run build
)
mkdir -p "$SITE_DIR/starlight_wiki"
cp -R "$ROOT_DIR/msh-cui-wiki/dist/." "$SITE_DIR/starlight_wiki/"

(
  cd "$ROOT_DIR/prototypes/ehr-shadcn-pwa"
  npm ci
  VITE_BASE_PATH="$DEMO_BASE_PATH" npm run build
)
mkdir -p "$SITE_DIR/demo"
cp -R "$ROOT_DIR/prototypes/ehr-shadcn-pwa/dist/." "$SITE_DIR/demo/"

cat > "$SITE_DIR/index.html" <<HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Microsoft Health Common User Interface</title>
    <style>
      :root {
        color-scheme: light dark;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      body {
        margin: 0;
        background: #0f172a;
        color: #e2e8f0;
      }
      main {
        max-width: 56rem;
        margin: 0 auto;
        padding: 4rem 1.5rem 5rem;
      }
      h1 {
        margin: 0 0 0.75rem;
        font-size: clamp(2rem, 5vw, 3.25rem);
        line-height: 1.05;
      }
      p {
        max-width: 42rem;
        line-height: 1.6;
        color: #cbd5e1;
      }
      .grid {
        display: grid;
        gap: 1rem;
        margin-top: 2rem;
      }
      .card {
        display: block;
        padding: 1.25rem;
        border-radius: 0.875rem;
        border: 1px solid #334155;
        background: #111827;
        color: inherit;
        text-decoration: none;
      }
      .card:hover {
        border-color: #60a5fa;
      }
      .eyebrow {
        display: inline-block;
        margin-bottom: 0.4rem;
        color: #93c5fd;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.02em;
      }
      .title {
        display: block;
        margin-bottom: 0.35rem;
        font-size: 1.125rem;
        font-weight: 700;
      }
      code {
        color: #bfdbfe;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Microsoft Health Common User Interface</h1>
      <p>Published surfaces for the repo. The canonical corpus stays in markdown and metadata in the repository; these routes are presentation layers over that material.</p>
      <div class="grid">
        <a class="card" href="${MKDOCS_BASE_PATH}">
          <span class="eyebrow">Preferred wiki</span>
          <span class="title">Material for MkDocs</span>
          <span>Published at <code>${MKDOCS_BASE_PATH}</code></span>
        </a>
        <a class="card" href="${STARLIGHT_BASE_PATH}">
          <span class="eyebrow">Alternate wiki</span>
          <span class="title">Astro / Starlight</span>
          <span>Published at <code>${STARLIGHT_BASE_PATH}</code></span>
        </a>
        <a class="card" href="${DEMO_BASE_PATH}">
          <span class="eyebrow">Demo app</span>
          <span class="title">React / Vite clinical prototype</span>
          <span>Published at <code>${DEMO_BASE_PATH}</code></span>
        </a>
      </div>
    </main>
  </body>
</html>
HTML
