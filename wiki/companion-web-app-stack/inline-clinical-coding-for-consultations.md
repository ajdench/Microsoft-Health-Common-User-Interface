# Inline Clinical Coding For Consultations

## Status
Modern companion note.

This page documents a first-pass approach for coded clinical content in the EHR
PWA prototype. It is not recovered Health CUI source material.

## Short Answer
A separate panel of selected codes does not make much clinical sense as the
main model. It is acceptable as a temporary search/debug surface, but the
clinical record should show coded content in the section where it has meaning:
reason for encounter, history, examination, assessment, plan, follow-up,
problem list, medication review, allergy review, observations, procedures, and
referrals.

Free text remains necessary, but it should support structured data rather than
carry the whole clinical meaning.

## UK Coding Baseline
### SNOMED CT
SNOMED CT is the main clinical terminology baseline for UK clinical concepts.
In an EHR consultation this covers problems, findings, symptoms, diagnoses,
procedures, situations, family history concepts, allergy concepts, and many
other clinical meanings.

Relevant mechanisms:

- UK SNOMED CT Clinical Edition for UK-relevant clinical terms.
- NHS terminology tooling and browser services for lookup and implementation.
- FHIR `CodeSystem`, `ValueSet`, and `ConceptMap` operations for terminology
  service integration.
- Local value sets for section-specific pick lists and constrained workflows.

### dm+d
Medicines should not be free-coded as generic text where structured medicine
data is needed. UK medication concepts should use the NHS Dictionary of
Medicines and Devices where applicable, with dm+d aligned to the UK medicines
model and SNOMED CT UK Drug Extension.

For this prototype, medication review remains fake data. A real implementation
should use dm+d-backed search/prescribing/medication-statement primitives.

### FHIR And UK Core
For interoperability, captured coded entries should map to appropriate FHIR
resources and UK Core profiles rather than stay as UI-only tags.

Typical mapping:

| Consultation content | Likely FHIR shape |
| --- | --- |
| Reason for encounter | `Encounter.reasonCode` / `Condition` depending on workflow |
| Problem or diagnosis | `Condition.code` |
| Symptom or finding | `Condition`, `Observation`, or coded encounter note entry depending on semantics |
| Observation or result | `Observation.code` and `Observation.value[x]` |
| Procedure | `Procedure.code` |
| Medication | `MedicationStatement`, `MedicationRequest`, dm+d-coded medication references |
| Allergy/adverse reaction | `AllergyIntolerance.code` and reaction details |

The exact resource boundary is a clinical safety and interoperability decision,
not just a UI decision.

## Sensible UI Conventions
### Put Codes Where Clinicians Think
Codes should appear in the same section as the clinical thought:

- reason for attendance
- history
- examination
- assessment
- plan
- follow-up

A floating "selected codes" tray can help review, but it should not be the only
visible representation.

### Support Section-Local Search
The coding search should live in the section it affects. A selector that asks
the user to choose a remote target is too indirect for routine consultation
capture. Each section should have its own coding affordance so the clinician
adds structured content where the clinical meaning belongs.

### Preserve Narrative, But Avoid Narrative-Only Records
Narrative should explain uncertainty, nuance, exceptions, and patient-specific
context. Clinical facts that drive decision support, audit, recall, reporting,
or interoperability should be coded where possible.

### Show Ambiguity Before Committing
Search results should show:

- preferred term
- code system and code
- semantic tag/category
- whether the match is prioritised, standard, or ambiguous
- why the result is being promoted

The prototype currently fakes this with static results. A real implementation
should use terminology-server responses, configured value sets, active problem
context, and specialty-specific ranking.

The current V2 seed concepts have now had fixture truth passes: SCTIDs, active
state, and semantic tags were checked against public SNOMED terminology
endpoints, including Snowstorm and the CSIRO Ontoserver FHIR terminology
endpoint. The UI types are derived from the SNOMED fully specified name
semantic tag. The latest diabetes-review fixture also corrected `Prediabetes`
from `Finding` to `Disorder`, because the current FSN is `Prediabetes
(disorder)`. The `Priority` column remains prototype metadata; it is not part
of SNOMED CT and should not be stored as a terminology property.

