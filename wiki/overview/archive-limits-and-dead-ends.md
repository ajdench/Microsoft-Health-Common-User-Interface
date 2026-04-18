# Archive Limits and Dead Ends

<blockquote>
<p><strong>Plain English context</strong></p>
<p>This page records the recovery paths that were tried and the reasons they stopped being worthwhile. It exists so future runs can avoid spending large amounts of time rediscovering the same limits.</p>
</blockquote>

## `cui.nhs.uk` surviving replay perimeter
- The localized archive branch consistently points back to a small SharePoint surface:
  - `NHSCommonUserInterface.aspx`
  - `Register.aspx`
  - `SignInHelp.aspx`
  - `ForgotPass.aspx`
  - `Privacy.aspx`
  - `NHS CUI Distribution Mechanism User Guide.pdf`
- A referenced `Default.aspx` path was probed directly in the UK Government Web Archive and resolved to `URL Not Found` in the browser.
- Conclusion: the surviving `cui.nhs.uk` perimeter now looks close to exhausted.

## CodePlex attachment recovery
- The public CodePlex Archive landing, releases, license, and thin source-tree pages were successfully localized.
- Direct attachment URLs for release readmes and packages currently return authentication errors rather than public content.
- Browser and non-browser attempts both failed on those attachment paths.
- Conclusion: release chronology is recoverable, but attached binaries/readmes are only partially recoverable from the currently available archive surface.

## Indra Valencia live-fetch behavior
- Plain HTTP fetches often hit anti-bot or captcha behavior.
- A browser-rendered capture was sufficient to recover the article text and preserve the lead.
- Conclusion: this line is no longer blocked for historical interpretation, even if live fetch behavior remains brittle.

## `mscui.net` showcase branch
- The toolkit mirror preserves strong internal evidence that a showcase branch existed and names the demonstrators and media files.
- External web traces corroborate that `pjd.mscui.net/default.htm` and `pjd.mscui.net/PrimaryCare.htm` were publicly reachable in 2010.
- The actual showcase videos and live Silverlight experiences are not preserved in the repo.
- Conclusion: the existence and rough shape of the showcase branch are provable, but not the full media corpus.

## What not to overclaim
- Do not claim exhaustive recovery of every public page formerly under `mscui.net` or `cui.nhs.uk`.
- Do not claim complete reconstruction of CodePlex packages or readmes.
- Do not claim exact deployment depth across every supplier named in early Microsoft or Digital Health material.

## Related wiki pages
- [Research Scope Status](research-scope-status.md)
- [Adoption, Retirement, and Afterlife](adoption-retirement-and-afterlife.md)
- [Showcase and Demonstrators Remnants](../source-notes/showcase-and-demonstrators-remnants.md)

