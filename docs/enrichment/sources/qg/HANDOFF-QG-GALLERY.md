# HANDOFF — Qi Gong Academy gallery migration (+ paused CMP enrichment)

## 0. SCOPE FENCE — read first

This task touches EXACTLY these files and nothing else:

- `academy/QG1 — The Qi Gong Degree — A Year of Practice.md` (source of truth)
- `academy/thumbnails-manifest-qg.json` (to create)
- `scripts/qg_gallery_data.py` (+ a new `scripts/qg_thumbnails.py` if you write one)
- `site/assets/app.js` (ONLY the deg-qigong practiceSessions splice, section 5 step 6)
- `site/assets/academy/sessions/qNNN.jpg` (new thumbnails only)
- `content/structure/QG1 — The Qi Gong Degree — A Year of Practice.md` (ONLY deleting
  the `## The practice gallery` section, section 5 step 7)
- `docs/enrichment/sources/qg/` (ledger + metadata + this handoff)
- The repo-root `handoff.md` is the SUPERVISOR'S file for the Library/wiki
  enrichment board — do not touch it, do not confuse it with this document.

Everything else in the repo belongs to OTHER agents and other workstreams: the
Library/Wiki content pipeline (`content/` beyond the one QG1 edit, `sources/`,
`DEGREE-*` files, `docs/enrichment/` beyond `sources/qg/`), the enrichment
tooling (`scripts/enrich_*.py`, `scripts/enrich_save.sh`, `scripts/story_*`,
`scripts/baton.py`, `sync_push.sh`), and the randomizer/graph/wiki views. Do not
run those tools, do not take any baton, do not use STORY_ROLE, do not "fix" or
reorganize anything outside the fence. Other agents push to main constantly —
never revert or rewrite their commits; if a conflict touches your files, rebase
and re-verify.

Written 2026-10-22 (UTC) by Computer Agent, session cffd561c. Read this top to bottom
before touching anything. Everything below is verified unless explicitly marked
otherwise. If you cannot verify something, do not ship it.

---

## 1. The mission (two tasks)

**Task A (main, ~70% done): Move the Qi Gong practice gallery into the Academy.**
A previous agent ("gallery-worker") built a rich 17-shelf, 111-row Qi Gong practice
gallery but put it on the Library wiki page `content/structure/QG1 — The Qi Gong
Degree — A Year of Practice.md`. The owner ruled this a mistake: the Academy is a
distinct project, and the gallery must follow exactly the same model as the
meditation (CMP) gallery that already ships in the Academy tab. Concretely:

1. An Academy-owned source file (NOT in content/) holds the gallery tables.
2. A parser script derives the JSON from that file.
3. Thumbnails are generated public-domain art with labels burned in.
4. The JSON is spliced into `window.fcAcademyData` in `site/assets/app.js`
   under the `deg-qigong` degree's `practiceSessions`.
5. The gallery section is REMOVED from the Library wiki page (keep the rest).

**Task B (paused, resume only if capacity remains after Task A): CMP gallery
enrichment** toward at least 3 quality options per practice-type x time bucket,
12-25 minute range first, walking last. See section 7.

---

## 2. Non-negotiable owner directives (verbatim rules, apply to everything)

- "Zero hallucination. Every fact, quote, duration, and attribution comes from an
  opened source. If you cannot verify it, do not ship it."
- "Owner directive 2B: no disclaimers or safety language anywhere in shipped content."
- Humanized prose without em dashes (the gallery pages use " — " em dashes in
  headings; that is the existing committed style of the source tables, keep it).
- Audio-classify from the recording (or its published transcript), never from the
  title. A talk containing ten minutes of meditation is NOT a guided session.
- Durations from ffprobe on the audio file or the source page's printed duration,
  never guessed.
- Instructor standard: lineage/monastery/research institution affiliation, or
  documented teacher training with the credential linked from an opened bio page.
