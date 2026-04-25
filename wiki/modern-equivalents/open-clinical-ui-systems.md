# Open Clinical UI Systems

## Status
Modern additional area. This page covers open and model-driven systems that resemble Health CUI by supporting reusable clinical UI implementation, even when they are not direct design-guidance successors.

## Retrieved facts
- openEHR Clinical Knowledge Manager supports collaborative development, management, and publishing of clinical knowledge resources including archetypes, templates, and terminology subsets.
- openEHR specifications describe templates as composed clinical models that often correspond closely to screen forms, printed reports, or complete application-level information sets.
- OpenMRS 3 is described by the OpenMRS project as a modernized EMR frontend using Carbon Design System, TypeScript, React, ECMAScript modules, reusable frontend widgets, FHIR, REST APIs, and a form builder.
- OpenMRS 3 uses Carbon Design System for consistent UI components, patterns, and guidelines across OpenMRS distributions.
- OpenMRS 3 explicitly aims to reduce duplication and help implementations converge on shared, cross-compatible solutions.

## openEHR comparison
openEHR is closest to Health CUI at the clinical-content and form-structure layer, not the visual design layer.

Health CUI asked how a clinician should safely view or interact with patient identifiers, medications, alerts, and clinical data. openEHR asks how clinical concepts should be modelled, governed, constrained, shared, and used for capture or exchange.

This matters because unsafe UI often starts with ambiguous data meaning. A model-driven form can improve safety if:

- fields have clear clinical semantics
- templates are governed and reviewed
- local constraints are explicit
- generated or configured screens preserve patient context and unit/terminology clarity
- UI teams do not mistake a valid data model for a sufficient interaction design

## OpenMRS comparison
OpenMRS 3 is closer to a modern implementation analogue. It combines a general design system with health-specific application architecture, clinical forms, shared widgets, and interoperability APIs.

This resembles a modern route that Health CUI might have taken:

- use a mature general design system for basic UI primitives
- layer health-specific workflows, forms, and component contracts on top
- support shared implementation across organizations
- expose extension points for local modules and distributions
- use FHIR and REST as integration surfaces

## Practical reading for this wiki
For current design-system work, this suggests a layered approach:

- general UI components: use an accessible mature design system
- clinical content: use governed models, terminologies, and template definitions
- clinical workflows: define domain-specific shells, forms, decision-support surfaces, and patient-context contracts
- safety: assess and document hazards for each clinical workflow

Health CUI can contribute most at the workflow-contract layer.

## Caveats
- openEHR is not a visual design system.
- OpenMRS uses Carbon rather than a dedicated Health CUI successor.
- OpenMRS project pages are strong implementation evidence but should not be generalized as universal EHR best practice without local validation.
- Proprietary EHR design systems may have similar patterns but are not publicly inspectable.

## Related sources
- [Modern equivalents source set 2026](../source-notes/modern-equivalents-source-set-2026.md)
- [Health CUI to Modern Web UI](../mappings/health-cui-to-modern-web-ui.md)
- [Health CUI to Component Contracts](../mappings/health-cui-to-component-contracts.md)
