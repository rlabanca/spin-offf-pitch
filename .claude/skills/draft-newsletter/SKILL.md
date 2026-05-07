---
name: draft-newsletter
description: Draft a SPIN OFFF weekly newsletter issue centered on the artist of the month. Use when the user asks to write, draft, or sketch a newsletter, an issue, a campaign email, or "this week's send" for SPIN OFFF. Maintains the inviting, FOMO-free tone and the artist-first editorial structure.
---

# Skill — Draft a SPIN OFFF Newsletter Issue

## When to invoke

The user asks to write, draft, sketch, or outline a SPIN OFFF newsletter — for any week of the month — or "this week's issue", "next issue", "issue 2 of [artist]'s month", etc.

## Workflow

### 1. Load context

Run [`spin-offf-context`](../spin-offf-context/SKILL.md) if not already loaded.

Specifically read:
- [`knowledge/03-product-funnel.md`](../../../knowledge/03-product-funnel.md) — the artist-of-the-month mechanic
- [`knowledge/08-operations-and-team.md`](../../../knowledge/08-operations-and-team.md) — the 4-week content cadence
- [`knowledge/09-brand-and-tone.md`](../../../knowledge/09-brand-and-tone.md) — voice rules

### 2. Get the input you need

Ask (in one short batch) for:
- **Featured artist's name** + a few links to their work.
- **Which week of the month** is this issue (W1 reveal / W2 process / W3 deep-dive / W4 wrap)?
- **Any sponsor** to integrate this issue (M3+ only)?
- **Any community/UGC** to spotlight?

### 3. Draft the issue

Structure (default):

1. **Subject line** — short, specific to the artist's work. No clickbait.
2. **Opening note (≤80 words)** — warm, peer-voice. Set the week's lens on the artist.
3. **Featured artist section** — depends on the week:
   - W1 (reveal): who they are + the month's concept.
   - W2 (process): how they work, tools, references.
   - W3 (deep-dive): one specific piece or project, dissected.
   - W4 (wrap): community responses, UGC roundup, next-month tease.
4. **Curated work** — 2–3 things the artist would want readers to see (their picks, not ours).
5. **Community spotlight** — one member or contributor.
6. **Sponsor placement (M3+)** — editorial, integrated with the artist's theme. Not a banner.
7. **Membership soft-CTA** — one line. Pre-launch (M1–M3), CTA is *waitlist*. From M4, *join us*. Never urgent.
8. **Sign-off** — first-name, conversational.

### 4. Tone scan before delivering

Read it back and check:
- Does it sound like a friend recommending an artist? Good. Like an ad? Rewrite.
- Any FOMO? ("Last chance", "don't miss", "limited spots") → kill it.
- Is the artist named, credited, hyperlinked? Required.
- Does it crowd 3+ ideas onto the reader? Trim — one issue, one core thing.

### 5. Output

Default: markdown draft with sections labeled. Optionally a plain-text version for Beehiiv paste.

## Behavior rules

- **Artist-first.** The artist's name and work appear above the brand chrome.
- **No FOMO.** The brand promise depends on it.
- **Sponsor integration must feel editorial.** If you can't find a way to integrate a sponsor with the artist's theme, flag the conflict — better to skip the issue than to break tone.
