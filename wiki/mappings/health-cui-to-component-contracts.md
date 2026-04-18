# Health CUI To Component Contracts

<blockquote>
<p><strong>Plain English context</strong></p>
<p>The historical corpus is strongest when it describes what a clinician-facing component must never obscure. This page translates that into modern component contracts rather than purely visual component names.</p>
</blockquote>

## Component contracts
| Component | Contract | Source anchors |
| --- | --- | --- |
| `PatientContextShell` | Must keep core patient identity continuously visible in single-patient workflows and visibly differentiate deceased-state context. | [Patient Context Rules](../entities/patient-context-rules.md) |
| `PatientIdentityBlock` | Must render name, DOB, identifier, and status fields without silent truncation of critical identity values. | [Patient Context Rules](../entities/patient-context-rules.md) |
| `MedicationLine` | Must preserve dose salience, stable attribute order, readable wrapping, and visible separation between medications. | [Medication And Prescribing Rules](../entities/medication-and-prescribing-rules.md) |
| `MedicationSearchResults` | Must surface likely matches safely, support spelling variance, and make prioritised results explicit. | [Medication And Prescribing Rules](../entities/medication-and-prescribing-rules.md) |
| `DecisionSupportStatus` | Must communicate whether decision support is active, inactive, or incomplete in the current context. | [Decision Support Rules](../entities/decision-support-rules.md) |
| `AlertPanel` | Must group by priority, bias visibility toward higher-priority alerts, and keep explanation accessible. | [Decision Support Rules](../entities/decision-support-rules.md) |
| `ClinicalFilterSummary` | Must stay attached to the affected table or list and clearly state when a subset is shown. | [Clinical Data State Rules](../entities/clinical-data-state-rules.md) |
| `ClinicalDataTable` | Must show sort state in-place, preserve reversible transformations, and support keyboard-efficient review. | [Clinical Data State Rules](../entities/clinical-data-state-rules.md) |

## Implementation note
These contracts are stronger than generic design-system “component descriptions.” They describe what each component is responsible for protecting in safety-critical use.

