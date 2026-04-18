# Log

## Initial scaffold
- Created starter folder structure
- Added `AGENTS.md`
- Added `README.md`
- Added `index.md`
- Added `prompts/codex-bootstrap.md`
- Added `prompts/codex-tight-task.md`
- Added `scripts/README.md`

## 2026-04-17 22:51:12 BST — Raw acquisition and corpus localization
- Action performed: cloned the `rbirkby/mscui` toolkit mirror into `raw/sources/toolkit/mscui`
- Inputs used: GitHub mirror `https://github.com/rbirkby/mscui.git`
- Outputs created: localized toolkit source tree, toolkit metadata record, first-pass toolkit inventory
- Unresolved issues: mirror provenance is strong but not official Microsoft hosting; CodePlex release artefacts remain only referenced

## 2026-04-17 22:51:12 BST — Design-guidance extraction and inventories
- Action performed: copied bundled design-guidance PDFs and crib sheets from the toolkit sample website into `raw/sources/design-guidance/`, then generated extracted text, normalized markdown, inventories, and manifest entries
- Inputs used: sample website artefacts under `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/DesignGuide/`
- Outputs created: `raw/sources/design-guidance/toolkit-bundled-pdfs/`, `raw/sources/design-guidance/toolkit-bundled-crib-sheets/`, `derived/extracted-text/design-guidance/`, `derived/normalized-markdown/design-guidance/`, `derived/inventories/source-inventory.md`, `derived/inventories/guidance-document-inventory.md`, `derived/inventories/toolkit-file-inventory.md`, updated `raw/manifests/design-guidance-manifest.json`
- Unresolved issues: first-pass normalization is conservative and should be checked against PDFs where exact formatting matters

## 2026-04-17 22:51:12 BST — Reference capture and wiki authoring
- Action performed: localized Microsoft and NHS reference pages, added metadata/source notes, authored first-pass overview/concept/domain/mapping wiki pages, and updated the repo index
- Inputs used: localized Microsoft Source press releases, NHS Digital deprecation and withdrawal pages, NHS Standards Directory summary, toolkit README and sample website pages
- Outputs created: reference HTML under `raw/sources/references/`, metadata JSON records under `raw/metadata/`, source notes under `wiki/source-notes/`, overview/concept/domain/mapping pages under `wiki/`, updated `index.md`
- Unresolved issues: `cui.nhs.uk` and National Archives-hosted original standard pages should be localized in a future pass if they can be fetched cleanly

## 2026-04-17 23:58:08 BST — Archive recovery and corpus expansion
- Action performed: localized the National Archives replay pages for NHS Digital guidance, ISB baselines, and the historical `cui.nhs.uk` programme site; recovered the previously missing archive-only PDFs, QIGs, ZIP bundle, and decision-support PPT; regenerated manifest, metadata, inventories, and derivatives against the expanded raw corpus
- Inputs used: UK Government Web Archive replay pages, browser-exported challenge state, existing toolkit-derived corpus, `scripts/build_health_cui_first_pass.py`
- Outputs created: `raw/sources/design-guidance/nhs-archived-guidance-2016/`, `raw/sources/references/nhs-archives/`, `raw/metadata/nhs-archived-guidance-2016.json`, `raw/metadata/nhs-archived-reference-pages.json`, refreshed `raw/manifests/design-guidance-manifest.json`, refreshed inventories, and 17 additional extracted-text/normalized-markdown pairs for archive-only PDFs
- Unresolved issues: the historical CodePlex release channel remains referenced but not localized; the recovered `decsupportsumm.ppt` and `patident.zip` are preserved raw but not text-normalized in this pass

## 2026-04-17 23:58:08 BST — Source-note deepening, pattern extraction, and hygiene
- Action performed: added document-level source notes for the highest-value guidance, added archive provenance notes, created structured pattern inventories and implementation checklists, added current-relevance classifications to key guidance-domain pages, updated the repo index, and removed stray `.DS_Store` files while adding a `.gitignore` rule
- Inputs used: normalized guidance markdown for patient banner, medication line, search and prescribe, decision support, and filtering/sorting/grouping; archived NHS provenance pages; existing overview/domain wiki pages
- Outputs created: new notes under `wiki/source-notes/`, new pages under `wiki/entities/`, `wiki/mappings/current-relevance-matrix.md`, updated guidance-domain pages, updated `index.md`, updated `.gitignore`
- Unresolved issues: checklist and pattern pages are first-pass distillations and should be expanded later with more line-level citations, especially for medications workflow, terminology, and handover

