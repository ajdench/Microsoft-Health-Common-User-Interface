# Log

## 2026-04-25 17:07:42 BST — DESIGN.md prototype UI standard introduced
- Action performed: localized Google Labs Code DESIGN.md reference material, added provenance and source-note coverage, introduced a companion wiki page explaining DESIGN.md usage, and established an app-local `DESIGN.md` visual standard for the EHR PWA prototype.
- Inputs used: `https://stitch.withgoogle.com/docs/design-md/specification`, `https://github.com/google-labs-code/design.md`, existing prototype CSS/component contracts, and existing companion web-app stack notes.
- Outputs created: `raw/sources/references/design-md/`, `raw/metadata/design-md-format-specification.json`, `wiki/source-notes/design-md-format-specification.md`, `wiki/companion-web-app-stack/design-md-ui-standard.md`, `prototypes/ehr-pwa/DESIGN.md`, updated prototype README/package scripts, updated companion stack index, updated root index.
- Unresolved issues: the upstream DESIGN.md format is alpha, so the prototype standard should be linted and kept conservative as the format evolves.

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

## 2026-04-18 21:14:52 BST — Made nested TOC wrapping respect the actual inset content box
- Action performed: moved the nested TOC horizontal inset from the overlaid label/measure layers onto the shared shell itself so wrap calculation is driven by the real inset content box, making the right inner margin match the left visually in current/fill state and forcing earlier line breaks where needed
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-inset-wrap-agents-webkit.png`, updated `log.md`
- Unresolved issues: none in the AGENTS WebKit case; the previously problematic current TOC item now wraps to three lines with the inset shell defining the content width

## 2026-04-18 21:22:49 BST — Extended inset-width TOC wrapping rules to deep nested TOC levels
- Action performed: generalized the measured-shell and no-reflow TOC selectors from first-level nested items only to all nested TOC levels, so deeply nested items such as AGENTS repository-rule entries use the same inset-width wrapping and hidden bold measurement logic as shallower TOC items
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-deep-nested-wrap-webkit.png`, updated `log.md`
- Unresolved issues: none in the WebKit pass; the previously failing deep nested AGENTS TOC item now wraps to three lines with equal `18px` left/right shell inset

## 2026-04-18 21:43:07 BST — Matched selected TOC chip fill token to hover
- Action performed: aligned the selected/current TOC chip fill token with the hover fill token so the selected state uses the same fill color family and corner radius treatment as hover instead of a separate darker active fill
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit visual verification on `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-selected-matches-hover-webkit.png`, updated `log.md`
- Unresolved issues: none for this token-alignment pass; selected/current and hover now draw from the same fill treatment

## 2026-04-18 22:02:11 BST — Restored Page-default nested TOC fill, radius, and inset while keeping no-reflow wrapping
- Action performed: removed the custom nested TOC hover/current chip styling that had drifted from the Page theme, then restored the nested hover/current behavior to the theme defaults so nested items again use the Page default grey fill, `12px` radius, and left inset while preserving the hidden-measure no-reflow wrapping logic
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `http://localhost:4321/readme/#repo-shape` and `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-nested-page-defaults-webkit.png`, updated `log.md`
- Unresolved issues: none in the WebKit pass; nested current items are back on the Page default chip treatment and the measured wrapping logic remains active

## 2026-04-18 22:05:44 BST — Rebased nested TOC measurement geometry onto Page default spacing
- Action performed: replaced the custom nested TOC measurement-shell spacing with the Page theme’s own spacing tokens so the no-reflow logic now reserves the Page-default `8px` inset/margin geometry instead of the earlier oversized custom inset, while still keeping equal left/right visual reserve for wrapped text
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit geometry verification on `http://localhost:4321/readme/#repo-shape` and `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-nested-page-geometry-defaults-webkit.png`, updated `log.md`
- Unresolved issues: none in the WebKit pass; nested current items now measure at `8px` left inset, `8px` right reserve, `2px` vertical margins, `12px` radius, and retain stable wrapping

## 2026-04-18 22:13:28 BST — Restored nested TOC selected-state inset behavior on hash navigation
- Action performed: added a hash-selected state for nested TOC links so deep section anchors selected via URL hash receive the same inset shell fill treatment as hover, while preserving the Page default color/radius tokens and the no-reflow measurement shell
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-hash-selected-shell-webkit.png`, updated `log.md`
- Unresolved issues: none in the WebKit pass; the deep nested AGENTS anchor now carries a selected shell with `rgb(245, 245, 245)` fill and `12px` radius even though Starlight keeps `aria-current` on the page-title TOC node

## 2026-04-18 22:16:57 BST — Documented and rebuilt the nested TOC contract on top of Page defaults
- Action performed: documented the nested TOC requirements in `msh-cui-wiki/docs/ui-reset-notes.md`, then simplified the local nested TOC layer so Page continues to own the visual tokens and spacing values while the local shell only reserves the active-state width contract and preserves deep-hash selected-state continuity
- Inputs used: local `msh-cui-wiki/docs/ui-reset-notes.md`, local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/docs/ui-reset-notes.md`, updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-defaults-plus-contract-webkit.png`, updated `log.md`
- Unresolved issues: none in the WebKit pass; the deep nested AGENTS TOC item now uses the Page default `2px` vertical margins, `12px` radius, theme fill token, and a stable three-line measured contract

## 2026-04-18 22:24:43 BST — Reset nested TOC to Phase 0 pure Page defaults
- Action performed: removed the local nested TOC measurement-shell logic and the local deep-hash selected-state logic so nested right-hand TOC items now render with the raw `@pelagornis/page` defaults again, and rewrote the reset notes so future TOC work proceeds in explicit phases from this clean baseline
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, local `msh-cui-wiki/docs/ui-reset-notes.md`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `msh-cui-wiki/docs/ui-reset-notes.md`, browser artifact `output/playwright/toc-phase-0-page-defaults-webkit.png`, updated `log.md`
- Unresolved issues: nested TOC is intentionally back on raw Page defaults, so the deep section anchor is no longer visually selected on hash navigation and the earlier no-reflow wrap contract is absent until a later phase explicitly reintroduces it

## 2026-04-18 22:30:33 BST — Kept the title/nesting contract but removed parent double-selection on hash-target children
- Action performed: added a selection-semantics pass to the local TOC rewrite so the page-title parent item keeps the title-and-nesting contract but stops advertising itself as current when a hash-target child section is active, eliminating the visible double-selection while leaving nested items on Page-default visuals
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/docs/ui-reset-notes.md`, running Astro dev server on `http://localhost:4321/`, Playwright WebKit verification on `http://localhost:4321/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/docs/ui-reset-notes.md`, browser artifact `output/playwright/toc-phase-0-parent-deselected-webkit.png`, updated `log.md`
- Unresolved issues: the deep hash-target child is not yet visually selected in this phase; only the parent double-selection has been removed, which is the intended Phase 0 baseline before any child-selection or wrap-contract logic is reintroduced

