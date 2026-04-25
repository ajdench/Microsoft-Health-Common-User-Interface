# Modern Equivalence Matrix

## Status
Modern additional area. This matrix classifies modern equivalents by what part of Health CUI's old role they resemble.

## Summary matrix
| Modern source | Similar to Health CUI because | Different from Health CUI because | Best use in this wiki |
| --- | --- | --- | --- |
| NHS digital service manual | Provides NHS design principles, service standard, design system, content, accessibility, and contribution guidance for public and staff services. | Broader service-design scope; not a full clinician-facing EHR component standard. | Baseline for current NHS web/service design norms. |
| NHS App design system | Adds NHS App-specific components and patterns to the NHS service manual. | Patient-facing and app-specific; smaller component scope. | Patient-facing comparison point and contribution model. |
| NHS service standard | Makes health-context needs, clinical safety, and interoperability explicit. | Assessment/governance standard, not UI pattern corpus. | Service-governance framing for modern reinterpretation. |
| DCB0129 / DCB0160 | Clinical risk management for manufacture and deployment/use of health IT. | Safety process and evidence standards, not component or interaction rules. | Assurance layer for any CUI-informed modern product. |
| SMART App Launch | Standardizes FHIR app authorization and launch context, including patient/session context. | Technical launch and authorization standard, not UI rendering guidance. | Embedded app/patient-context mapping. |
| CDS Hooks | Standardizes workflow-triggered decision-support cards, suggestions, links, and trust model. | Leaves detailed display to local clients. | Modern alert/DSS integration mapping. |
| openEHR CKM and archetypes/templates | Governs reusable clinical concepts and templates that can drive forms and reports. | Semantic modelling, not visual interaction design. | Data-model and form-structure counterpart. |
| OpenMRS 3 | Modern open-source EHR frontend combining Carbon, React, TypeScript, FHIR/REST, forms, shared widgets, and implementation reuse. | Product/platform implementation, not national NHS standard or Health CUI successor. | Practical analogue for layered clinical UI architecture. |
| VA.gov Design System | Mature government health-benefits design system with components, patterns, templates, content, and accessibility guidance. | US Veteran-facing services; not clinician-facing EHR UI. | Patient-facing health-content and government design-system comparison. |

## Equivalence strength
| Equivalence type | Stronger examples | Notes |
| --- | --- | --- |
| Institutional NHS design successor | NHS digital service manual, NHS App design system | Closest public NHS design-system successors, but not replacements for the retired CUI standards. |
| Clinical safety successor | DCB0129, DCB0160, NHS service standard point 16 | Stronger for safety governance than screen-level design. |
| EHR workflow integration successor | SMART App Launch, CDS Hooks | Strong for patient context, app launch, and decision support at integration boundaries. |
| Clinical content successor | openEHR CKM, archetypes, templates | Strong for semantic governance and model-driven forms. |
| Open implementation analogue | OpenMRS 3 | Strong practical example of a modern, shared EHR frontend strategy. |
| Patient-facing government health design system | VA.gov Design System, NHS App design system | Useful comparison but different from clinician-facing CUI work. |

## What to reuse from each
- From NHS design systems: accessibility, service patterns, content discipline, contribution and update mechanisms.
- From DCB0129/DCB0160: hazard analysis, safety case, clinical safety ownership, lifecycle risk management.
- From SMART and CDS Hooks: launch context, delegated scopes, decision-support cards, suggestions, links, allow-listing, and trust boundaries.
- From openEHR: governed clinical concepts, reusable templates, terminology binding, form/report structure.
- From OpenMRS 3: layered architecture, reusable clinical widgets, configurable forms, shared open-source frontend implementation.
- From VA.gov: plain-language health content, risk communication, content/component governance, public-service accessibility.

## What not to claim
- Do not claim the NHS design system is the direct successor to Health CUI.
- Do not claim SMART, CDS Hooks, or openEHR solve visual interaction design.
- Do not claim DCB0129/DCB0160 compliance is achieved by using any specific component library.
- Do not claim OpenMRS 3 or VA.gov represent NHS current clinical UI standards.
- Do not treat modern sources as proof that retired CUI standards remain mandatory.

## Related sources
- [Modern equivalents source set 2026](../source-notes/modern-equivalents-source-set-2026.md)
- [Modern Equivalents](README.md)
