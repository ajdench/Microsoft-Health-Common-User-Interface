# Health CUI To Design Tokens

<blockquote>
<p><strong>Plain English context</strong></p>
<p>Historical Health CUI does not define a modern token system, but it clearly identifies which kinds of visual distinctions matter enough to standardize. This page translates those distinctions into token candidates for current clinician-facing design systems.</p>
</blockquote>

## Token candidates
| Token family | Why it exists | Historical basis | Modern note |
| --- | --- | --- | --- |
| `patient-context.emphasis.*` | Makes core patient identity visually durable | Patient banner guidance and ISB 1505 | Should control hierarchy, spacing, and sticky behavior, not only color |
| `patient-status.deceased.*` | Distinguishes deceased-patient context safely | `PAB-0055` and `PAB-0056` | Must support redundant cues beyond color |
| `alert.priority.*` | Differentiates high-priority from lower-priority alerts | Decision-support exploration | Should affect visibility defaults and layout treatment as well as color |
| `clinical-density.*` | Supports dense but readable information presentation | Medication line and table guidance | Helps tune row spacing and compact modes without losing safety cues |
| `data-state.filtered.*` | Makes subset state obvious | Filtering/sorting/grouping guidance | Useful for banners, chips, summaries, and result-state blocks |
| `data-state.sorted.*` | Shows active sort state clearly | `FSG-0099` and related sort guidance | In-place header cues matter more than decorative icons |
| `medication-emphasis.dose.*` | Makes dose easy to locate | `MEDi-007` | Treat as semantic emphasis, not just bold text |

## Source anchors
- [Patient Context Rules](../entities/patient-context-rules.md)
- [Medication And Prescribing Rules](../entities/medication-and-prescribing-rules.md)
- [Decision Support Rules](../entities/decision-support-rules.md)
- [Clinical Data State Rules](../entities/clinical-data-state-rules.md)

## Inference note
This page is a modern reinterpretation. The token names are inferred, but the distinctions they represent are strongly supported by the historical corpus.

