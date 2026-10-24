# QC log — supervisor flip review of agency, behaviour, body, others dossiers, 2026-10-24 ~14:35-14:45 UTC, supervisor-pplx-1024j

Supervisor review pass before registry flip. Sampled quote QC, not exhaustive verification. Baton held by predecessor until staleness window; flips executed after lawful clock-in.

## Checks run (all four dossiers)

- dossier_check.py: OK — agency 60 card links / 14 headers / 5 external carriers; behaviour 67/10/2; body 52/8/1; others 133/19/9.
- dossier_voice_audit.py run correctly against the dossiers directory (first run had passed individual file paths, which the tool silently ignores — caught and corrected per advisor QC): candidates human-reviewed line by line.
- Artwork files verified present: site/assets/dossier-art/{agency,behaviour,body,others}.jpg all resolve.

## Quote fidelity (freshly opened carriers, this session)

- agency: Epictetus Enchiridion 1 Carter (MIT Classics) — both sentences verbatim, no differences. Bandura 1977 (susana.org PDF) — both sentences verbatim. Rotter 1966 (github raw PDF) — "If the person perceives that the event is contingent upon his own behavior or his own relatively permanent characteristics, we have termed this a belief in internal control." verbatim (closes the dos15 ledger flag that Rotter had not been re-opened).
- behaviour: Wood & Neal 2007 abstract (ERIC EJ776723) verbatim. Aristotle NE II.1 Chase (Gutenberg 8438) verbatim.
- body: SEP Husserl — Leib/Körper sentence verbatim.
- others: Beckes & Coan 2011 PDF verbatim. Metta Sutta Thanissaro (accesstoinsight) verbatim. Remaining others quotes covered by the dos16 worker's same-session ledger pass (commit 9beeb85f5, all 12 verified) — sampled, not independently re-verified.

## Humanizer review and fixes (commit 1b1fe53d)

Banned "not-X-but-Y" scaffolds found by voice audit and restated affirmatively:

- body opening: "not only the shell the mind rides in" and "not a thing a subject has, but the medium through which a world is had" → affirmative statements.
- body card glosses: Situated embodiment (Beauvoir) and Body memory (Fuchs) restated.
- behaviour opening: "hardens not only into routine but into character" → "hardens into character as well as routine". Habit body gloss (Merleau-Ponty) restated as a third location, distinct from thought and the objective body.
- agency: Bandura efficacy sentence restated as two affirmative clauses.

Candidates left standing after human review (substantive, not scaffold): "rather than" sorting criteria in card glosses (goal-directed vs habitual; reasons vs strength; with people vs to or for them; mindfulness vs fight), Merleau-Ponty's genuine double rejection in the Embodiment gloss, and Thich Nhat Hanh's practice instruction. Checker exit 0 after fixes; voice audit rerun.

## Flip decision

All four cleared for publication: checks pass, quotes verified (sampled), artwork assigned and resolving, bodies question-led with honest divergences sections, practice sections intact. Registry flips to "published" executed after baton clock-in, followed by dossier_registry_build.py, build.py, and push. The remaining 12 planned dossiers (right-view, right-intention, right-speech, right-action, right-livelihood, right-effort, right-mindfulness, right-concentration, gratitude, fear, sadness-and-grief, shame-and-guilt) stay planned: art assignment still pending from the owner (registry build crashes without art).

## Open items for the next pass

- Agency card still not minted; agency.md nearby-terms links Autonomy (dos15 ledger flag, unchanged).
- One-off Rotter 1966 carrier re-open recommendation now satisfied by this session's verification.

## Addendum — advisor round 2 (14:44-14:48 UTC), corrections applied (commit f43745ff)

- ST463 chapter assignment corrected: registered under ST-S02.05 (The Heart — Emotions and
  Immeasurables) on the teller's mistaken chapter label; the taxonomy review shows the
  brick-polishing story belongs in ST-S02.03 Meditation Practices; story file and structure
  page moved, story_check clean.
- Merleau-Ponty habit-body gloss: the "third location" wording from my first fix added a
  spatial metaphor the source does not carry; reworded to "distinct from both thought and the
  objective body" (faithful double rejection, no scaffold cadence).
- ST465 Heart Sutra (Red Pine, Gold Scales) carrier now independently verified verbatim
  ("form is emptiness, emptiness is form"; "emptiness is not separate from form, form is not
  separate from emptiness"). Beal "when he recited this Sutra" quote verified against the
  archive.org text (djvu OCR inserts a stray footnote digit after "Sutra,"; the print reading
  is exact).
- Reader passes completed over all nine newly registered story bodies (ST433, ST463-ST470):
  honest boundary statements present, no AI cadence, quotes match the opened carriers.
- ST433→ST463 ID allocation gap checked: intermediate IDs taken by other lanes' earlier
  registrations; not an error.
- enrich_validate.py run: its failures on structure/dossier/story files are format mismatches
  — the tool is scoped to principle/concept pages; per-type checkers (dossier_check,
  story_check, build) all green. enrich_apply.py preflight remains blocked on the t1a
  thinker-links guard — integration NOT completed this pass; reported accurately.
- The dossiers worker's corpus-wide quote-fidelity sweep (commits through 5dd27bd7e)
  independently re-verified my s1a registrations' quotes and corrected a Baumeister quote in
  overload-overwhelm; their ledger records reviewed and accepted.