## 2026-04-18 23:24:12 BST — Switched TOC to static title label plus minimal hash-selection correction
- Action performed: removed the experimental TOC list rewrite and parent/child selection ownership from the local head script, added a separate static page-title label above the untouched theme TOC list on desktop and mobile, and added only a minimal hash-selection pass so the exact matching TOC link becomes current while the theme retains ownership of list structure and visual styling
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, local `msh-cui-wiki/docs/ui-reset-notes.md`, running Astro dev server on `http://localhost:4322/`, Playwright WebKit verification on `http://localhost:4322/agents/#wiki-content-must-distinguish-fact-from-interpretation` and `http://localhost:4322/wiki/source-notes/microsoft-health-cui-v1-3-2008/#original-url`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `msh-cui-wiki/docs/ui-reset-notes.md`, browser artifact `output/playwright/toc-static-title-hash-selection-webkit.png`, updated `log.md`
- Unresolved issues: no inconsistency seen in the tested desktop/mobile WebKit paths after this change; hashes not present in a page’s TOC will still fall back to the theme’s native behavior because there is no matching TOC link to promote

## 2026-04-18 23:29:21 BST — Removed the desktop TOC pane heading
- Action performed: hid the desktop right-hand TOC pane heading `On this page` so the pane now starts with the static page-title label, while leaving the mobile TOC summary heading unchanged
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4322/`, Playwright WebKit verification on `http://localhost:4322/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/toc-pane-heading-removed-webkit.png`, updated `log.md`
- Unresolved issues: none for the desktop pane; mobile still shows `On this page`, which was left unchanged in this pass

## 2026-04-18 23:39:54 BST — Reduced heading link icons to half size and grey
- Action performed: overrode the Starlight heading-anchor icon size token to half its default value and changed the heading anchor link color to the grey secondary text color
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4322/`, Playwright WebKit verification on `http://localhost:4322/agents/`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/title-anchor-icons-grey-half-webkit.png`, updated `log.md`
- Unresolved issues: none in the WebKit pass; the heading anchor link color is now grey and the reduced icon-size token is active

## 2026-04-18 23:53:58 BST — Lowered heading link icon to the text bottom and lightened its grey
- Action performed: adjusted the heading anchor link color to a lighter grey and increased the anchor SVG vertical offset so the hovered icon sits against the text bottom rather than centered on the baseline
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4322/`, Playwright WebKit verification on `http://localhost:4322/#overview`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, browser artifact `output/playwright/heading-anchor-alignment-webkit.png`, updated `log.md`
- Unresolved issues: none in the measured WebKit pass; the hovered icon rendered at `rgb(148,148,148)` and its SVG bottom edge sat about `1.3px` below the heading text bottom, which is intentionally closer to the text-bottom alignment requested

## 2026-04-18 23:59:58 BST — Split the root Microsoft Health heading across two lines and tightened anchor icon bottom alignment
- Action performed: changed the root `index.md` Microsoft Health section heading to a two-line form using an inline break and reduced the heading anchor SVG vertical offset so the hovered icon bottom sits on the text-bottom line instead of below it
- Inputs used: local `index.md`, local `msh-cui-wiki/src/styles/global.css`, running Astro dev server on `http://localhost:4322/`, Playwright WebKit verification on `http://localhost:4322/readme/#repo-shape` and `http://localhost:4322/`
- Outputs created: updated `index.md`, updated `msh-cui-wiki/src/styles/global.css`, browser artifacts `output/playwright/repo-shape-anchor-alignment-webkit.png` and `output/playwright/index-two-line-heading-webkit.png`, updated `log.md`
- Unresolved issues: none in the WebKit pass; the `Repo shape` icon bottom measured within `0.1px` of the heading text bottom and the root index heading now renders as `Microsoft Health (MSH)<br>Common User Interface (CUI)` with slug `microsoft-health-mshcommon-user-interface-cui`

## 2026-04-19 00:12:03 BST — Restarted stale 4322 server and re-established visible anchor-icon movement
- Action performed: diagnosed that the Astro/Vite instance on `http://localhost:4322/` was serving stale compiled CSS after stylesheet edits, restarted the mirror server cleanly with the sync watcher and Astro bound explicitly to port `4322`, reverted the failed outer-link positioning experiment, and restored SVG-level anchor positioning with a larger `translateY(0.30em)` so the hover-state icon movement is visibly testable
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, live HTML/CSS inspection via `curl` against `http://localhost:4322/` and `http://localhost:4322/readme/`, Playwright WebKit verification on `http://localhost:4322/readme/#repo-shape`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, refreshed browser artifact `output/playwright/repo-shape-anchor-alignment-webkit.png`, updated `log.md`
- Unresolved issues: the reliable workflow conclusion is that this dev setup is not hot-reloading `src/styles/global.css` consistently, so CSS edits should be treated as restart-required on this app until proven otherwise; current live state on `4322` serves `transform: translateY(0.30em)` and shows the icon visibly lower than the previous stale render

## 2026-04-19 00:27:07 BST — Added a reliable 4322 dev workflow and moved volatile anchor overrides into Head.astro
- Action performed: added a dedicated polling-based `dev:4322` script so the wiki mirror can be started on a fixed port with more reliable file watching, and moved the heading-anchor size/color/position overrides out of `src/styles/global.css` into an inline global `<style>` block in `src/components/Head.astro` so those changes are served directly in page HTML instead of depending on the flaky CSS HMR path
- Inputs used: local `msh-cui-wiki/package.json`, local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, live verification via `curl` against `http://localhost:4322/readme/`
- Outputs created: updated `msh-cui-wiki/package.json`, updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `log.md`
- Unresolved issues: none for the new workflow route; live `4322` now serves the anchor overrides inline in the HTML response, which is the intended fix for the stale stylesheet issue

