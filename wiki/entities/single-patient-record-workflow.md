# Single Patient Record Workflow

<blockquote>
<p><strong>Plain English context</strong></p>
<p>The simplest way to read Health CUI is not as isolated controls, but as a repeated workflow: a clinician opens a patient record, repeatedly cross-checks identity while moving between modules, and must never lose context about who the current patient is.</p>
</blockquote>

## Source basis
- [Design Guidance -- Patient Banner](../source-notes/design-guidance-patient-banner.md)
- [Patient Context Rules](patient-context-rules.md)
- [NHS Digital withdrawal blog 2019](../source-notes/nhs-digital-withdrawal-blog-2019.md)

## Workflow shape
1. Enter a single-patient workspace with a durable identity shell.
2. Confirm a clustered identity set, not just one identifier string.
3. Preserve context while navigating to medications, results, notes, or alerts.
4. Make deceased-state or cautionary context hard to miss.
5. Make patient switches visible enough that wrong-patient carryover is unlikely.

## Historically strong carry-overs
- Persistent patient-context shell
- Redundant status cues for high-risk patient states
- Secondary but visible supplementary context such as allergies
- Stable placement of core patient identifiers

## Modern interpretation
- In a modern web app this becomes a sticky patient-context shell, not necessarily a fixed-width banner.
- Page transitions, tab changes, and drawer openings should preserve or restate patient context.
- Patient-switch interactions should be explicit and interruptible when they risk carrying forward intent from the previous patient.

## Related wiki pages
- [Patient Identification](../guidance-domains/patient-identification.md)
- [Patient Banner Checklist](patient-banner-checklist.md)

