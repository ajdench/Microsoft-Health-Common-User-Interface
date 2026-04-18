# Health CUI to Design System Principles

## Historically grounded principles
- Consistency across clinical systems reduces cognitive load and error risk.
- Patient context should remain durable and easy to verify.
- High-risk information deserves explicit formatting and wording rules.
- Data transformation state must be visible.
- Alerting must balance urgency with interruption costs.

## Design-system translation
- `Principle 1`: Treat clinical safety as a first-class quality attribute.
- `Principle 2`: Separate domain semantics from visual implementation.
- `Principle 3`: Standardize critical data representation before styling lower-risk surfaces.
- `Principle 4`: Use composite patterns, not only atoms, for workflows such as patient review and prescribing.
- `Principle 5`: Document when a pattern is historically informative versus currently normative.

## Governance implications
- Component review should include clinical-safety questions.
- Domain-critical components should have usage guidance, not only props tables.
- Pattern libraries for clinician-facing apps should include workflow examples and failure modes.

## Inference note
- This page is mostly synthesis. The historical sources do not describe a modern design-system governance model in these terms, but they strongly support the underlying need for one.