## 2026-04-19 00:36:27 BST — Reclassified the Astro/Starlight reference bundle under a dedicated skills directory
- Action performed: moved the standalone `astro-starlight-documentation-expert` bundle out of the repository root into a new top-level `skills/` directory so it is clearly classified as tooling/reference material rather than wiki corpus content or part of the `msh-cui-wiki` app
- Inputs used: local `astro-starlight-documentation-expert/`, local repository structure review, local `msh-cui-wiki/README.md`
- Outputs created: new `skills/` directory, moved `skills/astro-starlight-documentation-expert/`, updated `log.md`
- Unresolved issues: none; the bundle remains untracked unless explicitly added to version control later

## 2026-04-19 00:44:43 BST — Classified skills as non-corpus support material in AGENTS
- Action performed: updated the repository operating rules to define the top-level `skills/` directory as local agent/tooling reference material and to state explicitly that it is not part of the canonical Health CUI corpus unless content is intentionally copied into canonical repo areas under normal provenance rules
- Inputs used: local `AGENTS.md`, local repository structure, prior `skills/` reclassification decision
- Outputs created: updated `AGENTS.md`, updated `log.md`
- Unresolved issues: none

## 2026-04-19 00:46:42 BST — Repositioned the heading anchor icon to the visible text-bottom target and verified it on live 4322
- Action performed: moved the live inline heading-anchor override in `msh-cui-wiki/src/components/Head.astro` from `translateY(0.30em)` to `translateY(0.18em)`, restarted the `4322` dev server cleanly, and re-verified the `Repo shape` heading in WebKit so the anchor icon now sits near the visible text bottom instead of well below it
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, live `http://localhost:4322/readme/`, Playwright WebKit verification on `http://localhost:4322/readme/#repo-shape`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, refreshed browser artifact `output/playwright/repo-shape-anchor-alignment-webkit.png`, updated `log.md`
- Unresolved issues: the icon now renders about `1.5px` above the heading element bottom in WebKit, which visually places it near the requested text-bottom line rather than on the lower descender region

## 2026-04-19 00:49:25 BST — Switched heading anchor placement from fixed offsets to computed font-metric alignment
- Action performed: replaced the fixed `translateY(...)` anchor tweak in `msh-cui-wiki/src/components/Head.astro` with a per-heading calculation that measures the heading text using canvas metrics, derives the band between descenderless text-bottom and full glyph-bottom, and sets a wrapper-level `--msh-anchor-shift` so the icon is placed into that band on load, resize, and page navigation
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, live `http://localhost:4322/#concepts`, Playwright WebKit verification on the `Concepts` heading
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, browser artifact `output/playwright/concepts-anchor-alignment-webkit.png`, updated `log.md`
- Unresolved issues: none in the current WebKit pass; the `Concepts` heading computed `--msh-anchor-shift: -13.70px`, and the icon now renders about `1.5px` above the heading element bottom, which is the intended placement away from the descender line

## 2026-04-19 01:02:47 BST — Replaced failed computed anchor placement with a working icon-wrapper offset on live 4322
- Action performed: removed the failed computed anchor-placement experiments from `msh-cui-wiki/src/components/Head.astro` and switched the heading anchor icon to a direct wrapper offset using `position: relative; top: -8px`, which is the first mechanism that visibly moved the icon into the requested zone on the live `4322` page
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, live `http://localhost:4322/#concepts`, Playwright WebKit verification on the `Concepts` heading, local browser artifact `output/playwright/concepts-anchor-test-webkit.png`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, refreshed browser artifact `output/playwright/concepts-anchor-alignment-webkit.png`, updated `log.md`
- Unresolved issues: this is a direct measured placement rather than a successful per-heading metric computation; it is the correct current fix because it actually changes the live browser result and places the icon close to the requested band between visible text bottom and descender reserve

## 2026-04-19 01:17:36 BST — Refined the working icon-wrapper offset upward to place the icon into the title x-height zone
- Action performed: raised the live heading anchor icon wrapper from `top: -8px` to `top: -18px` in `msh-cui-wiki/src/components/Head.astro`, restarted the `4322` dev server, and re-captured the `Concepts` heading in WebKit so the chain icon sits materially higher and reads against the heading’s x-height zone rather than the descender reserve
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, live `http://localhost:4322/#concepts`, Playwright WebKit verification on the `Concepts` heading, local browser artifact `output/playwright/concepts-anchor-test-webkit.png`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, refreshed browser artifact `output/playwright/concepts-anchor-alignment-webkit.png`, updated `log.md`
- Unresolved issues: none in the current live pass; the served HTML on `4322` now contains `top: -18px`, and the icon is visibly higher than the earlier `-8px` state

## 2026-04-19 01:43:42 BST — Removed the broken dynamic heading-anchor sizing logic and reset the live anchor to the verified mid offset
- Action performed: removed the failed per-heading x-glyph sizing and shift calculation from `msh-cui-wiki/src/components/Head.astro`, restored a fixed wrapper offset, set the live heading anchor icon to `top: -15px`, restarted the `4322` dev server, and re-captured the `Concepts` heading from the live page after hover
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, live `http://localhost:4322/#concepts`, served HTML inspection via `curl`, Playwright browser verification against the restarted `4322` server, comparison artifacts `output/playwright/concepts-anchor-test-minus14-webkit.png`, `output/playwright/concepts-anchor-test-minus15-webkit.png`, and `output/playwright/concepts-anchor-test-minus16-webkit.png`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, refreshed browser artifact `output/playwright/concepts-anchor-alignment-webkit.png`, updated `log.md`
- Unresolved issues: the icon placement is now intentionally driven by the verified rendered midpoint rather than the failed dynamic metric model; if a later pass still needs tighter optical correction, it should start from this stable `-15px` baseline and compare rendered screenshots instead of reintroducing the broken sizing script

## 2026-04-19 01:53:36 BST — Lowered the heading anchor to the x-height midpoint on the actual Viewable UI Examples heading
- Action performed: lowered the fixed heading-anchor wrapper offset from `-15px` to `-8px` in `msh-cui-wiki/src/components/Head.astro`, restarted the `4322` dev server, and re-verified the exact `What is directly viewable now` heading on the live `Viewable UI Examples` page instead of inferring from the earlier `Concepts` heading
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, live `http://localhost:4322/wiki/overview/viewable-ui-examples/#what-is-directly-viewable-now`, served CSS inspection confirming `top: -8px`, Playwright browser verification on the exact heading, comparison passes using temporary live offsets `-11px`, `-9px`, and `-8px`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, browser artifact `output/playwright/viewable-anchor-alignment-webkit.png`, updated `log.md`
- Unresolved issues: none in the live verification pass; the alignment baseline for this icon is now the actual target heading the user supplied, and any later tuning should compare against that heading first

