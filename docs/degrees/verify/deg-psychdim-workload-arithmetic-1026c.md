# Psychological Dimensions: workload arithmetic check (deg-fix-text, 1026c)

Scope: the Workload sections of modules M1 to M7 in docs/degrees/modules/deg-psychdim/. Every sum was recomputed from the figures printed in the module docs. Reading-word estimates are planning estimates and were checked separately where a source text could be counted (see deg-fix-text-count-corrections-1026c.md).

| Module | Video sum stated | Recomputed | Planned-minute total stated | Recomputed |
|---|---|---|---|---|
| M1 | 27:39 | 27:39 | 249 | 60+44+15+10+30+30+60 = 249 |
| M2 | 34:27 | 34:27 | 304 | 50+39+45+30+35+20+85 = 304 |
| M3 | 44:04 | 44:04 | 290 | 60+30+45+55+20+80 = 290 |
| M4 | 23:40 | 23:40 | 265 | 40+35+40+50+20+80 = 265 |
| M5 | 34:53 | 34:53 | 315 | 50+45+50+40+20+110 = 315 |
| M6 | 20:20 | 20:20 | 271 | 36+40+45+50+20+80 = 271 |
| M7 | 15:40 | 15:40 | 301 | 26+60+40+40+30+15+90 = 301 |

Result: no arithmetic errors. Reading-time conversions also hold: M1 about 3,200 words at 180 per minute plus 235 at 130 per minute is about 20 minutes raw, times three gives 60. M3 about 1,140 words stated against 1,121 counted. 

M4 ANT subtraction definitions (alerting = no cue minus double cue; orienting = center cue minus spatial cue; conflict = incongruent minus congruent) match the Methods text of the Fan et al. paper (reported means 47, 51 and 84 msec); the module's fictional values (40, 50, 80 ms and the 35 and 85 ms practice answers) follow the same subtractions.

## Extension: the other three degrees (same method, same check)

Every printed sum was recomputed. No errors found; where a module prints "about", the exact sum is within a few minutes of the stated figure.

| Degree and module | Check | Result |
|---|---|---|
| Buddhism B1 | 54:16+13:16+34:38+23:22 = 2:05:32; 15+20+45+60 = 140 min; total 4:25:32 | matches "about 4 h 25 m" |
| Buddhism B2 | 1:20:34 + (20+10+45+10+40 = 125 min) = 3:25:34 | matches |
| Buddhism B3 | 11:47 + (30+10+50+30+15 = 135 min) = 2:26:47 | matches "about 2 h 25 m" |
| Buddhism B4 | 20:32 + 3 x 13:23 (40:09) + 40:00 + 29:00 = 2:09:41 | matches |
| Buddhism B5 | 58+8+10+70+20 = 166 min (2 h 46 m); plus 1:01:36 = 3:47:36 | matches "about 3 h 50 m"; 7,540 words / 130 = 58 |
| Buddhism B6 | 1:28:04+1:40:16 = 3:08:20; plus 1:30 and 0:20 = 4:58:20 | matches |
| Buddhism B7 | 1:26:35+25+75+20 = 3:26:35 | matches "about 3 h 27 m" |
| Buddhism B9 | 25:00 + 25+30+45+25+10 = 160 min | matches "about 2 h 40 m"; 3,023 / 130 = 23 min |
| Pragmatism M1 to M4 | 170, 225, 257, 178 minutes; reading sums 834+1,368+2,371 = 4,573; 2,532+952+264+157 = 3,905; 778+476+374 = 1,628; graded-deliverable splits 45, 60, 60, 80 | all match |
| Pragmatism M5 | 30+60+30+120+40+30 = 310 | matches |
| Daoism M1 to M5 | 230, 149, 155, 168, 208 minutes; M1 video 13:22+21:53+21:34 = 56:49; M3 reading 2x413+2x217+67 = 1,327; M4 Neiye 170+135+103+142 = 550; M5 154+54+113+145 = 466 | all match |

Not re-checked here: Buddhism B8 (all components are given as ranges of hours) and the teaching-prose word counts that feed the "module-prose reading" lines.

## Segment bounds check (all four assignments files)

All 48 timed segments in the four docs/degrees/integration/deg-*-assignments.json files were checked against the video durations carried in the live registry in site/assets/app.js: every segment starts before it ends, and every end time falls inside the stated video duration. 0 out-of-range segments, 0 segments without a duration. Durations themselves were verified in the earlier 40-video sweep; three could not be re-read this session (PD-M4-01, BUD-B1-02, M06-AF07) because the video host blocks automated page reads, so they remain on the earlier receipts.