## 2026-04-18 00:25:01 BST — Standards, compliance, and archive-support recovery
- Action performed: used the archived NHS/ISB web branches to localize the formal ISB 1500-1508 standards detail pages, documentation pages, DSCN release PDFs, shared submission/development-approach/safety-case PDFs, the CUI CAPS compliance pack and checklist, and additional `cui.nhs.uk` programme distribution/support pages
- Inputs used: UK Government Web Archive replay pages, human-cleared browser session, archived ISB standards pages, archived `cui.nhs.uk` pages, `patident.zip`
- Outputs created: `raw/sources/references/nhs-archives/isb-standards/`, `raw/sources/references/nhs-archives/isb-standards/docs-pages/`, `raw/sources/references/nhs-archives/isb-standards/dscn-pdfs/`, `raw/sources/references/nhs-archives/cuicompliance-pack.pdf`, `raw/sources/references/nhs-archives/cuicompliance-checklist.xlsx`, `raw/sources/references/nhs-archives/cui-programme/`, extracted copies from `patident.zip`, and source notes for the standards branch, compliance artefacts, and distribution mechanism guide
- Unresolved issues: some archive-hosted programme pages and historical release/support artefacts may still exist beyond the currently localized set; CodePlex distribution history remains only partially reconstructed

## 2026-04-18 00:25:01 BST — Archive-support derivatives, rule extraction, and modern translation
- Action performed: added a dedicated archive-support build script, generated archive-support extractions/normalized markdown and inventories, regenerated the main first-pass manifest/inventory set, and authored source-exact rule pages plus explicit modern token/component/template/governance mapping pages
- Inputs used: `scripts/build_archive_support_derivatives.py`, `scripts/build_health_cui_first_pass.py`, localized archive HTML/PDF/XLSX/PPT artefacts, existing source notes and normalized guidance markdown
- Outputs created: `derived/extracted-text/archive-support/`, `derived/normalized-markdown/archive-support/`, `derived/inventories/archive-support-inventory.md`, `derived/inventories/patident-zip-inventory.md`, `raw/metadata/isb-1500-1508-archive-branch.json`, `raw/metadata/cui-programme-distribution-archive.json`, refreshed `raw/manifests/design-guidance-manifest.json`, refreshed `derived/inventories/source-inventory.md`, new rule pages under `wiki/entities/`, new mapping pages under `wiki/mappings/`, and updated overview/index pages
- Unresolved issues: PPT extraction is still conservative string-level extraction rather than slide-structured normalization, and the archive-support inventories are stronger at collection level than at per-page semantic summarization

## 2026-04-18 02:06:28 BST — JJ introduction and repo-shape hardening
- Action performed: initialized a colocated `jj` and `git` repository for the project, documented the version-control model in `README.md`, ignored local Playwright scratch state, and raised JJ’s per-repo large-file snapshot threshold to fit the raw corpus
- Inputs used: existing repo working tree, local `jj` installation (`jj 0.39.0`), `.gitignore`, `README.md`
- Outputs created: `.git/`, `.jj/`, updated `.gitignore`, updated `README.md`
- Unresolved issues: no initial commit was created in this pass, and the repo remains a large local corpus rather than a curated small-source VCS history

## 2026-04-18 02:06:28 BST — Provenance completion, afterlife research, standards deepening, and workflow synthesis
- Action performed: recovered CodePlex archive provenance, localized additional web/academic/vendor/NHS follow-on sources, generated a dedicated reference-context derivative branch, refreshed the manifest/inventory set, added source notes for adoption and retirement evidence, authored a standards-family page and crosswalk, authored workflow synthesis pages, and added an overview page for adoption/retirement/afterlife
- Inputs used: CodePlex Archive, Digital Health reports, PubMed abstract pages, current Civica product page, 2015 NHS follow-on requirements PDFs, `scripts/build_reference_context_derivatives.py`, updated `scripts/build_health_cui_first_pass.py`
- Outputs created: `raw/sources/references/secondary/`, `raw/metadata/secondary-adoption-and-afterlife-sources.json`, `derived/extracted-text/reference-context/`, `derived/normalized-markdown/reference-context/`, `derived/inventories/reference-context-inventory.md`, refreshed `raw/manifests/design-guidance-manifest.json`, refreshed `derived/inventories/source-inventory.md`, new source notes under `wiki/source-notes/`, new overview/entity pages under `wiki/overview/` and `wiki/entities/`, updated chronology/domain pages, updated `index.md`
- Unresolved issues: the Indra Valencia adaptation page remains only a referenced lead because direct capture was blocked; the CodePlex archive source-code tree was not explored deeply in this pass; exhaustive archive crawling is likely now lower-yield than translating the corpus into design-system outputs

