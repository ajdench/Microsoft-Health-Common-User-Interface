# Codex Thread Prompt: Audit Raw Links And Image Context

## Goal
Use this prompt in the separate `Fix broken source links` Codex chat for this project.

Audit the current Astro/Starlight wiki link behavior and improve image context without adding a new wiki UI channel.

## Problem statement
The canonical LLM Wiki uses repo-relative links and canonical repo paths, while the Astro/Starlight mirror translates some of those paths into browser-routable URLs.

The mirror now rewrites internal markdown and JSON links into Starlight route URLs and publishes linked non-markdown artefacts into mirror-only public assets under `/_llm-wiki-assets/**`.

That means the current task is no longer to invent a first-pass fix from scratch. The task is to verify the distinction between:

- canonical repo paths
- mirrored markdown routes
- generated mirror-only served assets

and then tighten any misleading language, weak image context, or remaining broken expectations in the wiki UI.

Example of a historically non-working expectation:

- `http://localhost:4322/wiki/raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/DesignGuide/QuickGuides/SearchPrescribe/images/msp2190.png`

That path should still be treated as invalid as a browser route. The mirror may instead expose a generated served path such as `/_llm-wiki-assets/...` when a page intentionally links to that artefact.

## What to examine
- `msh-cui-wiki/scripts/sync-llm-wiki.mjs`
- `msh-cui-wiki/astro.config.mjs`
- `msh-cui-wiki/public/_llm-wiki-assets/` if present
- `wiki/overview/viewable-ui-examples.md`
- `msh-cui-wiki/public/viewable-ui-examples/`
- any other canonical wiki pages that currently imply raw source/filesystem URLs should be browser-viewable
- generated mirror-only assets or link-rewrite logic if present

## Deliverables
1. Explain precisely which classes of paths are:
   - canonical repo paths only
   - mirrored markdown routes
   - public web-served assets
2. Audit the current wiki pages for misleading or broken source links, including:
   - images
   - PDFs
   - HTML files
   - installers or media
   - directory links
3. Improve image context where useful:
   - keep or expand mirrored preview images
   - add short captions or source-path context near previews
   - make it obvious whether a user is seeing:
     - a mirrored preview image under `public/viewable-ui-examples/`
     - a generated served artefact under `/_llm-wiki-assets/`
     - a canonical repo path
     - a historically referenced but no-longer-live file or URL
4. Propose or implement the cleanest fix for broken source links in the wiki UI, not just raw-image references.

## Constraints
- Do not add another top header channel just for this.
- Do not revert unrelated in-flight changes in `AGENTS.md`, `msh-cui-wiki/src/components/Head.astro`, Playwright artefacts, or `skills/`.
- Prefer conservative fixes that preserve the current canonical wiki structure.
- If assets are mirrored into `msh-cui-wiki/public/`, keep the scope tight and explicit.
- Keep the canonical parent-repo markdown as the source of truth unless there is a clear reason to adjust wording there.
- Do not break the distinction between canonical content and mirror-only generated output.

## Suggested acceptance criteria
- The resulting wiki page language does not imply that `raw/sources/**` paths are directly browser-routable.
- Representative images in the viewable-examples page render in the wiki UI and include source context.
- Linked non-image artefacts that the wiki intends users to open resolve cleanly through mirror-served URLs, or are clearly labeled as canonical repo paths rather than browser routes.
- The distinction between repo path and served asset path is explicit.
- `npm run build` in `msh-cui-wiki/` still succeeds.

## Notes
- A prior misunderstanding suggested adding another UI channel; that is not wanted.
- The requested outcome is still a prompt you can paste directly into the separate `Fix broken source links` Codex chat in this project.
- Assume the first-pass route-rewrite and linked-artefact publication logic may already exist; audit and refine from that current state instead of assuming a blank slate.
