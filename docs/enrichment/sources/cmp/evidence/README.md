# Evidence for the 2026-10-22 CMP gallery enrichment (+8 sessions)

Preserved from /tmp so the verification chain survives the session.

## ffprobe durations (ffprobe-durations.txt, run on downloaded files)

- marc-complete 1140.94 s = 19:01 (MARC page prints 19 min)
- marc-difficulties 414.99 s = 6:55 (MARC page prints 7 min)
- mc-mu 849.41 s = 14:09 (intro-zone prints 14:09)
- mc-restful 812.83 s = 13:33 (intro-zone prints 13:33)
- mc-space-feelings 611.30 s = 10:11 (intro-zone prints 10:11)
- palouse-lk 797.09 s = 13:17 (Palouse page prints 13 min)
- palouse-walk 378.76 s = 6:19 (Palouse page prints 6 min)
- tb30 1800.01 s = 30:00 (Tara Brach page prints 30 min)

## Transcripts (vosk)

- marc-complete.txt, marc-difficulties.txt: full transcripts of both
  MARC recordings. Classification: Complete Instructions is open
  monitoring with a breath anchor; Working with Difficulties is open
  monitoring with a kindness close.
- spot-*.txt: openings of the other six recordings (roughly the first
  60 to 90 seconds each). The full-session practice descriptions come
  from the opened source pages listed below, not from these openings
  alone.
- full-*.txt (added 2026-10-22, release-blocker resolution): complete
  vosk transcripts of all six previously sampled recordings (tb30,
  palouse-lk, palouse-walk, mc-mu, mc-restful, mc-space-feelings).
  Reproduction: files re-downloaded with curl (browser UA) from the
  URLs printed in the CMP1 rows (tb30 from the libsyn URL printed in
  tb30.html), converted with `ffmpeg -i <mp3> -ar 16000 -ac 1`, and
  transcribed with the vosk small en-us 0.15 model over the entire
  file (no time limit). The earlier spot transcriptions used the same
  tool at the openings only; the original sampling commands and
  timestamps were not preserved by the earlier session and are
  superseded by these complete transcripts. ffprobe durations
  re-measured on the re-downloads and match the values above
  (tb30 1800.007 s). Classification from the full transcripts: all
  six are continuous guided practice. The palouse-lk transcript also
  matches the published transcript on the Insight Timer track page
  (evidence/it-lkm.html), which credits the track to Dave Potter
  (Palouse Mindfulness) at 13:17; the profile bio (it-profile.html
  via the live page) documents UMass Medical School MBSR training.

## Saved source pages (curl with browser UA, 2026-10-22)

- marc.html: https://www.uclahealth.org/uclamindful/guided-meditations
  (MARC catalog page; attribution of the 7 and 19 min recordings to
  Diana Winston, printed durations)
- tb30.html: https://www.tarabrach.com/30-minute-meditation-open-awareness/
  (title, 30 min, mp3 URL)
- lk.html: https://palousemindfulness.com/meditations/lovingkindness.html
  ("Lovingkindness Meditation (13 min)", practice arc description; no
  named guide)
- walk.html: https://palousemindfulness.com/meditations/walking-meditation.html
  ("guided by Tara Brach", 6 min)
- mc.html: https://www.mountaincloud.org/intro-zone/
  (Henry Shukman attribution, printed durations)
- palouse.html: https://palousemindfulness.com/selfguidedMBSR.html
  (course index; mp3s served from palousemindfulness.com/disks/)
- team.html: https://palousemindfulness.com/about-us/our-team.html
  (Palouse Mindfulness Inc institutional page)
- dave.html: https://palousemindfulness.com/about-us-team/dave.html
  (founder bio; no formal MBSR teaching credential stated)
- it-lkm.html: https://insighttimer.com/palousemindfulness/guided-meditations/mbsr-lovingkindness-meditation
  (track page: "MBSR Lovingkindness Meditation" by Dave Potter
  (Palouse Mindfulness), 13:17, published transcript matching
  full-palouse-lk.txt)
- it-profile.html: https://insighttimer.com/palousemindfulness
  (Dave Potter profile; rendered page contains the bio: fully
  certified MBSR instructor trained through the University of
  Massachusetts Medical School, where Jon Kabat-Zinn founded the
  Center for Mindfulness, teaching MBSR for more than 20 years)

## Reproduction

Recordings were downloaded from the URLs printed in the CMP1 rows
(ffprobe outputs above). Parser output:
`python3 scripts/cmp_gallery_data.py` (55 sessions; matrix on stderr).
