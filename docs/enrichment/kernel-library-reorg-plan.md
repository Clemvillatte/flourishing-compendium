# Kernel Library reorganization — analysis, recommendation and plan

Owner question (2026-10-23): the Library's Psychology track shows a **Kernels** section with
272 entries next to five small therapy tabs (MI 13, MBCT 12, CFT 9, CBT 8, ACT 7), and most
therapy kernels are presumably inside the 272. Options considered by the owner: (a) merge
everything into one section with a first line naming the therapeutic approach, or (b) break
the 272 into therapy tabs. No broken links allowed in Library, Randomiser or Graph.

## What the investigation found (all verifiable in-repo; base commit 70d22b300)

1. **How the Library groups kernels.** The nav tree is built by the nav-v3 module
   (`site/assets/app.js`, `navBuildTree`/`GROUP_NODES`) purely from each page's front-matter
   `navigation.primaryPath` — the last element is the group. Cards appear in exactly ONE
   group; `alternatePaths` is parsed (`CARD_TO_ALT`) but never rendered, so the thematic
   metadata kernels carry there is currently invisible.
2. **Current distribution** (316 kernel pages total, `content/kernels/`):
   NAV-PSYCH-V1K "Kernels" 272 · NAV-PSYCH-MI 12+section · NAV-PSYCH-MB 11+section ·
   NAV-PSYCH-CFT 8+section · NAV-PSYCH-COG 7+section · NAV-PSYCH-ACT 6+section. No overlap —
   the 44 therapy-tab kernels are NOT inside the 272.
3. **The 272 already have a thematic filing the site does not show.** Their `legacy.chapter`
   fields point at Part I sections 1-11 (Attention, Acceptance, Cognitive Flexibility, Self,
   Values, Emotion, Behavioral Activation, Body, Social, Meaning, Inquiry) for Volume I and
   the V2K sections for Volume II. The `content/structure/V1K-S01.*.md` files still exist and
   still list the kernels, but the nav model renders none of this filing.
4. **Approach mentions inside the 272 are a minority.** A corpus scan
   (`docs/enrichment/kernel-approach-map.json`, generated this session) found **55 of the 272
   pages carry at least one in-page approach-mention candidate** — UNREVIEWED text matches,
   not verified attributions. Therapy-pattern candidates: BA 13, CBT 9, ACT 7, CFT 5, DBT 4,
   MI 3, ERP 1 (some pages match more than one pattern); tradition-pattern candidates: Stoic
   20, positive psychology 4. The other 217 pages returned no match in this scan — that means
   "not detected by this scan", NOT "transdiagnostic" and NOT "origin-less"; provenance for
   them is simply unknown at the audited bar.

## Recommendation

**Option (b) — splitting the 272 into exclusive therapy tabs — is not currently supported by
the audited metadata.** A unified collection avoids requiring premature classification:
verified-quality affiliation evidence exists for a minority of pages, techniques can serve
more than one approach, and unknown provenance must remain unknown rather than be guessed.

**Adopt option (a), in two separable parts:**

**Part 1 — unify browsing (bounded website work package, no content classification needed).**
Make the Library show ONE Kernels collection containing all 316 kernels, while the five
existing therapy groups remain unchanged as curated views. Under the current code this needs
either derived collection logic (NAV-PSYCH-V1K resolves to "all entries of type kernel") or
explicit multi-membership — simply changing the 44 kernels' `primaryPath` to NAV-PSYCH-V1K
would REMOVE them from their therapy groups, so "keep the tabs for free" is not true without
extra logic. A kernel's current group can be displayed as "Currently filed under ..." — filing,
not verified origin; pages with no approach data show "Approach not yet recorded."

**Part 2 — evidence-based approach labels (separate content programme, per-kernel source
work).** Add a front-matter field, e.g. `approach: ["ACT"]` (multi-valued), populated ONLY
from opened-source attributions. Before populating, the owner should fix the label's
semantics: "documented use in an approach" and "historical origin of the technique" are
different claims; a bare field name does not distinguish them. Labels render as a chip in the
presentation layer (the owner's "first line in each note" goal, without prepending prose
lines that would collide with the enrichment validators and the k-bands' in-flight rewrites).

### Link-safety: acceptance checklist (requirement, not a certificate)
Stable `file`/`id` values reduce risk but do not by themselves certify the Randomiser or
Graph. Any change must be accepted only after all of these pass on the deployed build:
- All 316 kernels appear exactly once in the unified collection (272+44 reconcile).
- Existing kernel pages and the five therapy-group destinations remain reachable.
- Randomiser selection pool and destinations remain valid.
- Graph nodes/edges preserved; node destinations work.
- `scripts/build.py` and `scripts/enrich_validate.py` exit clean; rendered Library checked
  desktop and mobile, including long/multiple labels.

## Feasibility verdict for this session

- **Done this session:** the full inventory + mention-candidate map
  (`docs/enrichment/kernel-approach-map.json`: per kernel — id, title, current group, therapy
  tab, thematic section, tags, verbatim in-page mention fragments) and this plan. No site
  code, front matter or kernel bodies were changed.
- **Proposed follow-on work (NOT executed; needs owner/supervisor sign-off and delegation):**
  1. An implementation pilot for Part 1 (unified collection + "filed under" display) — a
     maintenance-worker task on the shared `site/assets/app.js`; the acceptance checklist
     above gates it.
  2. A verification pass over the 55 mention-candidate pages (each fragment checked against
     its cited carrier; repair or drop).
  3. Per-kernel attribution research for the remaining pages at the k-band bar; many may
     legitimately end with no label.
  4. Part 2 label rendering (`approach` field + chip in `renderEntry()` and the collection
     card renderer; schema addition in `scripts/build.py`).
  5. Optional dissolution of the five therapy tabs (owner decision).

## Suggested execution order
1. Owner/supervisor sign-off on option (a) in two parts, and on the label semantics question.
2. Pilot Part 1 (unified browsing) — no data change, empty labels everywhere, zero
   classification risk.
3. Verify the 55 mention candidates, then begin per-kernel attribution as k-band workers
   enrich (the map fragments are starting leads, to be checked against opened carriers).
4. Once labels are populated, decide on tab dissolution.

Generated 2026-10-23 by worker-pplx-k1e-2a9f (session T0 12:15:05Z). All figures from
in-repo files at commit 70d22b300: `content/kernels/*.md` front matter and bodies,
`content/structure/V1K-S01*.md`, `site/assets/app.js` (nav-v3 module), `site/data/wikiData.json.gz`
as built by `scripts/build.py`.