### Where Priority Should Come From
`Priority` should be treated as search and workflow metadata, not as part of a
SNOMED concept. A concept can be active, inactive, preferred in a language
reference set, a member of a reference set, or part of a hierarchy. It is not
intrinsically "prioritised" for every patient and every consultation section.

There are real-world sources that can drive an equivalent UI badge:

| Source | What it can safely mean in the UI | Notes |
| --- | --- | --- |
| SNOMED ordered reference set | `Prioritised` / rank group | SNOMED reference-set guidance explicitly allows ordered reference sets to prioritise search results or provide alternative ordering. This is the closest standards-native source for a priority-like badge. |
| SNOMED simple reference set or FHIR ValueSet membership | `In value set`, `Recommended`, or `Section list` | Good for showing that a concept is allowed or governed for the current field, for example assessment diagnosis or examination finding. It is relevance, not clinical severity. |
| FHIR terminology expansion and `$lookup` | Valid display, designations, active state, and value-set expansion provenance | Use this to verify the concept and display. It does not by itself make a clinical priority judgement. |
| NHS England Terminology Server / UK SNOMED CT Browser | UK edition, UK extensions, UK language/reference-set context | This is the UK baseline source to prefer for production integration where access and licence terms permit. |
| Search-engine score from Snowstorm or another terminology server | `Best text match` / ordering only | Useful for ranking typeahead results, but implementation-specific and not safe to persist as clinical meaning. |
| Local clinical governance and template configuration | `Local favourite`, `Clinic template`, `Review set` | Appropriate for repeated consultation workflows, but it must be versioned and auditable. |
| Patient context and encounter context | `Context match` | Can promote diabetes terms during a diabetes review, hypertension terms for an active problem, or foot-exam terms in a diabetes annual review. This is app logic and should carry provenance. |
| Clinical decision support | `Safety alert` / `Action required` | This should use a separate alert/severity model, not the coding search `Priority` label. |

For this prototype, rename the mental model from "SNOMED priority" to
"result reason". A production row should be able to show one or more reasons:
`Exact match`, `In section value set`, `Ordered refset rank 1`, `Context match`,
`Ambiguous`, or `Local favourite`. The persisted coded entry should keep the
SNOMED identity separately from the ranking evidence that caused it to be shown
or promoted.

### Keep Removal Explicit
Removing a coded item should be a distinct action on the coded item itself.
This avoids making the user infer that changing search text affects already
recorded clinical content.

## Tools And Mechanisms
### Terminology Server
Use a terminology service rather than hardcoded arrays.

Common operations:

- `$expand` for value-set expansion and typeahead pick lists.
- `$lookup` for concept display, designations, and metadata.
- `$validate-code` before persistence or sync.
- `$subsumes` or closure operations for hierarchy-aware filtering where needed.

For open-source SNOMED infrastructure, Snowstorm is the main candidate for a
SNOMED CT terminology server. For FHIR-facing terminology APIs, use a FHIR
terminology service compatible with the deployment and licensing model.

### Value Sets
Do not expose all of SNOMED CT everywhere. Define section-specific value sets:

- history problems and symptoms
- examination findings
- assessment diagnoses
- plan actions and advice
- follow-up and recall concepts

These value sets should be governed clinically and versioned.

### Ranking And Context
Result ranking should consider:

- active problems
- current medicines
- recent observations
- age/sex context where clinically appropriate
- specialty or clinic type
- local favourite/value-set frequency
- exact term/code matches before fuzzy matches

### Inline Extraction
Future tools may suggest codes from text the clinician has already typed, but
suggestions should be review-and-accept, not silent autocoding.

Suggested flow:

1. Clinician types concise narrative or opens a structured section.
2. System suggests candidate coded concepts for that section.
3. Clinician confirms, rejects, or refines.
4. Confirmed concepts become section-owned coded content.
5. Narrative remains as context, not the only data.

## Identifying SNOMED Concepts In Free Text
### Short Answer
Free-text concept recognition should be treated as an assistive candidate layer,
not as automatic coding. The EHR can identify phrases such as "type 2 diabetes",
"shortness of breath", or "no chest pain" while a clinician types, but the
structured record should only change when the clinician accepts a suggested
concept or chooses an alternative.

