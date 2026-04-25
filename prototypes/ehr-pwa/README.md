# EHR PWA Prototype

Offline-capable EHR vertical-slice prototype derived from the companion wiki
specification.

## Scope
This prototype covers:

- persistent patient context
- consultation capture sections
- visible local draft and sync state
- medication review with stable medication line rendering
- alert review with sign-off blocking state
- visible clinical table filter/sort state
- React Aria Components combobox mechanics for coded entry search
- Dexie-backed IndexedDB draft persistence
- Workbox-generated PWA app shell
- DESIGN.md-governed visual tokens and UI rationale
- Playwright offline draft recovery and coded-entry selection tests

It intentionally does not use real patient data, real terminology services,
real prescribing, or production sync.

## Commands

```sh
npm install
npm run dev
npm run design:lint
npm run check:spacing
npm run build
npm run test
npm run e2e
```

The local dev server defaults to Vite's printed URL. During development, a
known-good URL used for this scaffold was:

```text
http://127.0.0.1:5174/patients/p-1001/consultation?panel=results
```

## Notes
- `vite-plugin-pwa` is a dev/build dependency because it generates the service
  worker and manifest; it is not part of the runtime clinical dependency surface.
- Cache API/service worker storage is used only for app-shell caching. Draft
  consultation content is stored in IndexedDB through Dexie.
- React Aria Components is split into an `accessibility-primitives` vendor chunk
  so its bundle cost is visible during PWA build review.
- `npm run check:spacing` enforces tokenized spacing for spacing-sensitive CSS
  declarations in `src/styles.css`.
- `DESIGN.md` is the app-local visual standard for agents and maintainers. Run
  `npm run design:lint` after changing it.
- The Playwright tests build and preview the production PWA, write a draft, go
  offline, verify local draft recovery, and exercise coded-entry combobox
  selection.
