# Log

## 2026-04-30 06:50 BST — Documented deferred MAR optical-spacing bug

- Action: Documented the MAR pane internal spacing issue as a deferred visual bug: measured 16px box-model insets are correct, but top/bottom spacing can read optically tighter than left/right because of tab shadow, rounded tab-list paint, item-card rings, and viewport cropping.
- Inputs: User instruction to document the issue for later and to let design drive it, without implementing a change now.
- Outputs: Updated `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and this log.
- Unresolved issues: MAR optical-spacing remains intentionally unfixed pending a later visual design/screenshot-baseline pass.

## 2026-04-30 06:43 BST — Optically centred consultation clinician rail

- Action: Shifted the consultation banner clinician text to centre against the visible text rails rather than the row containers, and changed the e2e contract to measure the midpoint between the title text bottom and the visible incomplete-count text top.
- Inputs: User screenshot showing `Dr Taylor Reed` still visually high between `Consultation capture` and `3 required sections incomplete`.
- Outputs: Updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, and `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`.
- Unresolved issues: ESLint still reports the existing advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-30 06:35 BST — Removed extra consultation banner bottom gap

- Action: Removed the empty desktop header grid row and row gap that were adding excess space below the action buttons, kept the normal 16px top/bottom card padding, and increased the pill/button middle track to 13px so the clinician line can sit independently centred between title and incomplete-count rails.
- Inputs: User screenshot showing excess bottom margin below the action buttons and `Dr Taylor Reed` not independently centred between `Consultation capture` and `3 required sections incomplete`.
- Outputs: Updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, strengthened `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, and updated the rail contract in `prototypes/ehr-shadcn-pwa/DESIGN.md` and `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`.
- Unresolved issues: ESLint still reports the existing advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-30 06:29 BST — Rebased consultation banner on right action rail

- Action: Changed the consultation banner desktop grid so the right pill/button action rail defines the card content height, with the left text stack mirroring that height: title pinned to the top rail, incomplete-count text pinned to the button rail, and clinician text centred independently in the middle track.
- Inputs: User clarification that the card height should be driven by normal top/bottom margins around the right-side pills/buttons, not by treating the whole left text pane equally.
- Outputs: Updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, strengthened `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, and documented the rail contract in `prototypes/ehr-shadcn-pwa/DESIGN.md` and `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`.
- Unresolved issues: ESLint still reports the existing advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-30 06:23 BST — Fixed consultation banner text rail collision

- Action: Replaced the absolute-positioned clinician banner line with a normal-flow title/clinician/incomplete-count text stack, bottom-aligned the action rail to the stack, and strengthened e2e coverage to assert the title, clinician, and incomplete rails do not overlap.
- Inputs: User screenshot showing `Dr Taylor Reed` colliding with `Consultation capture`.
- Outputs: Updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, and `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`.
- Unresolved issues: ESLint still reports the existing advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:46 BST — Split clinician and incomplete banner rails

- Action: Separated the consultation banner clinician and incomplete-count text into distinct stacked rails: `Dr Taylor Reed` now sits between `Consultation capture` and `3 required sections incomplete`, the separator dot is removed, and the incomplete count remains the lower compact rail aligned to the action-button text.
- Inputs: User correction that `3 required sections incomplete` must stay on its current line while `Dr Taylor Reed` sits between the title and that line.
- Outputs: Updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, the V2 layout contract, `prototypes/ehr-shadcn-pwa/DESIGN.md`, and `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`.
- Unresolved issues: ESLint still reports the existing advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:43 BST — Restored muted clinician text colour

- Action: Kept the new consultation banner clinician rail structure but changed `Dr Taylor Reed` back to the muted grey text colour while retaining bold weight.
- Inputs: User request that `Dr Taylor Reed` should be grey as it was before.
- Outputs: Updated `App.tsx`, Playwright style coverage, `DESIGN.md`, and the shadcn prototype companion wiki page.
- Unresolved issues: ESLint still reports advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:39 BST — Refined consultation banner clinician rail and coding pane top rail

- Action: Removed the `Author` prefix from the consultation banner clinician line, made `Dr Taylor Reed` bold, kept `n required sections incomplete` on the same rail in normal weight, and asserted that consultation coding searchbars sit at the top pane margin.
- Inputs: User request to keep `Consultation capture` unchanged, vertically centre the clinician name in bold between the banner rails, leave the incomplete-count text on the same rail but non-bold, and make the clinical-code searchbar topmost.
- Outputs: Updated `App.tsx`, Playwright layout/typography coverage, `DESIGN.md`, and the shadcn prototype companion wiki page.
- Unresolved issues: ESLint still reports advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:33 BST — Removed consultation clinical-code parent frame

- Action: Made section-local clinical-code panes frameless inside consultation sections, keeping the standalone framed treatment for Tasks.
- Inputs: User request to remove the parent box around the clinical-code side of consultation panes, move the searchbar to the pane margins, and align the top selected concept pill with the top of the note text box.
- Outputs: Updated `SectionCodingField.tsx`, `ConsultationSectionCard.tsx`, Playwright layout coverage, `DESIGN.md`, and the shadcn prototype companion wiki page.
- Unresolved issues: ESLint still reports advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:28 BST — Simplified consultation section status headers

- Action: Removed required/optional explanatory subtext from consultation section headers and added an `Optional` status pill for empty optional sections.
- Inputs: User request to remove `Required before sign-off` and `Optional clinical context` from all consultation panes, and to use a blue `Optional` pill around `#80adce` that switches to green `Ready` once text is entered.
- Outputs: Updated `ConsultationSectionCard.tsx`, `ClinicalBadge.tsx`, `types.ts`, Playwright coverage, `DESIGN.md`, and the shadcn prototype companion wiki page.
- Unresolved issues: ESLint still reports advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:20 BST — Clamped clinical-code result keyboard navigation

- Action: Changed clinical-code result keyboard navigation so `ArrowUp` on the first result remains on the first result and `ArrowDown` on the last result remains on the last result, instead of wrapping.
- Inputs: User request that top item hover plus up key should not wrap to the bottom, and likewise at the bottom.
- Outputs: Updated `SectionCodingField.tsx`, refreshed Playwright coverage for top and bottom clamp behaviour, and updated `DESIGN.md` plus companion wiki notes.
- Unresolved issues: ESLint still reports advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:17 BST — Restored visible grey treatment on first active code result

- Action: Narrowed the cmdk `data-selected` visual suppression so it applies only to inactive SNOMED result rows; app-active rows now always keep the grey active treatment, including the default first row.
- Inputs: User report that the first row was logically selected but never visibly grey, while the second row showed the expected grey treatment.
- Outputs: Updated `SectionCodingField.tsx` and added Playwright coverage asserting the initially active first row has a distinct background from the next result row.
- Unresolved issues: ESLint still reports advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:09 BST — Restored default active first clinical-code result

- Action: Changed clinical-code result active-state derivation so the first visible result row is app-active by default, while arrow navigation still advances from that row and only the app-owned active row paints grey.
- Inputs: User report that suppressing cmdk's sticky selected styling removed the default first-row selected treatment entirely.
- Outputs: Updated `SectionCodingField.tsx`, refreshed Playwright assertions for default first-row active state, and updated `DESIGN.md` plus companion wiki notes to formalize the default-active result contract.
- Unresolved issues: ESLint still reports advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 23:02 BST — Fixed sticky visual preselection on clinical-code results

- Action: Suppressed cmdk/shadcn's internal `data-selected` background treatment for SNOMED result rows so only the app-owned `data-snomed-result-active` row receives the grey keyboard preselection style.
- Inputs: User report that the first result item visually kept the hover/preselect treatment while up/down correctly selected other rows.
- Outputs: Updated `SectionCodingField.tsx` styling and added Playwright coverage asserting the first row no longer shares the active row background after keyboard navigation moves away from it.
- Unresolved issues: ESLint still reports advisory hook-dependency warnings around the document-level passive keyboard handler; no functional regression is known.

## 2026-04-29 22:54 BST — Added passive note-editor keyboard control for code results

- Action: Extended the shadcn EHR prototype clinical-code keyboard contract so text-derived result lists opened from note typing respond to `ArrowDown`, `ArrowUp`, and `Enter` while DOM focus remains in the clinical note editor.
- Inputs: Current prototype at `prototypes/ehr-shadcn-pwa`, user feedback that up/down was not moving the hover/highlight on search results opened from free text.
- Outputs: Updated `SectionCodingField.tsx`, added Playwright coverage for passive note-editor result navigation, and updated `DESIGN.md` plus companion wiki guidance for the shared keyboard treatment.
- Unresolved issues: This remains demo-local logic; production clinical coding should validate terminology source, provenance, preferred terms, refsets, and keyboard/a11y behaviour against the final code-search service and design-system implementation.

## 2026-04-25 22:54:10 BST — Modern equivalents research and wiki area
- Action performed: researched current public equivalents and adjacent standards for Microsoft Health CUI, localized the key current source pages, and added a clearly separated modern-equivalents wiki area.
- Inputs used: NHS digital service manual, NHS App design system, NHS England digital clinical safety assurance and DCB0129/DCB0160 review pages, HL7 SMART App Launch, HL7 CDS Hooks, openEHR clinical content model and archetyping pages, OpenMRS 3 overview, and VA.gov Design System health pages.
- Outputs created: `raw/sources/references/modern-equivalents/`, `raw/metadata/modern-equivalents-source-set-2026.json`, `wiki/source-notes/modern-equivalents-source-set-2026.md`, new pages under `wiki/modern-equivalents/`, and updated `index.md`.
- Unresolved issues: this is a focused public-source survey, not an exhaustive worldwide catalogue; proprietary EHR vendor design systems remain largely invisible, and the current-source pages should be refreshed if used for later compliance-sensitive work.

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

## 2026-04-25 21:48:18 BST — Added shadcn MCP server to Codex configuration
- Action performed: added the shadcn MCP server block to the local Codex configuration so future Codex sessions can browse, search, and install shadcn registry items through MCP.
- Inputs used: official shadcn MCP documentation at `https://ui.shadcn.com/docs/mcp`, local `~/.codex/config.toml`, and `npx shadcn@latest mcp --help`.
- Outputs created: updated `~/.codex/config.toml` with `[mcp_servers.shadcn]` using `command = "npx"` and `args = ["shadcn@latest", "mcp"]`; updated `log.md`.
- Unresolved issues: Codex must be restarted before the new MCP server is loaded in this session.

