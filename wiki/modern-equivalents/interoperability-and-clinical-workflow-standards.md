# Interoperability and Clinical Workflow Standards

## Status
Modern additional area. This page covers standards adjacent to Health CUI because they shape where clinical UI appears inside modern EHR workflows.

## Retrieved facts
- SMART App Launch authorizes a user-facing application to connect to a FHIR server.
- SMART App Launch can pass launch context, including the current patient or other details from an EHR or health-data session.
- SMART scopes define delegated access permissions over FHIR resources and operations.
- CDS Hooks responses contain cards for display to an end user, and cards can include information, suggested actions, and links.
- CDS Hooks leaves final card display decisions to the CDS client, while recommending common renderings such as buttons for suggestions and links for app launches.
- CDS Hooks includes security and trust considerations, including service allow lists or deny lists, service agreements, TLS, authorization, and minimal required FHIR access.
- CDS Hooks describes hook maturity as a community process involving testing, implementer feedback, and interoperability among clients and services.

## Similarity to Health CUI
SMART App Launch and CDS Hooks are not modern UI equivalents in the visual or component-library sense. They are modern workflow-interface equivalents.

Health CUI tried to make clinical screens safer and more consistent once the user was inside the application. SMART and CDS Hooks help standardize how third-party apps and decision-support services are launched, contextualized, authorized, and embedded into clinical workflow.

## Why they matter for modern UI design
Modern clinician-facing systems increasingly receive or expose functionality through embedded apps and decision-support services. That makes the following UI concerns central:

- showing the correct patient and encounter context after launch
- indicating which data was used to make a recommendation
- distinguishing information, warnings, suggestions, and executable actions
- avoiding unsafe auto-launch or interruption patterns
- auditing accepted, dismissed, or ignored recommendations
- handling missing authorization, unavailable FHIR resources, and stale decision-support data

These are the same classes of risk Health CUI cared about, but expressed at integration boundaries rather than as standalone toolkit controls.

## Practical mapping
- Health CUI patient banner rules map to SMART launch-context confirmation and persistent patient identity in embedded app shells.
- Health CUI alert and decision-support guidance maps to CDS Hooks card prioritization, suggestion handling, and escalation surfaces.
- Health CUI transformed-data visibility maps to explicit display of prefetch status, FHIR read scope, and decision-support provenance.
- Health CUI governance lessons map to allow-listing, service agreements, user-role scoping, and local safety assessment.

## Caveats
- HL7 specifications do not prescribe full visual design.
- Local EHR vendors and provider organizations decide how cards, links, launch buttons, and app frames appear.
- A compliant integration can still be clinically unsafe if the local UI hides context, overloads users with alerts, or fails to explain recommendation provenance.

## Related sources
- [Modern equivalents source set 2026](../source-notes/modern-equivalents-source-set-2026.md)
- [Alerts and Decision Support](../guidance-domains/alerts-and-decision-support.md)
- [Decision Support Rules](../entities/decision-support-rules.md)
- [Patient Context Rules](../entities/patient-context-rules.md)