The terminology service remains the authority for code validity, preferred
display, designations, version, value-set membership, and hierarchy. NLP tools
can find possible spans in text and rank candidate concepts, but they should not
be the source of truth for persisted SNOMED CT entries.

### Tool Options
| Tool or mechanism | Fit for this prototype | Notes |
| --- | --- | --- |
| FHIR terminology service | Required foundation | Use `$expand` for typeahead/value-set search, `$lookup` for display and properties, `$validate-code` before persistence, and `$subsumes` for hierarchy-aware filtering. This is not NLP, but it is the safest authority layer. |
| NHS England Terminology Server | UK baseline integration | Provides FHIR access to nationally approved terminology content, including SNOMED CT and dm+d, subject to the relevant access controls and licences. |
| Snowstorm | Strong open-source terminology server candidate | Useful for local or controlled deployments that need SNOMED CT search, ECL, FHIR terminology operations, and versioned terminology content. |
| MedCAT | Best open-source clinical NLP candidate to evaluate first | Designed to extract information from EHR text and link it to biomedical ontologies such as SNOMED CT and UMLS. It has model-pack and licensing considerations, and should be clinically evaluated on local note text. |
| Apache cTAKES | Mature but heavier clinical NLP option | Open-source clinical NLP pipeline for extracting information from electronic medical record free text. More suitable as a service-side component than an in-browser dependency. |
| scispaCy with UMLS linker | Useful prototyping tool | Good for biomedical entity linking experiments, abbreviation resolution, and candidate generation. It is not UK SNOMED governance by itself. |
| QuickUMLS | Fast dictionary-style candidate generator | Useful for approximate UMLS concept matching. It requires UMLS data and is best treated as a candidate generator, not a clinical coding authority. |
| MetaMap | Legacy/reference option only | NLM now marks the MetaMap page as no longer maintained. Do not start a new EHR workflow around it unless there is a specific legacy reason. |
| LLM or transformer ranking | Possible secondary ranker | Can help rank, explain, or disambiguate candidates, but must be constrained by terminology-server validation, value sets, provenance, and explicit user acceptance. |

### Recommended Architecture
Use a `ClinicalTextConceptService` between the text editor and the terminology
service.

1. The consultation section sends debounced plain text, section id, and cursor
   context.
2. A local or service-side recogniser extracts candidate spans and possible
   concepts.
3. Candidate codes are validated and enriched through the terminology service.
4. Section-specific value sets remove clinically irrelevant candidates.
5. Negation, uncertainty, historical context, family-history context, and
   patient-reported status are captured as assertion metadata rather than hidden
   in the phrase.
6. The UI presents candidates as suggestions until the clinician accepts,
   rejects, or searches for alternatives.
7. Accepted concepts are persisted as section-owned coded entries with source
   span, code system, code, display, terminology version, recogniser version,
   accepted-by, and accepted-at metadata.

For offline-first operation, keep an IndexedDB or OPFS cache of governed,
section-specific value sets and common synonyms for lightweight matching.
Avoid trying to ship all of SNOMED CT and a full NLP model into the browser as
the default route; the size, update cadence, licence boundary, and clinical
governance burden are better handled by a local service, edge service, or
server-side terminology/NLP component. Offline suggestions should be marked
with the terminology version used and revalidated after sync if the terminology
version has changed.

### Inline Presentation
For the current prototype, inline coding is implemented through a deliberately
small token-aware clinical text editor rather than a native `textarea`. This is
because a native textarea cannot make its caret aware of non-editable visual
tokens. The current V2 prototype keeps a structured internal text value and
renders accepted concepts as non-editable inline pills.

- keep typed narrative editable as normal text
- show conservative candidate phrases as selectable rows in the same
  section-local clinical-code results popover used by search, not as
  autocomplete inside the text field and not as a separate candidate rail
- treat the current typed span as a live search query when it matches the
  available code list, so partial text can show candidate result rows while the
  clinician types
- mirror that recognised typed span into the section clinical-code search field
  as passive display state only. The note editor must retain focus, continued
  typing must not be interrupted, and an exact recognised term must not add a
  code until a result row is explicitly selected
