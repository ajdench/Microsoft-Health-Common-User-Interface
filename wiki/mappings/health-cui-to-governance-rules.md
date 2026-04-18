# Health CUI To Governance Rules

<blockquote>
<p><strong>Plain English context</strong></p>
<p>One of the strongest lessons from Health CUI is that high-risk UI work should not rely on taste alone. The historical programme had standards, design guidance, compliance packs, and checklists. A modern clinician-facing design system should do the same in current terms.</p>
</blockquote>

## Governance rules
| Rule | Why it matters | Historical basis |
| --- | --- | --- |
| Review critical components against source-backed safety rules, not only visual consistency. | Generic UI review misses wrong-patient, wrong-dose, and hidden-subset risks. | [CUI CAPS compliance artefacts](../source-notes/cui-caps-compliance-artefacts.md) |
| Keep a distinction between formally standardized patterns and broader advisory patterns. | Some Health CUI material was formalized, some was exploratory, and some was later deprecated. | [ISB 1500-1508 archive branch](../source-notes/isb-1500-1508-archive-branch.md), [Decision Support source note](../source-notes/design-guidance-exploration-decision-support.md) |
| Require explicit review of truncation, state visibility, and patient-context continuity. | These are repeated risk themes across the corpus. | [Patient Context Rules](../entities/patient-context-rules.md), [Medication And Prescribing Rules](../entities/medication-and-prescribing-rules.md), [Clinical Data State Rules](../entities/clinical-data-state-rules.md) |
| Treat component examples as insufficient without usage rules and failure-mode notes. | Historical guidance rarely stops at appearance; it explains what can go wrong. | [Health CUI to Design System Principles](health-cui-to-design-system-principles.md) |
| Mark modern inference clearly when historical sources do not state something directly. | This keeps the repo trustworthy and reusable. | Repository method and existing source-note practice |

## Practical implication
A modern clinician-facing design system should ship with:
- source-backed checklists
- component contracts
- workflow examples
- explicit “historical vs current inference” labels

