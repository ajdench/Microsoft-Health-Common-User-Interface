# NHS Design Systems and Clinical Safety

## Status
Modern additional area. This page compares current NHS design-system and clinical-safety sources with Health CUI. It is not historical Health CUI source material.

## Retrieved facts
- The NHS digital service manual is maintained by NHS England and covers the service standard, design system, content guide, accessibility, and community contribution.
- Its design system is for consistent, accessible NHS services for the public and staff, with styles, components, patterns, prototyping, and production-code guidance.
- The NHS service standard is a health companion to the GOV.UK service standard. It includes health-specific points to support a culture of care, make services clinically safe, and make services interoperable.
- The NHS App design system is intended to be used alongside the NHS digital service manual. It adds NHS App-specific components and patterns.
- The NHS App design system explicitly tells teams to use existing components and patterns as starting points, but to iterate only where a clear user need exists and to share changes or research findings.
- NHS England digital clinical safety assurance guidance says DCB0129 applies to manufacture of health IT systems and DCB0160 applies to deployment and use of health IT systems.
- NHS England describes digital clinical safety assurance as clinical risk management and points to hazard logs, clinical safety cases, and Clinical Safety Officer responsibilities.
- NHS England commenced a review of DCB0129 and DCB0160 to keep the standards practical and aligned with current healthcare technology and clinical practice.

## Closest equivalence to Health CUI
The NHS design-system family is the closest institutional successor in England, but it is not a direct replacement.

Health CUI tried to standardize clinical UI details for specific high-risk domains. The current NHS service manual and NHS App design system standardize accessible public and staff service design more broadly. They provide a stronger modern foundation for accessibility, content, contribution, and web implementation, but they do not appear to recreate the full Health CUI corpus of clinician-facing patient-banner, medication, and decision-support rules.

## Clinical safety split
Health CUI embedded safety arguments inside UI guidance. Current NHS practice separates this more clearly:

- design systems provide reusable service UI patterns
- the service standard makes clinical safety and interoperability explicit service-assessment concerns
- DCB0129/DCB0160 provide clinical risk-management obligations and evidence processes
- local product teams still need to perform hazard analysis, clinical safety cases, usability testing, and deployment assurance

## Practical reading for this wiki
Use current NHS design-system sources for:

- accessibility baseline
- content and service design norms
- contribution model
- web implementation conventions
- patient/public digital-service consistency

Use Health CUI for:

- clinician-facing patient-context rules
- medication-display safety patterns
- alert and decision-support interaction risks
- dense clinical table state handling
- domain-specific UI contracts not covered by generic service components

## Caveats
- The NHS design system and NHS App design system are living sources; this page reflects the 2026-04-25 retrieval.
- NHS App guidance is patient-facing and app-specific, so it should not be over-applied to clinician workstations.
- DCB0129/DCB0160 are safety-governance standards, not component libraries.
- The historical Health CUI standards were deprecated, so any reuse should be reinterpretation, not claims of current NHS compliance.

## Related sources
- [Modern equivalents source set 2026](../source-notes/modern-equivalents-source-set-2026.md)
- [NHS Digital CUI deprecation notice](../source-notes/nhs-digital-cui-deprecation-notice-2019.md)
- [HCI modelling 2024](../source-notes/hci-modelling-cui-and-nhs-design-system-2024.md)
