# deg-fix-text findings, 2026-10-26 (worker-pplx-degfixtext-1026c)

Every item below was opened on the live page on 2026-10-26 unless stated.

## Data-block errors (fix by applying the assignments files)

1. PRAG-M4-01, PRAG-M4-02, PRAG-M4-03 pointed at the wrong Project Gutenberg books. Ebook 37754 is "A Narrative of Service with the Third Wisconsin Infantry" (Hinkley), 18063 is "Rabbi Saunderson" (Maclaren), 18094 is "History of the Girondists, Volume I" (Lamartine). The module doc assigns How We Think (ebook 37423), Human Nature and Conduct (41386) and The Public and Its Problems (71000); all three pages were opened and match. Correction is in deg-wol-pragmatism-assignments.json under "sources".
2. BUD-B4-01 carried the title "Brahmali, Mindfulness of Breathing (BSWA)" and duration 2:09:41. The watch page for youtube id dyUCvFlDL8w (opened uncached) reads "Introduction to Meditation: Session 1 - Setting yourself up + guided meditation | Ajahn Brahmali", Buddhist Society of Western Australia, 33:55, uploaded March 4, 2023, chapters 0:00 Introduction through 20:32 Guided meditation. Correction is in deg-wol-buddhism-assignments.json under "sources".
3. PRAG-M3-02, PRAG-M3-03, PRAG-M3-04 do not exist in the sources array although the manifest and module m3 require them. Records are in deg-wol-pragmatism-assignments.json under "new_sources"; the apply script needs the 4-line change in apply-new-sources.patch.txt (already used by the schema lane for pragmatism).

## Video durations re-read on the watch pages (psychdim and buddhism)

| Source | Duration read | Note |
|---|---|---|
| BUD-B5-02 Sumedho | 1:01:36 | matches the receipt |
| PD-M1-01 Hayes | 1:40:07 | matches |
| PD-M3-02 Yale lecture 7 | 0:59:43 | matches |
| PD-M3-03 Yale lecture 8 | 0:59:43 | matches |
| PD-M3-04 Yale lecture 10 | 0:59:49 | matches |
| PD-M5-01 Yale lecture 13 | 1:05:49 | the first (cached) read said 52:48; an uncached re-read gave 1:05:49 with the same chapter list as the institution page (chapter 2 at 13:53, chapter 3 at 19:47), so 52:48 was a stale cache value |
| PD-M5-02 Yale lecture 16 | 58:14 | the earlier receipt says 58:15; one second apart, no window affected |
| PD-M7-03 Inzlicht | 1:19:48 | taken from the m7 audit receipt; the YouTube page itself was not re-opened in this pass because the fetch tool returned no usable content |

## Routed to the content lane (manifest label errors, not edited here)

- deg-wol-pragmatism-manifest.json m4: PRAG-M4-01 lists both 778 and 476 words; per the module doc 778 words is How We Think (PRAG-M4-01) and 476 words is Human Nature and Conduct (PRAG-M4-02).
- deg-wol-pragmatism-manifest.json m3: PRAG-M3-04 carries the 264-word passage, which per the module doc is in Lecture II (PRAG-M3-03); Lecture VI is the 157-word four-selection set.
- deg-wol-buddhism-manifest.json b7: BUD-B7-03 is listed as a teach assignment, but the b7 doc marks the Class 1 recording as optional listening.

## Duration sweep of all 40 YouTube videos in the four degrees (2026-10-26, uncached reads)

36 of 40 match the data block within one second. Exceptions:

- BUD-B4-01: wrong (see above), corrected in the buddhism assignments file.
- PD-M3-01 (Yale lecture 4): RETRACTED. Two fetch reads said 48:58, but a video-search listing shows 48:58 is the duration of lecture 5 (a neighbouring video that appears on the lecture 4 watch page), and the same listing gives lecture 4 as 58:47 (YaleCourses, https://www.youtube.com/watch?v=rCKK6r15fro). The data block's 58:47 is correct and no change is needed. The psychdim assignments file was briefly patched to 48:58 and is reverted.
- PD-M5-01 (Yale lecture 13): the player readout "0:02 / 1:05:49" confirms 1:05:49; an earlier extraction that said 52:48 was wrong.
- BUD-B1-01: player readout "0:02 / 54:15" against the data block's 54:16; one second, no action.
- BUD-B2-01 (Dreyfus): one extraction read 1:25:04, but a video-search listing gives 1:20:35 for the same video (Shantideva Center, FPMT, session #1), so the data block's 1:20:34 stands. The 1:25:04 reading was a page-scrape error.
- Not readable by the fetch tool on this pass (crawl error): M06-AF07, PD-M4-01, BUD-B1-02 (left as receipted); DAO-M1-03 confirmed at 53:36 by a video-search listing.
- Method lesson: the fetch tool's page extraction can pick up the duration of a related video on the page; confirm odd values against a video-search listing or the player readout.
- PRAG-M1-01 confirmed by player readout "0:00 / 49:24".
