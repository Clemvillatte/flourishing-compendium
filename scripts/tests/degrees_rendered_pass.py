#!/usr/bin/env python3
"""Rendered learner pass for the four repair-wave degrees (deg-fix-schema, Phase E).
Serves nothing itself: start `python3 -m http.server 8765` in site/ (after
`python3 scripts/build.py` has produced the untracked site/data), then run
  python3 scripts/tests/degrees_rendered_pass.py [chrome_path]
For every module of every degree: opens #module=<id>, and fails on page errors,
raw module ids / band codes / filenames in visible text, a missing assignment line
on any media row, empty syllabus without a drawsOnPriorModules note, and a
segment-bounded player whose embed start/end disagree with the data."""
import sys, json, re, os
from playwright.sync_api import sync_playwright
CHROME = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser('~/.cache/ms-playwright/chromium-1217/chrome-linux64/chrome')
DEGS = ['deg-psychdim', 'deg-wol-daoism', 'deg-wol-buddhism', 'deg-wol-pragmatism']
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
s = open(os.path.join(ROOT, 'site/assets/app.js'), encoding='utf-8').read()
k = 'window.fcAcademyData = '; i = s.index(k) + len(k)
data, _ = json.JSONDecoder().raw_decode(s[i:])
BAD = re.compile(r'\b(mod-[a-z]+-\d+|m\d-[a-z]+|b\d: |\.md\b|L[1-5] [A-Z][a-z]+\.)')
def secs(t):
    p = [int(x) for x in t.split(':')]
    while len(p) < 3: p.insert(0, 0)
    return p[0]*3600 + p[1]*60 + p[2]
fails = []
with sync_playwright() as p:
    b = p.chromium.launch(executable_path=CHROME, args=['--no-sandbox'])
    for vp in ({'width': 1200, 'height': 900}, {'width': 390, 'height': 844}):
        pg = b.new_page(viewport=vp); errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto('http://localhost:8765/index.html#view=academy'); pg.wait_for_timeout(2500)
        for did in DEGS:
            deg = next(d for d in data['degrees'] if d['id'] == did)
            pg.evaluate("h=>{location.hash=h}", f'degree={did}'); pg.wait_for_timeout(600)
            dtxt = pg.inner_text('body')
            chips = ' '.join(pg.locator('.acad-chip').all_inner_texts()).lower()
            if did == 'deg-wol-pragmatism' and 'watched' in chips:
                fails.append(f"{did} degree page ({vp['width']}): progress chip says watched for a reading-only degree")
            if BAD.search(dtxt): fails.append(f"{did} degree page ({vp['width']}): leaked code {BAD.search(dtxt).group(0)!r}")
            for mid in deg['modules']:
                mod = data['modules'][mid]
                pg.evaluate("h=>{location.hash=h}", f'module={mid}'); pg.wait_for_timeout(500)
                txt = pg.inner_text('body')
                m = BAD.search(txt)
                if m: fails.append(f"{mid} ({vp['width']}): leaked code {m.group(0)!r}")
                rows = pg.locator('.acad-media-row')
                n_expected = len(mod['requiredMedia']) + len(mod['optionalMedia'])
                if rows.count() != n_expected: fails.append(f"{mid} ({vp['width']}): {rows.count()} media rows rendered, {n_expected} in data")
                if n_expected == 0 and not mod.get('drawsOnPriorModules'): fails.append(f'{mid}: empty syllabus with no drawsOnPriorModules note')
                if mod.get('drawsOnPriorModules') and mod['drawsOnPriorModules'][:40] not in txt: fails.append(f'{mid}: drawsOnPriorModules note not rendered')
                for r in mod['requiredMedia'] + mod['optionalMedia']:
                    if r.get('role') in ('revisit','retrieval','capstone-return') and {'revisit': 'REVISIT', 'retrieval': 'RETRIEVAL PRACTICE', 'capstone-return': 'RETURN TO THIS SOURCE'}[r['role']] not in txt.upper():
                        fails.append(f"{mid}: role label for {r['source_id']} not rendered")
                for j in range(rows.count()):
                    if not rows.nth(j).locator('.acad-media-assign').count() and not rows.nth(j).locator('.acad-media-duration').count():
                        fails.append(f"{mid} row {j}: neither assignment line nor duration")
        # player check: first segmented video in psychdim m1
        if vp['width'] > 600:
            pg.evaluate("h=>{location.hash=h}", 'module=mod-pd-1'); pg.wait_for_timeout(500)
            pg.locator(".acad-media-row:has-text('Sainani')").first.click(); pg.wait_for_timeout(600)
            src = pg.locator('.acad-player-frame iframe').first.get_attribute('src') or ''
            m = re.search(r'start=(\d+)&end=(\d+)', src)
            if not m or (int(m.group(1)), int(m.group(2))) != (secs('25:46'), secs('44:11')): fails.append(f'player: wrong embed window {src}')
        if errs: fails.append(f"page errors ({vp['width']}): {errs[:3]}")
        pg.close()
    b.close()
for f in fails: print('FAIL', f)
print(f'--- degrees_rendered_pass: {len(fails)} defect(s)')
sys.exit(1 if fails else 0)