## 2026-04-25 22:05:23 BST — Replatformed the EHR prototype UI foundation onto native shadcn/ui
- Action performed: initialized shadcn/ui for the Vite EHR PWA prototype using Tailwind CSS v4, Radix-backed `radix-nova` style components, and the `@/*` import alias; added the first shadcn primitive set; migrated the visible consultation, sync, coded-entry, alert, medication, results, and reference-tab surfaces to shadcn primitives while retaining application-owned clinical wrappers and layout contracts.
- Inputs used: official shadcn Vite installation documentation, shadcn MCP registry tools, local prototype source under `prototypes/ehr-pwa/src`, existing Playwright layout contracts, and the live Vite app at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`.
- Outputs created: updated `prototypes/ehr-pwa/package.json`, `package-lock.json`, `components.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `eslint.config.js`, `src/styles.css`, shadcn UI files under `src/components/ui/`, `src/lib/utils.ts`, EHR component files under `src/components/`, `prototypes/ehr-pwa/DESIGN.md`, companion stack wiki pages, and `log.md`.
- Unresolved issues: this is a first-pass replatform. Some legacy CSS class contracts remain while the domain components are progressively simplified around shadcn composition.

## 2026-04-25 22:12:28 BST — Made the shadcn adoption visible in the EHR prototype
- Action performed: replaced legacy consultation and action-panel card internals with shadcn `CardHeader`, `CardContent`, `CardAction`, and compact shadcn `Empty` composition; adjusted bridge CSS so cards, tabs, and major panels show shadcn-style rings, shadows, and segmented tabs while preserving the existing clinical layout contracts.
- Inputs used: current EHR prototype at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`, Playwright screenshots at wide and mobile widths, `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/DESIGN.md`, and companion wiki pages.
- Outputs created: updated `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, `prototypes/ehr-pwa/src/styles.css`, `prototypes/ehr-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-ui-stack-adr.md`, `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, and `log.md`.
- Unresolved issues: some legacy class names remain as transitional layout hooks; future passes should replace them with domain wrapper components and smaller shadcn/Tailwind class contracts.

## 2026-04-25 22:17:09 BST — Consolidated right-pane panels around a shadcn section contract
- Action performed: added an app-owned `ReferencePanelSection` wrapper over shadcn `Separator`, migrated medications, alerts, and results to that shared heading/action/divider/body rhythm, replaced one-off card header grid classes with shadcn `CardAction` and `CardDescription` slots for status and secondary facts, and removed obsolete legacy right-pane CSS hooks.
- Inputs used: current EHR PWA source, shadcn best-practice guidance, `prototypes/ehr-pwa/DESIGN.md`, companion UI stack ADR, and spacing governance notes.
- Outputs created: new `prototypes/ehr-pwa/src/components/ReferencePanelSection.tsx`; updated `ClinicalDataTable.tsx`, `MedicationReviewPanel.tsx`, `AlertPanel.tsx`, `styles.css`, `DESIGN.md`, `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, `wiki/companion-web-app-stack/ehr-ui-stack-adr.md`, and `log.md`.
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-pwa`; all passed and audit reported 0 vulnerabilities.
- Unresolved issues: continue reducing transitional CSS where app-specific layout hooks can be replaced by domain wrappers without weakening the clinical layout contracts.

## 2026-04-25 22:23:20 BST — Reconciled persistent chrome status groups with shadcn badges
- Action performed: added `ClinicalStatusGroup`, migrated patient status flags and offline/sync status badges onto that shared domain wrapper, changed the patient-switch action to a native shadcn `secondary` button variant, and removed obsolete legacy chip/raw-button CSS from the chrome layer.
- Inputs used: current EHR PWA patient and sync components, shadcn best-practice guidance, `prototypes/ehr-pwa/DESIGN.md`, companion UI stack ADR, and spacing governance notes.
- Outputs created: new `prototypes/ehr-pwa/src/components/ClinicalStatusGroup.tsx`; updated `PatientContextShell.tsx`, `OfflineSyncStatus.tsx`, `styles.css`, `DESIGN.md`, `wiki/companion-web-app-stack/ehr-prototype-spacing-governance.md`, `wiki/companion-web-app-stack/ehr-ui-stack-adr.md`, and `log.md`.
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-pwa`; all passed and audit reported 0 vulnerabilities. Reloaded the in-app browser at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results` and confirmed the patient/sync chrome renders with the shared status groups and shadcn button variant.
- Unresolved issues: the patient banner is still an app-owned dark clinical anchor rather than a generic shadcn card; keep that unless a future design review decides the chrome itself should visually flatten.

## 2026-04-25 22:53:22 BST — Created clean shadcn-native EHR prototype V2
- Action performed: created `prototypes/ehr-shadcn-pwa` as a separate V2 prototype so new UI work can start from native shadcn composition and app-owned clinical wrappers rather than continuing to fight V1's legacy CSS and markup contracts.
- Inputs used: lessons from `prototypes/ehr-pwa`, shadcn source components and configuration, companion UI stack ADR, spacing governance notes, inline coding guidance, and the live V1 review at `http://127.0.0.1:5174/patients/p-1001/consultation?panel=results`.
- Outputs created: new V2 prototype under `prototypes/ehr-shadcn-pwa/`; new V2 DESIGN.md; new companion wiki page `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`; updated companion README, root index, UI stack ADR, and `log.md`.
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-shadcn-pwa`; all passed and audit reported 0 vulnerabilities. Started the V2 dev server at `http://127.0.0.1:5175/` and confirmed patient chrome, sync state, consultation capture, and medication review render in the in-app browser.
- Unresolved issues: V2 intentionally does not yet inherit V1's Dexie offline draft persistence; add persistence deliberately after the first UI review.

## 2026-04-25 23:15:47 BST — Trimmed V2 to active shadcn-native dependencies
- Action performed: removed unused V1 direct dependencies from the clean V2 prototype (`@tanstack/react-router`, `@tanstack/react-table`, `dexie`, `react-aria-components`, `react-hook-form`, and `zod`) and converted the remaining hand-styled consultation page header to shadcn `CardHeader`, `CardTitle`, and `CardDescription` composition.
- Inputs used: `prototypes/ehr-shadcn-pwa/package.json`, package lock, V2 component imports, shadcn best-practice guidance, and the current V2 browser view at `http://127.0.0.1:5175/`.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/package.json`, `package-lock.json`, `src/App.tsx`, `DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-shadcn-pwa`; all passed and audit reported 0 vulnerabilities. Reloaded the V2 browser view and confirmed patient chrome, sync state, consultation capture, and medication review still render.
- Unresolved issues: V2 still contains copied but currently unused shadcn source files such as `Empty` and `ScrollArea`; keep or remove them based on whether the next UI pass needs those primitives.

## 2026-04-25 23:22:12 BST — Updated V2 DESIGN.md as active shadcn-native contract
- Action performed: clarified that V2 is the clean shadcn-native design track, documented the native primitive policy, kept unused local shadcn source primitives for future passes, and changed the section-local coded-content empty state to use shadcn `Empty`.
- Inputs used: `prototypes/ehr-shadcn-pwa/DESIGN.md`, `SectionCodingField.tsx`, shadcn best-practice guidance, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Verification: Ran `npm run check:spacing`, `npm run lint`, `npm run test`, `npm run build`, `npm run e2e`, and `npm audit` in `prototypes/ehr-shadcn-pwa`; all passed and audit reported 0 vulnerabilities. Reloaded `http://127.0.0.1:5175/` and confirmed patient chrome, coded content, empty-state copy, and medication review render.
- Unresolved issues: none for this native tidy stage; next UI work can use retained shadcn primitives such as `ScrollArea`, `Dialog`, and `Empty` where the interaction calls for them.

## 2026-04-26 08:47:10 BST — Moved V2 validation and follow-up into the consultation flow
- Action performed: removed the V2 middle-column action rail, attached validation status and save/sign actions to the top consultation banner, and made Follow-up the final consultation section after Plan.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/data/demo.ts`, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/data/demo.ts`, `prototypes/ehr-shadcn-pwa/src/components/ui/card.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, removed obsolete `prototypes/ehr-shadcn-pwa/src/components/ActionRail.tsx`, updated `prototypes/ehr-shadcn-pwa/DESIGN.md`, updated `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and updated `log.md`.
- Unresolved issues: validation currently reports only missing required sections; future passes should expand it into a structured validation summary if the clinical workflow needs actionable rule-level detail.

## 2026-04-26 09:38:46 BST — Split V2 consultation banner status pills from action buttons
- Action performed: changed the V2 consultation banner action rail so the top row is status pills (`Validation open`, `Not saved locally`, `Consultation not signed`) and the row beneath contains corresponding buttons for review, save, and sign.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn Button and Badge documentation, `prototypes/ehr-shadcn-pwa/src/App.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: the local-save and signature states are still prototype-static labels; future state handling should drive these pills from actual dirty/signature state.

## 2026-04-26 09:52:01 BST — Aligned V2 banner rail and added validation review navigation
- Action performed: converted the consultation banner rail to a shared three-column grid so pills and buttons align, changed unsaved local state to a red-family pill, added a purple-family clinical tone for unsigned consultation state, and wired `Review validation` to highlight incomplete required sections and scroll/focus the first missing section.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/App.tsx`, `ClinicalBadge`, `ConsultationSectionCard`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ClinicalBadge.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ConsultationSectionCard.tsx`, `prototypes/ehr-shadcn-pwa/src/types.ts`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: save/sign state is still static prototype state; a future pass should connect the red and purple pills to real dirty-state and signature-state transitions.

## 2026-04-26 09:59:45 BST — Restored normal V2 consultation-banner pill height
- Action performed: removed the forced enlarged height and text sizing from the consultation banner status pills so they use the normal shadcn `Badge` height while retaining shared grid-column width alignment above the action buttons.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/App.tsx`, and `prototypes/ehr-shadcn-pwa/DESIGN.md`.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, and `log.md`.
- Unresolved issues: none for pill height; action buttons intentionally remain normal button height.