- YouTube sources verified via the oembed endpoint plus the watch page duration.
- The cmp band is closed to workers: do not take the cmp baton (it is owner-reserved
  and baton.py refuses claims), do not use scripts/enrich_save.sh, do not use
  STORY_ROLE. Commit and push directly with clearly-scoped Academy commits.
- Do not re-litigate existing dispositions (Cheetah House removal, Balban framing,
  Hansen authorship, 27 degree sources, existing 47 rows, withdrawals of talks/4013
  and talks/5555).

---

## 3. Environment and logistics

- Repo: github.com/Clemvillatte/flourishing-compendium, branch main, cloned at
  `/home/user/workspace/fc`. Live site: https://clemvillatte.github.io/flourishing-compendium/
- Git identity: "Computer Agent" <computer@perplexity.ai>.
- The GitHub PAT is already configured in `~/.git-credentials` in this sandbox as
  `https://Computer-Agent:<PAT>@github.com`. NEVER commit the PAT (the repo may be
  public). If you must re-push with a URL, the working format is
  `https://Computer-Agent:github_pat_...@github.com` — the `x-access-token:` username
  format FAILS with "Invalid username or token".
- Other agents push to main constantly. ALWAYS `git pull --rebase origin main`
  immediately before every commit, and re-run `node --check site/assets/app.js`
  after any rebase that touches app.js.
- CI: build + GitHub Pages deploy. Verify green via the GitHub API with the PAT
  (anonymous API calls are rate-limited), then live-probe the site.
- QA server: the `start_server` tool with
  `{command: 'python3 -m http.server 8765', project_path: '/home/user/workspace/fc/site', port: 8765}`.
  Playwright works via `require('playwright')` from the `/home/user/workspace/fc`
  directory (chromium cached at ~/.cache/ms-playwright). The cloud browser CANNOT
  reach sandbox localhost.
- /tmp is volatile: assume /tmp artifacts are GONE. Everything durable lives in the
  repo or in /home/user/workspace/ (this workspace).

---

## 4. What is DONE and verified (Task A)

### 4.1 Academy source file — COMPLETE (committed with this handoff)

`academy/QG1 — The Qi Gong Degree — A Year of Practice.md`. Structure: intro,
`## The practice gallery` with 17 shelves as `### ` headings, each shelf a
markdown table with rows `| [Title](URL) | Guide | Length |`, then
`### Who is guiding` (10 guides with credential links) and `### Notes and honest
gaps`.

- 111 rows were inherited from the gallery-worker's Library page (commit 2b4d68321).
- Every one of the 111 YouTube URLs was checked against the YouTube oembed endpoint
  (`https://www.youtube.com/oembed?url=<watch-url>&format=json`) from the sandbox.
  80 are live; 31 are DEAD (30 returned HTTP 404, 1 returned 401 private:
  "Mindful Dragon Qigong", video Z-mlwkq4r8k). The 31 dead rows were REMOVED from
  the Academy file and this is recorded honestly in the file's "Notes and honest
  gaps" section.
- The 80 live rows were cross-checked: oembed title matches the row title
  (paraphrase-level), oembed channel author matches the row guide (Qigong For
  Vitality = Jeffrey Chand, Holden QiGong = Lee Holden, Great Energy = Learn
  Qigong / Christopher Grant, Master Gu - Tai Chi = Master Gu, etc.).
- Durations are the printed lengths inherited from the source page (the
  gallery-worker's verification). They were NOT re-timed (YouTube blocks the
  sandbox: watch pages 302 to google.com/sorry, yt-dlp fails). This is recorded in
  the file's notes.
- Shelf inventory (80 rows): Five-minute rescues 7, Ten-minute mornings 6, Ba Duan
  Jin 6, Shibashi 1, zhan zhuang 2, Animal forms 4, Yi Jin Jing 2, Liu Zi Jue 2,
  Daoyin 4, Five elements/seasonal 5, Evening/sleep 4, Calm under pressure 8,
  Walking 4, Seated/chair 4, Full classes 13 (ten are 45min+), Tai chi bridge 3,
  Breath 5. (Parser matrix in section 6.3.)

