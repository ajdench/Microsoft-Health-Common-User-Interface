# Medication Review And Prescribing Workflow

<blockquote>
<p><strong>Plain English context</strong></p>
<p>Health CUI treats medication work as a continuous clinical workflow: search, select, interpret, compare, review, and authorize. The formatting rules matter because they support those decisions under pressure.</p>
</blockquote>

## Source basis
- [Design Guidance -- Medication Line](../source-notes/design-guidance-medication-line.md)
- [Design Guidance -- Search and Prescribe](../source-notes/design-guidance-search-and-prescribe.md)
- [Medication And Prescribing Rules](medication-and-prescribing-rules.md)
- [CodePlex Archive MSCUI](../source-notes/codeplex-archive-mscui.md)

## Workflow shape
1. Start from a current medication review surface with readable dense rows.
2. Search using progressive narrowing and explicit prioritisation.
3. Constrain follow-on choices such as form, route, or strength where appropriate.
4. Preview the candidate medication clearly before authorization.
5. Keep current and past medication state legible during review.

## Historically strong carry-overs
- Stable medication attribute ordering
- Dose salience
- No silent truncation of critical attributes
- Explicit separation between result prioritisation and the rest of the list
- Constrained, cascading selection when choices depend on prior context

## Modern interpretation
- This maps well to list/detail medication workspaces, safer result ranking, and confirmation surfaces before ordering.
- It also supports component contracts for medication line renderers and prescribing flows.
- The CodePlex release history is useful here because it shows medication controls being reworked as the guidance evolved.

## Related wiki pages
- [Medication](../guidance-domains/medication.md)
- [Medication Line Checklist](medication-line-checklist.md)

