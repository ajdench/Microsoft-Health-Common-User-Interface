You are working inside the local project repo:

/Users/andrew/Projects/Microsoft Health Common User Interface

This repo is an LLM Wiki project following the pattern described in Karpathy's llm-wiki.md:
- raw sources are immutable
- the wiki is a maintained markdown knowledge base
- AGENTS.md defines schema, conventions, and workflows

Primary goal:
Build a durable local research and knowledge repo for the Microsoft Health Common User Interface (Health CUI), including:
1. the toolkit source/code
2. the historical design guidance documents
3. a structured markdown wiki synthesising the material for modern use

Important working assumptions:
- Use JJ for local workflow if helpful, but keep the repo as a normal file-based project.
- Do not treat remote URLs as the long-term source of truth.
- Remote resources may be used for discovery, provenance, and re-checking, but the durable corpus must be local.
- Preserve provenance for every downloaded or derived artefact.

Create or verify this structure:

raw/
  sources/
    toolkit/
      mscui/
    design-guidance/
    references/
  manifests/
  metadata/

wiki/
  overview/
  concepts/
  entities/
  guidance-domains/
  controls/
  source-notes/
  mappings/
  chronology/

derived/
  extracted-text/
  normalized-markdown/
  inventories/

index.md
log.md
AGENTS.md
README.md

Tasks:

1. Bootstrap the repo
- Verify the directory structure.
- Improve README.md if needed.
- Respect AGENTS.md.

2. Acquire the toolkit source
- Clone or otherwise snapshot:
  https://github.com/rbirkby/mscui.git
- Place it under raw/sources/toolkit/mscui
- Do not modify the raw toolkit source.
- Create a source note describing what the repo contains.

3. Discover historical documentation
- Search for Microsoft Health CUI / Health Common User Interface design guidance documents, especially archived PDFs, Word docs, historical download pages, NHS/academic mirrors, and Microsoft archive pages.
- For every candidate source found:
  - record original URL
  - record page title / document title
  - record source type
  - record whether it is direct guidance, metadata, archive context, or commentary
- Download durable source files where possible into:
  raw/sources/design-guidance/
- Save a structured manifest in:
  raw/manifests/design-guidance-manifest.json
- Save per-source metadata in:
  raw/metadata/

4. Normalise the corpus
- Extract text from PDFs and supported document formats into:
  derived/extracted-text/
- Produce cleaned markdown versions where feasible into:
  derived/normalized-markdown/
- Preserve filename linkage back to the original raw artefact.

5. Build the wiki
Create a first-pass markdown wiki that is structured, interlinked, and source-aware.
At minimum create:
- wiki/overview/health-cui-overview.md
- wiki/overview/history-and-context.md
- wiki/concepts/design-guidance.md
- wiki/concepts/toolkit-controls.md
- wiki/concepts/patient-safety.md
- wiki/concepts/user-centred-design.md
- wiki/guidance-domains/patient-identification.md
- wiki/guidance-domains/medication.md
- wiki/guidance-domains/alerts-and-decision-support.md
- wiki/guidance-domains/layout-navigation.md
- wiki/controls/toolkit-control-inventory.md
- wiki/mappings/health-cui-to-modern-web-ui.md
- wiki/mappings/health-cui-to-react-radix-shadcn.md
- wiki/mappings/health-cui-to-design-system-principles.md

6. Produce source notes
For every important source, create a page in:
wiki/source-notes/
Each note should include:
- exact title
- original source URL
- local file path
- date accessed if known
- source category
- trustworthiness / caveats
- concise summary
- key extractable insights
- whether it should influence modern reinterpretation

7. Create inventories
Produce:
- derived/inventories/source-inventory.md
- derived/inventories/toolkit-file-inventory.md
- derived/inventories/guidance-document-inventory.md

8. Modern reinterpretation
Produce a strong working synthesis of how Health CUI maps to modern web application work:
- design-system rules
- component families
- clinician-facing workflow patterns
- safety-critical interaction patterns
- what should become design tokens vs components vs page templates vs process rules
- what is historically interesting but not suitable for direct adoption now

9. Index and log
- Populate index.md with all generated wiki pages and one-line summaries.
- Append all major steps to log.md using consistent parseable headings.

10. Working style
- Be conservative and methodical.
- Prefer durable downloads over brittle references.
- Preserve provenance.
- Avoid inventing unavailable documents.
- Clearly distinguish:
  - directly retrieved source material
  - inferred structure
  - modern reinterpretation
  - uncertain or missing areas

Definition of done for first pass:
- Local raw corpus contains toolkit plus as many directly retrievable guidance artefacts as possible.
- A clean manifest exists for all discovered sources.
- A structured wiki exists with interlinked pages and source notes.
- There is a first-pass modern mapping from Health CUI to current web UI/design-system practice.
