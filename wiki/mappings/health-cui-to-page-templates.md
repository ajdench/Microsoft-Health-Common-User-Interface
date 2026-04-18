# Health CUI To Page Templates

<blockquote>
<p><strong>Plain English context</strong></p>
<p>Health CUI often thinks in terms of recurring clinical work surfaces rather than isolated widgets. This page maps that into reusable page-template patterns for modern web applications.</p>
</blockquote>

## Page-template candidates
| Template | Purpose | Key historical carry-overs |
| --- | --- | --- |
| `SinglePatientRecordShell` | Provides persistent patient context across record review tasks | Durable patient shell, explicit status, visible transitions |
| `MedicationReviewWorkspace` | Supports reading current and past medications safely | Dense readable list/detail arrangement, clear temporal state, no silent truncation |
| `SearchAndPrescribeWorkspace` | Supports safer medicine selection and order authorisation | Progressive narrowing, prioritised results, constrained follow-on choices, explicit preview step |
| `AlertAndDecisionSupportReview` | Helps clinicians review active alerts without unnecessary interruption | Priority grouping, summary-first review, explicit capability state |
| `ClinicalTableReview` | Supports filtering, sorting, and grouping of dense patient data | Attached subset notification, visible sort/group state, fast reset path |

## Source anchors
- [Patient Context Rules](../entities/patient-context-rules.md)
- [Medication And Prescribing Rules](../entities/medication-and-prescribing-rules.md)
- [Decision Support Rules](../entities/decision-support-rules.md)
- [Clinical Data State Rules](../entities/clinical-data-state-rules.md)

## Inference note
The template names are modern synthesis, but the need for these recurring work surfaces is strongly grounded in the historical guidance.

