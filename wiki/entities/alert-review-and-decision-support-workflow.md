# Alert Review And Decision Support Workflow

<blockquote>
<p><strong>Plain English context</strong></p>
<p>The decision-support material is not just about showing alerts. It is about helping clinicians judge urgency, understand system coverage, and avoid both overload and over-trust.</p>
</blockquote>

## Source basis
- [Design Guidance Exploration -- Decision Support](../source-notes/design-guidance-exploration-decision-support.md)
- [Decision Support Rules](decision-support-rules.md)
- [Alerts and Decision Support](../guidance-domains/alerts-and-decision-support.md)

## Workflow shape
1. Show whether decision support is active, inactive, or incomplete in the current context.
2. Group alerts by priority rather than flattening them into one stream.
3. Put high-priority content first and easier to inspect.
4. Default lower-priority items to less interruptive visibility.
5. Let users move from summary to explanation without losing the surrounding context.

## Historically strong carry-overs
- Capability-state visibility
- Grouped alert review
- Summary-first explanation surfaces
- Incomplete-coverage messaging

## Modern interpretation
- This maps well to non-modal alert panels, inline explanation drawers, and explicit service-health/status indicators.
- The deeper lesson is governance: clinicians should not have to guess what the system is and is not checking for them.

## Related wiki pages
- [Alerts and Decision Support](../guidance-domains/alerts-and-decision-support.md)
- [Alerting Checklist](alerting-checklist.md)

