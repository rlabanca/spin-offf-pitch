# SPIN OFFF Investment Pitch

_Started 2026-05-07 07:52 UTC_

---

## User

Use the folder as context with all the data there to create a pitch deck to Pep Salazar (CEO and owner of OFFF) to create a pitch deck in order to convince him to invest on the SPIN OFFF media company.

#GTM
- Base on the frameworks: ACP (audience > community > product) as the chosen and the Bowtie visuals

#Instructions
- Create a pitch for 10 minutes presentation and 5 minutes of Q&A
- Use the best practices to build the pitch structure
- Make me questions in order to understand the company instead of creating assumptions. Let's make the decisions together.

## Assistant

I'll dig into the SPIN-OFFF folder first to understand what you're building, then ask focused questions before we plan the deck together.

_[tool: local_ls]_

_[tool: local_read]_

Let me read the key knowledge docs and the master pitch prompt to understand what's expected.

_[tool: local_read]_

Now let me read the core knowledge docs in parallel and check the relationship-with-OFFF doc, plus the key-messages-and-objections (since this is for Pep specifically).

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

I have a strong grasp of the SPIN OFFF context now. Before I plan the deck, I need your input on a handful of decisions — this pitch is specifically to **Pep** (not a generic investor audience), and it uses **ACP + Bowtie** as the GTM frameworks, both of which the master spine doesn't account for. That changes things.

Here are my questions:

_[tool: questions_v2]_

## User

Questions answered:
- the_ask: Just strategic alignment — no money, no legal commitment yet
- investment_amount: investment needed before the breakeven
- pep_relationship: Engaged — we've discussed; this deck formalizes it
- founding_team: Gabriela (project manager at Amazon), Yeva (international business student), Lian (visual artist and designer) and Rodrigo (Entrepreneur and experienced tech/product leader)
- acp_definition: The OFFF audience already exists but we need to convert it into the SPIN audience + newsletter > then newsletter converting into membership is community > and then the product is spending the credits on products + box subscription as product
- bowtie_definition: Confirm
- framework_emphasis: Background structure — they shape the narrative but aren't named
- slide_count: 16
- speaker_notes: Yes — short bullets per slide
- qa_prep: Yes — appendix slides after slide 12 with rehearsed answers
- language: English
- tagline: A spin-off. Same DNA. New rotation.
- imagery: more the artist work tiles (curation) and the poster aesthetic. Avoid the festival photos to remove ambiguity.
- risk_slide: Yes — explicit risks slide before the close

## Assistant

_[tool: snip]_

Now let me explore the design system assets and starter components in parallel before I plan and build.

_[tool: list_files]_

_[tool: read_file]_

_[tool: snip]_

_[tool: copy_starter_component]_

_[tool: copy_files]_

Now let me build the deck. Here is the plan:

**Title sequence (16 slides + 4 appendix Q&A)** — short topic noun-phrases as the title style, occasional declarative for moments of emphasis. Speaker notes (short bullets) on every slide. Imagery: artist work tiles + flat color blocks. Background-only ACP/Bowtie (Audience → Community → Product structures the story; Bowtie shape used for the funnel slide).

Title spine:
1. Title — A spin-off. Same DNA. New rotation.
2. Why we're here — formalize alignment, no money asked
3. The problem — samification
4. The opportunity gap — between festivals, OFFF goes quiet
5. The vision — year-round home of creative culture
6. The team — Gabriela, Yeva, Lian, Rodrigo
7. What it is — newsletter → membership → box (the bowtie)
8. The artist of the month — unifying mechanic
9. The funnel — bowtie diagram (acquisition ↔ expansion)
10. Member benefits — toolkits, credit, access, mentorship
11. The unfair advantage — OFFF's earned assets
12. Market — TAM/SAM/SOM
13. Business model & pricing — €12/mo + sponsorship
14. Year 1 plan — month-by-month ramp
15. 3-year horizon — 8K–15K members → €1.44M ARR potential
16. Risks & mitigations
17. The investment ask — runway to break-even
18. Closing — the trust narrative + two key messages
19–22. Appendix Q&A (4 slides: free content, churn, cannibalization, why now/why €12)

Let me build it.

_[tool: snip]_

Let me check the financial-projection.html to see if there's anything about pre-breakeven cumulative cash needed.

_[tool: local_read]_

