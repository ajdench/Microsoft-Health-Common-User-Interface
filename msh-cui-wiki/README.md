# MSH CUI Wiki

This is a separate Astro + Starlight app that presents the canonical LLM Wiki as a local, read-only wiki UI.

## Source of truth

Do not edit generated files inside `src/content/docs/`.

The canonical content lives in the parent repository:

- `index.md`
- `README.md`
- `AGENTS.md`
- `log.md`
- `wiki/**/*.md`
- `derived/**/*.md`
- `raw/metadata/**/*.json`
- `raw/manifests/**/*.json`

`npm run sync-content` mirrors those files into `src/content/docs/` with lightweight frontmatter and provenance notices. `npm run dev` keeps that mirror up to date while Astro is running.

## Commands

All commands are run from `/Users/andrew/Projects/Microsoft Health Common User Interface/msh-cui-wiki`.

| Command | Action |
| :------ | :----- |
| `npm run sync-content` | Regenerate the Starlight content mirror from the LLM Wiki |
| `npm run dev` | Run the content watcher and Astro dev server together |
| `npm run build` | Regenerate the mirror and build the static site to `dist/` |
| `npm run preview` | Preview the built site locally |

## UI stack

- `Astro`
- `@astrojs/starlight`
- `@pelagornis/page`
- `Pagefind` via Starlight search

The app is intentionally a presentation layer only. Editing continues to happen in the canonical LLM Wiki files.

## UI approach

The live UI uses the Starlight Page visual shell over native Starlight content and routing, with only limited local styling on top.

That is intentional. A more aggressive component-override pass was tried and then rolled back because it reduced clarity and created browser-specific rendering problems. The current rule is:

- original theme shell first
- minimal local fixes second
- CSS-only reliability fixes before component overrides

The current local fixes are intentionally narrow:

- stronger light/dark surface separation in the header, left sidebar, and right-hand TOC
- higher-contrast canonical-note links
- CSS-rendered search and theme icons so Safari/WebKit, Chrome, and Edge all show the same controls reliably
- a fixed optical wrapper offset for heading anchor icons, documented separately because it required page-specific live verification

See [docs/ui-reset-notes.md](/Users/andrew/Projects/Microsoft%20Health%20Common%20User%20Interface/msh-cui-wiki/docs/ui-reset-notes.md) for the reset rationale, current UI policy, and browser verification notes, and [docs/heading-anchor-alignment.md](/Users/andrew/Projects/Microsoft%20Health%20Common%20User%20Interface/msh-cui-wiki/docs/heading-anchor-alignment.md) for the heading-anchor alignment record.
