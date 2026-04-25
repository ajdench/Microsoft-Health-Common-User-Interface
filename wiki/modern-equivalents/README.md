# Modern Equivalents

## Boundary of this area
This is a modern additional area of the wiki. It records current systems, standards, and design-system practices that are similar to Microsoft Health CUI in purpose or downstream relevance.

It is not part of the canonical historical Health CUI corpus. Treat these pages as current-context synthesis, not as recovered MSH CUI source material.

## Short answer
No single modern equivalent found here directly replaces Microsoft Health CUI.

Health CUI combined several things that are now usually separated:

- clinical UI guidance and reusable controls
- patient-safety framing for interaction design
- formal NHS information standards
- toolkit source and sample implementations
- programme-level supplier alignment

The closest modern parallels are distributed across:

- [NHS Design Systems and Clinical Safety](nhs-design-systems-and-clinical-safety.md)
- [Interoperability and Clinical Workflow Standards](interoperability-and-clinical-workflow-standards.md)
- [Open Clinical UI Systems](open-clinical-ui-systems.md)
- [Modern Equivalence Matrix](modern-equivalence-matrix.md)

## Retrieved facts
- The NHS digital service manual describes itself as guidance for designing and building NHS digital services for the public and staff, with a design system, content guide, accessibility guidance, standards, and technology guidance.
- The NHS App design system is explicitly intended to be used alongside the NHS digital service manual and provides NHS App-specific components and patterns.
- The NHS service standard includes health-specific points on clinical safety and interoperability.
- NHS England's digital clinical safety guidance treats DCB0129 and DCB0160 as clinical risk-management standards for health IT manufacture and deployment/use.
- SMART App Launch standardizes authorization and launch context for apps connected to FHIR servers.
- CDS Hooks standardizes workflow-triggered decision support responses, including cards, suggestions, links, security, and trust considerations.
- openEHR Clinical Knowledge Manager supports governance of archetypes, templates, and terminology subsets.
- OpenMRS 3 uses Carbon Design System, React, TypeScript, microfrontends, FHIR/REST APIs, and form tooling to support shared EHR frontend development.
- VA.gov Design System provides components, patterns, templates, content guidance, and health-content writing guidance for VA.gov and the VA mobile app.

## Synthesis
Modern equivalents should be read by capability, not by name. The modern ecosystem does not seem to have a single national or vendor-neutral clinical UI component programme with the same remit as Health CUI.

Instead:

- NHS design-system materials now cover accessible digital-service consistency.
- NHS clinical safety standards cover assurance and risk-management process.
- HL7 SMART and CDS Hooks cover safe interoperability points inside or around EHR workflows.
- openEHR covers reusable clinical content modelling and governance.
- OpenMRS 3 shows how a modern open-source EHR can combine a general design system with domain-specific forms and workflows.
- VA.gov shows a mature government health-benefits design system with strong content, component, pattern, and accessibility practice.

## Modern reinterpretation
For a current clinician-facing design system, Health CUI remains useful as a safety-sensitive interaction-pattern source, especially for patient context, medication rendering, alerting, and dense clinical data manipulation.

The practical modern approach is to combine:

- a general accessible component library
- explicit clinical component contracts
- clinical safety risk management
- interoperable patient/context launch standards
- governed clinical data models
- local usability testing in real clinical workflows

## Uncertainty
- This is not an exhaustive worldwide survey of health UI systems.
- Proprietary EHR vendors may have mature internal design systems that are not public.
- Some public sources are living standards and may change after the 2026-04-25 retrieval date.
- The closest equivalents differ by use case: patient-facing NHS services, clinician-facing EHR apps, third-party embedded EHR apps, and model-driven clinical record systems each need different comparison criteria.

## Related sources
- [Modern equivalents source set 2026](../source-notes/modern-equivalents-source-set-2026.md)
- [HCI modelling 2024](../source-notes/hci-modelling-cui-and-nhs-design-system-2024.md)
- [NHS Digital CUI deprecation notice](../source-notes/nhs-digital-cui-deprecation-notice-2019.md)
