# EHR shadcn PWA Prototype

Clean V2 prototype for the consultation capture screen. This app deliberately
starts from native shadcn/ui composition and app-owned clinical wrappers rather
than continuing to reshape the first EHR PWA prototype.

The first prototype remains useful as a learning and behaviour reference. This
prototype is the cleaner implementation target for:

- persistent patient identity
- persistent local/sync state
- section-local coded content
- validation and follow-up tasks
- right-pane medications, alerts, and results
- compact clinical density without legacy CSS hooks

Run locally:

```bash
npm run dev -- --host 127.0.0.1 --port 5175
```