## 2026-04-18 02:44:30 BST — Separate Astro/Starlight wiki UI added as a live mirror
- Action performed: scaffolded a separate `msh-cui-wiki/` Astro app, switched it to Starlight with the `@pelagornis/page` theme, added a repo-to-Starlight sync generator for canonical markdown and provenance JSON, added a watcher so canonical-file changes automatically resync the app, and documented the app workflow
- Inputs used: canonical files in `index.md`, `README.md`, `AGENTS.md`, `log.md`, `wiki/**/*.md`, `derived/**/*.md`, `raw/metadata/**/*.json`, `raw/manifests/**/*.json`; Astro/Starlight project scaffold; Starlight Page theme package
- Outputs created: `msh-cui-wiki/` app, `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, `msh-cui-wiki/scripts/watch-llm-wiki.mjs`, updated `msh-cui-wiki/package.json`, updated `msh-cui-wiki/astro.config.mjs`, `msh-cui-wiki/src/styles/global.css`, updated `msh-cui-wiki/README.md`
- Unresolved issues: the Starlight Page theme emits unresolved icon-font asset warnings during static build, and Starlight still logs an informational missing custom-docs-404 message while successfully generating its fallback `404.html`

## 2026-04-18 03:05:00 BST — Deployment-depth follow-up, Indra recovery, and archive-limit clarification
- Action performed: continued the open historical-research threads around the Indra Valencia lead, deeper CodePlex spelunking, the surviving `cui.nhs.uk` page perimeter, and supplier deployment depth; localized additional Digital Health and Investegate sources; recovered the Indra Valencia article via browser-rendered capture; refreshed reference-context generation and wiki synthesis to reflect the stronger evidence
- Inputs used: live web research, browser-rendered Indra session capture, Digital Health pages, Investegate supplier statement, existing CodePlex archive captures, archived `cui.nhs.uk` HTML already localized in the repo, `scripts/build_reference_context_derivatives.py`, `scripts/build_health_cui_first_pass.py`
- Outputs created: `raw/sources/references/secondary/digitalhealth-microsoft-launches-cui-internationally-2007.html`, `raw/sources/references/secondary/digitalhealth-aintree-system-c-2009.html`, `raw/sources/references/secondary/investegate-system-c-final-results-2008.html`, `raw/sources/references/secondary/indra-valencia-abucasis-2012-browser.html`, refreshed `raw/metadata/secondary-adoption-and-afterlife-sources.json`, refreshed `derived/inventories/reference-context-inventory.md`, refreshed `raw/manifests/design-guidance-manifest.json`, refreshed `derived/inventories/source-inventory.md`, new source notes under `wiki/source-notes/`, and updated overview/history/chronology/index pages
- Unresolved issues: direct CodePlex release-attachment URLs still return authentication errors, so readmes and packaged artefacts remain only partially recoverable; the surviving `cui.nhs.uk` replay perimeter now looks close to exhausted, but a discovered `Default.aspx` path still triggers a fresh archive challenge; exact deployment depth across every named supplier remains unprovable with currently localized evidence

## 2026-04-18 03:26:00 BST — Final research cleanup, showcase remnants, and scope-closure framing
- Action performed: documented the main archive and recovery dead ends, added a supplier/adoption evidence matrix, did a final targeted sweep of `mscui.net` showcase and demonstrator traces, localized two light corroborating web references to `pjd.mscui.net`, and added a scope-status page explaining why further historical discovery is now low leverage
- Inputs used: localized toolkit sample website and showcase code, Microsoft 2008 v1.3 press release, Telerik forum thread, GovLoop tweet archive, prior archive-recovery findings, `scripts/build_reference_context_derivatives.py`, `scripts/build_health_cui_first_pass.py`
- Outputs created: `wiki/overview/archive-limits-and-dead-ends.md`, `wiki/overview/research-scope-status.md`, `wiki/entities/supplier-adoption-evidence-matrix.md`, `wiki/source-notes/showcase-and-demonstrators-remnants.md`, `raw/sources/references/secondary/telerik-pjd-primarycare-reference-2010.html`, `raw/sources/references/secondary/govloop-patient-journey-showcases-tweet-2010.html`, refreshed reference-context metadata/inventories/manifests, and updated `index.md`
- Unresolved issues: the showcase media/video corpus itself is still not localized; the two new public corroboration sources are intentionally low-trust and should only be used as secondary confirmation of public reachability, not as primary historical evidence

## 2026-04-18 03:19:00 BST — Safari-safe wiki UI contrast and header-control refinement
- Action performed: replaced the theme header with a local override that uses Starlight’s SVG search control and a local SVG dark/light toggle, disabled the theme’s fragile Search/ThemeSelect overrides, strengthened panel contrast and separation across header, content, navigation, and table-of-contents surfaces, and localized the remaining RefineUI font assets needed by the theme to avoid WebKit runtime 404s
- Inputs used: existing `msh-cui-wiki/` Astro/Starlight app, `@pelagornis/page` layout classes, live local UI inspection, Starlight overrides and CSS customization docs
- Outputs created: `msh-cui-wiki/src/components/Header.astro`, `msh-cui-wiki/src/components/Search.astro`, `msh-cui-wiki/src/components/ThemeSelect.astro`, `msh-cui-wiki/public/fonts/refineui-system-icons-regular.woff2`, `msh-cui-wiki/public/fonts/refineui-system-icons-filled.woff2`, updated `msh-cui-wiki/astro.config.mjs`, updated `msh-cui-wiki/src/styles/global.css`
- Unresolved issues: `@pelagornis/page` still contributes unused icon-font declarations and build-time warnings even though the visible header controls now use SVGs and the localized font files eliminate the WebKit runtime errors

## 2026-04-18 03:32:00 BST — Theme reset to native Starlight
- Action performed: removed the `@pelagornis/page` theme/plugin from the live app configuration, deleted the local header override components that existed only to compensate for it, and rebuilt the wiki styling directly on top of native Starlight layout classes for a calmer, more legible file-first UI
- Inputs used: native Starlight components and CSS variables, live local UI feedback, previous failed theme-customization pass
- Outputs created: updated `msh-cui-wiki/astro.config.mjs`, updated `msh-cui-wiki/src/styles/global.css`, removed `msh-cui-wiki/src/components/Header.astro`, removed `msh-cui-wiki/src/components/Search.astro`, removed `msh-cui-wiki/src/components/ThemeSelect.astro`
- Unresolved issues: the `@pelagornis/page` dependency and localized font files are still present in the app package for now even though the live configuration no longer uses them

## 2026-04-18 03:40:00 BST — UI documentation and minor-improvements baseline
- Action performed: documented the theme experiment and rollback rationale inside the app, clarified that the live UI policy is now “native Starlight plus minor improvements only,” and trimmed the CSS further so the live styling stays much closer to default Starlight behavior
- Inputs used: current app configuration, user feedback on the over-styled result, native Starlight baseline after theme removal
- Outputs created: `msh-cui-wiki/docs/ui-reset-notes.md`, updated `msh-cui-wiki/README.md`, updated `msh-cui-wiki/src/styles/global.css`
- Unresolved issues: package/dependency cleanup and final cross-browser verification still remained to be completed after this documentation pass

## 2026-04-18 03:50:00 BST — Theme package removal and browser verification
- Action performed: removed the unused `@pelagornis/page` dependency and leftover icon-font assets, rebuilt the app from the cleaned dependency set, and verified the simplified native-Starlight UI in Playwright WebKit, Chrome, and Edge with light/dark checks where practical
- Inputs used: `msh-cui-wiki/package.json`, `msh-cui-wiki/package-lock.json`, `msh-cui-wiki/public/`, local dev server at `http://localhost:4321/`, Playwright browser channels on macOS
- Outputs created: updated `msh-cui-wiki/package.json`, updated `msh-cui-wiki/package-lock.json`, removed `msh-cui-wiki/public/fonts/`, updated `msh-cui-wiki/docs/ui-reset-notes.md`
- Unresolved issues: Starlight still emits its informational fallback-404 build message, but the cleaned app now builds successfully and rendered coherently in the checked browsers without console errors