## 2026-04-26 10:05:59 BST — Simplified V2 section coding to SNOMED search and removable concept pills
- Action performed: replaced the section coded-content add button and selected-code rows with a SNOMED CT concept searchbar trigger, selected concept pills using `Display [code] (Priority)`, an end `x` remove affordance, and a shadcn confirmation dialog before deleting a selected concept.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn Command, Popover, Dialog, Badge, and Button documentation, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: search suggestions remain static prototype data; a future pass should replace them with a real SNOMED terminology-service adapter and section-specific value sets.

## 2026-04-26 10:09:18 BST — Matched selected-code priority to search-result pills
- Action performed: changed selected SNOMED concept chips so priority is rendered as a nested `ClinicalBadge` pill using the same categorisation colour as search results, instead of parenthesized text.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for priority-pill rendering.

## 2026-04-26 10:10:57 BST — Normalised selected-code chip typography
- Action performed: split selected SNOMED concept chip text into primary display text plus a smaller muted code without square brackets, while keeping the nested priority pill and remove affordance aligned.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for selected-code chip typography.

## 2026-04-26 12:42:29 BST — Normalised selected SNOMED remove affordance spacing
- Action performed: changed the selected SNOMED concept remove control from an invisible square ghost hit area to a visible circular red affordance, keeping the remove circle on the same right inset as the title left inset and enforcing the same grid gap between priority and remove as between all other chip elements.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user-provided selected SNOMED concept pill screenshot, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:44:58 BST — Made selected SNOMED remove circle interaction-only
- Action performed: changed the selected SNOMED concept remove control so the red `x` remains visible by default, but the red circular background and border only appear on hover, active, or keyboard focus while retaining the aligned right inset and equal internal chip gaps.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user correction that the red circle should only appear on hover/select, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:48:44 BST — Made selected SNOMED remove glyph drive spacing
- Action performed: reduced the selected SNOMED remove button layout box to the `x` glyph size and moved the red hover/focus circle into an overlay pseudo-element, so the glyph aligns to the chip margin while the activated circle can overlap the margin without driving spacing.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user correction that the invisible circle was still driving spacing, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:57:17 BST — Centred selected SNOMED remove circle inside rounded end
- Action performed: shifted the selected SNOMED remove glyph one spacing unit toward the parent pill end so the hover/focus circle has matching top, bottom, and rounded-end margins, while keeping the untransformed grid layout gap between priority and remove consistent.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, measured selected-chip geometry, user request to inset the `x` so the active circle has equal margin inside the rounded end, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 13:00:49 BST — Matched selected SNOMED title inset to remove glyph inset
- Action performed: changed selected SNOMED parent pills from symmetric horizontal padding to `pl-2 pr-3`, so the title's left inset is driven by the shifted remove `x` visual right inset while the right padding still preserves equal hover-circle margins inside the rounded pill end.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to use the new right-side visual margin to the `x` to drive the left-side margin, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:36:54 BST — Rebalanced selected SNOMED concept pill colour and rails
- Action performed: changed SNOMED semantic `Disorder` from warning-like rose/red to a calmer blue family, moved `Situation` off grey, tinted selected concept parent pills from a lighter version of their semantic type family, and changed selected concept pills to a single centre-aligned grid rail with symmetric left/right insets.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user-provided selected SNOMED concept pill screenshot, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ClinicalBadge.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ClinicalBadge.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:32:30 BST — Reduced V2 action rail pill-to-button gap
- Action performed: reduced the consultation banner gap between status-pill and action-button rows from `gap-4` to `gap-y-2.5`, and retuned the desktop header row gap so the author/incomplete-status line stays aligned to the lower button rail.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user feedback to make the pill-to-button gap two-thirds of the current size, `prototypes/ehr-shadcn-pwa/src/App.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:25:36 BST — Aligned V2 consultation author text to lower action rail
- Action performed: moved the consultation header description onto the same visual lower rail as the action buttons by tuning the desktop header row gap and giving the author/incomplete-status line compact small-button typography and line height.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user feedback that `Author Dr Taylor Reed · 2 required sections incomplete` should sit on the bottom rail as button text, `prototypes/ehr-shadcn-pwa/src/App.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:23:44 BST — Fixed V2 action rail control widths to widest pill
- Action performed: changed the consultation banner action rail from stretched full-width pills/buttons to fixed `w-40` controls, using fixed 10rem grid columns so each status/action column matches the widest status pill while retaining normal shadcn pill side padding.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user feedback that all rail widths should fix to the widest pill with normal pill side spacing, `prototypes/ehr-shadcn-pwa/src/App.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:22:18 BST — Aligned V2 action rail internal gap to pane rhythm
- Action performed: changed the consultation banner action rail from `gap-2` to `gap-4` between the status-pill row and action-button row, and between the aligned status/action columns.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user feedback that the inner gap should match the pane margin, `prototypes/ehr-shadcn-pwa/src/App.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:20:48 BST — Softened V2 local-save action green
- Action performed: changed the `Save Locally` clinical success button from `emerald-800` to `emerald-700` so it remains a filled local-state green action while better matching the duskier visual weight of the purple sign action.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user feedback that the green was slightly too dark, local shadcn Button variant, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:18:13 BST — Formalised consultation action button colour contract
- Action performed: set the `Review Validation` button fill to exact `#ffd230` with matched gold border/text; changed `Save Locally` to use the green pill text colour family as fill and border, keeping `Sign Consultation` aligned to the purple pill text colour family.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user-provided yellow reference, shadcn Button guidance, `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 12:12:14 BST — Tuned V2 consultation action button colours
- Action performed: adjusted V2 consultation action button variants so `Review Validation` uses the vivid highlighted-pane yellow with stronger gold border/text, `Save Locally` uses a darker light-green fill aligned with the pill family, and `Sign Consultation` uses the unsigned purple pill text colour as its fill with aligned border.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn Button guidance, `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 11:57:18 BST — Added headers to SNOMED search result columns
- Action performed: added a fixed-grid header row above section-local SNOMED search results so the concept, semantic type, and priority columns are labelled and aligned with the result pills.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn Command/Popover/Badge guidance, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 11:50:28 BST — Converted section SNOMED entry to visible searchbar
- Action performed: replaced the section-local `Search SNOMED CT concepts` button-plus-dropdown-search pattern with an always-visible shadcn `Input` searchbar; made the popover results-only and aligned result semantic type and priority pills in fixed right-aligned metadata columns.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn Input/Command/Popover/Badge guidance, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: result metadata column widths are prototype-fixed for the current semantic type and priority vocabulary; a production terminology integration should derive or tokenise these widths from the configured vocabulary.

## 2026-04-26 10:30:06 BST — Matched selected SNOMED title typography to free-text fields
- Action performed: changed selected SNOMED concept title text from medium-weight body text to normal body text with the same scale used by consultation free-text fields.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn typography/component guidance, `Textarea` primitive typography, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 10:28:04 BST — Right-aligned selected SNOMED remove affordance
- Action performed: changed selected SNOMED concept pills to a two-column layout so concept metadata remains left-aligned and the remove control is pinned to the right edge; styled the remove `XIcon` as bold red while preserving the confirmation dialog.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn Button and Badge guidance, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 10:26:37 BST — Normalised V2 review validation button casing
- Action performed: changed the consultation banner validation action label from all-caps `REVIEW VALIDATION` to `Review Validation` while preserving the yellow clinical warning button variant.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/App.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none.

## 2026-04-26 10:18:02 BST — Expanded V2 SNOMED seed concepts and semantic type badges
- Action performed: added a first-class SNOMED semantic tag to coded entries, expanded the section-local search seed set, and rendered colour-coded semantic type pills in both search results and selected-code display, including disorder, finding, procedure, observable, situation, and regime/therapy examples.
- Inputs used: current V2 section coding implementation, shadcn Badge/Command/Popover guidance, SNOMED hierarchy guidance, public SNOMED concept lookups for diabetes, hypertension, medication review, diabetic foot examination, and observable examples.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/types.ts`, `prototypes/ehr-shadcn-pwa/src/data/demo.ts`, `prototypes/ehr-shadcn-pwa/src/components/ClinicalBadge.tsx`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: the seed concepts remain prototype data, not a validated UK SNOMED refset or terminology-server integration.

## 2026-04-26 10:13:14 BST — Added clinical colour variants to V2 consultation action buttons
- Action performed: extended the local shadcn `Button` primitive with clinical warning, success, and purple variants; applied yellow `REVIEW VALIDATION`, green `Save Locally`, and purple `Sign Consultation` styling to the consultation banner action rail.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn Button guidance, `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, `prototypes/ehr-shadcn-pwa/src/App.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: `Sign Consultation` remains disabled while validation is open, so its purple styling is shown in disabled state until required sections are completed.

## 2026-04-26 12:47:28 BST — Added Material for MkDocs GitHub Pages mirror
- Action performed: wired a parallel Material for MkDocs build that mirrors the canonical LLM Wiki corpus without replacing the existing Astro/Starlight wiki UI, and added a GitHub Pages deployment workflow for the MkDocs output.
- Inputs used: existing canonical wiki files, existing Astro/Starlight mirror shape, Material for MkDocs publishing guidance, and GitHub Pages custom workflow guidance.
- Outputs created: `mkdocs.yml`, `requirements-mkdocs.txt`, `scripts/sync_mkdocs_material.py`, `mkdocs-material/README.md`, `.github/workflows/deploy-mkdocs-material.yml`, updated `.gitignore`, updated `README.md`, generated ignored `mkdocs-material/docs/`, generated ignored `site/`, and updated `log.md`.
- Unresolved issues: the local git/jj worktree already contains unrelated uncommitted changes, so no checkpoint commit was created for this stage to avoid bundling unrelated work.

## 2026-04-26 12:57:10 BST — JJ worktree checkpoint and GitHub publish prep
- Action performed: prepared the mixed JJ/Git worktree for a full checkpoint, including preserving the nested toolkit checkout metadata locally while making the raw toolkit source files trackable in the parent repository.
- Inputs used: `jj status`, `git status --short --branch`, `gh auth status`, nested toolkit origin `https://github.com/rbirkby/mscui.git`, and nested toolkit commit `471b618606e2910136751836837522d45f176429`.
- Outputs created: updated `.gitignore`, updated `raw/metadata/toolkit-mscui.json`, local ignored preservation path `.local/raw-source-git/mscui.git/`, and updated `log.md`.
- Unresolved issues: GitHub remote creation and push still pending in this stage.

