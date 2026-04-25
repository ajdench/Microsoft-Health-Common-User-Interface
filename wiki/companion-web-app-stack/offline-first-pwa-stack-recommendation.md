# Offline-first PWA Stack Recommendation

## Status
This page is modern synthesis, not recovered Health CUI source material.
It uses the primary wiki as a constraint set and combines it with current web
platform research as of 2026-04-24.

## Short recommendation
Use a React + TypeScript PWA built with Vite, a token-driven clinical design
system owned by the application, accessible headless primitives, Workbox-managed
app-shell caching, and a local-first data layer that treats browser cache as
replaceable and clinical data as persisted application state.

For ordinary Edge deployment, use PWA installability plus persistent origin
storage. For a stronger lossless-storage model, ship a dedicated Microsoft
Edge WebView2 host with a controlled user data folder and an app-owned storage
and backup path outside the service worker cache.

## Health CUI constraints from the primary wiki
The current wiki supports these constraints:

- Patient safety is a first-class quality attribute, not a visual polish concern.
- Persistent patient context, medication display, alert state, and transformed
  table state should be treated as safety-relevant UI contracts.
- Critical clinical data must not be silently truncated or hidden behind generic
  enterprise UI defaults.
- Components need explicit domain responsibilities, not only generic props.
- Tokens should encode clinical semantics such as patient status, alert priority,
  dose emphasis, density, and filtered or sorted data state.
- Governance should distinguish formal historical standards, broader guidance,
  exploratory material, and modern inference.

Primary local anchors:
- [Patient safety](../concepts/patient-safety.md)
- [Health CUI to modern web UI](../mappings/health-cui-to-modern-web-ui.md)
- [Health CUI to React / Radix / shadcn](../mappings/health-cui-to-react-radix-shadcn.md)
- [Health CUI to component contracts](../mappings/health-cui-to-component-contracts.md)
- [Health CUI to design tokens](../mappings/health-cui-to-design-tokens.md)
- [Health CUI to governance rules](../mappings/health-cui-to-governance-rules.md)

## Current platform facts
Microsoft Edge PWA documentation describes the normal PWA shape as front-end
files, a web app manifest, and a service worker; production PWA capabilities
such as service workers require HTTPS except for localhost development.

Browser storage should not be treated as a single durable filesystem. MDN
documents that IndexedDB, Cache API, and OPFS are managed by browser-specific
quota systems. Storage can be evicted under pressure unless persistence is
granted; when an origin is evicted, all origin data can be removed together.
The Storage API allows `navigator.storage.persist()` and
`navigator.storage.persisted()`, but this is still a browser-mediated retention
request rather than a substitute for backup, replication, or export.

OPFS is the strongest browser-native storage primitive for large private files
and database files because it is origin-private and provides optimized file
access. It is still origin storage and must be paired with quota handling,
backup/export, and recovery flows when data loss is unacceptable.

WebView2 gives a dedicated Edge-based host application a user data folder that
stores browser data such as cookies, permissions, cached resources, IndexedDB,
file systems, and Cache Storage. Microsoft recommends specifying a custom user
data folder in most Win32 cases to ensure write access. This makes WebView2 a
better fit than a public browser profile for controlled local deployment, but
the UDF should still be treated as browser profile data, not the only canonical
clinical record.

## Architecture
### Application shell
Recommended default:

- `React + TypeScript`
- `Vite`
- `TanStack Router`
- `Workbox`, commonly through `vite-plugin-pwa`, with an explicit custom service
  worker strategy rather than opaque default caching

Rationale:
- React remains the best-supported ecosystem for the accessible component
  primitives, data-grid tooling, local-first libraries, and Microsoft-adjacent
  UI options relevant here.
- Vite keeps the app deployable as static assets and avoids making server
  rendering a prerequisite for offline operation.
- TanStack Router's type-safe search parameters are valuable for clinical table
  state, where filters and sort state must be visible, bookmarkable, testable,
  and not silently lost.
- Workbox should own app-shell and static resource caching, not canonical
  clinical data.