## 2026-04-18 04:00:00 BST — Restore original theme shell and apply surgical browser-safe UI fixes
- Action performed: restored the original `@pelagornis/page` shell as the visual baseline, replaced the two unreliable top-right icon glyphs with CSS-rendered icons while keeping the existing theme components, strengthened header/sidebar/TOC surface separation for light and dark modes, rebuilt the app, and re-verified the result in Playwright WebKit, Chrome, and Edge
- Inputs used: restored `msh-cui-wiki` theme configuration, `@pelagornis/page` layout and token styles, live browser screenshots at `http://localhost:4321/`, user feedback on the over-corrected reset
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, updated `msh-cui-wiki/README.md`, updated `msh-cui-wiki/docs/ui-reset-notes.md`, browser artifacts under `output/playwright/` including `webkit-light-fixed.png`, `webkit-dark-fixed.png`, `chrome-light-fixed.png`, `chrome-dark-fixed.png`, `edge-light-fixed.png`, and `edge-dark-fixed.png`
- Unresolved issues: `@pelagornis/page` still emits non-fatal build warnings for unresolved `ttf`/`otf` icon-font files and Astro/Starlight still logs the informational fallback `404` message during build, but the visible UI now renders coherently across the checked engines

## 2026-04-18 04:02:00 BST — Logged future Starlight graph reference
- Action performed: recorded a future-reference link for a Starlight graph-style navigation option so it is easy to revisit later during wiki-UI enhancement work
- Inputs used: user-supplied reference URL `https://fevol.github.io/starlight-site-graph/`
- Outputs created: updated `msh-cui-wiki/docs/ui-reset-notes.md`, updated `log.md`
- Unresolved issues: the reference is logged only for later consideration; no evaluation or integration work has been performed yet

