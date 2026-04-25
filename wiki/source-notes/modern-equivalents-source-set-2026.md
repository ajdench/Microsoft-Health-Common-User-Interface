# Source Note: Modern Equivalents Source Set 2026

## Exact title
Modern equivalents and adjacent health UI source set

## Original URLs
- <https://service-manual.nhs.uk/>
- <https://service-manual.nhs.uk/design-system>
- <https://service-manual.nhs.uk/standards-and-technology/service-standard>
- <https://design-system.nhsapp.service.nhs.uk/>
- <https://design-system.nhsapp.service.nhs.uk/components/>
- <https://design-system.nhsapp.service.nhs.uk/patterns/>
- <https://www.england.nhs.uk/long-read/digital-clinical-safety-assurance/>
- <https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/review-of-digital-clinical-safety-standards-dcb0129-and-dcb0160/>
- <https://www.hl7.org/fhir/smart-app-launch/>
- <https://cds-hooks.hl7.org/index.html>
- <https://openehr.atlassian.net/wiki/spaces/healthmod/overview?homepageId=2949233>
- <https://specifications.openehr.org/releases/1.0.1/html/architecture/overview/Output/archetyping.html>
- <https://openmrs.org/o3-the-new-openmrs-explained-and-the-investments-that-made-it-possible/>
- <https://design.va.gov/>
- <https://design.va.gov/content-style-guide/health-content/>

## Local file path
`raw/sources/references/modern-equivalents/`

## Access / retrieval date
2026-04-25

## Source category
Modern design systems, clinical safety governance, interoperability standards, clinical content modelling, and open-source EHR frontend practice.

## Retrieval status
Retrieved

## Trustworthiness / caveats
- These are current external sources, not historical Health CUI source artefacts.
- The sources are mostly official or standards-body pages, but many are living web pages and can change after the retrieval date.
- The OpenMRS source is an official project article rather than a formal specification.
- The VA.gov sources are health-adjacent and patient/veteran-facing; they should not be treated as clinician-facing EHR UI standards.
- The HL7 and openEHR sources are technical and semantic standards; they do not define visual component styling in the way Health CUI attempted to do.

## Short summary
The source set shows that Health CUI's old combined role has split across multiple modern artefact types. NHS design-system materials now cover accessible public and staff digital services; DCB0129/DCB0160 cover clinical risk management; SMART App Launch and CDS Hooks cover app launch, context, and decision-support payloads; openEHR covers governed clinical content models; OpenMRS 3 shows a practical open-source EHR frontend stack that combines a general design system with health-specific workflows.

## Key extractable insights
- There is no single modern programme discovered here that directly replaces Microsoft Health CUI's combination of clinical UI rules, toolkit controls, formal standards, and safety framing.
- NHS design guidance is the closest institutional successor in England, but its current design-system pages are broader service guidance, not a recovered replacement for the retired CUI standards.
- Modern clinical UI safety is handled more by risk-management governance and implementation assurance than by a universal prescribed visual component set.
- Modern EHR extensibility is strongly shaped by FHIR, SMART App Launch, and CDS Hooks, which standardize context and interaction payloads rather than exact screen design.
- openEHR and OpenMRS show two adjacent paths: model-driven clinical content and shared open-source EHR UI implementation.

## Should this influence modern reinterpretation?
Yes. It supports treating Health CUI as a historical clinical-safety design corpus that can inform modern component contracts, while acknowledging that today's equivalents are distributed across design systems, standards, safety processes, and application frameworks.

## Related wiki pages
- [Modern Equivalents](../modern-equivalents/README.md)
- [Modern Equivalence Matrix](../modern-equivalents/modern-equivalence-matrix.md)
- [NHS Design Systems and Clinical Safety](../modern-equivalents/nhs-design-systems-and-clinical-safety.md)
- [Interoperability and Clinical Workflow Standards](../modern-equivalents/interoperability-and-clinical-workflow-standards.md)
- [Open Clinical UI Systems](../modern-equivalents/open-clinical-ui-systems.md)
