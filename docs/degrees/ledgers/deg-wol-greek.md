# Ledger: deg-wol-greek

One ledger per degree. Append entries; never rewrite history. Every entry
carries a UTC timestamp and the agent id.

Agent: worker-pplx-greek-1. T0 recorded 2026-10-25T08:13:03Z (run clock,
60-minute session cap).

## Sources opened

| URL | opened (UTC) | by | what it verified |
|---|---|---|---|
| https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=MuiazbyOSqQ&format=json | 2026-10-25T08:15Z | worker-pplx-greek-1 | AR-01 exists: "Justice: What's The Right Thing To Do? Episode 10: THE GOOD CITIZEN", author Harvard University |
| https://www.youtube.com/watch?v=MuiazbyOSqQ | 2026-10-25T08:16Z | worker-pplx-greek-1 | AR-01 duration 55:11 (lengthSeconds 3311); published 2009-09-09; description and chapter list confirm content: Part One The Good Citizen (Aristotle, purpose of politics, Casey Martin golf case), Part Two Freedom vs. Fit (objections, Aristotle's defense of slavery) |
| https://www.gresham.ac.uk/watch-now/aristotle | 2026-10-25T08:18Z | worker-pplx-greek-1 | AR-04 talk "Aristotle" by Prof. Edith Hall (Visiting Gresham Professor in Classics; Professor in the Department of Classics and Centre for Hellenic Studies, King's College London), event 4 March 2021, free to watch; page states the talk introduces eudaimonia, virtue, the mean; phronesis not mentioned on the page; page embeds YouTube ido9HCquCi0 |
| https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ido9HCquCi0&format=json | 2026-10-25T08:20Z | worker-pplx-greek-1 | AR-04 video exists: "Aristotle", author Gresham College |
| https://www.youtube.com/watch?v=ido9HCquCi0 | 2026-10-25T08:19Z | worker-pplx-greek-1 | AR-04 duration 44:16 (lengthSeconds 2657); published 2021-03-10; description: lecture by Edith Hall analysing Nicomachean Ethics, Politics and Rhetoric |
| https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=jpjjhraoNGg&format=json | 2026-10-25T08:19Z | worker-pplx-greek-1 | AR-06 exists: "Aristotle's Nicomachean Ethics, book 1 | Ethics and Moral Theory | What Is Happiness?", author Gregory B. Sadler - That Philosophy Guy |
| https://www.youtube.com/watch?v=jpjjhraoNGg | 2026-10-25T08:20Z | worker-pplx-greek-1 | AR-06 duration 1:01:15 (lengthSeconds 3675); published 2011-09-30; description: lecture from Sadler's Fall 2011 Ethics class at Marist College starting the Nicomachean Ethics, question "What is Happiness?", means, ends, disciplines |
| https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=8Nz5nDXgLZw&format=json | 2026-10-25T08:19Z | worker-pplx-greek-1 | ST-03 exists: "Stoicon 2020 John Sellars", author Modern Stoicism |
| https://www.youtube.com/watch?v=8Nz5nDXgLZw | 2026-10-25T08:20Z | worker-pplx-greek-1 | ST-03 duration 28:04 (lengthSeconds 1685); published 2021-03-03; auto chapters: Introduction, Three parts of stoicism, Stoic logic and judgments, Ethics and virtue, Physics and interconnectedness, Conclusion |
| https://miad.academia.edu/GregorySadler/CurriculumVitae | 2026-10-25T08:21Z | worker-pplx-greek-1 | Sadler credentials: PhD Philosophy, Southern Illinois University Carbondale 2002; Instructor of Philosophy and Religious Studies, Marist College 2011-2018 (CV lists PHIL 300/200 Ethics among Marist courses) |
| https://pure.royalholloway.ac.uk/en/persons/john-sellars | 2026-10-25T08:20Z | worker-pplx-greek-1 | Sellars credentials: Dr, Reader in the History of Philosophy, Politics, International Relations, Centre for the Study and Application of Stoicism, Royal Holloway |
| https://reasonio.wordpress.com/about/ | 2026-10-25T08:20Z | worker-pplx-greek-1 | Sadler supplementary: APPA-certified philosophical counselor; ReasonIO founder (no degrees stated on this page; degrees verified via CV above) |

## Verification outcomes

Status vocabulary per the skill. Durations are printed on the source pages
(watch pages), never guessed.

| source_id | status | evidence | date |
|---|---|---|---|
| AR-01 | verified-video | oembed confirms existence (Harvard University channel); watch page prints 55:11; content classified from the watch page description and chapter list: Aristotle's virtue-based justice and politics (Part One, 0:29 to 40:15), freedom-based objections (Part Two, from 40:15). Note: this episode does not stage a systematic deontology-versus-consequentialism comparison; it is used for Aristotle's teleology and the fairness-versus-purpose debate. Module instruction adjusted accordingly (module doc, mod-phil-1) | 2026-10-25 |
| AR-04 | verified-video | Gresham College page (free, institutional host) embeds YouTube ido9HCquCi0; oembed confirms (Gresham College channel); watch page prints 44:16; speaker Edith Hall, credentials on the Gresham institutional page; talk introduces eudaimonia, virtue, the doctrine of the mean (per the Gresham page); phronesis not covered, so phronesis teaching is carried by wiki principle A043 | 2026-10-25 |
| AR-06 | verified-video | oembed confirms (Gregory B. Sadler channel); watch page prints 1:01:15; content per description: close reading of Nicomachean Ethics book 1 from Sadler's Fall 2011 Ethics class at Marist College; credentials verified on his CV (PhD SIU Carbondale 2002; Marist instructor 2011-2018) | 2026-10-25 |
| ST-03 | verified-video | oembed confirms (Modern Stoicism channel); watch page prints 28:04; chapters classify content as an introduction to the three parts of Stoicism (logic, ethics, physics); speaker John Sellars, Reader in History of Philosophy, Royal Holloway (institutional profile) | 2026-10-25 |

## Workload arithmetic conventions (module 1)

- Reading rate: 180 words per minute (text with some new concepts; Brysbaert
  2019 default 238 wpm adjusted down by purpose, per ledgers/design-research.md).
- Study overhead: 3x raw reading time, labelled as estimate.
- Assigned wiki reading for mod-phil-1: principle dossiers A001 (1242 w),
  A002 (677), A003 (642), A004 (638), A005 (712), A042 (505), A043 (550),
  plus index pages (Book I overview 356 w, Layer I 191, Layer II 243,
  Layer IV 179). Total 5935 words = 33 minutes raw reading, 99 minutes with
  study overhead (estimate).
- Required video (measured): AR-04 44:16 + AR-01 assigned segment 0:00 to
  40:15 (40:15) = 1:24:31.
- Optional video (measured, not counted in the required total): AR-06 1:01:15,
  ST-03 28:04, AR-01 Part Two 14:52.

## Coverage matrix

(rows: essential topics; columns: taught in / practised in / assessed in)
To be built from opened authoritative curricula (scope benchmarking, in
progress).

## Gate decisions

| gate | decision | by | date |
|---|---|---|---|
| scope | pending: scope doc is a strategist proposal awaiting benchmark against opened authoritative curricula (this session's benchmark work recorded below) | strategist (gate owner) | - |