## 2026-04-26 13:00:33 BST — GitHub Pages enablement follow-up
- Action performed: changed the newly created GitHub repository from private to public because the authenticated account plan did not support GitHub Pages for private repositories, then updated the Pages workflow so `actions/configure-pages` can enable workflow-based Pages publishing.
- Inputs used: failed GitHub Actions run `24956081707`, GitHub Pages API response `Your current plan does not support GitHub Pages for this repository`, and the existing `.github/workflows/deploy-mkdocs-material.yml`.
- Outputs created: public GitHub repository `ajdench/Microsoft-Health-Common-User-Interface`, updated `.github/workflows/deploy-mkdocs-material.yml`, and updated `log.md`.
- Unresolved issues: final Pages workflow run still pending at the time of this log entry.

## 2026-04-26 13:01:37 BST — GitHub Pages site enabled
- Action performed: enabled the GitHub Pages site directly with the authenticated GitHub token after the workflow token was not permitted to create the Pages site.
- Inputs used: failed GitHub Actions run `24956106070`, GitHub API endpoint `repos/ajdench/Microsoft-Health-Common-User-Interface/pages`, and `build_type=workflow`.
- Outputs created: GitHub Pages site `https://ajdench.github.io/Microsoft-Health-Common-User-Interface/` configured for workflow deployment.
- Unresolved issues: final deployment workflow run still pending at the time of this log entry.

## 2026-04-26 14:28:23 BST — Split V2 consultation sections into notes and coded content panes
- Action performed: changed each V2 consultation section body from stacked coded content and textarea controls into a responsive split layout with free-text notes on the left and section-local coded content on the right at desktop widths, widened the coded-content pane enough for selected SNOMED pills to remain readable, and preserved a single-column fallback plus validation focus on the textarea.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to split consultation panes into left/right text-box and coded content, `prototypes/ehr-shadcn-pwa/src/components/ConsultationSectionCard.tsx`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ConsultationSectionCard.tsx`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: the coded-content pane still uses static prototype SNOMED suggestions; real terminology service and section-specific value sets remain future work.

## 2026-04-26 14:35:51 BST — Moved V2 section status pills into the notes pane
- Action performed: removed the full-width consultation section header and moved each section title, required/optional description, and Ready/Needs entry status pill into the left notes pane so the right coded-content pane starts at the top of the section body and gains vertical space.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to move Ready pills to the left column, `prototypes/ehr-shadcn-pwa/src/components/ConsultationSectionCard.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ConsultationSectionCard.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the section status placement.

## 2026-04-26 14:47:39 BST — Removed V2 SNOMED suggested-concepts heading
- Action performed: removed the visible "Suggested concepts" group title from the section-local SNOMED CT search popover so results proceed directly from the searchbar to the Concept, Type, and Priority column headers.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to remove the redundant suggested-concepts title, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the suggested-concepts heading removal.

## 2026-04-26 14:50:09 BST — Compacted V2 medication review cards
- Action performed: changed right-pane medication review cards from tall mini-record cards with separate labelled Dose and Route rows into compact two-line reference cards showing medicine/status first and dose, route, and frequency together on the second line.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request for more space-saving medication review cards, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the medication-card compaction pass.

## 2026-04-26 14:52:39 BST — Reordered V2 reference pane responsively
- Action performed: changed the app shell so the Medications, Alerts, and Results reference pane appears above consultation capture on single-column/narrow screens while remaining the right-hand reference rail at desktop widths.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request for the reference pane to be top on smaller screens and right pane on larger screens, `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the responsive reference-pane ordering.

## 2026-04-26 14:54:18 BST — Normalised V2 card title typography
- Action performed: changed shared card titles and reference section titles to normal app text size with subtitle weight and foreground colour so they remain black but no longer read as oversized headings.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request for card titles to use common text size as black sub-titles, `prototypes/ehr-shadcn-pwa/src/components/ui/card.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ui/card.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the card-title typography pass.

## 2026-04-26 15:08:15 BST — Added labelled medication detail columns
- Action performed: reformatted V2 medication review cards so dose, route, and frequency are shown in compact columns with pill labels, preserving explicit field/value pairing while using the available white space in each card.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to reformat medication details with columns and pill labels following design, shadcn, and CUI contracts, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the medication detail label pass.

## 2026-04-26 15:18:23 BST — Reworked medication cards to shared field columns
- Action performed: moved Medication, Dose, Route, Frequency, and State into a shared column header row where the medication helper sentence had been, removed repeated label pills from individual cards, and aligned every medication card to the same compact 60px base row height as standard alert cards.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to make medication cards the same height as alert cards and put detail columns between title and state pill, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the shared medication column pass.

## 2026-04-26 15:21:33 BST — Applied shared reference columns to results
- Action performed: replaced the Recent results table with compact shadcn card rows aligned under a muted Date, Result, Value, and Status column header row; medication and result field headers now use the same grey subtext styling.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to apply the medication-card column treatment to Results while keeping grey subtext styling, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the shared results column pass.

## 2026-04-26 15:24:10 BST — Aligned alert cards with reference row contract
- Action performed: replaced the mixed shadcn Alert treatment with compact shadcn card rows under a muted Alert, Rationale, and State column header row; alert row border and fill now follow the same colour family as the state pill for critical, high, and routine states.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request for Alert cards to follow the same style as Critical and the State pill, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the alert-card alignment pass.

## 2026-04-26 16:26:31 BST — Aligned section coding rail with notes textarea
- Action performed: removed the repeated `Coded content` title from section coding cards, changed the SNOMED search field prompt to `Add SNOMED CT concept`, and aligned the selected concept list to the same vertical rail as the free-text textarea.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to remove coding titles, update search default text, and align added concepts with the free-text box, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the section coding rail alignment pass.

## 2026-04-26 16:32:26 BST — Fixed reference list column alignment
- Action performed: aligned Medications, Alerts, and Results column headers with their row values by giving header grids the same inset as card rows, forcing row card headers to use the intended explicit grid tracks, and replacing dynamic terminal `auto` state/status tracks with fixed-width columns.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that reference list item values were not below their column titles, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the reference list column alignment pass.

## 2026-04-26 16:38:23 BST — Moved reference context into fixed top stack
- Action performed: restructured the V2 shell so patient chrome, sync state, Medications/Alerts/Results reference tabs, and the consultation banner form a fixed top context stack at every viewport size; consultation sections now occupy the only scrollable region below that stack.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to keep Medications/Alerts/Results as the top card at all window sizes and make the page scroll only below fixed header-type items, `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the fixed top-stack pass.

## 2026-04-26 16:41:21 BST — Undid fixed-scroll shell change
- Action performed: reverted the fixed top-stack/internal-scroll shell change so V2 returns to normal page scrolling, with the reference tabs above consultation on small screens and as the sticky right rail at desktop widths.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to undo the scroll change, `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the scroll-change undo.

## 2026-04-26 17:50:30 BST — Removed repeated reference tab titles
- Action performed: removed the visible `Medication review`, `Alerts and decision support`, and `Recent results` headings from the V2 reference tab panels while preserving accessible section labels and keeping the muted column headers as the first visible panel content.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to remove the internal titles from Medication, Alerts, and Results, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/src/App.test.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the repeated reference title removal.

## 2026-04-26 17:54:49 BST — Tightened and colour-coded result reference cards
- Action performed: removed the forced 60px minimum from V2 result reference cards so they conform to one-line content and shadcn card padding, and added status-matched result card border/background colours aligned with the result status pill family.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that Results cards were too tall and should be colour-coded like Alerts, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the result reference card sizing and colour pass.

## 2026-04-26 17:57:41 BST — Aligned validation action button with block-fill rail actions
- Action performed: updated the V2 `clinicalWarn` shadcn button variant so `Review Validation` keeps the `#ffd230` fill, uses the same-colour border, and switches to white text to match the block-fill treatment used by `Save Locally` and `Sign Consultation`.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to treat the validation action like the save and sign actions, `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the validation action button pass.

## 2026-04-26 19:06:51 BST — Adjusted validation action fill token
- Action performed: changed the V2 `clinicalWarn` shadcn button variant fill and matched border/focus colour from `#ffd230` to `#efc52e` for `Review Validation`, preserving white text and the block-fill action treatment.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to change the validation action fill to `#efc52e`, `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ui/button.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the validation action fill-token adjustment.

## 2026-04-26 19:08:38 BST — Removed coded-content empty boxes
- Action performed: removed the repeated `No codes added.` shadcn empty box from V2 section-local coded content so empty sections show only the SNOMED CT concept searchbar until codes are selected.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to remove all present `No codes added.` boxes, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the coded-content empty-box removal.