## 2026-04-19 01:58:49 BST — Documented the heading-anchor alignment workflow and failure modes for future UI work
- Action performed: wrote a dedicated app note describing the heading-anchor alignment requirement, the stale-CSS/dev-server failure mode, the discarded dynamic metric approach, the verified optical-tuning workflow, and the current `-8px` baseline; linked that note from the existing UI reset notes and the app README
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/docs/ui-reset-notes.md`, local `msh-cui-wiki/README.md`, prior Playwright verification on `http://localhost:4322/wiki/overview/viewable-ui-examples/#what-is-directly-viewable-now`
- Outputs created: new `msh-cui-wiki/docs/heading-anchor-alignment.md`, updated `msh-cui-wiki/docs/ui-reset-notes.md`, updated `msh-cui-wiki/README.md`, updated `log.md`
- Unresolved issues: none; the future-reference path for this topic is now explicit and local to the app docs

## 2026-04-19 01:42:02 BST — Added a wiki page for surviving viewable UI examples and exposed it in the wiki navigation
- Action performed: authored a new overview page that separates directly viewable UI artefacts, inspectable sample-page implementations, preserved demonstrator artefacts, and no-longer-live public URLs, linked it from the canonical index, mirrored four representative preview images into the Astro app’s public assets, and verified that the new route builds successfully in the wiki UI
- Inputs used: localized toolkit sample website under `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/`, localized showcase assets and demonstrator files, existing source notes for the toolkit mirror and showcase remnants, live status checks of `mscui.net` / `pjd.mscui.net` on 2026-04-19, and the existing `msh-cui-wiki` sync/build pipeline
- Outputs created: `wiki/overview/viewable-ui-examples.md`, `msh-cui-wiki/public/viewable-ui-examples/`, updated `index.md`, refreshed mirrored docs under `msh-cui-wiki/src/content/docs/`, updated `log.md`
- Unresolved issues: the page is intentionally conservative about what counts as directly viewable because many surviving artefacts are source files or static images rather than runnable historical web experiences

## 2026-04-19 01:51:35 BST — Made the Astro mirror rewrite internal links and publish linked repo artefacts without changing canonical wiki files
- Action performed: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs` so the mirror now rewrites relative Markdown and JSON links into Starlight route URLs during sync, publishes linked non-Markdown repo artefacts into generated mirror-only assets under `msh-cui-wiki/public/_llm-wiki-assets/`, generates simple directory index pages for linked folders, and leaves the canonical LLM Wiki content unchanged; also added the generated asset directory to `.gitignore` and rebuilt the wiki to verify the previously broken related-source, best-next-place, and raw artefact links now resolve in the site output
- Inputs used: local `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, local `.gitignore`, canonical pages including `wiki/overview/health-cui-overview.md` and `wiki/overview/viewable-ui-examples.md`, generated mirror output under `msh-cui-wiki/src/content/docs/`, and Astro build verification under `msh-cui-wiki/dist/`
- Outputs created: updated `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, updated `.gitignore`, refreshed mirrored docs under `msh-cui-wiki/src/content/docs/`, generated mirror-only assets under `msh-cui-wiki/public/_llm-wiki-assets/`, rebuilt `msh-cui-wiki/dist/`, updated `log.md`
- Unresolved issues: none in the current pass; the fix is intentionally mirror-scoped, so canonical markdown in the parent LLM Wiki still uses repo-relative links and remains the source of truth

## 2026-04-19 01:52:31 BST — Added a separate Codex-thread handoff prompt for raw-link behavior and image context
- Action performed: added a repo-local prompt for a separate Codex thread focused on the Astro wiki’s raw-link behavior, image-context improvements, and the distinction between canonical repo paths and web-served assets, without introducing a new wiki UI channel
- Inputs used: current `msh-cui-wiki` sync/build model, the existing `wiki/overview/viewable-ui-examples.md` page, and the clarified user instruction to create a handoff prompt rather than a new UI channel
## 2026-04-25 09:38:48 BST — Formalized EHR prototype spacing governance and token check
- Action performed: diagnosed the prototype spacing inconsistency as ad hoc component-local spacing values, converted spacing-sensitive CSS to named spacing/radius/sticky-offset tokens, added a local `check-spacing.mjs` guard and `npm run check:spacing`, researched Stylelint, Style Dictionary, Playwright visual comparisons, and Chromatic as supporting governance tools, and documented the findings in the companion wiki
- Inputs used: `prototypes/ehr-pwa/src/styles.css`, rendered EHR prototype at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, current Stylelint, Style Dictionary, Playwright, and Chromatic documentation, and existing companion EHR stack/prototype notes
- Outputs created: `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, updated `wiki/companion-web-app-stack/README.md`, updated `index.md`, updated `prototypes/ehr-pwa/src/styles.css`, new `prototypes/ehr-pwa/scripts/check-spacing.mjs`, updated `prototypes/ehr-pwa/package.json`, updated `prototypes/ehr-pwa/README.md`, updated `log.md`
- Unresolved issues: the token check is intentionally narrow and CSS-only; full Stylelint, Style Dictionary token generation, and Playwright screenshot baselines remain follow-up steps once the prototype layout stabilizes

