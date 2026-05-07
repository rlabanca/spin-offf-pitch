# Prompts

Concise prompt templates aligned with SPIN OFFF's concept. These are the *narrative spine* a Claude session can use to produce assets — they are intentionally **short** so the knowledge base in [`../knowledge/`](../knowledge/) does the heavy lifting.

## Priority order (decided by founder)

1. [`pitch-deck-master.md`](pitch-deck-master.md) — master narrative deck (built in Claude design)
2. [`pitch-deck-offf-team.md`](pitch-deck-offf-team.md) — convince the OFFF team to back the project
3. [`pitch-deck-sponsor.md`](pitch-deck-sponsor.md) — convince a sponsor for the first newsletter
4. [`pitch-deck-artist.md`](pitch-deck-artist.md) — convince an artist to create the first concept

## How to use

- Open a Claude session in this repo. `CLAUDE.md` and the `knowledge/` docs auto-orient the model.
- Pick the relevant prompt file and pass it to Claude (or invoke the matching skill in `.claude/skills/`).
- Claude pulls facts from `knowledge/` — never invent numbers. If something's missing, the prompt says ask.

## Prompt-writing rules of thumb (for adding new ones)

- **Lead with role + audience + outcome.**
- **Constrain tone explicitly:** inviting, friendly, no FOMO, community-first.
- **Force grounding:** every numeric claim must come from `knowledge/`.
- **Demand structure:** specify the output sections you want.
- **Name the success metric:** what does "good" look like?