## 2026-04-26 19:11:38 BST — Restored bottom Tasks pane
- Action performed: added a distinct bottom `Tasks` pane after the Follow-up consultation section in V2, preserving Follow-up as narrative clinical content while restoring separate actionable follow-up task capture.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user question about where the Tasks pane had gone and request to add it to the bottom, V1 task pane precedent in `prototypes/ehr-pwa/src/components/ConsultationCaptureWorkspace.tsx`, V2 app state, V2 e2e layout contract, V2 design contract, and the V2 companion wiki note.
- Outputs created: added `prototypes/ehr-shadcn-pwa/src/components/TasksPane.tsx`; updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/data/demo.ts`, `prototypes/ehr-shadcn-pwa/src/types.ts`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the bottom Tasks pane restoration.

## 2026-04-26 19:23:21 BST — Researched free-text SNOMED concept recognition
- Action performed: documented a candidate-based approach for identifying SNOMED CT concepts in consultation free-text boxes, including terminology service boundaries, open-source NLP tool options, offline-first constraints, inline presentation guidance, and staged implementation recommendations.
- Inputs used: user request to research identifying SNOMED terms/concepts in free-text boxes; NHS England Terminology Server documentation; NHS Terminology Server FHIR API catalogue; HL7 FHIR R4 terminology service documentation; SNOMED International Snowstorm repository; MedCAT documentation and repository; Apache cTAKES page; scispaCy repository; QuickUMLS repository; UMLS reference manual; NLM MetaMap maintenance notice.
- Outputs created: updated `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md` and `log.md`.
- Unresolved issues: clinical validation set, terminology licensing/access model, and the final in-browser versus service-side NLP deployment boundary remain open design decisions.

## 2026-04-26 19:25:20 BST — Added task-local SNOMED CT pane
- Action performed: added the reusable SNOMED CT coding field to the V2 bottom Tasks pane, using a task-owned code scope so actionable follow-up tasks can carry structured coded concepts without becoming narrative consultation sections.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request that Tasks should also have a SNOMED CT pane, `prototypes/ehr-shadcn-pwa/src/components/TasksPane.tsx`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/TasksPane.tsx`, `prototypes/ehr-shadcn-pwa/src/App.test.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: task coding currently uses the same static SNOMED-like fixture and generic concept search as consultation section coding; later terminology-provider work should define task-specific value sets.

## 2026-04-26 19:28:26 BST — Made MAR pane full-width above consultation
- Action performed: changed the V2 consultation shell so the Medications, Alerts, and Results reference panel remains a full-width top pane at every viewport size instead of moving to a desktop right rail.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request for MAR to be full-width at the top in all consultation browser window sizes, `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/App.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the MAR top-pane layout pass.

## 2026-04-26 19:31:23 BST — Made SNOMED search field more explicit
- Action performed: replaced the bare section coding input with a shadcn `InputGroup` search control using a leading search icon, inline `SNOMED CT` addon, stronger card surface, and adjusted internal gap so selected concepts still align with the notes textarea rail.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to make the `Add SNOMED CT concept` search field more obvious and shadcn compliant, shadcn input/card/popover/command documentation, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the SNOMED search field visual affordance pass.

## 2026-04-26 22:06:37 BST — Added diabetes-context normal result
- Action performed: added a normal `Body mass index` result to the V2 MAR Results tab, using a diabetes-review-relevant concept that also exists in the SNOMED CT coding suggestion fixture.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, previous MAR height measurement showing one additional Results row fits within the Medications/Alerts pane height, user request to add another relevant normal Results item in the diabetes context, `prototypes/ehr-shadcn-pwa/src/data/demo.ts`, V2 layout tests, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/data/demo.ts`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the additional normal result fixture.

## 2026-04-26 22:09:44 BST — Fixed MAR pane height
- Action performed: fixed the V2 MAR pane height to the existing tallest Medications/Alerts height and adjusted Results row sizing so five compact Results cards fill the same MAR list area without moving the consultation form when switching tabs.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to make the MAR pane fixed height and adjust item cards to fit, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the fixed MAR pane pass.

## 2026-04-26 22:11:44 BST — Centred MAR item-card contents
- Action performed: vertically centred the row header grid inside medication, alert, and result item cards in the V2 MAR pane, and added layout assertions that the row content centre matches the card centre.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to vertically centre card contents, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the MAR row-card vertical centring pass.

## 2026-04-26 22:13:36 BST — Colour-coded medication rows by state
- Action performed: colour-coded V2 medication row card surfaces by medication state so active medications use the green state family and stopped medications use the neutral state family, aligning Medications with the MAR convention already used by Alerts and Results.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to colour-code Medications along State category, `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/ReferencePanel.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the medication state colour pass.

## 2026-04-26 22:16:40 BST — Renamed clinical code search prompt
- Action performed: changed the section-local coding search field prompt and accessible label from `Add SNOMED CT concept` to `Add clinical code`, while retaining the inline `SNOMED CT` code-system addon.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to change the prompt text, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 unit/e2e tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/src/App.test.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the prompt rename.

## 2026-04-26 22:19:08 BST — Lightened clinical code pane surface
- Action performed: changed the clinical-code pane surface to a light muted grey while keeping the searchbar itself on the normal input background.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to make the clinical code pane fill a lighter grey while leaving search bar fill unchanged, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the clinical-code pane surface pass.

## 2026-04-26 22:25:27 BST — Aligned selected clinical-code pills
- Action performed: made selected clinical-code pills full width in the section-local coding pane and aligned SNOMED CT code, semantic type, and priority into fixed right-aligned columns across all selected concepts.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to make all clinical code pills in-pane full width with aligned code/type/priority columns, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the selected clinical-code pill alignment pass.

## 2026-04-26 22:36:05 BST — Tightened clinical-code metadata spacing
- Action performed: tightened the visible gap between Type and Priority pills in SNOMED search results and selected clinical-code rows, removed the repeated `SNOMED CT` prefix from search result code lines, and added length-aware title sizing for longer concept titles while preserving row line-height.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to reduce inconsistent Type/Priority spacing, remove repeated result code-system text, and auto-shrink longer titles in search and selected code rows, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the clinical-code metadata spacing pass.

## 2026-04-26 22:41:24 BST — Restored natural priority pill widths
- Action performed: removed the stretched full-width styling from Priority pills in SNOMED search results and selected clinical-code rows, keeping the tighter constrained priority column while allowing each priority badge to size naturally to its text.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user correction that common-size priority pills were not requested, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the natural priority pill-width correction.

## 2026-04-26 22:57:24 BST — Applied split-pane gap to clinical-code metadata
- Action performed: changed SNOMED search result rows and selected clinical-code rows to use the same `gap-3`/12px column gap as the consultation free-text/code split between concept, type, and priority columns, and reduced the type metadata track so concept titles are not shrunk by unused metadata whitespace.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to increase the Type/Priority gap to match the consultation split-pane gap and apply the same gap between concept and Type, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the clinical-code metadata gap pass.

## 2026-04-26 23:01:00 BST — Inset clinical-code search column labels
- Action performed: inset the `Type` and `Priority` header labels in the SNOMED search results by the badge horizontal padding so the label text aligns with the right rail of the text inside the corresponding metadata pills rather than the pill border edge.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to align clinical-code search column labels to the right end of pill text, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the clinical-code search header rail pass.

## 2026-04-26 23:04:53 BST — Restored right-aligned priority search pills
- Action performed: restored right alignment for Priority pills in SNOMED search result rows and selected clinical-code rows, and kept the Priority column header inset to the right-hand text rail inside those right-aligned priority pills.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user correction that Priority pills should be right-aligned against the search result card margin and only the header label should be inset to the text rail, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: none for the priority pill alignment correction.

## 2026-04-26 23:08:10 BST — Rebalanced clinical-code search concept width
- Action performed: measured the SNOMED search result metadata gaps, confirmed that the visible Type-to-Priority gap varied around 15-28px while the Concept-to-Type gap was around 51-58px, then narrowed the search-result Type track so the Concept-to-Type gap now sits around 23-32px and the concept title column gains usable width.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to use the Priority/Type gap between the Type column and Concept column so result concept titles can be fuller width, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, Playwright geometry measurement, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, and `log.md`.
- Unresolved issues: none for the clinical-code search concept-width rebalancing pass.

## 2026-04-26 23:11:56 BST — Added temporary clinical-code column guides
- Action performed: added temporary dashed vertical guide lines to the SNOMED search-result Type and Priority columns, and removed character-count-driven shrinking from search-result concept titles so `Medication review done by doctor` stays at normal text size when the concept column has room.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to draw temporary clinical-code result column lines and explain why the long medication concept was shrunk despite available space, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: the dashed result-column guide lines are intentionally temporary and should be removed once the clinical-code metadata column contract is accepted.

## 2026-04-26 23:21:21 BST — Sized type guide to longest type pill
- Action performed: resized the SNOMED search-result Type metadata track to the current longest type pill, `Regime/therapy`, so the temporary dashed Type guide marks that pill's left edge rather than cutting through it.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user observation that `Regime/Therapy` is the longest Type pill and the guide line should align with its leftmost extension, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/tests/e2e/v2-layout.spec.ts`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `log.md`.
- Unresolved issues: the dashed result-column guide lines remain temporary diagnostics.

## 2026-04-26 23:27:05 BST — Verified V2 SNOMED seed concepts
- Action performed: checked the V2 clinical-code seed concepts against the public Snowstorm SNOMED CT browser API, corrected the hypoglycaemia display to the preferred UK-facing spelling, and documented which search-result fields are terminology truth versus prototype ranking metadata.
- Inputs used: `prototypes/ehr-shadcn-pwa/src/data/demo.ts`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, Snowstorm browser API concept lookups for the V2 fixture SCTIDs, `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, and `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md`.
- Outputs created: updated V2 fixture display for `302866003`, added a SNOMED fixture truth pass table to the V2 companion wiki, clarified the DESIGN.md terminology contract, and recorded that `Priority` is app/search-ranking metadata rather than a SNOMED CT property.
- Unresolved issues: the prototype still uses static fixture data; UK edition/refset selection, terminology-service search, value-set governance, real ranking provenance, and sync-time validation remain future work.

## 2026-04-26 23:30:26 BST — Documented clinical-code priority provenance
- Action performed: researched and documented where a real-world replacement for the prototype `Priority` badge can come from, separating SNOMED ordered reference-set prioritisation, FHIR ValueSet/refset membership, terminology search scoring, local governance, patient-context ranking, and clinical safety severity.
- Inputs used: SNOMED International reference-set guidance, FHIR ValueSet/terminology guidance, NHS England Terminology Server and SNOMED CT standards pages, `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md`, and `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`.
- Outputs created: updated companion wiki guidance recommending a result-reason model (`Exact match`, `In section value set`, `Ordered refset rank`, `Context match`, `Ambiguous`, `Local favourite`) rather than treating `Priority` as SNOMED concept truth.
- Unresolved issues: the V2 UI still labels this column `Priority`; a future UI pass should rename or split it into standards-backed result reasons.

## 2026-04-26 23:32:49 BST — Removed selected-pill clinical code display
- Action performed: removed the numeric clinical code from selected clinical-code pills while keeping the code visible in search results and in the removal confirmation dialog.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, selected clinical-code layout tests, V2 design contract, and the V2 companion wiki note.
- Outputs created: updated selected-pill grid layout, revised e2e assertions so selected pills contain title/type/priority/remove only, updated DESIGN.md and companion wiki guidance, and recorded the change in `log.md`.
- Unresolved issues: the result column is still labelled `Priority`; a future pass should rename it to a standards-backed result-reason model.

## 2026-04-26 23:35:53 BST — Documented selected-pill typography drift
- Action performed: documented that selected clinical-code display names can still shrink by character count while consultation free-text uses normal textarea body text, and recorded this as UI drift rather than an intended final contract.
- Inputs used: `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, `prototypes/ehr-shadcn-pwa/src/components/ui/textarea.tsx`, `prototypes/ehr-shadcn-pwa/DESIGN.md`, and `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`.
- Outputs created: updated DESIGN.md and V2 companion wiki guidance to state that selected concept titles should normally match free-text body scale, with any future shrink driven by measured overflow rather than character count.
- Unresolved issues: implementation intentionally unchanged at the user's request; the next UI pass should remove or replace the current selected-title shrink rule.