## 2026-04-25 09:45:36 BST — Tightened consultation action-panel layout contract
- Action performed: re-checked the in-app browser view after user feedback and confirmed that Validation, Coded entries, and Follow-up tasks still had poor spacing because the consultation workspace allowed a cramped nested action rail and lacked explicit compact panel header/body spacing
- Inputs used: in-app browser view at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, and `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`
- Outputs created: updated `prototypes/ehr-pwa/src/styles.css` with a consultation-workspace container query, action/section grid areas, compact panel header/body gap tokens, and top-aligned panel headers; updated `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts` with a constrained-width layout-contract test; updated `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`; updated `log.md`
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-pwa`; all passed and audit reported 0 vulnerabilities.
- Unresolved issues: consider adding screenshot baselines once the consultation content model stabilizes

## 2026-04-25 10:38:57 BST — Inspected and repaired right-pane reference layout contracts
- Action performed: inspected the full prototype across Medications, Alerts, and Results at wide, in-app-width, and mobile widths; confirmed right-pane defects including double-inset reference headers, mobile results-table clipping, visible sort-state text in table headers, mobile tab bloat, and medication attribute labels splitting inside words
- Inputs used: in-app browser view at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, cross-width Playwright screenshots for all reference tabs, `prototypes/ehr-pwa/src/components/ClinicalDataTable.tsx`, `prototypes/ehr-pwa/src/components/MedicationReviewPanel.tsx`, and `prototypes/ehr-pwa/src/styles.css`
- Outputs created: updated `prototypes/ehr-pwa/src/components/ClinicalDataTable.tsx` with accessible compact sort labels and mobile result cards; updated `prototypes/ehr-pwa/src/components/MedicationReviewPanel.tsx` with medication title/status row anatomy; updated `prototypes/ehr-pwa/src/styles.css` with a separate reference-pane header contract, mobile result-card display, compact tabs, medication attribute grid labels, and reduced mobile patient-header bulk; updated `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts` with reference-pane overflow and mobile result-card checks; updated `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`; updated `log.md`
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-pwa`; all passed and audit reported 0 vulnerabilities.
- Unresolved issues: consider formal screenshot baselines for the right pane once content stabilizes

## 2026-04-25 10:48:17 BST — Made patient and sync state persistent app chrome
- Action performed: changed the patient banner and offline/sync strip into one sticky app-chrome region so online/offline state, draft state, recovered local draft status, local save time, and the simulation action remain visible while scrolling; reduced the simulation control's visual weight while keeping `Simulate sync failure` as its accessible name
- Inputs used: in-app browser view at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, `prototypes/ehr-pwa/src/App.tsx`, `prototypes/ehr-pwa/src/components/OfflineSyncStatus.tsx`, `prototypes/ehr-pwa/src/styles.css`, and existing Playwright EHR tests
- Outputs created: updated `prototypes/ehr-pwa/src/App.tsx`, `prototypes/ehr-pwa/src/components/OfflineSyncStatus.tsx`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts`, `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, and `log.md`
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-pwa`; all passed and audit reported 0 vulnerabilities.
- Unresolved issues: sticky reference-panel offset remains tokenized rather than dynamically measured from app-chrome height

## 2026-04-25 17:08:15 BST — Made selected coded entries visible in the coding panel
- Action performed: reproduced the coded-entry selection flow and confirmed that selections were persisted but the selected-code display was not discoverable after selection; added an explicit selected-code area with empty state, count chip, selected rows, and compact remove actions directly in the Coded entries panel
- Inputs used: in-app browser view at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`, `prototypes/ehr-pwa/src/styles.css`, and the coded-entry Playwright test
- Outputs created: updated `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`, updated `prototypes/ehr-pwa/src/styles.css`, updated `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts`, updated `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, and updated `log.md`
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-pwa`; all passed and audit reported 0 vulnerabilities.
- Unresolved issues: none for selected-code visibility; future terminology integration will need richer code metadata display.

## 2026-04-25 17:23:26 BST — Reworked coded content into section-linked consultation entries
- Action performed: reassessed the separate selected-code bucket against modern EHR expectations, researched UK-oriented clinical-coding mechanisms including SNOMED CT, dm+d, FHIR terminology services, Snowstorm, and UK Core/FHIR mapping concerns, and changed the prototype so coded content is attached to consultation sections rather than floating separately from the note
- Inputs used: `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`, `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, `prototypes/ehr-pwa/src/hooks/useConsultationDraft.ts`, `prototypes/ehr-pwa/src/types.ts`, `prototypes/ehr-pwa/src/styles.css`, coded-entry e2e tests, in-app/browser screenshots, NHS and HL7/SNOMED terminology documentation
- Outputs created: added `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md`, updated `wiki/companion-web-app-stack/README.md`, updated `index.md`, updated `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`, updated `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, updated `prototypes/ehr-pwa/src/hooks/useConsultationDraft.ts`, updated `prototypes/ehr-pwa/src/types.ts`, updated `prototypes/ehr-pwa/src/styles.css`, updated `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts`, and updated `log.md`
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-pwa`; all passed and audit reported 0 vulnerabilities.
- Unresolved issues: the prototype still uses static fake SNOMED-like results; a terminology-service adapter, section-specific value sets, dm+d medication coding, and UK Core/FHIR resource mapping remain next steps

## 2026-04-25 21:05:35 BST — Moved coded search into each consultation section
- Action performed: removed the separate coded-content action-rail pane and replaced it with section-local coded search controls inside every consultation section's `Coded content` box, so codes are selected where they are recorded rather than routed through a remote target selector
- Inputs used: in-app browser view at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`, `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, `prototypes/ehr-pwa/src/App.tsx`, `prototypes/ehr-pwa/src/styles.css`, and the inline clinical-coding wiki note
- Outputs created: updated `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`, `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, `prototypes/ehr-pwa/src/App.tsx`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts`, `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md`, and `log.md`
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-pwa`; all passed and audit reported 0 vulnerabilities.
- Unresolved issues: section-local searches still use shared static fake results; section-specific value sets and terminology-service integration remain next steps

## 2026-04-24 23:55:04 BST — Added React Aria coded-entry combobox to EHR prototype
- Action performed: replaced the custom button-list coded-entry search with an app-owned `ClinicalCodeSearch` wrapper using React Aria Components combobox/listbox primitives, preserved visible prioritisation and ambiguity metadata, added a Playwright coded-entry selection test, split React Aria/TanStack/React vendor chunks so primitive bundle cost is visible, and added an npm override for the PWA build-tool `serialize-javascript` advisory
- Inputs used: existing `prototypes/ehr-pwa/` scaffold, React Aria Components package, TanStack/Vite build output, Playwright e2e workflow, and the companion prototype specification's coded-entry search contract
- Outputs created: updated `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts`, `prototypes/ehr-pwa/vite.config.ts`, `prototypes/ehr-pwa/package.json`, `prototypes/ehr-pwa/package-lock.json`, `prototypes/ehr-pwa/README.md`, updated `log.md`
- Unresolved issues: coded-entry results remain fake and local; the next clinical UI primitive candidate is the sign/finalize dialog with unresolved alert/sync failure review

