# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read the chat transcripts first.** There are 2 chat transcript(s) in `chats/`. The transcripts show the full back-and-forth between the user and the design assistant — they tell you **what the user actually wants** and **where they landed** after iterating. Don't skip them. The final HTML files are the output, but the chat is where the intent lives.

**Find the primary design file under `project/` and read it top to bottom.** The chat transcripts will tell you which file the user was last iterating on. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `README.md` — this file
- `chats/` — conversation transcripts (read these!)
- `project/` — the `SPIN OFFF` project files (HTML prototypes, assets, components)

## Deploying to Vercel

This deck is wired up for Vercel deployment from the **repo root** via [`vercel.json`](../../vercel.json):

- **Framework:** none (static site, no-op `buildCommand`)
- **Output directory:** `decks/pitch-for-pep/project`
- **Routes:**
  - `/` → main deck (`index.html`)
  - `/print` → print-friendly version (`print.html`, served clean via `cleanUrls`)

> The original Claude Design handoff filenames (`SPIN OFFF - Pitch for Pep.html` / `…-print.html`) were renamed to `index.html` / `print.html` so static hosts (Vercel, Netlify, plain HTTP servers) serve them without URL-encoding gymnastics. The rename is preserved in git history.

To deploy:

```bash
# from the repo root
vercel        # preview
vercel --prod # production
```

No build step required — `vercel.json` tells Vercel to serve `decks/pitch-for-pep/project/` as static files with the rewrites above.