## 2026-04-26 23:45:46 BST — Implemented inline clinical-code identification
- Action performed: added a textarea-backed inline clinical-code recogniser for consultation free text, using a visual overlay to render recognised terms as compact semantic-type coloured pills while preserving plain text editing and storage.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/components/ConsultationSectionCard.tsx`, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, current SNOMED seed concepts, V2 layout tests, V2 design contract, and companion inline-coding wiki guidance.
- Outputs created: new `ClinicalTextTextarea`, shared clinical-code display helpers, fixture-backed clinical text concept matching helpers, e2e coverage for inline term recognition and type colour pills, updated DESIGN.md, updated companion wiki pages, and this log entry.
- Unresolved issues: inline recognition is deterministic fixture matching only; accept/reject actions, source-span persistence, assertion status, negation handling, terminology-service backed matching, and result-reason provenance remain future work.

## 2026-04-26 23:53:27 BST — Moved text-derived code candidates out of textarea
- Action performed: removed the textarea visual-overlay approach because it made the native caret behave as if it were unaware of clinical-code pills, and changed recognised free-text terms into selectable `From text` candidates in the section-local clinical-code pane.
- Inputs used: user report from the V2 prototype at `http://127.0.0.1:5175/`, `ClinicalTextTextarea`, `ConsultationSectionCard`, `SectionCodingField`, fixture-backed clinical text matching helpers, V2 e2e layout contract, DESIGN.md, and companion wiki notes.
- Outputs created: restored normal visible textarea behaviour, added text-derived candidate rows with semantic type colours and source metadata, added candidate acceptance behaviour that inserts a trailing space when needed and returns the caret to the next typing position, updated tests, and revised documentation to describe the safer candidate-rail model.
- Unresolved issues: the previous log entry remains as history of the attempted overlay pass; a future rich editor could revisit true inline tokens only if the editor is token/caret aware.

## 2026-04-26 23:59:43 BST — Added token-aware inline coded text pills
- Action performed: replaced the plain textarea model with a small token-aware clinical text editor so accepted coded concepts render as non-editable inline pills in the note body while also appearing in the section coded-content list.
- Inputs used: user correction that coded concepts selected from search or text identification should be added to both the body text and coded entries, `ClinicalTextTextarea`, `ConsultationSectionCard`, `SectionCodingField`, clinical text token helpers, V2 e2e layout contract, DESIGN.md, and companion wiki notes.
- Outputs created: inline clinical-code token markers, inline concept pill rendering, search-result insertion at the current editor caret, text-derived candidate replacement of source phrases, e2e coverage for inline/search selected concepts, updated DESIGN.md, updated companion wiki pages, and this log entry.
- Unresolved issues: this is still a prototype editor rather than a mature rich-text clinical editor; source-span provenance, keyboard token navigation, token deletion semantics, and sync-safe serialization need later hardening.

## 2026-04-27 00:03:26 BST — Removed Reason default text
- Action performed: removed seeded default text from the Reason section and replaced it with a visual-only grey example prompt, `Type: "Medication review and diabetes follow-up."`, with the example phrase italicised and cleared on focus.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that default Reason text was causing a failure loop and was clinically incorrect, `ClinicalTextTextarea`, `ConsultationSectionCard`, V2 demo data, V2 e2e layout contract, DESIGN.md, and companion inline-coding wiki guidance.
- Outputs created: updated the Reason demo data to start empty, updated the token-aware editor to ignore placeholder nodes during value/caret reads, scoped the example placeholder to the Reason field, updated e2e coverage for the three-incomplete-section initial state and focus-clearing prompt, and documented the placeholder contract in DESIGN.md and companion wiki pages.
- Unresolved issues: none for the placeholder/default-text correction.

## 2026-04-27 00:09:22 BST — Routed text-derived concepts through clinical-code results
- Action performed: changed free-text clinical-code identification so typed terms open the section-local clinical-code results popover instead of rendering a separate `From text` candidate rail or behaving like autocomplete.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request that typed text should invoke the clinical-code results list, `SectionCodingField`, `ClinicalTextTextarea`, V2 e2e layout contract, DESIGN.md, and companion inline-coding wiki guidance.
- Outputs created: text-derived concepts now render as normal fixed-column command result rows with concept, code, type, and priority; accepting a row still requires explicit selection and then creates the normal selected concept plus an inline concept pill; inline pills now use the same semantic parent-pill colour family as selected clinical-code pills; tests and documentation were updated.
- Unresolved issues: the prototype still uses fixture-backed text recognition and static result ranking rather than terminology-service backed result provenance.

## 2026-04-27 00:12:17 BST — Separated Finding and Disorder colours
- Action performed: moved the `Finding` semantic type from the sky/blue-adjacent family to fuchsia while keeping `Disorder` in the calm blue family.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that `Disorder` and `Finding` were too close in colour, `ClinicalBadge`, clinical-code display helpers, V2 e2e layout contract, DESIGN.md, and companion wiki notes.
- Outputs created: updated semantic-type badge and parent-pill classes for `Finding`, added e2e coverage that `Prediabetes` renders as a fuchsia `Finding` type rather than blue, and documented the palette distinction.
- Unresolved issues: none for the semantic-colour separation pass.

## 2026-04-27 00:46:22 BST — Audited semantic type palette
- Action performed: checked the full semantic type palette after the previous Finding change and corrected remaining adjacent-hue collisions by moving `Finding` to pink, `Procedure` to orange, and keeping `Regime/therapy` violet and `Disorder` blue.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that `Finding` and `Regime/therapy` were now too close, `ClinicalBadge`, clinical-code display helpers, V2 e2e layout contract, DESIGN.md, and companion wiki notes.
- Outputs created: updated semantic badge and parent-pill classes, changed temporary clinical-code column guide lines to neutral slate, extended e2e checks across Finding, Regime/therapy, Procedure, and Observable result rows, and documented the revised palette.
- Unresolved issues: `Product` remains defined as teal but has no visible fixture row in the current demo data; add a product fixture if product colour needs browser-visible regression coverage.

## 2026-04-27 00:49:33 BST — Opened full demo code list on search focus
- Action performed: changed section-local clinical-code search so focusing or clicking an empty `Add clinical code` field opens the full demo code list instead of waiting for typed input.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request that clicking clinical code search should display all demo codes, `SectionCodingField`, V2 e2e layout contract, DESIGN.md, and the V2 companion wiki note.
- Outputs created: explicit search focus now opens all 13 demo code suggestions, typing still filters the list, passive text-derived recognition still opens only its scoped candidate result when the searchbar has not been explicitly opened, and e2e coverage verifies the full list appears on click.
- Unresolved issues: none for the demo full-list search behaviour.

## 2026-04-27 00:54:15 BST — Added live free-text code search
- Action performed: changed consultation note typing so the current typed span can act as a live clinical-code search query while the clinician types, instead of waiting for an exact recognised term.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that free text was not turning into search query/results as they typed, `ClinicalTextTextarea`, `ConsultationSectionCard`, `SectionCodingField`, clinical text concept helpers, V2 e2e layout contract, DESIGN.md, and companion wiki notes.
- Outputs created: partial typed text such as `diab` now opens filtered clinical-code result rows without autocompleting the note; selecting a live text-query result replaces the typed span with the standard inline concept pill and adds the selected coded concept to the section coded list; e2e coverage verifies live results appear before any code is selected.
- Unresolved issues: live matching is still fixture-backed demo search rather than terminology-service backed typeahead.

## 2026-04-27 01:09:59 BST — Kept live code search passive while typing
- Action performed: corrected the consultation note editor and section clinical-code search interaction so passive free-text recognition mirrors the typed span into the `Add clinical code` field without stealing focus, interrupting continued typing, or committing a code automatically.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that recognised text stopped continued typing and should feed the search box without leaving the text box, `ClinicalTextTextarea`, `ConsultationSectionCard`, `SectionCodingField`, clinical text concept helpers, V2 e2e layout contract, DESIGN.md, companion wiki notes, and in-app browser verification.
- Outputs created: the token-aware editor now avoids remounting during normal input, resyncs only for structured external updates such as inline code insertion, applies caret restoration once per inserted value, keeps blur from reclaiming focus, makes alias-backed searches such as `t2dm` searchable, and documents the passive mirror/no-autocommit contract.
- Unresolved issues: the editor remains a prototype contenteditable implementation; production should still evaluate a mature editor/decorator model before handling complex token deletion, IME composition, undo stacks, and source-span provenance.

## 2026-04-27 01:14:16 BST — Fixed progressive typing caret and removed default codes
- Action performed: corrected caret offset calculation inside nested text spans so continued typing appends at the actual caret position, and removed the seeded default selected clinical-code entry from the V2 demo.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that the caret returned to the initial position and that default clinical-code entries should be removed, `ClinicalTextTextarea`, V2 demo data, V2 e2e layout contract, DESIGN.md, companion wiki notes, and targeted browser verification.
- Outputs created: recursive caret offset reading/placement for contenteditable text nodes, empty initial selected-code lists, e2e coverage that explicitly adds hypertension before checking selected-pill styling, updated DESIGN.md, updated companion wiki pages, and this log entry.
- Unresolved issues: the contenteditable editor remains a prototype; production should still validate IME input, undo/redo, token deletion, screen-reader behaviour, and persisted source-span provenance.