## 2026-04-18 10:52:00 BST — Flattened left sidebar inner surface
- Action performed: removed the brighter inner sidebar background so the left navigation reads as a single continuous grey panel below the header
- Inputs used: live local wiki UI at `http://localhost:4321/`, existing `@pelagornis/page` sidebar wrapper structure, Playwright WebKit screenshot verification
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/webkit-sidebar-fix.png`, updated `log.md`
- Unresolved issues: none for this change; the sidebar surface now visually matches the surrounding pane

## 2026-04-18 10:54:00 BST — Matched sidebar selected state to hover state
- Action performed: overrode the left-nav and mobile-menu selected link colors so the current item uses the same readable text/background treatment as hover instead of switching to a washed-out light blue
- Inputs used: existing `@pelagornis/page` sidebar current-state rules, live local wiki UI at `http://localhost:4321/wiki/overview/health-cui-overview/`, Playwright WebKit verification
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/sidebar-selected-fix.png`, updated `log.md`
- Unresolved issues: none for this change; the selected sidebar item is now readable and visually consistent with hover

## 2026-04-18 10:56:00 BST — Reduced non-essential drift from stock Starlight Page
- Action performed: removed the custom type scale, font, content-width, and general body/link/inline-code color overrides so the app falls back more closely to stock `Starlight Page` behavior while preserving the browser-safety fixes and the gentler panel treatment
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, comparison against the public `Starlight Page` demo, Playwright WebKit verification on `http://localhost:4321/wiki/overview/health-cui-overview/`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/drift-reduced-webkit.png`, updated `log.md`
- Unresolved issues: intentional drift still remains in the header/sidebar/TOC surface treatment, CSS-rendered top-right icons, hidden hero treatment, custom canonical-note card styling, and repo-specific navigation/content structure

## 2026-04-18 11:01:00 BST — Neutralized residual blue theme bleed
- Action performed: removed the remaining blue-tinted theme token overrides and blue-treated note/background surfaces so the local UI tracks the stock `Starlight Page` black/grey palette more closely in both light and dark modes
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, user feedback comparing against `https://starlight-themes.netlify.app/page/`, Playwright WebKit verification on `http://localhost:4321/wiki/overview/health-cui-overview/`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifacts `output/playwright/neutralized-page-theme.png` and `output/playwright/neutralized-page-theme-dark.png`, updated `log.md`
- Unresolved issues: intentional differences still remain in the panel definition, CSS-rendered header icons, hidden hero treatment, custom canonical-note card treatment, and repo-specific information architecture

## 2026-04-18 11:03:00 BST — Unified sidebar hover and selected states
- Action performed: made the left-sidebar and mobile-menu hover and selected states use the same darker grey chip, forced the selected text to stop flashing to blue/white, and set both hover and selected labels to bold for clearer navigation feedback
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, existing Page theme sidebar state rules, Playwright WebKit verification on `http://localhost:4321/wiki/overview/health-cui-overview/`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/sidebar-hover-selected-unified.png`, updated `log.md`
- Unresolved issues: none for this interaction-state pass; hover and selected now share the same stable visual treatment

## 2026-04-18 11:05:00 BST — Realigned header navigation to the main content column
- Action performed: moved the `Overview`, `Sources`, and `Inventories` header navigation cluster so it sits above the main pane and aligns to the same left edge as the main content column instead of hanging off the site-title block
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, existing `@pelagornis/page` header layout, Playwright WebKit verification on `http://localhost:4321/wiki/overview/health-cui-overview/`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/header-nav-aligned-main-pane.png`, updated `log.md`
- Unresolved issues: none for this desktop-header alignment pass; mobile still relies on the theme’s existing compact header behavior

## 2026-04-18 11:07:00 BST — Converted generated canonical notes from cards to blockquotes
- Action performed: changed the mirrored-page canonical-source notice from a generated `<div>` card to a generated `<blockquote>` and simplified the styling so the note reads as a blockquote under the page title instead of as a boxed panel
- Inputs used: local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, local `msh-cui-wiki/src/styles/global.css`, regenerated mirrored docs, Playwright WebKit verification on `http://localhost:4321/wiki/overview/health-cui-overview/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, updated `msh-cui-wiki/src/styles/global.css`, regenerated `msh-cui-wiki/src/content/docs/`, browser artifact `output/playwright/canonical-note-blockquote.png`, updated `log.md`
- Unresolved issues: none for this change; the note is now semantically and visually a blockquote

## 2026-04-18 11:13:00 BST — Removed custom blockquote skin to match stock Page example more closely
- Action performed: removed the remaining custom `canonical-note` blockquote styling so the generated canonical-source note falls back to the native `Starlight Page` blockquote treatment referenced from the kitchen-sink example
- Inputs used: user clarification referencing `https://starlight-themes.netlify.app/page/kitchen-sink/#blockquotes`, local `msh-cui-wiki/src/styles/global.css`, Playwright WebKit verification on `http://localhost:4321/wiki/overview/health-cui-overview/`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/canonical-note-stock-blockquote.png`, updated `log.md`
- Unresolved issues: the canonical note still contains repo-specific content and a code-formatted source path, but its blockquote treatment now comes from the theme rather than from custom local styling