Let me calculate cumulative cash needed: with monthly costs ~€4,650 (Phase 1) and ~€6,850 (Phase 2), plus €4,500 one-time. Quick approximation: cumulative break-even at M11 means peak cash deficit before then. Phase 1 (M1–M3): 3 × €4,650 + €500 (web M1) + €4,000 (platform M3) − €500 (M3 rev) = ~€18,000 deficit by end M3. Then M4–M10: ~€6,850/mo × 7 = €47,950 cost; revenue M4–M10 = €58,200; net positive €10,250 over that span. Peak deficit therefore ~€18K end-M3, easing through Y1. Round the runway ask to **€20K–€25K** to give buffer.

Now I'll write the deck.

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: done]_

I need to fix real issues from the validators: bottom-of-slide overflow on slides 8, 12, 13, 18; small text in headers/snums (raise to 24px+); fix the title slide overlap. Most "script-rendered" warnings are false positives (the content IS static HTML — just the deck-stage shadow DOM wraps it).

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

Now I'll fix the remaining issues: title slide overlap, slide 8 overflow (artist of month list runs past bottom), slide 12 lead overflow, slide 13 box card overflow, slide 18 closing tagline overflow.

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

I'll fix the remaining real overflow issues and bump the .tag size globally to clear the validator. The "script-rendered" warnings are false positives from shadow DOM detection.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

I'll fix slide 8 by removing one row, and bump table th size, and fix slide 18's centered tag overlap with the bar.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

I'll fix slide 8 by removing the hidden row entirely and shrinking the artist list block.

_[tool: snip]_

_[tool: str_replace_edit]_

Also reduce row padding on others:

_[tool: read_file]_

_[tool: grep]_

Let me check the actual structure of slide 8:

_[tool: grep]_

The numtag rows aren't there — they must be different. Let me look at slide 8:

_[tool: grep]_

The file content didn't have those rows — my earlier edits may have been applied to a different version. Let me check:

_[tool: grep]_

The slides may be in a different file. Let me check structure:

_[tool: grep]_

_[tool: list_files]_

File is `SPIN OFFF - Pitch for Pep.html` (with hyphen, not em-dash). My recent edits hit nothing. Let me find the right slide:

_[tool: grep]_

Good — edits worked but I was searching the wrong filename. Let me check slide 8 height:

_[tool: read_file]_

Now reduce row padding for items 1-3 too:

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Slide 8 still overflows by ~50px. Let me look at the actual rendered height — bumping up bottom padding got worse. Let me reduce title size and remove a row, and also look at parent height behavior:

_[tool: str_replace_edit]_

_[tool: done]_

Got worse. The issue: the section likely lacks fixed height and content is pushing past 1080. Let me check the section setup and verify with a screenshot:

_[tool: grep]_

_[tool: read_file]_

Sections have `overflow: hidden` so content past 1080 is just clipped — visually fine but validator flags. Let me screenshot to confirm visually:

_[tool: save_screenshot]_

_[tool: view_image]_

The hash navigation didn't go to slide 8 — it went to slide 1. Also note the SPIN OFFF text overlaps the tagline on title slide. Let me snip and try goToSlide:

_[tool: snip]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: snip]_

The screenshot is showing slide 1 still and SPIN OFFF text is overlapping the bottom tagline. That's a real overlap issue on title. Let me check slide 1 and fix both. Let me find slide 1 markup:

_[tool: grep]_

_[tool: read_file]_

Looking at the screenshot — the SPIN OFFF text is overlapping the bottom tagline. I need to widen the SPINOFFF column or constrain its size on slide 1. Let me check the tile-grid and SPIN OFFF rendering:

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Slide 8 overflow is fixed. The remaining "overlap" findings are false positives — the bar/header text and slide number/tag are visually clear (different positions), the validator just sees them on the same line. Slide 1 SPINOFFF↔tagline overlap is real but minimal (38px vertical) — let me push the tagline below.

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

The remaining "overlaps" are validator false positives — bar text and slide-number tags occupying the same row but visually separated, plus slide 1's tagline still ~29px under the SPIN OFFF wordmark (cosmetically fine, sits in the negative space below the OFFF descenders). Slide 8 overflow is fully resolved.

_[tool: snip]_

_[tool: fork_verifier_agent]_

Slide 8 overflow fixed; slide 1 wordmark scaled down. Verifier running.

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Slide 1 overlap fixed. Remaining flags are validator false positives — bar/header text on the same row but visually separated by hundreds of px horizontally.

_[tool: snip]_

_[tool: fork_verifier_agent]_

Slide 1 overlap fixed; verifier running.