Avoid making Next.js or another server-first meta-framework the default for the
offline clinical work surface. It can still be useful for public documentation,
marketing, or server-rendered portals, but it adds cache and server-component
complexity that is not naturally aligned with a primarily local-first PWA.

### UI layer
Recommended default:

- App-owned clinical components and templates.
- A token system based on CSS custom properties, with Tailwind or plain CSS as
  implementation detail.
- Headless accessible primitives underneath domain components.

Best-fit primitive choices:

| Layer | Recommendation | Reason |
| --- | --- | --- |
| Primary primitives | React Aria Components or Base UI | Broad accessibility coverage, unstyled primitives, strong fit for a clinical design system that must own semantics. |
| Existing wiki/prototype path | Radix + shadcn/ui | Useful for rapid composition and already mapped in the wiki; keep clinical semantics in wrappers. |
| Microsoft-aligned surfaces | Fluent UI React v9 | Strong when Microsoft 365/Edge visual alignment matters; do not let Fluent styling override Health CUI safety contracts. |
| Complex grids | Start with TanStack Table; consider paid MUI X or AG Grid only after a clinical workflow test proves the value | Paid value is plausible for mature virtualized grids, column tooling, and keyboard behavior, but clinical state visibility must be reviewed explicitly. |

The central rule is that `PatientContextShell`, `MedicationLine`,
`AlertPanel`, `DecisionSupportStatus`, `ClinicalFilterSummary`, and
`ClinicalDataTable` are application components. Radix, shadcn, React Aria,
Base UI, Fluent UI, or MUI can support interaction mechanics, but none of them
knows the clinical safety contract.

### Local data layer
Recommended default:

- Use IndexedDB through Dexie for structured app data, local work queues,
  drafts, audit-side metadata, and moderate-size clinical working sets.
- Use OPFS for larger opaque datasets, attachments, exports, database files, and
  any storage that benefits from file-like access.
- Use PGlite or SQLite WASM on OPFS when the local domain model is genuinely
  relational, requires local SQL, or must share query semantics with a Postgres
  backend.
- Use explicit schema migrations, storage estimates, quota error handling, and
  destructive-upgrade protection.

Do not use:
- `localStorage` for important data, because it is synchronous and too limited.
- Cache API as a source of truth, because it is for request/response caching.
- A hidden service-worker cache as the place where clinical data "lives."

### Sync and conflict model
Recommended default:

- Design the app around a local write model with an outbox.
- Make mutations idempotent and replayable.
- Record sync status visibly where it affects clinical interpretation.
- Treat conflict handling as a domain rule, not a generic merge function.
- Keep the server authoritative for shared clinical records unless a formal
  local-authority workflow has been explicitly designed.

Candidate sync technologies:

| Tool | Fit | Caveat |
| --- | --- | --- |
| Electric Postgres Sync | Good for Postgres-backed read sync and partial replicas into local apps. | Current model still requires deliberate write-path and conflict design. |
| PowerSync | Strong fit where local SQLite plus backend database sync is worth paid or hosted value. | Commercial/service dependency must be justified against governance and deployment needs. |
| Replicache / Zero | Useful where very fast collaborative UI and server reconciliation are primary drivers. | Licensing, maturity, and offline write semantics need project-specific review. |
| Custom sync over Dexie/PGlite | Best control for early prototypes or tightly bounded workflows. | The moment conflict rules become complex, this becomes product infrastructure, not glue code. |

For clinical software, paid sync infrastructure may be worthwhile if it avoids
multiple person-months of bespoke conflict, retry, and reconciliation work.
The value test is not "does it sync"; it is whether it makes failure modes
observable, testable, and governable.

## Edge and dedicated browser strategy
### Normal Edge PWA
Use this for broad deployment when local data is a working cache, not the only
copy:

- HTTPS origin with PWA manifest and service worker.
- Explicit `navigator.storage.persist()` request after a meaningful user action
  that creates or imports important data.
- `navigator.storage.estimate()` checks and visible low-storage warnings.
- IndexedDB/OPFS persistence, not Cache API persistence, for clinical data.
- Export, backup, and rehydrate flows.
- Automated tests for offline launch, app upgrade, schema migration, and quota
  failure.

