# Heading Anchor Alignment

## Purpose

This note records how heading anchor-link alignment was tuned in the Astro/Starlight wiki UI, what failed, and what the current stable rule is.

It exists because this was easy to get wrong and the failure modes were not obvious from source inspection alone.

## Requirement

The heading link icon must:

- stay hidden until hover or focus
- remain a lighter grey than heading text
- keep the Starlight chain icon
- align optically with the heading x-height band, not with the descender line
- be judged on the actual rendered heading in-browser, not only from CSS or metric theory

## Where the live rule lives

Current implementation:

- [Head.astro](/Users/andrew/Projects/Microsoft%20Health%20Common%20User%20Interface/msh-cui-wiki/src/components/Head.astro)

Current live baseline:

- `--sl-anchor-icon-size: 20px`
- `.sl-anchor-icon { top: -8px; }`

This is intentionally an optical correction on the wrapper, not a theoretical font-metric solution.

## What went wrong

Several approaches were tried and rejected:

### 1. Tiny SVG `translateY(...)` nudges

These were too subtle and easy to misread. They also made it hard to tell whether the live dev server had actually picked up the change.

### 2. Dynamic glyph-metric scripts

The app briefly used computed alignment logic based on measured glyph boxes and icon path boxes.

That failed for two reasons:

- the DOM span/range measurements reflected inline line boxes, not the actual optical x-height target the UI needed
- the resulting calculations oversized the icon and pushed it too high

In short: the math was defensible, but the rendered result was wrong.

### 3. Tuning against the wrong heading

A value that looked acceptable on one heading, such as `Concepts`, was not necessarily correct on a longer target heading like `What is directly viewable now`.

That made general conclusions from the wrong sample heading unreliable.

## Dev-server failure mode

This app had a practical live-preview problem:

- edits in `src/styles/global.css` were not always reflected immediately by the Astro/Vite dev server
- source files could be correct while the running browser still served stale compiled CSS

To reduce that problem, the volatile heading-anchor overrides were moved into the inline global style in [Head.astro](/Users/andrew/Projects/Microsoft%20Health%20Common%20User%20Interface/msh-cui-wiki/src/components/Head.astro), and a polling-based dev workflow was added:

- `npm run dev:4322`

Operational rule:

- treat anchor-alignment CSS changes as restart-required unless live verification proves otherwise

## Verification method that worked

The only reliable method was:

1. change one explicit wrapper offset value
2. restart the `4322` dev server
3. verify the served CSS from `curl`
4. inspect the actual target heading in Playwright WebKit
5. compare rendered screenshots, not just code

The useful comparison pattern was:

- bracket nearby offsets such as `-11px`, `-9px`, `-8px`
- check the exact heading the user is judging
- keep the first value that is optically centered in the heading x-height band

## Current decision

The current stable value is `top: -8px`.

That value was chosen only after verifying the exact heading:

- `What is directly viewable now`
- on [Viewable UI Examples](http://localhost:4322/wiki/overview/viewable-ui-examples/#what-is-directly-viewable-now)

Verification artifact:

- [viewable-anchor-alignment-webkit.png](/Users/andrew/Projects/Microsoft%20Health%20Common%20User%20Interface/output/playwright/viewable-anchor-alignment-webkit.png)

## Future rules

If this alignment is revisited later:

- start from the current `-8px` baseline
- do not reintroduce the discarded dynamic sizing/metric script unless there is strong proof it solves a real cross-heading problem
- test on the exact heading being judged, not a convenient substitute
- verify in Playwright WebKit on the live app before concluding anything
- prefer one small explicit wrapper offset change over a more complex system that is harder to validate

## Short version

For this app, heading anchor alignment is an optical UI problem, not a pure font-metric problem.

The stable solution is:

- keep the Starlight icon
- keep hover-only visibility
- tune the wrapper offset in `Head.astro`
- verify on the actual page in Playwright WebKit
