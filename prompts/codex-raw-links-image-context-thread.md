# Codex Thread Prompt: Raw Links and Image Context

## Goal
Investigate the raw-link problem in the Astro/Starlight wiki UI and improve image context without adding a new wiki UI channel.

## Problem statement
The wiki UI does not serve arbitrary files under `raw/sources/**`.

Example of a non-working expectation:

- `http://localhost:4322/wiki/raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/DesignGuide/QuickGuides/SearchPrescribe/images/msp2190.png`

The current app mirrors markdown and selected JSON into `msh-cui-wiki/src/content/docs/`, but it does not publish `raw/sources/**` as web-served assets. That means references to raw source paths may be valid repository paths while still being invalid browser routes inside the Astro wiki UI.

## What to examine
- `msh-cui-wiki/scripts/sync-llm-wiki.mjs`
- `msh-cui-wiki/astro.config.mjs`
- `wiki/overview/viewable-ui-examples.md`
- `msh-cui-wiki/public/viewable-ui-examples/`
- any other canonical wiki pages that currently imply raw image/filesystem URLs should be browser-viewable

## Deliverables
1. Explain precisely which classes of paths are:
   - canonical repo paths only
   - mirrored markdown routes
   - public web-served assets
2. Audit the current wiki pages for misleading raw links, especially image links.
3. Improve image context where useful:
   - keep or expand mirrored preview images
   - add short captions or source-path context near previews
   - make it obvious whether a user is seeing a mirrored preview, a canonical repo path, or a historically referenced file
4. Propose or implement the cleanest fix for raw-image references in the wiki UI.

## Constraints
- Do not add another top header channel just for this.
- Do not revert unrelated in-flight changes in `AGENTS.md`, `msh-cui-wiki/src/components/Head.astro`, Playwright artefacts, or `skills/`.
- Prefer conservative fixes that preserve the current canonical wiki structure.
- If assets are mirrored into `msh-cui-wiki/public/`, keep the scope tight and explicit.

## Suggested acceptance criteria
- The resulting wiki page language does not imply that `raw/sources/**` paths are directly browser-routable.
- Representative images in the viewable-examples page render in the wiki UI and include source context.
- The distinction between repo path and served asset path is explicit.
- `npm run build` in `msh-cui-wiki/` still succeeds.

## Notes
- A prior misunderstanding suggested adding another UI channel; that is not wanted.
- The requested outcome is a separate Codex-thread handoff focused on raw-link behavior and image context.