## 2026-04-27 01:18:41 BST — Kept clinical-code search results open on click
- Action performed: fixed the section-local `Add clinical code` searchbar so clicking an empty field opens and keeps the full demo result list visible instead of briefly flashing closed.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that search results blipped but did not stay displayed, `SectionCodingField`, V2 e2e layout contract, DESIGN.md, companion V2 wiki note, and targeted Playwright reproduction.
- Outputs created: the searchbar now acts as the Radix popover trigger for positioning while preventing trigger-click toggling from closing an explicitly focused field, e2e coverage checks that the full result list remains mounted after click, and DESIGN/wiki notes clarify that focused empty search keeps results visible.
- Unresolved issues: none for the click-to-open search behaviour.

## 2026-04-27 01:20:58 BST — Aligned Tasks pane with split-card layout contract
- Action performed: reworked the bottom Tasks pane so it follows the same card body layout as consultation sections instead of using a separate top `CardHeader`.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that the Tasks card did not follow the layout used by the other cards, `TasksPane`, `ConsultationSectionCard`, V2 e2e layout contract, DESIGN.md, and companion V2 wiki note.
- Outputs created: Tasks now places title/status/description and task entry on the left rail, starts task-local clinical-code search on the right rail at the top of the card body, adds e2e split-layout assertions, updates DESIGN.md, updates the companion V2 wiki note, and records this log entry.
- Unresolved issues: none for the Tasks card layout alignment.

## 2026-04-27 02:24 BST — Aligned Reason instruction to available diabetes review concepts
- Action performed: changed the Reason note instruction from `Medication review and diabetes follow-up.` to `Diabetes medication review and diabetic annual review.` so the prompt text better matches available coded concepts.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user observation that `diabetes follow-up` did not map to one exact clinical code, `ConsultationSectionCard`, V2 e2e layout contract, DESIGN.md, and the V2 companion wiki page.
- Outputs created: Reason instruction now points toward `Diabetes medication review` and `Diabetic annual review`; e2e expectations, DESIGN.md, and companion wiki documentation were updated.
- Unresolved issues: none for the prompt wording; production should source prompt copy from section-specific value sets and local clinical governance.

## 2026-04-27 02:21 BST — Synced inline and selected clinical-code deletion
- Action performed: made consultation-section inline clinical-code tokens and selected coded-content pills delete each other so the note editor and coding pane cannot drift apart.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request that deleting a clinical coded item in the text box auto-deletes the corresponding coding-pane pill and that removing a coding-pane pill also deletes the text entry that stemmed it, `ClinicalTextTextarea`, `ConsultationSectionCard`, clinical text token helpers, V2 e2e layout contract, DESIGN.md, and the V2 companion wiki page.
- Outputs created: added token helpers for reading marker codes and removing markers by code; consultation text changes now remove selected codes whose inline markers no longer exist; coding-pane remove actions now remove matching inline markers before deleting the selected code; e2e coverage verifies both deletion directions; DESIGN.md and companion wiki documentation were updated.
- Unresolved issues: bidirectional deletion is scoped to consultation note sections; the Tasks pane remains a structured task coding surface without paired narrative tokens.

## 2026-04-27 02:35 BST — Restored repeated inline clinical-code search
- Action performed: fixed the section-local clinical-code search dismissal state so deleting an inline coded concept no longer prevents the same typed phrase from reopening text-derived search results.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that retyping after choosing and deleting a search item should trigger search again, `SectionCodingField`, token-aware note editor flow, V2 e2e layout contract, DESIGN.md, and the V2 companion wiki page.
- Outputs created: text-derived candidate/search dismissal keys now clear once their source text span disappears; e2e coverage repeats the `t2dm` select/delete/retype flow; DESIGN.md and companion wiki documentation were updated.
- Unresolved issues: none for repeated text-derived search after deletion.

## 2026-04-27 22:05 BST — Added keyboard selection for clinical-code search results
- Action performed: added keyboard navigation to the V2 section-local clinical-code search results so clinicians can move the highlighted result with up/down arrows and accept it with Enter.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, shadcn Command/Popover/Input Group documentation, `prototypes/ehr-shadcn-pwa/src/components/SectionCodingField.tsx`, V2 e2e layout contract, DESIGN.md, and companion clinical-coding wiki pages.
- Outputs created: controlled active-result state for search results, visible active-row styling, `aria-activedescendant` wiring from the searchbar to the active result row, Enter-to-select behavior, e2e keyboard-selection coverage, and updated DESIGN/wiki documentation.
- Unresolved issues: keyboard navigation is currently scoped to the explicit `Add clinical code` searchbar; passive note-editor text recognition keeps normal note-editor keyboard behavior.

## 2026-04-27 07:21 BST — Aligned consultation author text rail
- Action performed: adjusted the V2 consultation banner so the author/incomplete-status text uses the same compact text-box treatment as the action button labels, aligning the actual text rail rather than only the surrounding element boxes.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user screenshot showing author text slightly off the button-label rail, `prototypes/ehr-shadcn-pwa/src/App.tsx`, V2 e2e banner metrics, DESIGN.md, and the V2 companion wiki page.
- Outputs created: added explicit banner author/action label spans, aligned the author line with `inline-flex h-7 items-center leading-none` plus the required single-pixel optical adjustment, strengthened the e2e assertion to compare author text centre to button-label text centre, and updated DESIGN.md, the V2 companion wiki note, and this log entry.
- Unresolved issues: none for the consultation banner text-rail alignment pass.

## 2026-04-27 07:19 BST — Updated V2 demo patient identity
- Action performed: changed the V2 prototype's synthetic patient display name from `Alex Morgan` to `Margaret Ellis` so the patient banner better fits the existing 68-year-old female diabetes-review scenario.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, `prototypes/ehr-shadcn-pwa/src/data/demo.ts`, and the V2 Playwright patient-context contract.
- Outputs created: updated the demo patient fixture, added e2e assertions for name/DOB/age/sex in the patient chrome, and updated this log entry.
- Unresolved issues: none for the synthetic patient identity update.

## 2026-04-27 02:39 BST — Reconciled internal clinical-coding documentation
- Action performed: reviewed the current V2 clinical-code interaction contract across app design notes and companion wiki pages, then updated the broader inline clinical-coding page so it matches the current token-aware editor, persistent visual instructions, split coded pane, bidirectional deletion, and repeat-search-after-deletion behaviour.
- Inputs used: `prototypes/ehr-shadcn-pwa/DESIGN.md`, `wiki/companion-web-app-stack/ehr-shadcn-v2-prototype.md`, `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md`, current V2 source/test contract, and the previous JJ checkpoint for repeated clinical-code text search after deletion.
- Outputs created: updated `wiki/companion-web-app-stack/inline-clinical-coding-for-consultations.md` and this log entry.
- Unresolved issues: none for the internal documentation reconciliation pass.

## 2026-04-27 02:11 BST — Anchored consultation note instructions
- Action performed: changed consultation note `Type: "..."` prompts from focus-clearing placeholders to persistent visual instructions anchored to the bottom of each note editor.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to keep the Type instructions always on and stuck to the bottom as text boxes are resized, `ClinicalTextTextarea`, V2 e2e layout contract, DESIGN.md, and the V2 companion wiki page.
- Outputs created: note editors now reserve bottom padding for the instruction line, keep it visible on focus and with entered text, ignore it for editor value/caret/clinical-code recognition, and keep it positioned at the bottom after editor height changes; e2e coverage checks persistent visibility and bottom anchoring; DESIGN.md and companion wiki documentation were updated.
- Unresolved issues: none for persistent visual note instructions.

## 2026-04-27 01:58 BST — Limited title disclosure to actual overflow
- Action performed: changed SNOMED concept title disclosure from character-count treatment to measured overflow treatment so labels such as `Medication review done by doctor` are not underlined when the current column already shows the full title.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user report that `Medication review done by doctor` did not need treatment, follow-up request that pills no longer need shrunk text now underline expansion exists, `SectionCodingField`, `clinicalCodeDisplay`, V2 e2e layout contract, DESIGN.md, and the V2 companion wiki page.
- Outputs created: `ExpandableConceptTitle` now measures `scrollWidth/clientWidth` and `scrollHeight/clientHeight` with `ResizeObserver`; titles only become underlined expansion controls when they actually overflow; selected-pill titles now use normal body text size rather than character-count shrinking; e2e coverage asserts that `Medication review done by doctor` has no expansion control while a constrained selected concept still expands; DESIGN.md and companion wiki documentation were updated.
- Unresolved issues: none for the false-positive title treatment or selected-title shrink removal.

## 2026-04-27 01:55 BST — Added expandable shortened clinical-code titles
- Action performed: added an explicit expansion affordance for shortened SNOMED concept titles in search results and selected concept pills.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request for link-like underlined shortened text that expands full text and removes obstructing pills until toggled or cleared, `SectionCodingField`, V2 e2e layout contract, DESIGN.md, and the V2 companion wiki page.
- Outputs created: long/shortened concept titles now render with an underlined title control; activating it expands the full display text in place, hides type/priority metadata pills, hides the selected-pill remove affordance while expanded, and restores the fixed metadata layout when activated again or when clicking away; e2e coverage verifies search-result and selected-pill expansion/restore behaviour; DESIGN.md and companion wiki documentation were updated.
- Unresolved issues: expansion is currently driven by the prototype's existing shortened-title threshold rather than measured actual text overflow; a production component should replace that with measured overflow or a resilient disclosure pattern.

## 2026-04-27 01:45 BST — Added visual prompts to all consultation note cards
- Action performed: extended the Reason section's visual-only grey instructional placeholder pattern to the later consultation note cards.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to add similar shortened grey instructional terms after Reason, `ConsultationSectionCard`, `ClinicalTextTextarea`, V2 e2e layout contract, DESIGN.md, and the V2 companion wiki page.
- Outputs created: History, Examination, Assessment, Plan, and Follow-up now show concise diabetes-review `Type: "..."` prompts that are italic, visual-only, cleared on focus, ignored by required-section validation, and ignored by clinical-code recognition; e2e assertions cover each section prompt; DESIGN.md and companion wiki documentation were updated.
- Unresolved issues: none for visual-only section prompts; production copy should still be clinically reviewed alongside section-specific value sets.

