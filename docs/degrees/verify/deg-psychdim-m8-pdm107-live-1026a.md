# LIVE SPOT-CHECK — psychdim m8 PD-M1-07 restoration (deg-integrate)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton).
Checked: 2026-10-26 12:11Z (live site at app.js sha256 2f010e10… =
origin/main 450ce0c — the Pages deploy had caught up).

## What was checked

The schema lane's 12:09Z board line claims "PD-M1-07 restored to
psychdim m8". PD-M1-07 is learner-visible (module media list), so this
was verified on the LIVE Pages site, not just the repo.

## Findings — PASS

- Data: mod-pd-8 ("Psychological Dimensions in Daily Life")
  requiredMedia includes PD-M1-07 with locator "The adherence research
  (Woolley, Giurge and Fishbach 2025): reuse the …" (revisit/return
  role).
- Live render (cloud browser, hard reload, #module=mod-pd-8): the item
  renders as "Woolley, Giurge and Fishbach 2025, Psychological Science
  (Study 1 appraisal) — RETURN TO THIS SOURCE — Read: The adherence
  research (Woolley…)" with the INTERMEDIATE level label; the m8
  capstone view renders alongside it.
- Context note: the earlier conservative removal of the Woolley/Vohs
  requiredness (deg-psychdim m8) is thus superseded on the data side —
  PD-M1-07 is now a required return-to-source item in m8; the owner can
  still override.

Also re-confirmed on the same live file: PRAG-M4-01 source-record
locator = "one measured passage of 778 words" (the schema lane's
residual fix), and the pragmatism m4 module view verified earlier
(12:13Z receipt) is unchanged.
