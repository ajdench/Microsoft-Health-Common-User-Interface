# Medication And Prescribing Rules

<blockquote>
<p><strong>Plain English context</strong></p>
<p>The medication corpus is trying to prevent dense-text mistakes: wrong medicine, wrong dose, wrong strength or frequency, and omissions. The source material assumes clinicians work fast under pressure and that formatting can either help or harm that work.</p>
</blockquote>

## Source basis
- [Design Guidance -- Medication Line](../source-notes/design-guidance-medication-line.md)
- [Design Guidance -- Search and Prescribe](../source-notes/design-guidance-search-and-prescribe.md)

## Rule extraction
| Source anchor | Historical rule | Why the historical source cared | Modern interpretation |
| --- | --- | --- | --- |
| `MEDi-007` | Provide a text label that reads `DOSE` before a dose. | Dose needed a stable visual anchor in dense medication text. | Keep dose semantically explicit and easy to locate. |
| `MEDi-025` | Do not truncate drug names. | Truncation can hide distinctions between similar medicines. | Avoid ellipsis on medicine names in high-risk displays. |
| `MEDi-012` | If necessary, wrap but do not truncate medication line information. | Hidden information increases misreading and omission risk. | Prefer controlled wrapping and row expansion over silent clipping. |
| `MEDi-029` | In a single-text medication sentence, use a label for dose only. | The dose label creates emphasis without overloading the line with labels. | Use sparse but meaningful labels on compact renderers. |
| `MEDi-036` | Preserve white space between lines when displaying a medication. | Separation helps clinicians parse where one medication ends and another begins. | Use spacing as a safety aid, not only a visual nicety. |
| `MEDi-052` | If a context changes attribute order, add labels for as many attributes as possible. | Reordered information increases ambiguity unless the UI compensates. | When layout shifts or compact modes reorder content, add explicit labels. |
| `MSP-0370` | Display search results using progressive matching where possible. | Progressive narrowing helps users reach shorter, safer result sets. | Prefer search interactions that narrow continuously rather than flooding users with long static lists. |
| `MSP-0530` | List search results in matched order, prioritised by proximity. | Close matches should surface before broad alternatives to reduce mis-selection. | Order results by likely intention, not generic alphabetic defaults alone. |
| `MSP-0570` and `MSP-0580` | Support spelling matches and synonyms. | Users may not know or remember the exact drug name spelling. | Build safe fallback behavior for common spelling and naming variation. |
| `MSP-0620` | Display prioritised results in a separate section above other results. | Prioritisation needed to be visible and legible, not hidden in ranking logic. | If you prioritise, show that prioritisation explicitly. |
| `MSP-0850` and `MSP-0890` | Show cascading lists after drug selection and limit options to those relevant to previous choices. | Constrained selection reduces invalid combinations and ambiguity. | Use progressive constraint when route/form/strength choices depend on earlier choices. |

## Notes
- These rules are especially useful for renderer contracts, prescribing flows, and review tests.
- The historical desktop examples should be modernized, but the safety logic behind them remains strong.

