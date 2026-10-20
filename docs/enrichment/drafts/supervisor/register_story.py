#!/usr/bin/env python3
"""Register a new story file: _order.json, Stories book Contents, principle backlinks.

Usage: python3 docs/enrichment/drafts/supervisor/register_story.py ST337 "ST-S01.01 — I.1 First Principles — The Axioms" "D005,D085,D181"
The chapter string must match the structure Contents heading exactly.
The last entry under each chapter heading is the insertion point; new story links
are appended to that chapter's list. Principles get a '- [[STxxx — Title|N. Title]]'
line in their '## Stories' section (created before '## Psychology parallels' if missing).
"""
import json, re, sys, glob

story_id, chapter, principle_ids = sys.argv[1], sys.argv[2], sys.argv[3].split(',')
path = glob.glob(f'content/stories/{story_id} — *.md')[0]
title = path.split('— ', 1)[1][:-3]
n = int(re.match(r'ST(\d+)', story_id).group(1))

# 1. _order.json
order = json.load(open('content/_order.json'))
entry = f'content/stories/{story_id} — {title}.md'
assert entry not in order, entry
i = [k for k, x in enumerate(order) if f'/ST{n-1} — ' in x]
assert len(i) == 1, i
order.insert(i[0] + 1, entry)
open('content/_order.json', 'w', encoding='utf-8').write(
    json.dumps(order, ensure_ascii=False, indent=0))
print('order.json: inserted after ST%d' % (n - 1))

# 2. structure book Contents
sf = 'content/structure/ST — Stories of Genuine Flourishing.md'
txt = open(sf, encoding='utf-8').read()
lines = txt.split('\n')
head = f'  - [[{chapter}]]'
hi = lines.index(head)
# find last child line of this chapter (indented 4 spaces, before next 2-space heading)
last = hi
for k in range(hi + 1, len(lines)):
    if re.match(r'^  - \[\[', lines[k]) or not lines[k].strip():
        break
    last = k
newlines = lines[:last + 1] + [f'    - [[{story_id} — {title}]]'] + lines[last + 1:]
open(sf, 'w', encoding='utf-8').write('\n'.join(newlines))
print('structure contents: added under', chapter)

# 3. principle backlinks
for pid in principle_ids:
    pf = glob.glob(f'content/principles/{pid} — *.md')[0]
    body = open(pf, encoding='utf-8').read()
    link = f'- [[{story_id} — {title}|{n}. {title}]]'
    if link in body:
        print(pid, 'already linked'); continue
    m = re.search(r'^## Stories\n', body, re.M)
    if m:
        newbody = body[:m.end()] + link + '\n' + body[m.end():]
    else:
        # insert section before ## Psychology parallels (D055/D001 precedent)
        mm = re.search(r'^## Psychology parallels\n', body, re.M)
        assert mm, pf
        newbody = body[:mm.start()] + '## Stories\n\n' + link + '\n\n' + body[mm.start():]
    open(pf, 'w', encoding='utf-8').write(newbody)
    print(pid, 'linked')
print('DONE', story_id)
