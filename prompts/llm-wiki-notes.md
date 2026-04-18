# LLM Wiki Notes

This repo follows the LLM Wiki pattern in a practical way.

## Best outputs to generate
1. `AGENTS.md`
   - repository law
   - defines what is raw vs derived vs wiki
   - sets provenance rules

2. `README.md`
   - concise purpose and layout

3. `prompts/codex-bootstrap.md`
   - one-shot setup prompt for Codex

4. `prompts/codex-tight-task.md`
   - smaller follow-on task prompt for iterative runs

5. `raw/manifests/*.json`
   - machine-readable source discovery manifests

6. `wiki/source-notes/*.md`
   - one page per important source

7. `derived/inventories/*.md`
   - navigable inventories

8. `wiki/mappings/*.md`
   - modern reinterpretations

## Recommended working model
- Keep raw files local.
- Let the wiki be regenerated and improved over time.
- Keep source notes conservative and citation-oriented.
- Use JJ/Git however you like internally; the file layout matters more than the VCS choice.
