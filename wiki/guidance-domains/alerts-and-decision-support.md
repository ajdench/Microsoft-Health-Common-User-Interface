# Alerts and Decision Support

## Retrieved facts
- The Decision Support exploration distinguishes informing from recommending and proposes that alert importance be expressed through a defined priority model.
- The document discusses two alert levels, grouped alert containers, pop-up summaries for new alerts, and different default expansion states for high-priority versus lower-priority alerts.
- The alert-symbol exploration studies intensity and classification of alerts and notes that interruption should be minimized and carefully justified.
- The adverse-drug-reaction guidance repeatedly warns that some recorded risks may not trigger automated decision-support alerts and recommends communicating that clearly.

## Historically strong patterns
- Priority-based alert grouping.
- Brief alert summaries plus access to explanation and related record items.
- Separation between direct information, warnings, and stronger interventions.
- Explicit communication when decision support is unavailable or incomplete.

## Synthesis
- Health CUI does not treat alerting as a simple modal-popup problem.
- The corpus is already concerned with alert fatigue, inappropriate interruption, auditability, and the risk of over-trusting automated coverage.

## Modern interpretation
- Strong modern carry-overs include:
- `components`: alert indicator, prioritized alert panel, inline evidence/explanation drawer, decision-support status badge.
- `patterns`: grouped alerts by priority, non-modal review surfaces, explicit "decision support unavailable" states.
- `governance rules`: define alert priority vocabulary, reserve interruption for justified cases, and distinguish alert presence from system health/status.

## Current relevance
- `still valid`: explicit decision-support status, grouped priorities, incomplete-coverage messaging, non-modal review where possible
- `valid with reinterpretation`: exact alert-container anatomy, pop-up summaries for new alerts, two-level priority model
- `historically interesting only`: exact visual proposals from exploratory material

## Cautions
- The historical alert model is exploratory in places and not always a finalized standard.
- Modern implementations should combine these ideas with current clinical-safety governance and contemporary accessibility standards.

## Related sources
- [Design Guidance Exploration -- Decision Support](../source-notes/design-guidance-exploration-decision-support.md)
- [Alert Review And Decision Support Workflow](../entities/alert-review-and-decision-support-workflow.md)
- [Alerting And Decision Support Patterns](../entities/alerting-and-decision-support-patterns.md)
- [Alerting Checklist](../entities/alerting-checklist.md)
- [Design Guidance Exploration -- Decision Support](../../derived/normalized-markdown/design-guidance/design-guidance-exploration-decision-support.md)
- [Design Guidance Exploration -- Alert Symbol Design](../../derived/normalized-markdown/design-guidance/design-guidance-exploration-alert-symbol-design.md)
- [Design Guidance -- Displaying Adverse Drug Reaction Risks](../../derived/normalized-markdown/design-guidance/design-guidance-displaying-adverse-drug-reaction-risks.md)