### Dedicated Edge-based host
Use this where the requirement is closer to controlled workstation software:

- Build a WebView2 host rather than forking Chromium.
- Set a custom WebView2 user data folder in an app-controlled writable location.
- Use a stable origin and profile; do not use InPrivate mode for the clinical
  app profile.
- Avoid deployment modes that routinely clean session folders.
- Treat the WebView2 UDF as browser state that must be preserved by installer,
  updater, backup, and uninstall policy.
- For "lossless" storage, add an app-owned native storage/backup path outside
  the browser cache and expose it to the web app through a narrow, audited bridge
  or local service.

The strongest practical model is therefore two-tier:

1. Browser-origin storage for fast offline UI state and local working data.
2. App-owned storage, sync, export, or backup for records that must survive
   browser profile reset, cache clearing, origin eviction, or device replacement.

## Recommended first build stack
For a first serious implementation:

| Concern | Choice |
| --- | --- |
| Language | TypeScript |
| UI runtime | React |
| Build | Vite |
| Routing | TanStack Router |
| App-shell PWA | Workbox through `vite-plugin-pwa`, custom strategy |
| UI primitives | Native shadcn/ui source components on Radix for the current prototype; React Aria or Base UI remain alternatives for later comparison |
| Styling | Tailwind CSS v4, shadcn theme variables, and clinical design tokens |
| Tables | TanStack Table plus app-owned clinical state summary components |
| Local store | Dexie on IndexedDB first; OPFS for files and large data |
| Local SQL option | PGlite or SQLite WASM on OPFS when relational local querying is justified |
| Sync | Start explicit outbox/replay; evaluate Electric or PowerSync when backend sync scope is clear |
| Dedicated host | WebView2 with custom UDF plus app-owned backup/storage path |
| Testing | Playwright for offline/Edge flows; unit tests for clinical formatters and state contracts |

## Governance checklist
Before adopting a library or stack component, answer:

- Can patient identity remain visible across the workflow?
- Can medication line wrapping and dose emphasis be controlled precisely?
- Can alert priority and decision-support availability be represented with
  domain semantics, not just color?
- Can filters, sort order, grouping, and offline/sync state be kept visible near
  the affected data?
- Can critical text avoid silent truncation?
- Can keyboard and screen-reader behavior be tested?
- Can local storage failure, quota pressure, data migration, conflict, and
  recovery be rehearsed?
- Can the implementation distinguish cached app assets from durable user data?
- Can the dedicated host preserve data independently of normal browser cache
  clearing?

If the answer is no, the tool may still be useful below the design-system layer,
but it should not own the clinical component contract.

## Open issues
- The exact dedicated-browser packaging path is not yet specified. WebView2 is
  the recommended direction, but installer, UDF location, backup policy, and
  native bridge scope need a separate design note.
- The sync recommendation should be revisited once the backend data model,
  conflict rules, and regulatory/audit requirements are known.
- Any paid grid or sync product should be evaluated with a clinical workflow
  prototype, not a generic feature checklist.

## External sources
- [Microsoft Edge PWA getting started](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/)
- [Microsoft WebView2 user data folders](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/user-data-folder)
- [Microsoft WebView2 evergreen vs fixed runtime](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/evergreen-vs-fixed-version)
- [MDN storage quotas and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [MDN Origin Private File System](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system)
- [web.dev persistent storage](https://web.dev/articles/persistent-storage)
- [Workbox repository](https://github.com/GoogleChrome/workbox)
- [Dexie documentation](https://dexie.org/docs)
- [Electric Postgres Sync](https://electric-sql.com/primitives/postgres-sync)
- [PGlite OPFS filesystems](https://pglite.dev/docs/filesystems)
- [TanStack Router overview](https://tanstack.dev/router/latest/docs/framework/react/overview)
- [Fluent UI Web repository](https://github.com/microsoft/fluentui)
- [React Aria accessibility notes](https://react-aria.adobe.com/quality#accessibility)
- [Base UI overview](https://base-ui.com/)
