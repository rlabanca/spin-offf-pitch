---
name: spin-offf-context
description: Load the full SPIN OFFF operating context — vision, market, financials, brand, launch plan, parent-company relationship. Invoke at the start of any session that touches SPIN OFFF strategy, content, decks, financials, or operations, especially when the session is fresh and Claude hasn't seen the knowledge base yet. Also invoke when the user asks "what is SPIN OFFF" or starts a session with a SPIN OFFF question without prior context.
---

# Skill — Load SPIN OFFF Context

You are entering a session that involves SPIN OFFF. Before doing anything else:

## Step 1 — Read the operating context

Read in order:

1. [`CLAUDE.md`](../../../CLAUDE.md) — operating context (hard facts, conventions, behavior rules).
2. [`README.md`](../../../README.md) — repo orientation.

## Step 2 — Read the knowledge base

Read these in order:

1. [`knowledge/01-vision.md`](../../../knowledge/01-vision.md)
2. [`knowledge/02-market-opportunity.md`](../../../knowledge/02-market-opportunity.md)
3. [`knowledge/03-product-funnel.md`](../../../knowledge/03-product-funnel.md)
4. [`knowledge/04-revenue-and-pricing.md`](../../../knowledge/04-revenue-and-pricing.md)
5. [`knowledge/05-marketing-funnel.md`](../../../knowledge/05-marketing-funnel.md)
6. [`knowledge/06-comms-strategy.md`](../../../knowledge/06-comms-strategy.md)
7. [`knowledge/07-financial-plan.md`](../../../knowledge/07-financial-plan.md)
8. [`knowledge/08-operations-and-team.md`](../../../knowledge/08-operations-and-team.md)
9. [`knowledge/09-brand-and-tone.md`](../../../knowledge/09-brand-and-tone.md)
10. [`knowledge/10-relationship-with-offf.md`](../../../knowledge/10-relationship-with-offf.md)
11. [`knowledge/11-launch-plan.md`](../../../knowledge/11-launch-plan.md)
12. [`knowledge/12-key-messages-and-objections.md`](../../../knowledge/12-key-messages-and-objections.md)

## Step 3 — Confirm orientation

After reading, briefly confirm to the user:
- That you have the SPIN OFFF context loaded.
- The current strategic moment (e.g., pre-launch, M1, etc., based on today's date relative to Jan 2027).
- Ask which of the four priority artifacts the session is about (master deck, OFFF team deck, sponsor deck, artist deck) — or what else.

## Behavior rules in any SPIN OFFF session

- **Default to brevity.** Small founding team — they don't need essays.
- **Never invent numbers.** Trace every figure to a doc in `knowledge/`.
- **Currency:** EUR primary, USD parity for international messaging.
- **Brand spelling:** always `SPIN OFFF`.
- **Tone:** inviting, friendly, community-first. **No FOMO.**
- **When in doubt, ask Pep** (CEO of OFFF, the decision-maker) — i.e., flag the question to the user.
