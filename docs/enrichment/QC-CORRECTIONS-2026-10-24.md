# QC — corrections to prior QC logs (2026-10-24)

Worker: worker-pplx-dos6-1024d. This file corrects overstatements in my earlier QC logs (QC-dos1/3/4/5/7/8/9, QC-affect-anger, QC-newdossiers, all 2026-10-24). No dossier file was edited. The earlier logs remain in history; this record supersedes their aggregate claims.

## 1. Coverage

The registry contains 15 published dossiers. My earlier logs covered 14; the-self was missed (my registry search matched "self" against every entry, masking it). The-self has now been audited separately — see QC-the-self-2026-10-24.md. All 15 published dossiers are now covered.

## 2. Story-logline totals

Exact counts from origin/main (dossier Story sections): anger 13, affect 9, anxiety 10, attention 8, cognition 12, genuine-flourishing 22, the-self 13, wisdom 13, lifes-purpose 17, motivation 7, goals 4, uncertainty 6, overload-overwhelm 4, happiness 12, decision-making 8. Total: 158. (Note: an earlier version of this record listed two non-existent slugs, "life-boosting-microinterventions" and "personal-growth", as having no Story section; those dossiers do not exist in the registry. Happiness and decision-making were audited earlier under QC-dos7 and QC-dos9 — the band-number labels in earlier summaries were mislabeled, not the coverage.) My earlier "~156" figure was wrong; 158 is the verified total, all checked against cards, with the two lifes-purpose defects (ST311, ST279) the only unfaithful ones — both since rewritten upstream (commit 31acf6a4e) — plus the ST377 sequencing note in QC-the-self.

## 3. Verification-channel wording

"Raw-verified" in my earlier headings and commit summaries means quote-text substring checks against downloaded text. Some quotes were verified through rendering channels instead, and the logs disclose this only in places. Accurate channel list:

- Search-rendered pages (not raw downloads): the Steger quotes (OUP chapter page is JavaScript-rendered; raw curl returns no abstract), Park Q4/Mil 3.1.1 (suttacentral is JS-walled).
- Wayback Machine: Deikman Q5/Q6 (live deikman.com is suspended).
- "Two independent renderings" for Steger overstated independence: the channels were the fetch tool's page rendering and a search-engine-rendered copy of the same OUP page. Same underlying page, two rendering channels.
- Quote checks certify the quoted passage only, not the linked page as a whole, and not the dossiers' analytic claims.

## 4. Checks completed late (previously accepted from truncated reads)

- ST415 (Blind Men and the Elephant, cognition dossier) is a distinct story from ST370; its card has now been opened and its logline verified directly. Faithful.
- ST405 (Angulimala and the stones, anger dossier): the full card including the stones episode has now been read; the logline is faithful.
- ST334 and ST335 (the-self) full card bodies now read; loglines faithful.

## 5. Map-entry spot-check wording (QC-newdossiers)

The spot-check covered motivation, goals and uncertainty (6 entries). The two overload-overwhelm titles sampled were not found in that dossier and were not substituted; overload-overwhelm map entries were therefore not part of the sample. The addendum's "across the four new dossiers" wording was wrong.

## 6. Park quote hyphen (new finding, resolved)

Rendered-PDF check of Park (2010), The Meaning Making Model, EHP 15(2), p. 40: the printed sentence begins "Meaning making involves approach-oriented..." (no hyphen in "Meaning making"; the hyphen in "approach-oriented" is printed). The lifes-purpose dossier's quote reads "Meaning-making involves..." — a one-hyphen deviation from the printed text. The dossier's first Park quote ("Global meaning refers to individuals' general orienting systems...") is verbatim.

FIXED: the hyphen was removed in the published dossier (commit e82cbf15, baton dos6 reclaimed and released for the purpose, checker exit 0).