- when the section clinical-code search field or text-derived result list has
  visible results, make the first row active by default and support keyboard
  selection with `ArrowDown`, `ArrowUp`, and `Enter`, clamping at the first and
  last rows rather than wrapping, and exposing the highlighted row through
  `aria-activedescendant` on the focused text or search control. `Shift+Enter`
  in the note editor remains a normal newline/typing action and must not select
  a result
- on selecting a text-derived result, replace the source phrase or current typed
  query span with an inline concept pill, add the same concept to the coded
  list, insert a trailing space when needed, and return the caret to the next
  typing position
- on selecting a search result, insert the inline concept pill at the current
  caret position and add the same concept to the coded list
- keep example prompts outside the editor value. Current V2 prompts are
  persistent visual-only instructions, for example `Type: "Diabetes medication
  review and diabetic annual review."` in Reason. They remain visible at the
  bottom of the note editor while the field is focused, filled, or resized, but
  must not feed validation, concept recognition, candidate generation, or
  stored clinical text
- start section coded-content lists empty. Default coded entries can imply
  clinical facts that were not captured in the current consultation, so demo
  concepts should appear only after explicit selection
- keep accepted inline concept pills and the section coded-content list paired:
  deleting an inline pill removes the selected coded entry, and removing a
  coded-content pill with the `x` removes the inline token that produced it
- scope dismissal of text-derived results to the active source span only. If a
  clinician selects a result, deletes the inline pill, and then retypes the
  same phrase, the clinical-code search should appear again rather than being
  suppressed by stale UI state
- optionally add a compact suggestion gutter or popover anchored to the section
  for richer accept/reject actions later
- show candidate term, SNOMED concept id, semantic type, match status, and
  assertion status before acceptance
- place accepted concepts in the section's coded-content area as concept pills
  linked back to the source phrase where available

If true inline presentation is later required, use an editor with decoration
support such as ProseMirror/Tiptap or Lexical, while still storing the clinical
narrative as plain text plus structured annotation ranges. Inline decoration
should mean "candidate" or "accepted link", not "this text has magically become
coded".

Recommended visual contract:

- Candidate phrase: subtle dotted underline or side marker, not a warning
  colour.
- Hover/focus popover: preferred term, code, type, confidence/match reason,
  assertion state, `Accept`, `Reject`, and `Search alternatives`.
- Multiple possible concepts: show "N suggestions" and force disambiguation.
- Negated or uncertain concepts: use a distinct assertion pill, for example
  `Negated`, `Uncertain`, `Historical`, or `Family history`; do not display them
  as ordinary affirmed findings.
- Accepted concept: section-local SNOMED concept pill, with remove action and
  confirmation.
- Keyboard support: next suggestion, previous suggestion, accept, reject, open
  alternatives.

This keeps the prose readable and prevents a dangerous interpretation where
visual decoration implies that the EHR has already recorded a structured fact.

### Implementation Recommendation
The next implementable step is not a full NLP model. It should be a deterministic
prototype layer:

1. Add a `ClinicalTextConceptService` interface.
2. Implement a local fixture-backed provider using the same SNOMED-like concept
   set as the section coding search.
3. Detect exact and conservative synonym matches per section.
4. Return candidate spans with `start`, `end`, `candidateConcepts`,
   `assertionStatus`, `matchReason`, and `confidence`.
5. Render candidates in the section-local clinical-code results popover, not as
   autocomplete or committed inline decoration inside the note editor.
6. On accept, create the same coded concept pill shape already used by the
   section coded-content area.
7. Add provenance fields before any real persistence or sync work.

After that first pass, evaluate MedCAT as the first serious NLP backend, with
Apache cTAKES or scispaCy/QuickUMLS retained as comparative candidates. A
clinical validation set is required before any suggestion workflow is promoted
from prototype to real clinical use.

## Implemented First Pass
The prototype now:

- removes the separate coded-content action-rail pane
- uses a section-local `Add clinical code` searchbar inside each consultation
  section's right-hand coded pane, built as a shadcn `InputGroup` with a search
  icon and `SNOMED CT` addon
- identifies conservative fixture-backed clinical terms in consultation
  free-text fields, offers them in the same section-local clinical-code results
  popover used by search, and accepts them into both the body text as inline
  pills and the section coded-content list