## 2026-04-18 11:28:00 BST — Converted Plain English context sections to blockquotes in canonical wiki pages
- Action performed: replaced every `## Plain English context` section in the canonical wiki with a markdown blockquote containing a bold `Plain English context` lead line and non-bold explanatory prose on the next quoted line, then re-synced the mirror so the local Astro wiki reflects the change
- Inputs used: canonical pages under `wiki/entities/`, `wiki/overview/`, and `wiki/mappings/`, local sync script, live local Astro wiki at `http://localhost:4321/`
- Outputs created: updated 18 canonical wiki pages, refreshed mirrored docs under `msh-cui-wiki/src/content/docs/`, updated `log.md`
- Unresolved issues: none for this pass; the old heading form no longer remains in the canonical wiki

## 2026-04-18 13:00:08 BST — Applied Plain English context blockquotes universally in the mirrored wiki UI
- Action performed: updated the mirror sync script so every mirrored page now receives a `Plain English context` blockquote immediately below the canonical-source note unless the canonical content already starts with its own blockquote, ensuring the treatment appears consistently on index, root markdown pages, derived pages, and provenance pages as well as authored wiki entries
- Inputs used: local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, regenerated mirror via `npm run sync-content`, live verification on `http://localhost:4321/`, `http://localhost:4321/readme/`, `http://localhost:4321/agents/`, `http://localhost:4321/log/`, `http://localhost:4321/derived/inventories/source-inventory/`, and `http://localhost:4321/raw/metadata/toolkit-mscui/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, refreshed mirrored docs under `msh-cui-wiki/src/content/docs/`, updated `log.md`
- Unresolved issues: generated context text now falls back to existing descriptions or path-based summaries for pages without authored introductions, so some pages have concise machine-derived context rather than bespoke prose

## 2026-04-18 13:08:35 BST — Reduced mirrored blockquote usage and made mirrored log newest-first
- Action performed: narrowed the mirror behavior so normal pages promote only the first `##` section into a single intro blockquote instead of converting every section, restarted the local Astro watcher/dev server to clear stale transform behavior, and kept the mirrored `log` page in descending newest-first heading order without turning every entry into a blockquote
- Inputs used: local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, regenerated mirror via `npm run sync-content`, restarted `npm run dev`, live verification on `http://localhost:4321/readme/` and `http://localhost:4321/log/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, refreshed mirrored docs under `msh-cui-wiki/src/content/docs/`, restarted local dev session, updated `log.md`
- Unresolved issues: the promoted intro blockquote currently sits above some existing lead-in prose on pages like `README.md`, which is acceptable for now but could be refined further if a stricter content order is preferred

## 2026-04-18 13:11:20 BST — Switched promoted intro sections to real HTML blockquotes with list support
- Action performed: replaced the fragile quoted-markdown rendering for promoted first `##` sections with a real HTML blockquote renderer that preserves bullet and numbered lists, then restarted the local Astro watcher/dev server so the live site picked up the new generator
- Inputs used: local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, regenerated mirror via `npm run sync-content`, restarted `npm run dev`, live verification on `http://localhost:4321/readme/` and `http://localhost:4321/log/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, refreshed mirrored docs under `msh-cui-wiki/src/content/docs/`, restarted local dev session, updated `log.md`
- Unresolved issues: inline markdown inside promoted blockquote lists is currently handled conservatively by a small local renderer rather than the full markdown pipeline, which is acceptable for the current corpus but may need expansion if more complex inline constructs appear

## 2026-04-18 13:14:00 BST — Let the main content canvas expand to the actual TOC-aware remaining width
- Action performed: replaced the desktop hard-coded right-side content reservation with a TOC-aware width calculation so the main content wrapper now expands to the true remaining space between the fixed sidebar and the fixed right-hand TOC gutter
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, existing `@pelagornis/page` two-column layout rules
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, updated `log.md`
- Unresolved issues: the exact visual balance between main-content width and TOC gap may still need a final small gutter tweak after live visual review

## 2026-04-18 13:16:00 BST — Tightened TOC panel shadow so border alignment reads correctly
- Action performed: reduced the right-hand TOC card shadow independently from the broader panel shadow so the thin grey border reads as the visual edge instead of the glow extending past the intended alignment line
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, user visual feedback on TOC/header edge alignment
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, updated `log.md`
- Unresolved issues: if the border still reads slightly off after refresh, the next adjustment should be a tiny gutter shift rather than further content-width changes

## 2026-04-18 13:23:11 BST — Fixed WebKit-verified main-pane collapse and aligned TOC edge to header controls
- Action performed: used Playwright WebKit on `http://localhost:4321/raw/metadata/toolkit-mscui/` to diagnose that the main content wrapper had collapsed to `114px` because the desktop layout was double-reserving space for the right-hand TOC; removed the duplicate right margin reservation and pinned the visible TOC card to a measured `32px` right gutter so its border aligns with the header control edge
- Inputs used: Playwright WebKit live measurements from the local Astro wiki, local `msh-cui-wiki/src/styles/global.css`, screenshots `output/playwright/webkit-layout-broken.png`, `output/playwright/webkit-layout-fixed.png`, and `output/playwright/webkit-layout-fixed-2.png`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, Playwright artifacts under `output/playwright/`, updated `log.md`
- Unresolved issues: none for this specific layout bug; future adjustments should be validated in WebKit first because the fixed-sidebar/fixed-TOC theme layout is easy to over-constrain

