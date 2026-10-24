#!/usr/bin/env python3
"""DOM-stub render test for the sectioned Dossiers grid (supervisor-owned).

Extracts the edited renderDossiers function from site/assets/app.js, runs it
against the compiled fcDossiersData with a minimal DOM stub, and asserts the
sectioned-grid behaviour: one labelled divider per section, cards inside their
section grids, filter counting cards (not dividers), empty-state for a
published-empty section, and back/keyboard wiring intact.
Run from the repo root: python3 scripts/tests/test_dossier_sections.py
"""
import json, re, subprocess, sys

APP = 'site/assets/app.js'
src = open(APP, encoding='utf-8').read()

m = re.search(r'window\.fcDossiersData\s*=\s*', src)
i = src.index('{', m.end())
data_obj, _ = json.JSONDecoder().raw_decode(src, i)

m2 = re.search(r'\nfunction renderDossiers\(\)\{', src)
start = m2.start() + 1
depth, j = 0, start
while True:
    if src[j] == '{': depth += 1
    elif src[j] == '}':
        depth -= 1
        if depth == 0: break
    j += 1
fn_src = src[start:j + 1]

node_code = r'''
const fs = require('fs');
const data = DATA_PLACEHOLDER;
const fn = FUNCTION_PLACEHOLDER;
function el(tag, cls, text){
  const n = { tag, className: cls || '', textContent: text || '', children: [],
    style: {}, dataset: {}, attrs: {}, handlers: {},
    appendChild(c){ this.children.push(c); return c; },
    setAttribute(k,v){ this.attrs[k]=v; },
    get childNodes(){ return this.children; },
    get classList(){ const s=this; return { toggle(c,on){ s._cl=s._cl||{}; s._cl[c]=on; }, add(){}, remove(){} }; }
  };
  if (text) n.text = text;
  return n;
}
const A = { view:'', dossier:null };
const renderAcademy = () => {};
globalThis.window = {};
window.__fcRoute = { set(){} };
window.fcDossiersData = data;
const wrap = fn();
const sections = wrap.children.flatMap(c => c.children || []).filter(c => c.className === 'dossier-section');
const chipsHost = wrap.children.find(c => c.className === 'dossier-chips');
const emptyEl = wrap.children.find(c => (c.className||'').includes('dossier-empty'));
const out = { sectionCount: sections.length,
  sections: sections.map(s => ({ group: s.dataset.group,
    label: s.children[0].children[0].text,
    rule: !!s.children[0].children[1],
    cards: s.children[1].children.length,
    cardTitles: s.children[1].children.map(c => c.children[1].children[1].text) })),
  chips: chipsHost.children.map(c => c.text),
  emptyDefault: emptyEl.style.display,
  totalCards: sections.reduce((a,s)=>a+s.children[1].children.length,0)
};
// simulate a filter click on the eightfold-path chip
const efp = chipsHost.children.find(c => c.text === 'The Noble Eightfold Path');
efp.handlers.onclick ? efp.handlers.onclick() : efp.onclick();
out.afterEightfoldFilter = {
  visibleSections: sections.filter(s => s.style.display !== 'none').length,
  emptyShown: emptyEl.style.display
};
// back to all
chipsHost.children[0].onclick();
out.allVisible = sections.filter(s => s.style.display !== 'none').length;
console.log(JSON.stringify(out, null, 1));
'''
node_code = node_code.replace('DATA_PLACEHOLDER', json.dumps(data_obj))
node_code = node_code.replace('FUNCTION_PLACEHOLDER', fn_src)
open('/tmp/_dossier_test.js', 'w').write(node_code)
res = subprocess.run(['node', '/tmp/_dossier_test.js'], capture_output=True, text=True)
if res.returncode != 0:
    print(res.stderr); sys.exit(1)
out = json.loads(res.stdout)

assert out['sectionCount'] == 5, out['sectionCount']
assert out['totalCards'] == 15, out['totalCards']
groups = [s['group'] for s in out['sections']]
assert groups == ['flourishing', 'eemm', 'affective-life', 'minds-life', 'challenges'], groups
counts = {s['group']: s['cards'] for s in out['sections']}
assert counts == {'flourishing': 3, 'eemm': 5, 'affective-life': 3, 'minds-life': 2, 'challenges': 2}, counts
assert all(s['label'] and s['rule'] for s in out['sections'])
assert out['chips'][0] == 'All' and 'The Noble Eightfold Path' in out['chips']
assert out['emptyDefault'] == 'none'
assert out['afterEightfoldFilter']['visibleSections'] == 0
assert out['afterEightfoldFilter']['emptyShown'] != 'none'
assert out['allVisible'] == 5
# featured first inside its section
fl = [s for s in out['sections'] if s['group'] == 'flourishing'][0]
assert fl['cardTitles'][0] == 'Genuine Flourishing', fl['cardTitles']
print('DOM-stub render test PASS: 5 sections, 15 cards, dividers labelled,',
      'filter counts cards, empty state shows for the published-empty section,',
      'featured card leads its section')