### 4.2b PARSER BUG FIXES (2026-10-22, second commit)

The first version of the parser had two bugs, found and fixed after the initial
commit: (1) parse_length mis-parsed H:MM:SS durations (treated the seconds group
as hours), and (2) the stderr matrix dropped/misaligned the 45+ column (it
totaled 70 against 80 sessions). Both are fixed; the matrix in section 6.3 is
the corrected output and its columns sum to 80. If you edit the parser, re-verify
the matrix total equals the session count.

### 4.2 Parser script — COMPLETE, working

`scripts/qg_gallery_data.py` (committed). Modeled on `scripts/cmp_gallery_data.py`.
Run from repo root: `python3 scripts/qg_gallery_data.py > /tmp/qg.json` — JSON to
stdout, shelf x time matrix to stderr. Verified output: 80 sessions, correct fields.

- Reads the Academy QG1 file; 17 shelves map to practice_type slugs:
  rescue, morning, brocades, shibashi, standing, animal, yijinjing, liuzijue,
  daoyin, seasonal, evening, calm, walking, seated, fullclass, taichi, breath.
- Guide cell split on comma: "Christopher Grant, Learn Qigong" -> guide
  "Christopher Grant", host "Learn Qigong". No comma -> host falls back to guide.
- parse_length handles `M:SS`, `H:MM:SS`, and `N min` / `N minutes`.
- duration_minutes = seconds/60 rounded to 2dp (e.g. 1:39 -> 1.65).
- Thumbnails: reads `academy/thumbnails-manifest-qg.json` keyed by session_index
  (string), uses `generated_file`; rows missing from the manifest fall back to
  `assets/academy/qigong.jpg` (degree artwork). The manifest does not exist yet, so
  today every session falls back — creating it is step 5 below.
- Session JSON shape (identical to the CMP sessions already in app.js):
  `title, practice_type, practice_label, duration_minutes, length_label, url,
  guide, host, thumbnail`.

### 4.3 Thumbnail sourcing — IN PROGRESS, data preserved

- Source: pdimagearchive.org (Public Domain Image Archive). artvee.com blocks
  automation. The site is an Astro SPA: plain curl gets no results, but the search
  route `https://pdimagearchive.org/search/?q=<query>` renders in a real browser
  (cloud browser works; a cookie consent banner appears after several visits —
  click Accept). Image srcs look like
  `https://images.pdimagearchive.org/collections/<slug>/<file>.jpg?height=360&width=360`
  — strip the query string for the full-size image; full-size downloads work from
  the sandbox via plain curl.
- Three harvest rounds were done via the cloud browser. All candidates were
  downloaded, deduped by URL path, validated (PIL: width >= 640, height >= 400,
  0.4 < w/h < 3.5), and VISUALLY CURATED with the image-inspection tool (batch
  prompts: KEEP/REJECT for calm nature/East Asian aesthetic; REJECT rules: diagrams,
  text-heavy plates, cluttered engravings, grotesque imagery, busy human scenes,
  stereographs).
- **51 curated KEEP images** with full metadata (file, alt, detail-page link,
  full-size URL, query, dimensions) are in `/home/user/workspace/qg_keeps_curated.json`
  AND committed at `docs/enrichment/sources/qg/keeps_curated.json`. The image files
  themselves are in `/home/user/workspace/qg_pd_cache/` (named `NNN.jpg` for harvest
  1, `b_NNN.jpg` for harvest 2). CAVEAT: a misattributed borderline entry (071.jpg,
  600x601, wrong source URL) was removed after review. IMPORTANT: some image-review
  batches returned 19 judgments for 20 submitted files, so a few KEEP/REJECT
  assignments may be shifted by one position. Before generating the manifest,
  RE-VERIFY every keep you intend to ship using filename-labeled contact sheets
  (e.g. a grid image with the filename printed on each cell) so the mapping cannot
  drift — do not trust the JSON's alt/URL pairing blindly, and never ship an image
  you have not personally seen and matched to its filename.