## 2026-04-18 13:44:09 BST — Matched the main-pane right margin to the TOC border in WebKit
- Action performed: reduced the in-flow desktop TOC sidebar reservation by `8px` so the main content ends `40px` from the TOC left border, matching the `40px` left gap from the fixed sidebar without moving the TOC card or changing its shadow
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, Playwright WebKit live measurements on `http://localhost:4321/readme/`, screenshots `output/playwright/readme-layout-before-gap-fix.png` and `output/playwright/readme-layout-after-gap-fix.png`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, updated `log.md`
- Unresolved issues: none for this margin fix; future layout changes should continue to be checked against the TOC border in WebKit rather than by eye against the panel shadow

## 2026-04-18 13:46:15 BST — Restored proper heading parsing for the newest mirrored log entry
- Action performed: fixed the mirror generator so the injected canonical-source HTML blockquote is followed by a true blank markdown break, then re-synced and restarted the live Astro dev session so the first log entry renders as a real heading instead of literal `##` text
- Inputs used: local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, mirrored `msh-cui-wiki/src/content/docs/log.md`, Playwright WebKit verification on `http://localhost:4321/log/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, refreshed mirrored docs under `msh-cui-wiki/src/content/docs/`, restarted live dev session, updated `log.md`
- Unresolved issues: none for this parsing fix; the newest log item now matches the same heading treatment as the entries below it in the live wiki UI

## 2026-04-18 13:53:26 BST — Preserved mixed prose-and-list structure in promoted intro blockquotes
- Action performed: updated the promoted intro-section HTML renderer so it preserves transitions between paragraphs and unordered/ordered lists within the same section, fixing flattened bullets in pages like `AGENTS.md`
- Inputs used: canonical `AGENTS.md`, local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, regenerated mirrored `msh-cui-wiki/src/content/docs/AGENTS.md`, Playwright WebKit verification on `http://localhost:4321/agents/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, refreshed mirrored docs under `msh-cui-wiki/src/content/docs/`, browser artifact `output/playwright/agents-project-purpose-fixed.png`, updated `log.md`
- Unresolved issues: none for this renderer fix; the AGENTS intro blockquote now preserves both prose and list structure correctly in the live wiki UI

## 2026-04-18 13:56:22 BST — Split AGENTS project-purpose sentence and list lead cleanly
- Action performed: updated the canonical `AGENTS.md` wording so the project-purpose sentence ends before `It stores:`, added explicit spacing before both introductory lists in that section, and re-verified the live mirrored AGENTS page in WebKit
- Inputs used: canonical `AGENTS.md`, mirrored `msh-cui-wiki/src/content/docs/AGENTS.md`, Playwright WebKit verification on `http://localhost:4321/agents/`
- Outputs created: updated `AGENTS.md`, refreshed mirrored AGENTS page, browser artifact `output/playwright/agents-project-purpose-break-fixed.png`, updated `log.md`
- Unresolved issues: none for this wording/layout cleanup; the AGENTS intro now matches the intended paragraph-plus-bullets structure in the live wiki UI

## 2026-04-18 13:57:46 BST — Removed numbering from AGENTS repository-rule headings in the wiki UI
- Action performed: updated the mirror sync transform so only the mirrored `AGENTS.md` page strips the `1)` through `7)` prefixes from third-level repository-rule headings, leaving the canonical source untouched while simplifying the wiki UI and TOC labels
- Inputs used: canonical `AGENTS.md`, local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, regenerated mirrored `msh-cui-wiki/src/content/docs/AGENTS.md`, Playwright WebKit verification on `http://localhost:4321/agents/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, refreshed mirrored AGENTS page, browser artifact `output/playwright/agents-rules-unnumbered.png`, updated `log.md`
- Unresolved issues: none for this mirror-only presentation change; repository-rule headings now render unnumbered in the wiki UI while the canonical markdown keeps its original numbering

## 2026-04-18 14:00:49 BST — Matched AGENTS intro lead-line spacing inside the promoted blockquote
- Action performed: added a blockquote spacing rule so consecutive lead paragraphs that introduce a following list get the same `20px` top spacing already present around later list lead-ins, making `It stores:` match `The repo follows the LLM Wiki pattern:` in the AGENTS wiki UI
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, mirrored AGENTS intro blockquote, Playwright WebKit measurements and screenshot on `http://localhost:4321/agents/`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/agents-it-stores-spacing-fixed.png`, updated `log.md`
- Unresolved issues: none for this spacing fix; WebKit now measures `20px` before and after both AGENTS intro lead lines

