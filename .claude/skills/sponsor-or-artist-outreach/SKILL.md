---
name: sponsor-or-artist-outreach
description: Draft outreach messages (email, DM, intro) to potential SPIN OFFF newsletter sponsors or potential featured artists. Use when the user asks to write a cold/warm outreach, intro email, "reach out to [brand/artist]", or first-touch message to a sponsor or artist for SPIN OFFF.
---

# Skill — Sponsor / Artist Outreach

## When to invoke

User asks for:
- An email/DM to a brand about sponsoring the newsletter.
- A first-touch message to an artist about being featured.
- A warm intro template for either audience.

## Workflow

### 1. Load context

Run [`spin-offf-context`](../spin-offf-context/SKILL.md) if not already loaded.

### 2. Identify which path

Ask which audience (one terse question if unclear):
- **Sponsor outreach** — see [`prompts/pitch-deck-sponsor.md`](../../../prompts/pitch-deck-sponsor.md) for the framing.
- **Artist outreach** — see [`prompts/pitch-deck-artist.md`](../../../prompts/pitch-deck-artist.md) for the framing.

### 3. Get the recipient details

Ask in one batch:
- Name + role + brand/practice.
- Anything specific that prompted this outreach (a recent project, a connection, a context cue).
- Whether this is **cold** (no prior relationship) or **warm** (intro from OFFF/Pep/community).

### 4. Draft

Structure:

#### Sponsor outreach
1. **Subject:** specific to their brand × the artist of the month they'd be associated with. No "Partnership opportunity".
2. **Line 1:** specific reason you're reaching out — a project of theirs you genuinely admired or a clear category fit.
3. **What SPIN OFFF is** — two sentences max. Newsletter spin-off of OFFF Barcelona, launches Jan 2027.
4. **Why them, why now** — being inaugural sponsor = lowest price ever, narrative ownership.
5. **What the placement looks like** — editorial integration with artist of the month, not a banner.
6. **Concrete next step** — 20-min call, attach the deck.

#### Artist outreach
1. **Subject:** their name + something specific from their work. No "Collaboration opportunity".
2. **Line 1:** a specific piece of theirs that prompted the outreach. Show you've actually looked.
3. **What we want from you** — be the featured artist for [month]. Brief: one concept, one podcast, source material.
4. **What you get** — €2,000 fee (named, never buried), OFFF audience for a month, podcast feature, co-promotion.
5. **Why now / why first** — the inaugural artist sets the tone for everything that follows.
6. **Concrete next step** — 20-min call, attach the artist pitch deck.

### 5. Tone

- **Peer voice.** Especially for artists.
- **Specific, not generic.** Reference real work, real projects.
- **Short.** Sponsor email ≤180 words. Artist email ≤150 words.
- **No FOMO.** No urgency tactics. (The "be the first" framing is narrative, not scarcity.)

### 6. Verify before delivering

- The €2,000 artist fee is named explicitly (artist outreach).
- The recipient's actual work is referenced — not generic "your portfolio".
- Brand spelling `SPIN OFFF` correct.
- Subject line is specific and not template-y.

## Output

Markdown draft, ready to paste into email/DM. Offer to produce a follow-up message in the same format.
