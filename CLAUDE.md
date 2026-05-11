# CLAUDE.md — Operating context for Claude sessions

You are working on **SPIN OFFF**, a media company spinning off from **OFFF Barcelona**. This file is loaded into every Claude session that opens this repo. Read it before doing anything else.

## What this repo is for

A small founding team uses this repo together with Claude to build SPIN OFFF. Treat the repo as authoritative: every doc in [`knowledge/`](knowledge/) was either extracted from raw founder material or confirmed by the founder. If something is missing, **ask** rather than assume.

## Hard facts (do not invent — these were confirmed)

- **Name:** SPIN OFFF (uppercase, single space, three F's). Never "Spin Off", never "SpinOFFF".
- **Legal form:** Spanish *Sociedad Limitada* (S.L.) — independent entity from OFFF Barcelona.
- **Parent:** OFFF Barcelona. Annual festival since 2001; next edition **May 6–8, 2027**. Also runs in Sevilla and Montreal.
- **Decision-maker:** **Pep** — CEO of OFFF and final decision-maker for SPIN OFFF.
- **Newsletter launch:** **January 2027** (= M1 of the financial plan).
- **Membership launch:** **April 2027** (= M4) — deliberately ~1 month before OFFF Barcelona 2027.
- **Membership price:** €12 / month (financial model). USD parity (~$12) for international messaging.
- **Box subscription launch:** **Year 4 (2030)**. EU-only at launch. (Was previously Q1 2028 / Y2; deferred to Y4 so it ships only when audience scale justifies physical ops.)
- **Founding team:** **Gabriela** (ops · ex-Amazon PM), **Yeva** (international growth), **Lian** (visual craft / design), **Rodrigo** (tech & product · fundraising).
- **Y1 team shape:** **8 people on full salary from day one** — 4 founders + 4 production roles (content, social, AV, community). Plus rotating featured artist (€2K/mo).
- **Y1 outcome (target):** 1,000 paying members · €16.5K MRR · Y1 net **−€115K** · monthly break-even at **M13 (Jan 2028)** · cumulative break-even (capital recovered) **Q4 2028**.
- **Seed ask:** **~€125K** to cover the Y1 deficit + buffer. Natural investor: OFFF as equity co-funder. 5-year cumulative net **+€2.43M**.

## How to think about SPIN OFFF

- **Funnel:** website → free newsletter → paid membership → (Y4+) creative box.
- **Unfair advantage:** OFFF's existing community, artist roster, sponsor network, government relationships.
- **Core narrative:** *"We don't monetize until we've earned trust."* Newsletter is free for the first 3 months before any paid layer is asked of users.
- **Two key messages:**
  1. Fight against **samification** (AI-driven creative homogenization).
  2. Meaningful art and design to help fix this messy world.
- **Tone of voice:** more inviting, friendly, community-first. **FOMO is not allowed.**
- **Visual identity:** same DNA as OFFF (the OFFF design system already exists in Claude design / Canva); each issue carries the artist-of-the-month's visual references on top of OFFF DNA.

## Where to find what

Read these in order if you're new to the project:

1. [`knowledge/01-vision.md`](knowledge/01-vision.md) — why we exist, key messages
2. [`knowledge/02-market-opportunity.md`](knowledge/02-market-opportunity.md) — TAM/SAM/SOM
3. [`knowledge/03-product-funnel.md`](knowledge/03-product-funnel.md) — newsletter → membership → box
4. [`knowledge/04-revenue-and-pricing.md`](knowledge/04-revenue-and-pricing.md) — revenue streams, prices, currency
5. [`knowledge/05-marketing-funnel.md`](knowledge/05-marketing-funnel.md) — TOFU/MOFU/BOFU
6. [`knowledge/06-comms-strategy.md`](knowledge/06-comms-strategy.md) — channels, key messages, KPIs
7. [`knowledge/07-financial-plan.md`](knowledge/07-financial-plan.md) — Y1 P&L, 3-year horizon
8. [`knowledge/08-operations-and-team.md`](knowledge/08-operations-and-team.md) — roles, tools, suppliers
9. [`knowledge/09-brand-and-tone.md`](knowledge/09-brand-and-tone.md) — voice, visuals, naming
10. [`knowledge/10-relationship-with-offf.md`](knowledge/10-relationship-with-offf.md) — parent relationship & decision rights
11. [`knowledge/11-launch-plan.md`](knowledge/11-launch-plan.md) — month-by-month from now to M12
12. [`knowledge/12-key-messages-and-objections.md`](knowledge/12-key-messages-and-objections.md) — the talking points + Pep's main concern

## How to behave in a SPIN OFFF session

- **Default to brevity.** The team is small and prefers concise output.
- **Default to EUR** for the financial model. Use USD only when explicitly serving international messaging.
- **When in doubt, check `knowledge/` first, then ask.** Never invent a number or a fact.
- **Pitch decks are the priority.** Most current sessions are about producing decks for: master narrative, OFFF team, sponsor, artist. Templates live in [`prompts/`](prompts/).
- **The OFFF visual system is in Canva / Claude design** — don't re-create it. Reference it.
- **Multilingual:** content can be drafted in English, Spanish, or Catalan depending on audience. Default English unless told otherwise.

## What is *not* yet decided (open questions to surface, not assume)

- Domain name (no `.com` registered yet).
- Exact USD pricing if the team wants regional differentiation later.
- Color palette / typography customizations on top of OFFF DNA — TBD inside the existing design system.
- Whether OFFF takes the seed (preferred) or the team raises ~€125K externally.

If any of those come up, ask the user.
