# Formal CUI Standards Family

<blockquote>
<p><strong>Plain English context</strong></p>
<p>Only part of Health CUI became formal NHS information standards. This page separates that formal layer from the broader guidance corpus.</p>
</blockquote>

## Retrieved facts
- The formal standards family covered nine demographics and date/time standards rather than the whole Health CUI corpus.
- The archived ISB branch localizes standard-detail pages, documentation pages, DSCN PDFs, and shared submission/approach/safety-case documents.
- NHS Digital later deprecated the standards in July 2019 but said some data elements still had residual value.

## Standards matrix
| ISB ID | Standard | Main scope | Broader guidance relationship | Current note |
| --- | --- | --- | --- | --- |
| `1500` | Address Input and Display | Human-readable address input/display | Related to broader address QIG and design guidance | Historically useful for demographic consistency |
| `1501` | Time Display | Display of time values | Related to time display/input guidance | Strong conceptual carry-over |
| `1502` | Date and Time Input | Input of combined date/time values | Related to date/time input guidance | Strong conceptual carry-over |
| `1503` | Date Display | Display of date values | Related to date display guidance | Strong conceptual carry-over |
| `1504` | NHS Number Input and Display | NHS number formatting/display | Related to patient identification guidance | Still relevant conceptually for identifiers |
| `1505` | Patient Banner | Minimum patient-banner content and layout | Related to Patient Banner guidance and crib sheets | Strongest surviving branded pattern |
| `1506` | Patient Name Input and Display | Person-name entry and display | Related to patient identification/name guidance | Still relevant conceptually |
| `1507` | Sex and Current Gender Input and Display | Representation of sex/current gender data | Related to demographic guidance | Needs careful modern reinterpretation |
| `1508` | Telephone Number Input and Display | Telephone formatting/display | Related to contact detail guidance | Lower strategic relevance but still traceable |

## What became formalized
- Demographic display and input conventions
- Patient banner minimums
- Date/time formatting and entry
- Patient name, NHS number, telephone number, and sex/current gender handling

## What did not become formalized in the same way
- Medication display and prescribing workflow guidance
- Alerting and decision-support behaviour
- Clinical noting, navigation, and dense-data state patterns
- Most of the clinician workflow material that now feels richest for modern design-system work

## Important provenance details
- The documentation pages connect the standards to shared submission, development-approach, and safety-case PDFs.
- At least one documentation page notes a withdrawal/replacement detail: an early NHS Number DSCN was withdrawn because implementation timelines conflicted with NHS Number rollout timelines elsewhere.
- This supports a more precise reading of the standards layer as governed release material, not just republished design PDFs.

## Afterlife
- The 2015 EPaCCS and palliative-care requirements still referenced these standards as `MUST`-follow requirements for demographic input/display.
- That persistence helps explain why NHS Digital later needed a formal deprecation decision rather than simply ignoring the standards.

## Modern interpretation
- The standards family is best treated as the formal demographic/patient-context spine of Health CUI.
- For modern work, the strongest carry-over is not exact geometry or old device assumptions. It is the insistence that demographic and patient-context presentation are safety-critical and governable.

## Related sources
- [ISB 1500-1508 archive branch](../source-notes/isb-1500-1508-archive-branch.md)
- [NHS follow-on CUI references 2015](../source-notes/nhs-follow-on-cui-references-2015.md)
- [NHS Digital withdrawal blog 2019](../source-notes/nhs-digital-withdrawal-blog-2019.md)
- [Patient Context Rules](patient-context-rules.md)