## 2026-04-27 01:40 BST — Expanded diabetes SNOMED fixture and medication context
- Action performed: expanded the V2 prototype's clinical-code fixture with active diabetes-review SNOMED CT concepts and corrected the fixture type/display details that were inconsistent with current terminology lookup evidence.
- Inputs used: current V2 prototype at `http://127.0.0.1:5175/`, user request to add more relevant true SNOMED terms across consultation cards and confirm medication consistency, public SNOMED terminology lookup through Snowstorm/CSIRO Ontoserver-style FHIR operations, V2 demo data, clinical text aliasing, e2e layout/search tests, DESIGN.md, and companion wiki pages.
- Outputs created: added active diabetes-context concepts for annual review, medication review, HbA1c, urine ACR, microalbuminuria, GFR/eGFR, diabetic kidney disease, diabetic neuropathy, symptoms, diet/lifestyle education, foot examination, and blood-glucose monitoring; corrected `Prediabetes` to `Disorder`; changed `Hyperglycemia` display to `Hyperglycaemia`; promoted diabetic foot examination in the diabetes context; replaced the stopped co-codamol demo medication with active atorvastatin so the MAR medication panel is coherent with type 2 diabetes/cardiovascular-risk context; updated text-recognition aliases, tests, DESIGN.md, and companion wiki documentation.
- Unresolved issues: the fixture remains static demo terminology rather than a live NHS England Terminology Server/UK SNOMED CT implementation, and medicines remain plain reference rows rather than dm+d-coded medication statements.

## 2026-04-27 01:29:02 BST — Localized Portico full-text PDF for the Patient Journey Demonstrator article
- Action performed: localized the Portico-preserved full-text PDF for `Microsoft health patient journey demonstrator`, updated the reference-processing scripts to treat it as a new secondary source, regenerated the derived reference-context outputs and manifest/inventory layers, and refreshed the human-readable source note.
- Inputs used: Portico article page at `https://access.portico.org/Portico/auView?auId=ark%253A%252F27927%252Fphw1p04s4h5&auViewType1=PDF`, the session-backed PDF endpoint exposed by the rendered page iframe, existing PubMed abstract capture, `scripts/build_reference_context_derivatives.py`, `scripts/build_health_cui_first_pass.py`, and `wiki/source-notes/patient-journey-demonstrator-2008.md`.
- Outputs created: `raw/sources/references/secondary/portico-microsoft-health-patient-journey-demonstrator-2008.pdf`, `derived/extracted-text/reference-context/portico-microsoft-health-patient-journey-demonstrator-2008.txt`, `derived/normalized-markdown/reference-context/portico-microsoft-health-patient-journey-demonstrator-2008.md`, refreshed `raw/metadata/secondary-adoption-and-afterlife-sources.json`, refreshed `raw/manifests/design-guidance-manifest.json`, refreshed `derived/inventories/reference-context-inventory.md`, refreshed `derived/inventories/source-inventory.md`, and updated `wiki/source-notes/patient-journey-demonstrator-2008.md`.
- Unresolved issues: the PDF endpoint is browser-session-backed and direct unauthenticated HTTP fetches returned `403`, so future reacquisition should assume Portico client bootstrap or human/browser mediation may be required.

## 2026-04-29 23:07:00 BST — Reviewed wiki/app publishability and tightened GitHub-facing README
- Action performed: reviewed the repo’s three user-facing surfaces for build and GitHub Pages readiness, confirmed the live preferred MkDocs wiki, checked the alternate Astro/Starlight wiki and the React/Vite demo app, and rewrote the root `README.md` to be concise for GitHub with deployment badges and accurate links.
- Inputs used: root `README.md`, `mkdocs.yml`, `.github/workflows/deploy-mkdocs-material.yml`, `msh-cui-wiki/astro.config.mjs`, `msh-cui-wiki/README.md`, `prototypes/ehr-shadcn-pwa/package.json`, `prototypes/ehr-shadcn-pwa/vite.config.ts`, local build/test runs, and live GitHub Pages URL checks under `ajdench.github.io/Microsoft-Health-Common-User-Interface`.
- Outputs created: updated `README.md` with status badges, preferred wiki link, source links for the alternate wiki and demo app, and a short publishing-model note that this repo currently has one live GitHub Pages surface rather than three.
- Unresolved issues: the alternate Astro/Starlight wiki is not GitHub Pages-safe yet because it emits `localhost` sitemap/canonical URLs and root-relative links/assets, and the demo app is also not Pages-safe yet because its Vite/PWA config still assumes deployment at `/`.

## 2026-04-29 23:16:41 BST — Made the combined Pages bundle subpath-safe for both wikis and the demo
- Action performed: changed the GitHub Pages deployment model from a single MkDocs root publish to one combined artifact with a landing page at `/`, the preferred MkDocs wiki at `/mkdocs_wiki/`, the Astro/Starlight wiki at `/starlight_wiki/`, and the React/Vite demo app at `/demo/`.
- Inputs used: `.github/workflows/deploy-mkdocs-material.yml`, `README.md`, `msh-cui-wiki/astro.config.mjs`, `msh-cui-wiki/scripts/sync-llm-wiki.mjs`, `msh-cui-wiki/src/components/Head.astro`, `prototypes/ehr-shadcn-pwa/vite.config.ts`, local MkDocs/Astro/Vite builds, and the repo’s GitHub Pages URL structure.
- Outputs created: new `scripts/build_github_pages_bundle.sh`, updated Pages workflow, base-path-aware Astro config, base-aware Starlight mirror link generation, base-aware demo PWA/Vite config, refreshed GitHub-facing `README.md`, and a generated local `site/` bundle that validates the three-surface layout.
- Unresolved issues: the new routes are verified locally in the generated `site/` bundle, but the public GitHub Pages URLs will not update until the workflow runs on push or manual dispatch.

## 2026-04-30 07:50:48 BST — Recovered V2 prototype source onto Git main
- Action performed: diagnosed why the local/public demo was showing an older UI and restored the latest V2 prototype, inline clinical-coding implementation, Tasks pane, design notes, companion wiki updates, and localized Portico source material from the reachable JJ UI head onto the current Git `main` working copy.
- Inputs used: current `main`/`origin/main` at `654dbb47`, JJ graph showing the newer UI line ending at `cc065de0960c`, local Vite endpoint `http://127.0.0.1:5175/`, live GitHub Pages `/demo/` checks, restored prototype source under `prototypes/ehr-shadcn-pwa/`, and companion wiki/source-note files.
- Outputs created: restored the V2 shadcn consultation shell source, section-local clinical-code search and inline coded text support, Tasks pane, MAR/consultation layout contract tests, updated `DESIGN.md`, updated companion wiki clinical-coding/design pages, restored Portico-derived source artefacts, and preserved the later README/GitHub workflow fixes already on `main`.
- Verification: `npm test`, `npm run build`, and `npm run e2e` pass in `prototypes/ehr-shadcn-pwa`; the combined Pages artifact builds with `PATH="$PWD/.venv-mkdocs/bin:$PATH" bash scripts/build_github_pages_bundle.sh`.
- Unresolved issues: the deployed GitHub Pages site remains old until this recovered working copy is committed to JJ/Git and pushed, then the Pages workflow completes.

## 2026-04-30 11:54:20 BST — Aligned clinical-code search field contents
- Action performed: aligned the `Add clinical code` search bar contents so the search icon, input text, and `SNOMED CT` suffix share the same 20 px visual rail inside the 36 px search field.
- Inputs used: rendered measurement of the current V2 prototype at `http://127.0.0.1:5175/`, `SectionCodingField`, shadcn input-group primitives, and user screenshot showing the near-aligned search field contents.
- Outputs created: set the search icon to the same 20 px visual height as the text line, explicitly applied `leading-5` to the input and suffix text, and preserved the existing 9 px left/right visual insets.
- Verification: rendered measurements now show icon top/bottom insets of 8 px, `SNOMED CT` top/bottom insets of 8 px, both centred at zero offset in the 36 px search field; `npm test` and `npm run build` pass in `prototypes/ehr-shadcn-pwa`.
- Unresolved issues: none for the clinical-code search field content rail.

## 2026-04-30 11:59:24 BST — Corrected clinical-code search icon visual height
- Action performed: corrected the previous clinical-code search icon adjustment, which had matched the 20 px line box rather than the visible text glyph size.
- Inputs used: user screenshot showing the enlarged search icon, rendered measurement of the `Add clinical code` field, and `SectionCodingField`.
- Outputs created: set the search icon to an explicit 14 px size to match the `text-sm` font size while keeping it vertically centred in the 36 px field.
- Verification: rendered measurements show a 14 px icon with 11 px top/bottom insets, zero centre offset, and `Add clinical code`/`SNOMED CT` text at 14 px font size with 20 px line-height; `npm test` and `npm run build` pass in `prototypes/ehr-shadcn-pwa`.
- Unresolved issues: none for the search icon visual-height correction.

## 2026-04-30 12:03:17 BST — Set clinical-code search bar to 9 px vertical inset
- Action performed: reduced the `Add clinical code` search bar height so the current 14 px search icon has the same 9 px top/bottom inset as its 9 px left inset.
- Inputs used: rendered measurement of the clinical-code search field at `http://127.0.0.1:5175/`, user clarification that the 9 px top/bottom treatment was the intended search-bar rhythm, and `SectionCodingField`.
- Outputs created: set the clinical-code `InputGroup` height to the shadcn native `h-8` control size while retaining the 14 px icon, `text-sm` input/suffix typography, and 9 px right inset for the suffix text.
- Verification: rendered measurements show field height 32 px, icon height 14 px, icon insets of 9 px left/top/bottom, and `SNOMED CT` right inset of 9 px; `npm test` and `npm run build` pass in `prototypes/ehr-shadcn-pwa`.
- Unresolved issues: none for the search-bar inset correction.