## 2026-04-18 20:24:44 BST — Squared only the TOC right corners when the TOC overflows
- Action performed: added a global head script that detects whether `.page-toc-sticky` actually needs a vertical scrollbar and toggles a `toc-has-scrollbar` class, then used CSS to square only the top-right and bottom-right TOC corners in that overflow state while preserving the left-side rounding
- Inputs used: local `msh-cui-wiki/astro.config.mjs`, new `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, Playwright WebKit verification on `http://localhost:4321/log/`
- Outputs created: updated `msh-cui-wiki/astro.config.mjs`, new `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, browser artifacts `output/playwright/toc-scrollbar-before.png` and `output/playwright/toc-scrollbar-square-right.png`, updated `log.md`
- Unresolved issues: none for this overflow-state change; in WebKit on `/log/`, the TOC reports `needsScrollbar: true`, `borderTopRightRadius: 0px`, `borderBottomRightRadius: 0px`, and the left corners remain `24px`

## 2026-04-18 20:33:48 BST — Added default Wiki header mode and documented JJ checkpointing
- Action performed: inserted a new `Wiki` header button to the left of `Overview`, added local header-state logic so `Wiki` is the active default mode on root/core/non-source/non-inventory pages while `Overview`, `Sources`, and `Inventories` each own their respective buckets, and added an explicit repository instruction to create `jj` commits after meaningful research, wiki-writing, and UI-development stages
- Inputs used: local `msh-cui-wiki/astro.config.mjs`, local `msh-cui-wiki/src/components/Head.astro`, local `AGENTS.md`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `/`, `/agents/`, `/wiki/overview/health-cui-overview/`, `/wiki/source-notes/toolkit-mirror-mscui/`, and `/derived/inventories/source-inventory/`
- Outputs created: updated `msh-cui-wiki/astro.config.mjs`, updated `msh-cui-wiki/src/components/Head.astro`, updated `AGENTS.md`, browser artifact `output/playwright/header-wiki-nav-webkit.png`, updated `log.md`
- Unresolved issues: Playwright WebKit verification passed for the new nav behavior; a Playwright Chromium pass was not completed in this stage because the local `chrome-for-testing` browser bundle was not installed for the CLI session

## 2026-04-18 20:38:57 BST — Fixed root-page TOC duplication and promoted Index as the parent TOC node
- Action performed: adjusted the mirrored root/index handling so the TOC no longer shows two sibling `Overview` items, rewrote the root-page top TOC link from `#_top` to `/index`, and nested the actual page sections under a single top-level `Index` entry with the theme’s standard inset/guide-line structure
- Inputs used: local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, local `msh-cui-wiki/src/components/Head.astro`, local Astro dev server on `http://localhost:4321/`, Playwright WebKit DOM verification and screenshot on `/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, updated `msh-cui-wiki/src/components/Head.astro`, added `msh-cui-wiki/src/pages/index/index.astro`, browser artifact `output/playwright/page-index-toc-webkit.png`, updated `log.md`
- Unresolved issues: the explicit `/index/` route currently redirects to `/`; the right-hand TOC link target is correct and resolves, but the canonical rendered page remains the root URL

## 2026-04-18 20:44:29 BST — Made the first TOC item match the current page title across the wiki UI
- Action performed: generalized the TOC transform so the first right-hand TOC item now uses the current page `h1` text instead of the stock `Overview` label, and nests the real section anchors underneath that page-title parent item on normal wiki pages as well as on the root page
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit DOM verification on `/` and `/wiki/overview/health-cui-overview/`, visual verification on `/wiki/overview/health-cui-overview/`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, browser artifact `output/playwright/toc-page-title-webkit.png`, updated `log.md`
- Unresolved issues: none for this TOC-title behavior in WebKit; the first TOC item now reads `Index` on the root page and the actual page title on normal wiki pages

## 2026-04-18 21:03:20 BST — Stabilized nested TOC wrapping against active-state padding and font weight
- Action performed: added a hidden bold measurement layer for nested right-hand TOC items and moved their visible text into an overlaid label layer so default-state wrapping is calculated against the same padded content box and active-state font weight used by hover/current fills, preventing reflow when those states appear
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `/wiki/overview/health-cui-overview/` and `/wiki/overview/health-cui-overview/#synthesis`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-no-reflow-webkit.png`, updated `log.md`
- Unresolved issues: none in the WebKit pass; the nested TOC current item now keeps a constant `200px` content box and `15.2px` left/right inner padding while switching the visible label from normal weight to `500`
