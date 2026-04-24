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
- Dexie-backed IndexedDB draft persistence
- Workbox-generated PWA app shell
- Playwright offline draft recovery test

It intentionally does not use real patient data, real terminology services,
real prescribing, or production sync.

## Commands

```sh
npm install
npm run dev
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
- The first Playwright test builds and previews the production PWA, writes a
  draft, goes offline, reloads, and verifies local draft recovery.

