# DISCOVERY Gallery — Repair Handbook

For the agent taking over the Academy/site work. Written 2026-10-21 (UTC) by the
storyteller agent (lane s1e) after the DISCOVERY cleanup session. Everything below
was done and verified against the live repo; nothing here is speculation.

## What the DISCOVERY gallery is

- The "DISCOVERY" button in the Academy view opens the Flourishing Gallery
  (`renderGallery()` in `site/assets/app.js`).
- Its dataset is `window.fcGalleryData` — a JSON array embedded in `site/assets/app.js`
  around line 2796. It is a ~900 KB single-line blob inside a ~940 KB file. This is the
  root cause of tonight's incidents: **never rewrite app.js wholesale**.
- Card schema per entry: `id, text, url, domain, host, host_name, host_desc, host_color,
  tag, source_entry, theme, image`.
- The card renderer is `makeCard(d)` inside `renderGallery()`. It already contains the
  monogram fallback (see below).

## State as of tonight (all pushed and verified on origin/main)

- **602 entries** (deduplicated from 767 — the owner asked for exactly one card per
  URL; verified 0 duplicate URLs remain).
- **CSS**: `.gallery-card-img` in `site/assets/style.css` now uses
  `object-fit: contain` (height 170px) instead of `object-fit: cover`. This is what
  stopped portraits being cropped mid-head. Keep it.
- **Monogram fallback**: `makeCard` renders a styled initial-monogram `<div>` when an
  entry has no image or only the generic `data:image/svg` placeholder. Keep it.
- **271 entries render as monograms** (140 generic placeholders + 131 unverified
  images that were deliberately blanked). They are NOT broken — this is the safe
  state. Restoring real images for them is the remaining repair task.
- Wrong-person photos were removed (e.g. a Martha Nussbaum photo on the
  "Aristotle's Ethics" card, a Plotinus portrait on the Pseudo-Dionysius cards).

## Why 131 images were blanked (read this before "fixing" them)

The old image data was assigned by filename heuristics and was systematically wrong.
Two failure modes were observed tonight:

1. **Wrong person, whole dataset**: ~98 cards carried a portrait of someone else
   (Nussbaum on Aristotle's Ethics, Plotinus on Pseudo-Dionysius, Zeno on
   Hierocles, a random student photo on Kristjánsson, "Girl of Vietnam" on
   Happiness (SEP), etc.).
2. **First-name-only matches**: during restoration, matching on the subject's first
   name alone produced 13 wrong portraits that had to be reverted — Heckman got
   Stockdale's photo, Locke got Gottman's, Beethoven got Wittgenstein's, Goodman
   got Mandela's, Whitehead got Korzybski's, Polanyi got Haneke's, Ryff got
   Gilligan's, Bonanno and George Eliot got G. H. Mead's, Kaufman got Stockdale's,
   Steinbeck got Gottman's, Woodruff got Ricoeur's, and a Heidegger card got a
   Freiburg streetscape. **A changed image is only trustworthy if the subject's
   name (surname included) appears in the image URL/filename.** First-name hits
   are always wrong.

Final audit rule used (keep it): for any image you change, the new image URL must
contain the subject's identifying token(s); anything you cannot verify this way
stays a monogram. A monogram is always acceptable; a wrong face never is.

## The repair task: restore images for the 271 monogram cards

Approach, in order of reliability:

1. **Wikipedia thumbnail lookup** via the Action API (generator=search,
   prop=pageimages, piprop=thumbnail, pithumbsize=400). Take the first hit only if
   the hit title contains the full subject phrase; otherwise skip.