## 2026-04-24 23:46:37 BST — Scaffolded first offline-first EHR PWA prototype
- Action performed: created `prototypes/ehr-pwa/` as a Vite React TypeScript app implementing the first EHR vertical slice: patient context shell, consultation capture, coded entry search, medication review, alert panel, clinical results table with visible filter/sort state, Dexie-backed draft persistence, PWA manifest/service worker generation, unit tests, and a Playwright offline draft recovery test
- Inputs used: companion EHR UI stack ADR, prototype vertical-slice spec, existing Health CUI-derived component contracts for patient context, medication line, alerting, and clinical data state; current npm package ecosystem for Vite, React, TanStack Router/Table, Dexie, Workbox via `vite-plugin-pwa`, Vitest, and Playwright
- Outputs created: new `prototypes/ehr-pwa/` app, updated `index.md`, updated `log.md`
- Unresolved issues: this is a prototype with fake data only; React Aria/Base UI primitives are not yet introduced, real terminology/sync/prescribing are out of scope, and WebView2 packaging remains future work

## 2026-04-24 23:28:09 BST — Added first EHR prototype vertical-slice specification
- Action performed: converted the EHR UI stack ADR into a buildable first-slice prototype specification covering the user scenario, screen regions, component contracts, fake data model, routes, offline persistence behavior, acceptance tests, design tokens, implementation phases, and review questions
- Inputs used: companion EHR UI stack ADR, companion offline-first stack recommendation, and primary wiki checklists for patient banner, medication line, clinical table state, alerting, and patient-safety framing
- Outputs created: `wiki/companion-web-app-stack/prototype-vertical-slice-spec.md`, updated `wiki/companion-web-app-stack/README.md`, updated `index.md`, updated `log.md`
- Unresolved issues: the prototype app itself is not scaffolded yet; final primitive library choice, local SQL need, paid grid/sync justification, and WebView2 packaging should be decided after the prototype exposes real friction

## 2026-04-24 22:58:17 BST — Added EHR UI stack ADR and consultation capture assessment
- Action performed: created a companion ADR that fixes the proposed EHR UI stack baseline, defines application-owned clinical components, scopes the first prototype, and assesses how Health CUI principles inform consultation capture components without presenting consultation capture as a recovered historical CUI standard
- Inputs used: existing companion offline-first stack recommendation; primary wiki pages for patient safety, single-patient workflow, medication review workflow, clinical data review workflow, page templates, component contracts, and governance rules
- Outputs created: `wiki/companion-web-app-stack/ehr-ui-stack-adr.md`, updated `wiki/companion-web-app-stack/README.md`, updated `index.md`, updated `log.md`
- Unresolved issues: WebView2 packaging, local data/sync conflict design, final primitive-library selection, paid grid evaluation, and paid sync evaluation remain separate follow-up decisions after the prototype

## 2026-04-24 00:41:02 BST — Added companion offline-first web app stack recommendation
- Action performed: researched current Edge/PWA/WebView2 storage constraints, OPFS/persistent storage behavior, Workbox, local-first database options, accessible React UI primitive libraries, and sync candidates; synthesized these findings against the existing Health CUI wiki constraints; created a separate companion knowledge space so the material is clearly distinct from the primary historical corpus
- Inputs used: existing wiki pages on patient safety, modern web UI mappings, React/Radix/shadcn mappings, component contracts, design tokens, governance rules, and current external documentation from Microsoft Learn, MDN, web.dev, Workbox, Dexie, Electric, PGlite, TanStack Router, Fluent UI, React Aria, and Base UI
- Outputs created: `wiki/companion-web-app-stack/README.md`, `wiki/companion-web-app-stack/offline-first-pwa-stack-recommendation.md`, updated `index.md`, updated `log.md`
- Unresolved issues: WebView2 packaging, app-owned backup/storage bridge design, backend conflict rules, and any paid grid/sync selection need separate project-specific design notes once deployment and clinical workflow requirements are clearer

- Outputs created: `prompts/codex-raw-links-image-context-thread.md`, updated `log.md`
- Unresolved issues: none in this handoff step; the implementation work itself is intentionally deferred to the separate Codex thread

## 2026-04-19 02:08:00 BST — Replaced weak showcase thumbnails with stronger actual UI examples in the viewable-examples page
- Action performed: removed the mirrored `PatJoDem`, `demoimagesix`, and `showcaseimage` preview assets from the Astro app’s public gallery set, added stronger UI-heavy previews for search-and-prescribe, patient banner, graphing, and single-concept matching, and updated the canonical viewable-examples page so the gallery now emphasizes actual interface examples with explicit source-path context
- Inputs used: localized component and sample-website images under `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/`, especially `Components/Images/SearchAndPrescribe.jpg`, `images/PatientBanner.gif`, `Components/Images/graphing.gif`, and `Components/Images/SingleConceptMatching.jpg`; local Astro/Starlight skill references on component/island capabilities
- Outputs created: updated `wiki/overview/viewable-ui-examples.md`, updated `msh-cui-wiki/public/viewable-ui-examples/`, updated `log.md`
- Unresolved issues: there is no evidence in the local Starlight references of a built-in carousel primitive for the current markdown-only pipeline; a richer gallery would likely require either a custom Astro/component island or a different content format such as Markdoc/MDX

## 2026-04-19 01:56:00 BST — Broadened the separate-thread handoff prompt from image links to broken source links generally
- Action performed: updated the repo-local Codex handoff prompt so it explicitly targets the separate `Fix broken source links` chat, broadens the scope from image-specific issues to broken source links and non-image artefacts generally, and keeps image context as one part of that larger task
- Inputs used: existing `prompts/codex-raw-links-image-context-thread.md`, clarified user instruction to use the prompt with the separate broken-source-links chat, and the current raw/source-link expectations in the Astro wiki
- Outputs created: updated `prompts/codex-raw-links-image-context-thread.md`, updated `log.md`
- Unresolved issues: none in the prompt itself; any actual source-link remediation remains for the separate Codex thread

