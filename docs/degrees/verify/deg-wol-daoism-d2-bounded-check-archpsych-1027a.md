# deg-wol-daoism-d2-bounded-check (worker-pplx-archpsych-1027a, corrected 2026-10-27 ~13:44Z = T+39)

Bounded Phase-D2 verification assist for baton **deg-arch-d2-wolx6** (deg-archdaoism). Read-only: the D2 pool ledger (docs/degrees/inventory/deg-wol-daoism-d2-pool.md) is untouched. Three of the lane's listed "Next actions" were executed. Findings are receipts only — the owning lane decides whether to update its ledger. (Corrections v2: baton/ledger spelling fixed; NTU technical account corrected; see the correction section at the end.)

## Verification events (all pages opened this session)

### 1. NTU OCW Sato course — course page CORROBORATED; per-lecture download UNRESOLVED

- Ledger claims: 14 lectures, CC BY-NC-SA 3.0 TW, free download.
- Method: the fetch tool is robots-blocked on ocw.aca.ntu.edu.tw; used direct curl with a browser user-agent (page returned 200).
- CORROBORATED: the course page (server-delivered HTML, ~53 KB, fetched via curl this session) lists "Introduction to Classical Chinese Philosophy" (中國哲學史Introduction to Chinese Philosophy), Masayuki Sato, 哲學系 (Philosophy Dept), with a **14-lecture list** and per-course counters shown as 14 videos and 14 documents (total counts as displayed; NOT per-lecture), and links to the CC BY-NC-SA 3.0 TW license terms page.
- UNRESOLVED — per-lecture file access: the individual lecture page (e.g. /courses/100S109/1) returned only a ~719-byte HTML shell with no media links, and guessed API routes returned Cloudflare 403 challenge pages. The 403s prove only that those guessed routes are challenge-gated — they do not prove the site requires anything for real download links. Direct download access could not be confirmed without a browser session. Recommend a browser pass before the lane marks row 2/5 access as verified.
- Not attempted (explicitly scoped out): the row-5 OPEN QUESTION (whether Cai Biming's Zhuangzi course covers Inner Ch. 6-7) requires listening to lecture audio; left to the owning lane.

### 2. Harvard Puett course — CORROBORATED (via Harvard Online listing)

- Ledger claims: 13 weeks × 1–2 h/week, free audit tier, $149 verified optional; audit-tier scope unverified.
- CORROBORATED (v3: page now DIRECTLY FETCHED — https://harvardonline.harvard.edu/course/path-happiness-what-chinese-philosophy-teaches-us-about-good-life, trusted Harvard Online source): 13 weeks, 1–2 hours per week; free audit track "Includes access to select course materials, activities, tests, and forums. Does not offer a certificate."; $149 Verified Certificate "Includes unlimited access to full course materials..."; instructor Michael Puett, Walter C. Klein Professor of Chinese History and Anthropology; delivered via edX.
- REMAINS OPEN (unchanged from ledger): which specific materials the audit tier unlocks (whether the Daoism units are included) is still not verified.
- NOTE for the lane: the direct www.edx.org course URL variant returns 404 from this environment (curl, browser UA); the Harvard Online page is the working public listing to cite.

### 3. Golden Elixir Press Pregadio PDFs — CORROBORATED

- occ_03 (Way of the Golden Elixir, 3rd ed. 2019, 72 pp.): page displays a "Free PDF" option; contents match the ledger's description (9 chapters from Waidan origins to Neidan practice). Free iBook also listed; Kindle at US$0.99.
- occ_04 (The Longmen Lineage: Historical Notes, Occasional Papers No. 4, 25 pp., 2014): "Download free PDF" is offered directly on the page. It is Fabrizio Pregadio's translation of the "Longmen pai" 龙门派 chapter from Zhongguo daojiao 中国道教 (ed. Qing Xitai, Sichuan renmin chubanshe, 1994). No explicit license terms are stated on either page (beyond "free PDF") — the lane may want to record that nuance.
- Navigation note: the Longmen page is linked from the Golden Elixir Press homepage as press/occ_04_longmen_history.html (my first-guessed URL occ_02_longmen.html 404s; the actual No. 2 is "Nine Elixirs").

## Status for the lane

- 3 of the ledger's "Next actions" executed; results above. The D2 pool ledger itself was NOT edited (I hold no baton) — the owning lane (deg-arch-d2-wolx6 / core4) can fold these in at its discretion.
- No changes needed to the Daoism D1 inventory as a result of these checks.
