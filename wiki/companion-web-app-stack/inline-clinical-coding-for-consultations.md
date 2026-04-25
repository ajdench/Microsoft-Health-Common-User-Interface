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

## Implemented First Pass
The prototype now:

- removes the separate coded-content action-rail pane
- adds a coded-content search directly inside each section's `Coded content`
  box
- keeps each section-local coded-content box compact so repeated coding
  controls do not dominate the consultation note
- records selected codes with a `sectionId`
- renders each section's own `Coded content` block above its free-text area
- migrates older locally persisted prototype codes to the `Reason` section
- updates the coded-entry e2e tests to check section-visible SNOMED content
  and constrained-width coded-content density

This is still a prototype. It uses static fake SNOMED-like results rather than
a real terminology service.

## Recommended Next Steps
1. Replace static `codeResults` with a terminology adapter interface.
2. Add a development terminology provider backed by a local fixture and a
   production provider backed by a FHIR terminology service.
3. Define section-specific value sets and ranking rules.
4. Make each section-local search use its own constrained value set and ranking
   profile.
5. Add dm+d-backed medication search separately from general SNOMED problem
   coding.
6. Add explicit mapping decisions for FHIR resources and UK Core profiles.
7. Add code-system/version metadata to persisted coded entries.
8. Add review screens that show narrative-only sections and prompt for coding
   when clinically appropriate.

## External Sources
- [NHS England Terminology Server](https://digital.nhs.uk/services/terminology-server)
- [NHS SNOMED CT](https://digital.nhs.uk/services/terminology-and-classifications/snomed-ct)
- [NHS Terminology Server FHIR API catalogue](https://digital.nhs.uk/developer/api-catalogue/terminology-server-fhir)
- [HL7 FHIR Terminology Service](https://hl7.org/fhir/R4/terminology-service.html)
- [SNOMED CT FHIR specification](https://build.fhir.org/ig/IHTSDO/snomed-ig/)
- [Snowstorm SNOMED CT terminology server](https://github.com/IHTSDO/snowstorm)
- [NHS dm+d](https://digital.nhs.uk/services/dictionary-of-medicines-and-devices-dm-d)