## 2026-04-19 02:05:47 BST — Wired Starlight search to work on localhost using a published Pagefind bundle
- Action performed: added a local Starlight `Search` override that initializes Pagefind during `astro dev`, created a `prepare-dev-search` script that bootstraps or republishes the `dist/pagefind` bundle into `msh-cui-wiki/public/pagefind/`, wired that step into the app `dev` scripts, and ignored the generated localhost search assets
- Inputs used: local `msh-cui-wiki/node_modules/@astrojs/starlight/components/Search.astro`, local `msh-cui-wiki/astro.config.mjs`, local `msh-cui-wiki/package.json`, and the existing Astro/Starlight/Pagefind build output under `msh-cui-wiki/dist/pagefind/`
- Outputs created: new `msh-cui-wiki/src/components/Search.astro`, new `msh-cui-wiki/scripts/prepare-dev-search.mjs`, updated `msh-cui-wiki/astro.config.mjs`, updated `msh-cui-wiki/package.json`, updated `msh-cui-wiki/.gitignore`, and updated `log.md`
- Unresolved issues: localhost search now uses a locally served Pagefind bundle, but the index still refreshes only when `astro build` runs; routine content edits during `astro dev` will not hot-update search results until the bundle is rebuilt

## 2026-04-19 14:16:00 BST — Restored Page-default TOC fill while keeping the rightbar no-reflow wrap contract, verified in explicit WebKit
- Action performed: narrowed the desktop rightbar TOC contract so it no longer suppresses the Page theme’s own hover/current chip background and left inset, kept only the hidden measurement layer that reserves the filled-state text width and heavier-weight line breaks, and verified the resulting current-state chip directly in an explicit Playwright WebKit session on `/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, live Astro dev server at `http://localhost:4322/`, local `@pelagornis/page` TOC styles in `node_modules/@pelagornis/page/overrides/TwoColumnContent.astro`, and Playwright CLI opened with `--browser=webkit`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, updated `output/playwright/toc-wrap-contract-webkit.png`, updated `log.md`
- Unresolved issues: the rightbar wrap contract is currently implemented only for the desktop TOC pane; mobile TOC behavior remains on untouched theme defaults until the desktop contract is stable

## 2026-04-19 14:22:00 BST — Removed the multiline TOC blip by making the desktop wrap contract ready before links become visible
- Action performed: changed the desktop rightbar TOC contract flow so the contract shell is applied before hash-selection state is re-applied, marked the rightbar nav as ready only after all hash links were wrapped, and hid rightbar section links until that ready state exists to prevent the raw current-state multiline item from flashing before the contract takes over
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, live Astro dev server at `http://localhost:4322/`, and explicit Playwright WebKit verification on `/agents/#wiki-content-must-distinguish-fact-from-interpretation`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `log.md`
- Unresolved issues: this removes the pre-contract flash path in the desktop rightbar, but it does not yet extend the contract to the mobile TOC, which remains on untouched theme behavior

## 2026-04-19 14:26:00 BST — Removed the remaining desktop rightbar selection blip by making hash handoff immediate and non-animated in WebKit
- Action performed: changed the desktop rightbar hash-change path so TOC wrapping and `aria-current` reassignment happen immediately on `hashchange` instead of after the scheduled RAF pass, and disabled the inherited Page link transitions on the desktop rightbar TOC links and contract spans so multiline items no longer animate through intermediate padding/background/font-weight states when selection moves to the next item
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, live Astro dev server at `http://localhost:4322/`, local Page TOC transition rules in `msh-cui-wiki/node_modules/@pelagornis/page/overrides/TwoColumnContent.astro`, and explicit Playwright WebKit timing checks on `/agents/#wiki-content-must-distinguish-fact-from-interpretation` transitioning to `#do-not-invent-missing-documents`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `log.md`
- Unresolved issues: the non-animated handoff is currently scoped to the desktop rightbar contract only; mobile TOC remains on theme-default transition behavior

## 2026-04-19 14:31:00 BST — Restored default-style TOC animation while preserving the no-reflow contract in WebKit
- Action performed: narrowed the desktop rightbar TOC transition override so only non-layout properties animate again, restoring the Page-like fill/text-color animation while keeping padding/inset and font-weight instantaneous; rechecked the hash handoff timing so the contract still prevents reflow and the old/new items do not overlap in current-state layout
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, live Astro dev server at `http://localhost:4322/`, and explicit Playwright WebKit timing checks on `/agents/#wiki-content-must-distinguish-fact-from-interpretation` transitioning to `#do-not-invent-missing-documents`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, updated `log.md`
- Unresolved issues: fill/background now crossfades between items during handoff by design; if that visual is still undesirable, the next adjustment would be shortening or changing only the background-color easing rather than reintroducing layout animation

## 2026-04-19 14:35:00 BST — Made desktop rightbar TOC deselection snap while current-item fill still animates in, verified in WebKit
- Action performed: split the desktop rightbar TOC transition rules so non-current links animate only color while current links animate background-color and color, which removes the lingering deselection fill on the previously active item while preserving the animated fill-in on the newly active item
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, live Astro dev server at `http://localhost:4322/`, and explicit Playwright WebKit timing checks on `/agents/#wiki-content-must-distinguish-fact-from-interpretation` transitioning to `#do-not-invent-missing-documents`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, updated `log.md`
- Unresolved issues: this is still scoped to the desktop rightbar contract; mobile TOC continues to use untouched theme transition behavior

## 2026-04-19 20:53:00 BST — Removed local TOC current-state ownership and hid the synthetic `_top` link so only Starlight owns rightbar selection
- Action performed: removed the local `aria-current` mutation path from `msh-cui-wiki/src/components/Head.astro`, including the hash-selection and click/pointerdown ownership code, kept the wrap contract logic only, and hid the synthetic `#_top` TOC entry in CSS so the static page-title label remains the only title treatment; then rebuilt and started a fresh server on `http://localhost:4323/` and verified in WebKit that `/agents/` shows a single selected rightbar item after TOC click
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, Starlight TOC internals under `msh-cui-wiki/node_modules/@astrojs/starlight/components-internals/TableOfContents/`, explicit Playwright WebKit checks on `http://localhost:4323/agents/`, and screenshot `output/playwright/agents-4323-selection-owner-webkit.png`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `output/playwright/agents-4323-selection-owner-webkit.png`, updated `log.md`
- Unresolved issues: the fresh `4323` baseline removes the duplicate-selected-item path, but initial no-hash pages can legitimately show no visible selected rightbar item because the hidden synthetic `_top` entry remains the observer’s initial current target until a real section is selected

