# Decision Support Rules

<blockquote>
<p><strong>Plain English context</strong></p>
<p>The decision-support material is partly exploratory, but it is already very clear about one thing: alerting should help clinicians notice and judge risk without training them to ignore the interface.</p>
</blockquote>

## Source basis
- [Design Guidance Exploration -- Decision Support](../source-notes/design-guidance-exploration-decision-support.md)
- [Alerts and Decision Support](../guidance-domains/alerts-and-decision-support.md)

## Rule extraction
| Source anchor | Historical rule or statement | Why the historical source cared | Modern interpretation |
| --- | --- | --- | --- |
| Section `2.1` | Decision-support capability should be communicated as active or inactive in the current session/context. | Users should not assume the system is protecting them when it is not. | Surface system capability state explicitly in workflow-critical views. |
| Section `2.2` | Information windows should use a consistent anatomy, with `Summary` selected by default. | Faster recognition and lower cognitive switching costs improve safer use. | Keep alert/recommendation surfaces structurally consistent and summary-first. |
| Section `2.4` | System-generated alerts should be grouped by status. | Grouping helps clinicians triage rather than scan a flat stream of warnings. | Use grouped alert panels or inboxes instead of undifferentiated alert lists. |
| Section `2.4` | `Priority` alerts should be collapsed by default. | Lower-level alerts should stay visible without becoming maximally interruptive. | Use default visibility to express urgency, not only color and iconography. |
| Section `2.4` | `High Priority` alerts should be expanded by default and displayed above `Priority`. | The interface should bias attention toward the most urgent items. | Put the most urgent items first and reduce interaction cost for reviewing them. |
| Negative guidance | Do not mix alert statuses. | Mixing weakens the clarity of urgency and grouping. | Keep alert severity grouping explicit and stable. |

## Notes
- This document is exploratory, so these rules should be treated as high-value historical guidance rather than settled final law.
- They still map well to modern alerting, recommendation, and decision-support status surfaces.