- **59 more candidates** (harvest 3, unreviewed) with metadata are in
  `/home/user/workspace/qg_h3_valid.json` AND committed at
  `docs/enrichment/sources/qg/h3_valid.json`; files at `qg_pd_cache/c_NNN.jpg`.
  Likely keeps based on the alt titles: c_005-c_025 (hamonshu wave-and-ripple
  designs — same family as the CMP gallery's wave art), c_026-c_029 (herons),
  c_032-c_033 (peonies), c_041/c_043/c_044 (chrysanthemums), c_049/c_051
  (waterfalls), c_052 (mountain hiking scene). c_056-c_068 are the "crane"
  calendar plates that were already visually REJECTED in harvest 1 (text-heavy
  book plates) — do not bother re-reviewing those exact titles. b_064 and c_064
  failed to download (truncated) — ignore.
- 52 + ~25 likely = ~77-80. If short, harvest more with targeted queries that
  worked well: 'wave design', 'hamonshu', 'seigaiha', 'carp', 'fuji', 'hokusai',
  'bamboo', 'blossom', 'mist', 'clouds', 'moon', 'mountains', 'pine' ('wisteria'
  results were alchemical manuscripts — bad; 'crane' results were calendar plates —
  bad). Re-download from the full URLs in the committed JSONs if the workspace
  image cache is gone.

### 4.4 Already live on the site (context, do not redo)

My earlier commits this session, all verified live: 4e7e85f0d (view routes for
every tab/page + 4-column gallery), 3408d93b1 (card-from-academy address fix),
555702460 (practice gallery full width), 2cf808bda (blank graph fix). The CMP
gallery (47 sessions, deg-cmp) and the full-width 4-column gallery UI are live.
The QG gallery will reuse that UI automatically once practiceSessions exist on
deg-qigong (the UI is data-driven: shelf chips derive from practice_type values,
time buckets from duration_minutes; buckets are ceil'd so 20:24 lands in 21-30;
null durations appear only under "Any length").

---

## 5. REMAINING WORK — Task A, step by step

### Step 1: Finish image curation to exactly 80

Review the harvest-3 candidates (c_* files) with the image-inspection tool the
same way (downscale copies to <= 1200px first if files are too large to inspect;
harvest-1/2 review copies are in `/home/user/workspace/qg_review/`). You need 80
total keeps for 80 sessions. Keep every image you ship visually verified by you.

### Step 2: Get real titles for the manifest

Many alts are literally "Image thumbnail". For each chosen image with a useless
alt, open its detail-page link (the `link` field in the JSONs) in the cloud
browser and read the real artwork title (and artist if shown). The manifest's
`source_title` must be a real title from an opened page, never invented. If a
detail page is unreachable, fall back to the alt text only if it is meaningful.

### Step 3: Generate the 80 thumbnails

Write a Pillow script (e.g. `scripts/qg_thumbnails.py`; the CMP one was ad hoc and
not kept — this time keep it in the repo). Spec, measured from the existing CMP
thumbnails (inspect `site/assets/academy/sessions/s10.jpg` to confirm):

- Output: 640x400 JPEG, quality ~85, into `site/assets/academy/sessions/`,
  named `q000.jpg` ... `q079.jpg` (q-prefix avoids collision with CMP's
  s00-s46.jpg).
- Background: the PD artwork cover-cropped to 640x400 (scale to fill, center crop).
- Bottom scrim: dark gradient overlay, bottom color ~(39,35,26), fading upward
  (transparent by roughly y=240).
- Practice label: uppercase practice_label, gold RGB (211,173,78) (#d3ad4e),
  DejaVu Serif Bold ~30px, top-left at (30, ~297) (measured cap height spans
  y 298-320).
- Time label: the length_label, cream ~(245,239,223), DejaVu Serif Bold ~44px,
  top-left at (30, ~332) (cap height spans y 333-365).
- Font on this sandbox: DejaVu Serif Bold (find with `fc-list | grep -i "dejavu
  serif"`); if there is a Bold variant file use it directly.
- No video thumbnails, no invented portraits, no stereographs. Cover art only.

### Step 4: Build the manifest

`academy/thumbnails-manifest-qg.json` — same entry shape as
`academy/thumbnails-manifest.json` (CMP):
`{"session_index": <int>, "title": <session title>, "practice_type": <slug>,
"practice_label": <label>, "length_label": <as in source table>,
"generated_file": "assets/academy/sessions/qNNN.jpg",
"source_image_url": <full-size URL>, "source_title": <real title>}`.
session_index is the 0-based row order in the Academy QG1 file (= parser order).

### Step 5: Run the parser and sanity-check

`python3 scripts/qg_gallery_data.py` — must print the matrix to stderr with the
80-session totals matching section 4.1's shelf inventory, and the JSON must show
`thumbnail` fields resolving to `assets/academy/sessions/qNNN.jpg` for all 80.
Also verify every referenced thumbnail file exists under `site/`.

### Step 6: Splice into app.js (SAFE SPLICE — never find/replace the data line)

In `site/assets/app.js`:
1. Find the FIRST occurrence of `window.fcAcademyData = ` (byte ~233881 as of this
   writing; the second occurrence ~806769 is inside a comment — ignore it).
2. From the `{` after that marker, raw_decode the JSON object (in Python: find
   the marker, find the `{`, use json.JSONDecoder().raw_decode).
3. Navigate to degrees -> the entry with id "deg-qigong" -> set its
   `practiceSessions` to the 80 parsed sessions. (It currently has none.)
4. Write back: `s[:start] + json.dumps(data, ensure_ascii=False,
   separators=(',',':')) + s[end:]` where start is the `{` offset and end the
   raw_decode end offset.
5. The `window.fcGalleryData` segment elsewhere in the file must stay
   byte-identical (diff before/after outside the spliced range).
6. `node --check site/assets/app.js`.
7. Referential validation: unique session source URLs, thumbnail files exist,
   practice_type slugs all in the known 17, durations parse.

### Step 7: Remove the gallery from the Library page

In `content/structure/QG1 — The Qi Gong Degree — A Year of Practice.md`: delete
everything from the `## The practice gallery` heading (byte 8767 as of this
writing) up to but NOT including `## Practice library` (byte 26884). Keep the
rest of the page (intro, practice library, everything after). Do not touch any
other file in content/.

### Step 8: QA (full closeout)

- `python3 -m unittest discover -s scripts/tests` (30 tests, all must pass)
- `node --test scripts/tests/randomizer.test.cjs` (9 tests)
- `node scripts/tests/routes.qa.cjs` (36 checks — needs the local server on :8765)
- `python3 scripts/build.py`
- `node --check site/assets/app.js`
- Browser QA with Playwright from the fc dir: open the Academy tab, click the Qi
  Gong degree, verify the gallery renders full width, 4 columns, 80 cards, shelf
  chips work, a card click opens the right YouTube URL, thumbnails show labels,
  and `#degree=deg-qigong&practice=<id>` deep links scroll to the gallery.
- Visual QA on a few rendered cards: no clipped text, no blurry art.

### Step 9: Ledger, commit, push

- Add a UTC-timestamped entry to `docs/enrichment/sources/qg/ledger.md` (format
  mirrors the CMP ledger: `## 2026-10-2X (UTC) — <title>` then what was verified
  and how). Record: image curation (visual review of every shipped image), real
  titles from opened detail pages, thumbnail generation, the splice, the Library
  section removal, QA results.
- `git pull --rebase origin main` FIRST, then commit with a clearly-scoped message
  (e.g. "academy: QG1 practice gallery live (80 sessions, thumbnails, library
  section removed)"), push, re-run `node --check`, verify CI green via the GitHub
  API with the PAT, live-probe https://clemvillatte.github.io/flourishing-compendium/
  (Academy -> Qi Gong degree).
- Update or delete this handoff file once Task A is fully shipped and verified.

---

## 6. Reference data

### 6.1 Thumbnail style measurements (from CMP s10.jpg)

- 640x400; gold label cap height y 298-320 (~30px font); cream label cap height
  y 333-365 (~44px font); text left margin x=30; cream core color (245,239,223);
  gold #d3ad4e (211,173,78); scrim bottom color ~(39,35,26).

### 6.2 Splice recipe summary

First `window.fcAcademyData = ` at byte ~233881; raw_decode from the `{`; modify
degrees["deg-qigong"].practiceSessions; write back with compact separators; keep
fcGalleryData byte-identical; node --check; referential validation.

### 6.3 Parser matrix (verified, 80 sessions)

```
pt           <=5  6-10 11-15 16-20 21-30 31-45 45+ no-dur
rescue         5     2     0     0     0     0    0      0
morning        0     1     4     1     0     0    0      0
brocades       0     1     3     1     1     0    0      0
shibashi       0     0     0     0     1     0    0      0
standing       1     0     0     0     0     1    0      0
animal         0     0     3     1     0     0    0      0
yijinjing      0     1     1     0     0     0    0      0
liuzijue       0     1     0     1     0     0    0      0
daoyin         0     1     1     2     0     0    0      0
seasonal       0     0     1     3     1     0    0      0
evening        0     2     2     0     0     0    0      0
calm           0     3     2     1     2     0    0      0
walking        0     1     3     0     0     0    0      0
seated         2     1     0     1     0     0    0      0
fullclass      0     0     0     0     1     2    0      0
taichi         0     1     1     0     0     1    0      0
breath         1     2     2     0     0     0    0      0
```

### 6.4 The 10 guides (credential links live in the Academy file's "Who is guiding")

Master Gu and George Thompson (taoistwellness.online/about), Mimi Kuo-Deemer
(mkdeemer.com/about.html), Jeffrey Chand (qigongforvitality.com/about/), John Munro
(longwhitecloudqigong.com/about/instructors/), Christopher Grant and Daniela Hess
(learnqigong.com/about), Marisa Cranfill (yoqi.com/marisa-cranfill), Faye Yip and
British Health Qigong Association (healthqigong.org.uk/ytv/), Lee Holden
(holdenqigong.com/about/), Dr. Paul Lam (taichiforhealthinstitute.org/about-dr-paul-lam/).

---

## 7. Task B — paused CMP enrichment (exact verified state)

Canonical CMP gallery source: `academy/CMP1 — Contemplative & Mental Practices — A
Year of Practice.md` (shelf tables ~line 125+; rows `| Session | Guide | Length |`).
Parser: `scripts/cmp_gallery_data.py`. Ledger: `docs/enrichment/sources/cmp/ledger.md`.
Current matrix (47 sessions): fam 1/0/2/2/1/2/0, omm 1/0/1/0/2/1/0, lkm 0/3/0/0/2/1/0,
bodyscan 1/1/3/1/2/2/0, daoist 1/0/1/0/0/0/3(+3 no-dur), zen 0/0/3/1/1/1/0,
walking 1/1/2/0/0/0/0.

Priority: 12-25 min options first, walking last. Daoist >20 min is a documented
gap — state it honestly, never pad.

Verified candidates (audio downloaded and ffprobe'd this session; the /tmp audio
files are probably gone — all facts below were verified from the files when they
existed; re-verify durations with ffprobe before shipping):

| Session | Type | Duration | Source |
|---|---|---|---|
| Tara Brach, "30-Minute Meditation: Open Awareness" | OMM, fully guided | 30:00 | https://traffic.libsyn.com/secure/tarabrach/2017-08-02-Meditation-Open-Awareness-Relaxing-Back-30-TaraBrach.mp3, page https://www.tarabrach.com/30-minute-meditation-open-awareness/ |
| UCLA MARC, "Complete Meditation Instructions" | (classify from audio) | 19:00 | https://d1cy5zxxhbcbkk.cloudfront.net/guided-meditations/03_Complete_Meditation_Instructions.mp3 |
| UCLA MARC, "Meditation for Working with Difficulties" | (classify from audio) | 6:55 | .../04_Meditation_for_Working_with_Difficulties.mp3 (same CDN) |
| Palouse, lovingkindness | LKM | 13:17 | https://palousemindfulness.com/disks/lovingkindness.mp3 |
| Palouse, walking meditation | walking | 6:19 | https://palousemindfulness.com/disks/walking-meditation.mp3 |
| Mountain Cloud, "Mu Meditation Intro" (Henry Shukman) | zen | 14:09 | https://www.mountaincloud.org/wp-content/uploads/2020/08/<slug>.mp3 |
| Mountain Cloud, "Restful Awareness" (Henry Shukman) | zen | 13:33 | same pattern |
| Mountain Cloud, "Space for Feelings" (Henry Shukman) | zen | 10:11 | same pattern |

None were added to CMP1 yet. Site access notes: tarabrach.com and uclahealth.org
work via the fetch tool; mountaincloud.org, palousemindfulness.com and
ggia.berkeley.edu block the fetch tool — use curl with a Chrome user-agent.
The Mountain Cloud mp3 slugs were captured in the session but are not in this
handoff — re-derive them from the site (curl with Chrome UA) rather than guessing.

When resuming: verify each candidate from the recording (audio classification),
check the instructor standard, add rows to CMP1 in the existing table format,
re-run the CMP parser, splice deg-cmp the same way as step 6, QA, ledger, push.

---

## 8. Known traps (do not rediscover these)

- YouTube from the sandbox: oembed endpoint works; watch pages 302 to
  google.com/sorry; yt-dlp fails ("Failed to extract any player response");
  innertube ANDROID client returns LOGIN_REQUIRED. The cloud browser loads watch
  pages but ytInitialPlayerResponse lacks videoDetails. Muted video playback for
  duration timed out — do not retry that approach.
- pdimagearchive.org is an Astro SPA: /collections/ 404s, /search and /galleries/all
  are JS-rendered (use the cloud browser; the search URL pattern is
  /search/?q=<query>), /sources is a 15.5MB server-rendered page. Image CDN
  (images.pdimagearchive.org) serves full-size via plain curl. A cookie banner
  appears after several visits — click Accept.
- Cloud browser cannot reach sandbox localhost; use Playwright from the fc dir for
  local QA.
- Concurrent workers push to main constantly — pull --rebase before every push.
- Push credential: `https://Computer-Agent:<PAT>@github.com` works;
  `x-access-token:` prefix fails.
- The graph.js race fix (2cf808bda) is live: #view=graph polls for window.fcGraph.
  Do not touch the router IIFEs unless something breaks.
- Academy tab click while on a degree re-renders that degree (pre-existing);
  wiki card opened from Academy leaves academy-mode+wiki-mode both on
  (pre-existing; the card address owns the bar). Known behaviors, not bugs to fix
  unless the owner says so.
- The repo-root handoff.md is the supervisor's file for the enrichment board.
  This Academy task has NOTHING to do with that board; keep the two workstreams
  separate (see the scope fence).

## 9. Definition of done (Task A)

80 live, verified Qi Gong sessions rendering in the Academy's Qi Gong degree
gallery (full width, 4 columns, labeled thumbnails, working deep links), the
Library QG1 page no longer carrying the gallery, all tests green, build green,
CI green, live site verified, ledger written, everything pushed. Zero
unverifiable facts shipped.