## 2026-04-19 21:37:00 BST — Rolled back the separate visual-current / chip-layer rightbar experiment on the fresh `4323` server
- Action performed: reverted the rightbar TOC from the experimental `data-msh-current` / animated chip-layer approach back to the earlier Starlight-owned-current baseline, removed the experimental script hooks and leftover CSS rule, restarted the clean Astro dev server on `http://localhost:4323/`, and verified in WebKit that the served page no longer contains the visual-current experiment strings
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, fresh Astro dev server restart on `http://localhost:4323/`, and WebKit screenshot `output/playwright/agents-4323-rollback-webkit.png`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `output/playwright/agents-4323-rollback-webkit.png`, updated `log.md`
- Unresolved issues: this rollback intentionally restores the pre-experiment behavior rather than solving the underlying TOC interaction bug

## 2026-04-19 22:26:07 BST — Replaced the rightbar TOC with a local component and made it the sole owner of selection state
- Action performed: replaced the Starlight/Page TOC internals with a local `TableOfContents.astro` plus recursive `RightTocList.astro`, rendered the page title as a static label above the section list, filtered out the synthetic `_top` item, moved selection ownership into the local component script, kept the no-reflow wrap contract in the local markup, scoped the TOC CSS to the new `[data-msh-right-toc]` component path, and verified the resulting behavior in explicit Playwright WebKit sessions on `/agents/`, `/readme/`, and `/wiki/overview/health-cui-overview/` using the fresh `http://localhost:4323/` server
- Inputs used: local `msh-cui-wiki/astro.config.mjs`, local `msh-cui-wiki/src/components/TableOfContents.astro`, local `msh-cui-wiki/src/components/RightTocList.astro`, local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, local design notes in `msh-cui-wiki/docs/ui-reset-notes.md`, live Astro dev server at `http://localhost:4323/`, and WebKit verification screenshot `output/playwright/custom-toc-agents-4323-webkit.png`
- Outputs created: updated `msh-cui-wiki/astro.config.mjs`, updated `msh-cui-wiki/src/components/TableOfContents.astro`, updated `msh-cui-wiki/src/components/RightTocList.astro`, updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `msh-cui-wiki/docs/ui-reset-notes.md`, updated `output/playwright/custom-toc-agents-4323-webkit.png`, updated `log.md`
- Unresolved issues: none in the current custom-TOC baseline; future TOC behavior changes should be made inside the local TOC component path rather than by patching Starlight’s TOC internals

## 2026-04-19 22:31:00 BST — Fixed the custom rightbar TOC collapsing to zero width by overriding Page’s fixed `sl-toc` layout rule
- Action performed: investigated the live `http://localhost:4323/agents/` report that the new rightbar TOC showed no items, confirmed via WebKit that the custom TOC links were present in the DOM but the custom nav had `width: 0px`, traced that to the Page theme’s global `.sl-toc:not(.sl-toc-mobile)` fixed-position rule, and added a local override so `[data-msh-right-toc].sl-toc` stays `position: static` with full width inside the rightbar panel
- Inputs used: local `msh-cui-wiki/src/styles/global.css`, local Page theme TOC rules in `msh-cui-wiki/node_modules/@pelagornis/page/overrides/TwoColumnContent.astro`, live Astro dev server at `http://localhost:4323/agents/`, and explicit Playwright WebKit measurements plus screenshot `output/playwright/custom-toc-agents-4323-visible-webkit.png`
- Outputs created: updated `msh-cui-wiki/src/styles/global.css`, updated `output/playwright/custom-toc-agents-4323-visible-webkit.png`, updated `log.md`
- Unresolved issues: none in this fix; the custom TOC now has a real panel width and visible link labels, but any future reuse of `sl-toc` on local components must account for the Page theme’s fixed desktop TOC rule

## 2026-04-19 21:30:00 BST — Restored rightbar selection animation on a separate visual-current chip layer while keeping Starlight as semantic owner
- Action performed: kept Starlight as the sole `aria-current` owner, introduced a separate rightbar-only `data-msh-current` visual state in `msh-cui-wiki/src/components/Head.astro`, synchronized it from hash, mutation, and click/pointer events, neutralized Starlight’s native rightbar current styling in CSS, and moved the visible fill animation onto a separate `::before` chip layer so the clicked item can animate visually without reviving the duplicate-selected-item path
- Inputs used: local `msh-cui-wiki/src/components/Head.astro`, local `msh-cui-wiki/src/styles/global.css`, fresh server at `http://localhost:4323/`, and explicit Playwright WebKit checks on `/agents/` including screenshot `output/playwright/agents-4323-chip-layer-webkit.png`
- Outputs created: updated `msh-cui-wiki/src/components/Head.astro`, updated `msh-cui-wiki/src/styles/global.css`, updated `output/playwright/agents-4323-chip-layer-webkit.png`, updated `log.md`
- Unresolved issues: the desktop rightbar now uses separate semantic and visual current channels by design; if any remaining mismatch is reported, the next debugging step should be to inspect `data-msh-current`, `aria-current`, and `:hover` together on the exact failing frame in WebKit

## 2026-04-25 21:19:48 BST — Reconciled section-local coded-content spacing after UI review
- Action performed: reviewed the updated EHR PWA in wide, in-app, and mobile browser widths; confirmed the section-local coded-content controls were semantically correct but visually too heavy when repeated in every consultation section; removed repeated explanatory helper copy, compacted the coded-entry trigger from `Options` to `Codes`, tightened the section coded-content field group using existing spacing tokens, and added an e2e density contract for in-app and mobile widths.
- Inputs used: `prototypes/ehr-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md`, live prototype at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, and temporary Playwright screenshots/measurements.
- Outputs created: updated `prototypes/ehr-pwa/src/components/ClinicalCodeSearch.tsx`, `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts`, `prototypes/ehr-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md`, and `log.md`.
- Unresolved issues: the prototype still uses static fake SNOMED-like results; a real terminology-service adapter and section-specific value sets remain future work.

## 2026-04-25 21:27:00 BST — Aligned the right reference pane with the consultation top rail
- Action performed: confirmed the reference pane was starting lower than the consultation pane because the fixed `--sticky-reference-top: 10rem` offset was larger than the natural workspace top at wide widths; replaced the fixed offset with a measured app-chrome height token plus page padding, and added an e2e top-rail contract.
- Inputs used: live prototype at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, `prototypes/ehr-pwa/src/App.tsx`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts`, and spacing governance notes.
- Outputs created: updated `prototypes/ehr-pwa/src/App.tsx`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/tests/e2e/offline-draft.spec.ts`, `prototypes/ehr-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, and `log.md`.
- Unresolved issues: none for the reported top-rail alignment; mobile remains a single-column layout, so the reference pane intentionally follows the consultation pane rather than sharing a rail.
