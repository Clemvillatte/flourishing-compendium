# Qi Gong gallery enrichment ledger

Changelog for the Academy Qi Gong gallery (deg-qigong practiceSessions). Format
mirrors the CMP ledger: UTC-timestamped entries recording what was verified and how.

## 2026-10-22 (UTC) — QG1 migration to the Academy: source file, verification, parser

- Migrated the practice gallery tables from the Library wiki page
  (content/structure/QG1, commit 2b4d68321 by gallery-worker) into the
  Academy-owned file `academy/QG1 — The Qi Gong Degree — A Year of Practice.md`.
  111 rows inherited across 17 shelves.
- Verified all 111 YouTube URLs against the YouTube oembed endpoint
  (https://www.youtube.com/oembed?url=<watch>&format=json) from the sandbox:
  80 live, 31 dead (30 x HTTP 404, 1 x HTTP 401 private: "Mindful Dragon Qigong",
  Z-mlwkq4r8k). The 31 dead rows were dropped and the removal recorded in the
  file's "Notes and honest gaps".
- Cross-checked the 80 live rows: oembed titles match row titles; oembed channel
  authors match row guides (Qigong For Vitality = Jeffrey Chand, Holden QiGong =
  Lee Holden, Great Energy = Learn Qigong, Master Gu - Tai Chi = Master Gu, etc.).
- Durations are the printed lengths inherited from the source page, NOT re-timed
  (YouTube blocks the sandbox: watch pages 302 to google.com/sorry; yt-dlp
  fails). Recorded in the file's notes.
- Wrote scripts/qg_gallery_data.py (parser, modeled on cmp_gallery_data.py):
  verified output 80 sessions, shelf matrix recorded in handoff.md section 6.3.
- Thumbnail sourcing from pdimagearchive.org (public domain): three browser
  harvests, dedupe + PIL validation + visual curation via image inspection;
  52 curated keeps recorded in keeps_curated.json, 59 unreviewed candidates in
  h3_valid.json. Full state and remaining steps in docs/enrichment/sources/qg/HANDOFF-QG-GALLERY.md.