2. **Subject extraction** from the `text` field: strip prefixes ("SEP:", "SEP,",
   "Stanford Encyclopedia of Philosophy…", "Internet Archive:", "Project
   Gutenberg:"), then cut at the first `;` `:` `(` `"` `§` or `,`. E.g.
   "SEP, Zhuangzi §4.8" → "Zhuangzi"; "Stanford Encyclopedia of Philosophy,
   Aristotle's Ethics" → "Aristotle's Ethics" (note: look up "Aristotle" for that
   one, or use the Aristotle Altemps bust already used by the other Aristotle
   entries).
3. **Guard rails**:
   - Reject hit titles containing film/actor/singer/song/album/band/television/
     novel/comics/football/county/river/etc. (blocklist used tonight, extend it).
   - Single-word subjects: only look up if the word is ≥8 chars or hyphenated
     (avoids "Garfield" → the cat). Short single names (Seneca, Laozi) should be
     resolved from images already correct in the dataset instead.
   - Museum/inventory filenames (e.g. "MSR-ra-61-b-1-DM" on Marcus Aurelius) are
     not name-matched — do not blank a plausible image just because the filename
     lacks the name; only blank when you have positive evidence it is wrong.

**Critical: the Wikipedia API rate-limits hard.** Tonight: 8 parallel workers →
instant 429s; 2 workers with 4-attempt backoff → a 630s run that never finished;
even a 1.2s-delayed sequential run hit limits. If you do this: sequential, ≥2s
delay, cache results to a JSON file so you can resume, and run it as a detached
background process (the sandbox kills long foreground commands at ~10 min).

## How to edit app.js safely (mandatory)

The file's JSON blob must be spliced by offset, never rewritten from a stale copy.
Safe recipe (Python):

```python
import json
s = open('site/assets/app.js', encoding='utf-8').read()
i = s.find('window.fcGalleryData = '); start = s.index('[', i)
data, end = json.JSONDecoder().raw_decode(s, start)   # 'end' is the true end offset
# ... mutate data ...
new = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
open('site/assets/app.js', 'w', encoding='utf-8').write(s[:start] + new + s[end:])
```

Then ALWAYS verify before committing:

```bash
node --check site/assets/app.js        # syntax
python3 - <<'EOF'                       # data integrity
import json
s = open('site/assets/app.js', encoding='utf-8').read()
i = s.find('window.fcGalleryData = '); start = s.index('[', i)
data, end = json.JSONDecoder().raw_decode(s, start)
print(len(data), repr(s[end:end+12]))   # expect 602 (or more), ';\n\n/* ══════'
EOF
```

The bug that broke the whole site tonight was writing `s[start+len(new):]` for the
tail instead of `s[end:]` — a dangling fragment made app.js one giant syntax error,
so the entire site rendered empty with dead buttons. Also: a concurrent agent's
full-file app.js commit (the "Academy polish" pass) silently reverted the gallery
cleanup; it had to be re-applied on top. Surgical edits only, and re-verify counts
after every push (`git fetch origin` + re-parse `origin/main:site/assets/app.js`).

## Push discipline

The repo has 5+ concurrent agents. Push with `/home/user/workspace/pushloop.sh`
(fetch → rebase → push, retried). If a rebase gets stuck on app.js conflicts:
`git checkout --ours site/assets/app.js`, re-apply your data change via the splice
recipe above (taking the other agent's code edits as the base), `git add`,
`GIT_EDITOR=true git rebase --continue`, then pushloop again.

## Definition of done for the repair

- 602 entries (or more if sources are added), 0 duplicate URLs.
- No image on any card that cannot be traced to the card's subject.
- Monograms acceptable for anything unverifiable — do not guess.
- `node --check` clean, counts verified, pushed, and re-verified on origin/main
  after the push (races are frequent).
- Update the s1e HANDOFF (`docs/enrichment/drafts/s1e/HANDOFF.md`, "Sidequest" and
  "Incident" sections) with what you changed, or leave a note in this file's
  changelog below.

## Changelog

- 2026-10-21 (storyteller s1e): initial cleanup, dedupe 767→602, no-crop CSS,
  monogram fallback, wrong-person removal; app.js breakage incident and repair;
  602-entry state re-applied after a racing full-file overwrite. Commits:
  b8c885909, 56715e551, 571d0cadc (broken splice, reverted content), 58b168639,
  50af3b981, b71754713.
- 2026-10-21 late (computer agent, owner-directed takeover): end-to-end
  verification pass of the repaired state, no code changes needed. Confirmed on
  origin/main: node --check clean; 602 entries, 0 duplicate URLs; gallery
  renders with pagination (Load more 120 + 482), search filter, monogram
  fallback and object-fit contain; Academy (Editorial Academy redesign) intact;
  all five views boot and switch with zero JS errors, desktop and mobile.
  Pre-existing, out of scope: horizontal overflow on mobile from app chrome
  (off-canvas right panel + nav overhang) — present on every view before and
  after the incident; left for a future pass. Remaining optional task per this
  handbook: restore real images for the 271 monogram cards (Wikipedia API,
  sequential ≥2s delay, cache to disk, detached background process).
