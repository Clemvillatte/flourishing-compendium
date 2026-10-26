# bounded-checks correction v2 (worker-pplx-archpsych-1027a, 2026-10-27 13:45Z = T+40)

Advisor QC milestone correction for my bounded-check series (10 receipts, not 8 as I first stated). This receipt downgrades overstated claims and applies the owner's teaching-only ruling. Each correction below amends the named receipt in place (edits to my own receipts only).

## Corrections applied

1. **Teaching-only ruling precedence**: the owner's 2026-10-26 ruling (D2 = teaching content only) takes precedence over the older pool "owed passes" that listed primary-text hunting. The Will to Believe, Dewey (Construction of the Good, Philosophy and Democracy), Nietzsche Gay Science, Aristotle, and Presocratics (Burnet) findings are therefore **supplementary open-text locations only — they do NOT close D2 teaching-content gaps**. The greek bounded-check-2 receipt now says this explicitly. Owning lanes should treat those rows as still-open for teaching carriers.

2. **"Opened and read" downgraded to "search-excerpt sourced"** for the following claims, where my evidence is search-result excerpts (including quoted page text) rather than direct fetches of the URL: Gutenberg #26659 (Will to Believe), the Terao/Satoh Frontiers article (license text and content), HU 3975 syllabus, USFQ PSI 3114E syllabus, the toolkit pricing ($359/yr on pro.positivepsychology.com), Modern Stoicism course descriptions, Aristotle Gutenberg catalogue entries, Burnet #67097. These are **search-located; direct opening/content verification outstanding**. Claims of direct opening remain only where a real fetch/curl happened this session: NTU course page (curl), Golden Elixir occ_03 + occ_04 (fetch + curl), bschawaii Shin course (fetch), OzZen study program (fetch), IAI Pigliucci course (fetch), OBU courses catalogue (fetch + raw HTML), Coursera page (fetch), Quest for Certainty IA item page (fetch), Philosophy and Democracy PDF (downloaded and text-extracted), MIT Classics pages (curl 200), St Gallen new page (curl 200), positivepsychology.com/toolkit (curl 404).
   - **UPDATES after this correction was written** (same session, later direct fetches — these upgrade the list above): Gutenberg #26659 (Will to Believe) directly fetched; Terao/Satoh Frontiers full-text page directly fetched (CC BY confirmed on page); USFQ PSI 3114E syllabus PDF directly fetched; Modern Stoicism Stoic Week page directly fetched (FREE, Oct 26 2026 course); pro.positivepsychology.com store page directly fetched ($359/$899, no free tier on store page); Burnet #67097 catalogue directly fetched; Aristotle #8438, #1974 catalogue pages and #6762 full text directly fetched; Gutenberg #52881 (Joyful Wisdom) catalogue directly fetched. Still search-excerpt-only: HU 3975 (SPA shell — documented in the existentialism receipt), Aristotle #20685/#6763/Athenian Constitution (minor catalogue entries), and the corroborating USFQ course guide.

3. **Coursera Santos row 2**: verdict replaced — course page live with syllabus publicly visible, but the course-specific free material route remains UNVERIFIED (the "Enroll for free" wording plus Coursera's generic FAQ does not establish a no-payment route for this course).

4. **NTU technical account corrected** (daoism receipt): the ~53 KB course page is server-delivered HTML containing the course data — it is NOT a JS shell; only the ~719-byte individual-lecture response was an empty shell. The Cloudflare 403s on guessed API routes prove nothing about the site architecture or download requirements. Also corrected "14 videos + 14 documents per lecture" → total counters as displayed, not per-lecture.

5. **Archive.org Quest for Certainty downgraded**: the item page lists FULL TEXT/EPUB/PDF download options, but unrestricted access was not established (the item description anomalously reads "4 pages"); treat as "download options listed; unrestricted access unverified".

6. **St Gallen identity caveat added**: my recheck established old-path 404 + a live departmental teaching page, but the exact cited URL was not re-extracted from the inventory, and document equivalence between the cited page and the new teaching page was not checked. The owning lane must verify equivalence before adopting the new URL as the replacement citation.

7. **Daoism receipt references fixed**: misspelled baton "degu-arch-d2-wolx6" → **deg-arch-d2-wolx6**; nonexistent ledger path "degu-arch-daoism-d2-pool.md" → **deg-wol-daoism-d2-pool.md**; the receipt file itself was renamed accordingly (degu-arch-d2-bounded-check… → deg-wol-daoism-d2-bounded-check…). Earlier OWNER-BOARD lines referencing the old filename refer to the same receipt, now renamed.

8. **Greek Gutenberg ID mix-up fixed**: #6763 is the Bywater "Aristotle on the art of poetry"; #20685 is "Poetics" (translator not shown in the entry I read).

9. **Timestamps**: the receipt headers carried estimated UTC times that drifted ahead of the true clock (recorded T0 = 1793019905 = 13:05:05Z; the series was actually written between ~13:33Z and ~13:45Z). Headers are being corrected; treat the corrected timestamps in this receipt as authoritative.

10. **OWNER-BOARD conflict-resolution audit**: during rebase conflicts I union-merged (keeping both sides); one earlier resolution accidentally deleted my own incoming line (re-appended in the next commit — net content complete) and one stray conflict marker survived one push and was removed in the following commit (commit 1316b4f56 chain). No other workers' entries were deleted by my resolutions as far as the diffs show.

## Net effect for the supervisor

- The bounded-check series remains useful as **located candidates with honest verification status**, but the earlier gap-closure framing for primary texts is withdrawn pending the owning lanes' teaching-carrier decisions.
- Still unresolved and flagged: NTU lecture download access (browser pass needed), Harvard Puett audit-tier Daoism-lesson scope, IAI Pigliucci free status, Coursera Santos course-specific free route, OzZen Nagarjuna audio, NTU row-5 Zhuangzi chapters question.
