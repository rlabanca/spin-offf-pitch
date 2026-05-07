---
name: create-pitch-deck
description: Generate a SPIN OFFF pitch deck for one of four audiences — master narrative, OFFF internal team, newsletter sponsor, or featured artist. Use this when the user asks for a SPIN OFFF deck, presentation, slides, or "pitch" for any of these audiences. Pulls the relevant prompt template, grounds every claim in the knowledge base, and keeps tone inviting and FOMO-free.
---

# Skill — Create a SPIN OFFF Pitch Deck

## When to invoke

User asks for a SPIN OFFF pitch deck, slides, presentation, or pitch for:
- General/external audience → master deck
- The OFFF Barcelona team → internal deck
- A newsletter sponsor / brand partner → sponsor deck
- An artist (featured artist of the month, especially the *first* one) → artist deck

## Workflow

### 1. Load the SPIN OFFF context if not already loaded

If `CLAUDE.md` and the `knowledge/` docs haven't been read in this session, run the [`spin-offf-context`](../spin-offf-context/SKILL.md) skill first.

### 2. Identify the deck type

Ask the user (one question, terse) which of the four prompts to use:
- **Master pitch deck** — [`prompts/pitch-deck-master.md`](../../../prompts/pitch-deck-master.md)
- **OFFF team / internal** — [`prompts/pitch-deck-offf-team.md`](../../../prompts/pitch-deck-offf-team.md)
- **Sponsor (first newsletter sponsor)** — [`prompts/pitch-deck-sponsor.md`](../../../prompts/pitch-deck-sponsor.md)
- **Artist (first featured artist)** — [`prompts/pitch-deck-artist.md`](../../../prompts/pitch-deck-artist.md)

If the user gives extra context (specific sponsor brand, specific artist name, specific event date), capture it and apply the customizations called out in the prompt's "Constraints" section.

### 3. Read the prompt + cited knowledge docs

Open the matching `prompts/pitch-deck-*.md` and read the entire `Source of truth` list inside it. Do not write a slide before all sources are read.

### 4. Produce the deck content

- Generate slide-by-slide content following the prompt's "Required slide spine".
- Every numeric or factual claim must trace to a `knowledge/` doc — if it can't, ask the user instead of inventing.
- Tone: inviting, friendly, community-first. **No FOMO.** No "synergies" / "leverage" / "category-defining" jargon.
- Currency: EUR primary, USD parity (~$12) for international audiences.

### 5. Output format

Default output: a markdown document with one section per slide, headline + bullet body. If the user asks for it in **Canva / Claude design**, hand the slide-by-slide markdown over and explain that the OFFF design system already exists in the design app — point them at it rather than re-creating visual styling.

### 6. Verify before delivering

- Brand spelling `SPIN OFFF` (uppercase, single space, three F's).
- All numbers match `knowledge/07-financial-plan.md` and `knowledge/02-market-opportunity.md`.
- Tone scan: re-read the deck once. If anything sounds urgent, scarce, or "you're missing out" — rewrite it. FOMO is not allowed.
- For the sponsor and artist decks: the customization placeholders (slides 1, 7, 8 sponsor / slides 1, 7 artist) are filled in or clearly marked TODO.

## Notes

- The master deck is the canonical narrative. The other three are derived audiences. If the user is unclear on audience, default to the master deck.
- For the artist deck specifically, surface the **€2,000 fee early** — never bury it. This is a brand promise (we don't extract from artists).
- For the OFFF-team deck, **pre-emptively address cannibalization** on slide 5 — don't wait for the question.
