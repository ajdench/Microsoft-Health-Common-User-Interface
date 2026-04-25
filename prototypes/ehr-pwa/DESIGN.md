---
version: alpha
name: Health CUI EHR PWA Prototype
description: Agent-readable visual standard for the current offline-capable EHR consultation prototype.
colors:
  primary: "#17324D"
  secondary: "#5A6675"
  tertiary: "#005A9E"
  neutral: "#F6F8FB"
  surface: "#FFFFFF"
  surface-subtle: "#F7F9FC"
  line: "#D9E0E9"
  line-strong: "#AEB9C8"
  text: "#1B1F24"
  muted: "#5A6675"
  accent: "#005A9E"
  accent-soft: "#E8F2FB"
  on-accent: "#FFFFFF"
  success: "#117A4D"
  success-soft: "#E9F7EF"
  warning: "#9A5B00"
  warning-soft: "#FFF3D8"
  critical: "#B42318"
  critical-soft: "#FDE7E6"
  patient-band: "#17324D"
  patient-band-text: "#FFFFFF"
typography:
  body-md:
    fontFamily: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  heading-panel:
    fontFamily: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 1rem
    fontWeight: 750
    lineHeight: 1.25
    letterSpacing: 0
  patient-name:
    fontFamily: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 1.2rem
    fontWeight: 750
    lineHeight: 1.25
    letterSpacing: 0
  meta:
    fontFamily: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 0.86rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  chip-label:
    fontFamily: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 0.78rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
rounded:
  sm: 6px
  md: 8px
  full: 9999px
spacing:
  none: 0px
  2xs: 0.125rem
  xs: 0.25rem
  sm: 0.375rem
  md: 0.5rem
  lg: 0.75rem
  xl: 1rem
  2xl: 1.25rem
  3xl: 1.5rem
  4xl: 2rem
  button-y: 0.5rem
  button-x: 0.75rem
  chip-y: 0.25rem
  chip-x: 0.5rem
  card: 1rem
  card-compact: 0.75rem
  card-body-gap: 0.75rem
  field-gap: 0.375rem
  panel: 1rem
  page: 1rem
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.button-y}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.button-y}"
  patient-banner:
    backgroundColor: "{colors.patient-band}"
    textColor: "{colors.patient-band-text}"
    typography: "{typography.patient-name}"
    padding: "{spacing.xl}"
    rounded: "{rounded.sm}"
  patient-context-anchor:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.patient-band-text}"
    typography: "{typography.patient-name}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  app-background:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.page}"
  metadata-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.meta}"
    rounded: "{rounded.sm}"
    padding: "{spacing.none}"
  status-chip:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.muted}"
    typography: "{typography.chip-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.chip-y}"
  selected-tab:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    typography: "{typography.chip-label}"
    rounded: "{rounded.sm}"
    padding: "{spacing.button-y}"
  success-chip:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success}"
    typography: "{typography.chip-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.chip-y}"
  warning-chip:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning}"
    typography: "{typography.chip-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.chip-y}"
  critical-chip:
    backgroundColor: "{colors.critical-soft}"
    textColor: "{colors.critical}"
    typography: "{typography.chip-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.chip-y}"
  panel-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  clinical-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    height: 2.35rem
  divider:
    backgroundColor: "{colors.line}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    height: 1px
  strong-divider:
    backgroundColor: "{colors.line-strong}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    height: 1px
---

## Overview
This DESIGN.md governs the current EHR PWA prototype in this directory. The UI
is a dense clinical work surface, not a landing page or generic enterprise app.
It should help a clinician keep patient identity, draft state, sync state,
alerts, medications, coded entries, and reference results visible without
unnecessary decoration.

This is a modern Health CUI-informed reinterpretation. It is not historical
Health CUI source material.

The prototype now uses native shadcn/ui source components as its UI primitive
layer. Clinical components remain application-owned wrappers around those
primitives so the safety contract is not delegated to a generic UI kit.

## Colors
The palette is restrained and safety-oriented.

- **Primary / patient band (#17324D):** persistent patient identity and app
  chrome anchor.
- **Accent (#005A9E):** primary actions, selected tabs, focused controls, and
  selected results.
- **Neutral / surface:** quiet backgrounds for long working sessions.
- **Warning, success, and critical:** clinical or sync state only. Do not use
  these colors decoratively.

Critical states must remain legible without relying on color alone. Pair color
with text, labels, or role/ARIA semantics.

## Typography
Use the shadcn/Tailwind font token stack implemented in CSS. The prototype does
not use hero typography. Headings inside panels are compact, metadata is
smaller and muted, and chips use a bolder small label treatment.

Letter spacing remains `0` across the app. Do not introduce negative letter
spacing or viewport-scaled type.

## Layout
The layout is a sticky clinical app chrome over a two-column consultation
workspace. The patient banner and sync strip stay visible because patient
context and local state are safety-relevant while editing.

Use the named spacing scale. Prefer semantic spacing tokens for product roles:
`card`, `panel`, `page`, `button-y`, `button-x`, `chip-y`, and `chip-x`.
Container-query behavior matters: the consultation action rail appears beside
note sections only when the consultation workspace itself has enough width.
The consultation workspace and reference pane share the same top rail. The
reference pane's sticky offset is derived from the measured app-chrome height
plus page padding so it does not start lower than the left pane.

## Elevation & Depth
Depth is mostly flat. Use borders, soft background layers, and state color
instead of heavy shadows. Shadows are reserved for overlays such as the coded
entry combobox popover.

## Shapes
Use small radii: `6px` for controls and compact inner surfaces, `8px` for
cards and panels, and full radius only for chips. Avoid pill-shaped buttons
unless they are semantically chips or status flags.

## Components
Patient banner: always shows the patient name, demographics, identifier, status
flags, and draft indicator when relevant. Do not hide it behind navigation.

Sync strip: stays with the app chrome and uses chips for local save, pending
sync, recovered draft, offline, and sync-failure states.

Cards and panels: compose shadcn `Card` with quiet white surfaces, stable
borders, compact headings, and explicit body gaps. Do not nest decorative cards
inside cards.

Clinical code search: expose prioritisation and ambiguity before adding a code.
Use shadcn `Popover` and `Command` for the section-local concept picker.
Selected codes stay separate from free text and have explicit remove controls.
Section-local coded-content areas are compact field groups: heading, count
chip, search control, and selected/empty state. Do not repeat explanatory help
text in every section.

Reference panel: shadcn `Tabs` switch medications, alerts, and results.
shadcn `Table` can be used only where width supports it; narrow views use
shadcn `Card` lists.

## Do's and Don'ts
- Do keep patient identity and sync/draft state persistently visible.
- Do use tokenized spacing and radius values from this file and `src/styles.css`.
- Do use shadcn/ui primitives first for buttons, badges, cards, tabs, tables,
  inputs, textareas, alerts, popovers, command lists, and empty states.
- Do reserve critical, warning, and success colors for actual state.
- Do keep component text small enough to fit in constrained clinical panels.
- Don't add marketing-style hero sections, decorative gradients, or ornamental
  backgrounds to the prototype.
- Don't introduce raw spacing values in CSS without updating the governance
  rule and documenting the exception.
- Don't make shadcn, table, or router primitives carry clinical meaning by
  themselves; wrap them in app-owned clinical components.
