# PROMPT — next agent: Contemplative & Mental Practices degree

You are the agent in charge of the Contemplative & Mental Practices Degree (deg-cmp) on the flourishing-compendium website. Your predecessor's session ended mid-curation; everything shipped is live and safe, and the remaining work is documented. Be thorough and exhaustive: someone who followed this degree should be able to practice and benefit from a wide range of Contemplative & Mental Practices in their own life to alleviate their suffering, gain wisdom and progress towards genuine flourishing.

## Start here (in order)

1. Read this file fully, then `docs/DEGREE-CMP-HANDOFF.md` (the binding task contract + changelog; the last entries are the wrap-up), `docs/enrichment/PROTOCOL.md`, `docs/enrichment/OPERATIONS.md`, and `docs/enrichment/HUMANIZER-SKILL.md`.
2. Read the session ledger `docs/enrichment/sources/cmp/ledger.md`, especially the 15:38 UTC wrap-up entry of 2026-10-21 — it lists the open items below in detail.
3. Clone/re-enter the repo at /home/user/workspace/repo (github.com/Clemvillatte/flourishing-compendium, branch main). Push ONLY via `scripts/enrich_save.sh "message"` — it rebases and handles races (retry on failure; if a rebase conflict hits your ledger append, keep BOTH sides). Note: it does NOT commit site/assets/app.js — commit that file yourself first.
4. Take the baton: `python3 scripts/baton.py clock-in cmp <your-worker-id>` and push. Another agent (kpr, kernel enrichment) pushes concurrently — check the TASKBOARD, never edit their files, always rebase before pushing.

## Binding rules (from the owner and the handoff — do not violate)

- Zero hallucination: every fact and quote must come from a source you actually opened. Durations from source pages, never guessed. YouTube videos verified via oembed + watch-page duration. Classify a recording's practice from the recording/transcript, not from its title.
- Evidence types must be separated (trials vs multicomponent vs family vs mechanistic vs traditional rationale); effect sizes where reported; nulls included; correlations never phrased as treatment effects.
- Owner directive 2B (binding): NO disclaimers, safety warnings, adverse-effect caveats, or contraindication language anywhere. Evidence-honesty stays.
- Guided sessions may include substantial silence (that is fine); a talk containing ten minutes of meditation is NOT a guided session.
- "Not everything must be free" is reviewer guidance, NOT an owner statement — do not attribute it to the owner.
- Humanize all prose (no em dashes in prose, no AI tells). Run tests before every push: `python3 -m unittest discover -s scripts/tests` and `node --test scripts/tests/randomizer.test.cjs`.
- Safe-splice recipe for app.js (never find/replace the data line; golden rule: write s[:start] + new + s[end:]). The marker "window.fcAcademyData = " appears TWICE — pick the occurrence that raw-decodes to JSON with schemaVersion 1. After splice: node --check + referential validation + gallery segment byte-identical vs origin.
- TIMING (binding): record your UTC start, deadline T+60 minutes, measure elapsed before reporting; report with whatever passes completed.
- Use the advisor tool: call it as planner before starting and as verifier before finishing. Its last two rounds caught real errors (Soh→Hansen, Balban mis-framing, Cheetah House description) — treat its findings seriously and verify them hands-on.
- A partial degree with polished modules beats a full degree with thin ones. Never push unverified videos or unsourced claims.

## Current state (all live on origin/main, degree status "draft")

- 12 modules (mod-cmp-1..12), 27 verified sources, CMP1 hub page, thumbnail (owner's Dissonanz painting), P-CMP topic. K413/K414/K415 kernels written and corrected. Corrections applied: Hansen 2021 authorship, Balban abstract-exact wording, Liu byline removed, Cheetah House removed (owner directive: off-theme), box video 5:09.
- The practice gallery on CMP1 (below the divider at the end of the page): 7 families (FAM, OMM, LKM, body scan/deep rest/NSDR, Daoist, Zen, walking), ~45 sessions, 3-46 min, all session links verified to exist with printed durations. Instructor standard enforced (lineage/monastery/research institution or documented teacher training). It is a PARTIAL draft — do not report its coverage as complete.

## Open items, priority order

1. Gallery duration coverage gaps: Daoist (verified only to 17:30 free), Zen (25:01), nidra/iRest (20 min samples) lack verified 30-45 min guided sessions. The 45:21 body sweep and 41-min Plum Village deep relaxation are body-scan-family recordings; they do NOT fill the nidra long-session slot. Search the already-verified catalogs (AudioDharma series, DharmaSeed, Plum Village app, Mountain Cloud) for specific long sessions; verify practice, guide, session length, access requirements. Paid options are acceptable if labeled.
2. Verify the practice classification of audiodharma talks/4013 (currently listed as FAM at 42:59) — inspect a transcript or sample the audio; if it is a general mindfulness sit rather than focused-attention, reclassify or move it.
3. Replace remaining shared-page links with direct player links: UCLA MARC page (2 rows: Body and Sound 3 min, Body Scan for Sleep 13 min), Palouse sittingmeditation page (2 rows), iRest samples page (2 rows). Verified UCLA cloudfront MP3s already exist for other rows (see degree source data).
4. Discoverability: add a "Browse practice gallery" control to the Academy degree view, reusing the existing internal hub-page click handler (module pages already link the CMP1 hub page). The app has NO URL routing (no hash/history/searchParams usage) — a deep link is impossible without UI code changes; an in-app control is not.
5. Instructor citations: point the "Who is guiding" claims at biography pages rather than recording pages (e.g., Shukman's Sanbo Zen authorization is on his own site/Wikipedia, not the Mountain Cloud intro page; the GGIA Dacher Keltner page extraction did not confirm a playable player — re-verify).
6. enrich_validate fails on CMP1 and ALL structure pages (83 em dashes are inside kernel-name wikilinks; >480 prose words; other structure pages fail identically). No structure-page exemption exists in PROTOCOL.md. This is flagged to maintainers — do not claim "all required checks passed" while it stands, and do not waive it silently.
7. Pre-existing items: RAIN research question (handoff item 5, never resolved), shouyi kernel (optional elective, not built), K120 could be enriched with a trial-based Evidence section (noted for kpr), status flip to "final" only after owner review.

## Do NOT redo (already verified and closed)

Cheetah House removal; Balban framing; Hansen authorship; the 24+3 degree source verifications; the gallery's existing 45 sessions (they are verified; only the gaps above need work).

## Verification patterns that worked

- YouTube: oembed (`https://www.youtube.com/oembed?url=...&format=json`) then fetch_url on the watch page for duration.
- Library pages: fetch_url with return_html=true, parse direct session URLs (AudioDharma talk IDs, Mountain Cloud MP3s, Plum Village /item/ permalinks, Tara Brach permalinks, DharmaSeed talk URLs).
- Previous fetch outputs are saved under ~/.perplexity/sessions/277caea1-86ec-4b93-96dc-7319372704de/tool_calls/fetch_url/ (read-only history; re-verify anything you rely on).
- Browser QA: python playwright against local server (start_server tool, port 8712, serving site/). Path to the hub page: Academy → Contemplative & Mental Practices → any module → Open module page → the degree page link. Check desktop + 375px mobile, no console errors. Live QA: https://clemvillatte.github.io/flourishing-compendium/ (CI deploys after each push; check https://api.github.com/repos/Clemvillatte/flourishing-compendium/actions/runs with the token if provided).

Report progress in the ledger and the handoff changelog as you go, with measured UTC timestamps. Announce milestones. Good hunting.