- keeps accepted inline pills and section selected-code pills synchronised in
  both deletion directions
- clears text-derived search dismissal when the source span disappears, so the
  same phrase can be retyped and searched again after deletion
- keeps each section-local coded pane compact and paired with the free-text
  pane in a responsive split layout, with the single-column fallback retained
  for narrow viewports
- starts consultation sections with empty note text and no default selected
  codes; visual `Type: "..."` instructions remain outside the editor value
- gives the bottom Tasks pane the same section-local clinical-code search
  affordance, while keeping Tasks as task-owned structured coding rather than
  paired narrative note tokens
- records selected consultation codes with a `sectionId`
- updates the coded-entry e2e tests to check section-visible SNOMED content,
  inline/token synchronisation, repeat search after deletion, and constrained
  coded-content density

This is still a prototype. It uses static terminology-verified SNOMED CT
fixture results rather than live terminology-service search.

The V2 shadcn prototype's later fixture pass improved this to static
SNOMED-shaped results: the current SCTIDs, preferred/display terms, active
state, and semantic tags were checked through terminology lookup, but the
search, value-set filtering, UK edition governance, and priority ranking are
still not implemented as real terminology-service behaviour.

The 2026-04-27 diabetes-context expansion added active concepts for annual
diabetes review, diabetes medication review, HbA1c measurement and abnormality,
urine albumin/creatinine ratio, microalbuminuria, GFR/eGFR, diabetic kidney
disease, diabetic neuropathy, symptoms such as polyuria and foot numbness,
diabetes diet/lifestyle education, foot examination, and blood-glucose
monitoring. Inactive candidates returned by terminology search were excluded.
The MAR medication list was made coherent with the same diabetes context:
metformin modified release, ramipril, and atorvastatin. These medicine rows are
still plain reference data; production medication capture should be dm+d-backed.

## Recommended Next Steps
1. Replace static `codeResults` with a terminology adapter interface.
2. Add a `ClinicalTextConceptService` for free-text candidate recognition.
3. Add a development terminology provider backed by a local fixture and a
   production provider backed by a FHIR terminology service.
4. Define section-specific value sets and ranking rules.
5. Make each section-local search use its own constrained value set and ranking
   profile.
6. Add dm+d-backed medication search separately from general SNOMED problem
   coding.
7. Add explicit mapping decisions for FHIR resources and UK Core profiles.
8. Add code-system/version metadata to persisted coded entries.
9. Add source-span and assertion metadata for concepts accepted from free text.
10. Add review screens that show narrative-only sections and prompt for coding
   when clinically appropriate.

## External Sources
- [NHS England Terminology Server](https://digital.nhs.uk/services/terminology-server)
- [NHS SNOMED CT](https://digital.nhs.uk/services/terminology-and-classifications/snomed-ct)
- [NHS Terminology Server FHIR API catalogue](https://digital.nhs.uk/developer/api-catalogue/terminology-server-fhir)
- [HL7 FHIR Terminology Service](https://hl7.org/fhir/R4/terminology-service.html)
- [SNOMED CT FHIR specification](https://build.fhir.org/ig/IHTSDO/snomed-ig/)
- [Snowstorm SNOMED CT terminology server](https://github.com/IHTSDO/snowstorm)
- [CSIRO Ontoserver](https://www.ontoserver.csiro.au/site/our-solutions/ontoserver/)
- [NHS dm+d](https://digital.nhs.uk/services/dictionary-of-medicines-and-devices-dm-d)
- [MedCAT documentation](https://medcat.readthedocs.io/en/latest/main.html)
- [MedCAT GitHub repository](https://github.com/CogStack/MedCAT)
- [Apache cTAKES](https://svn-us.apache.org/repos/asf/ctakes/site/option4/index2.html)
- [scispaCy GitHub repository](https://github.com/allenai/scispacy)
- [QuickUMLS GitHub repository](https://github.com/Georgetown-IR-Lab/QuickUMLS)
- [UMLS reference manual](https://www.ncbi.nlm.nih.gov/books/NBK9675/)
- [NLM MetaMap notice](https://www.nlm.nih.gov/research/umls/implementation_resources/metamap.html)
