#!/usr/bin/env python3
"""DOM-stub render test for the sectioned Dossiers grid (supervisor-owned).

Extracts the edited renderDossiers function from site/assets/app.js, runs it
against the compiled fcDossiersData (plus a fixture group that holds no
published dossier, for the empty-filter case) with a minimal DOM stub, and
asserts the sectioned-grid behaviour. Expectations are DERIVED from the
compiled data, so publishing or flipping dossiers does not break the test:
one labelled divider per section (in registry group order), cards inside
their section grids, the filter counting cards rather than dividers, the
empty state for a published-empty group, featured-first preserved within its
section, and the card click / keyboard wiring setting the detail view.
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
const data = JSON.parse(JSON.stringify(DATA_PLACEHOLDER));
// fixture: a group with no published dossier, to test the empty-filter path
data.groups.push({ id: 'fixture-empty', label: 'Fixture Empty Section', order: 99 });
const fn = FUNCTION_PLACEHOLDER;
function el(tag, cls, text){
  const n = { tag, className: cls || '', textContent: text || '', text: text || '',
    children: [], style: {}, dataset: {}, attrs: {}, handlers: {},
    appendChild(c){ this.children.push(c); return c; },
    setAttribute(k,v){ this.attrs[k]=v; },
    get childNodes(){ return this.children; },
    get classList(){ const s=this; return { toggle(c,on){ s._cl=s._cl||{}; s._cl[c]=on; }, add(){}, remove(){} }; }
  };
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
const out = {
  sections: sections.map(s => ({ group: s.dataset.group,
    label: s.children[0].children[0].text,
    rule: !!s.children[0].children[1],
    cards: s.children[1].children.length,
    firstTitle: s.children[1].children[0] ? s.children[1].children[0].children[1].children[1].text : null,
    cardTitles: s.children[1].children.map(c => c.children[1].children[1].text) })),
  chips: chipsHost.children.map(c => c.text),
  emptyDefault: emptyEl.style.display,
  // interaction wiring: click a card, then keyboard-activate it
  interaction: (() => {
    const card = sections[0].children[1].children[0];
    card.onclick();
    const clicked = { view: A.view, id: A.dossier };
    A.view = ''; A.dossier = null;
    card.onkeydown({ key: 'Enter', preventDefault(){} });
    const keyed = { view: A.view, id: A.dossier };
    return { clicked, keyed };
  })()
};
// filter click on the fixture group: zero published cards -> empty state
const fx = chipsHost.children.find(c => c.text === 'Fixture Empty Section');
fx.onclick();
out.fixtureFilter = {
  visibleSections: sections.filter(s => s.style.display !== 'none').length,
  emptyShown: emptyEl.style.display
};
// and on a real group: exactly that section visible
const real = chipsHost.children.find(c => c.text === data.groups[1].label);
real.onclick();
out.realFilter = {
  visibleSections: sections.filter(s => s.style.display !== 'none').map(s => s.dataset.group)
};
chipsHost.children[0].onclick();
out.allFilter = sections.filter(s => s.style.display !== 'none').length;
console.log(JSON.stringify(out));
'''
node_code = node_code.replace('DATA_PLACEHOLDER', json.dumps(data_obj))
node_code = node_code.replace('FUNCTION_PLACEHOLDER', fn_src)
open('/tmp/_dossier_test.js', 'w').write(node_code)
res = subprocess.run(['node', '/tmp/_dossier_test.js'], capture_output=True, text=True)
if res.returncode != 0:
    print(res.stderr); sys.exit(1)
out = json.loads(res.stdout)

# --- expectations derived from the compiled data ---
pub = [d for d in data_obj['dossiers']]
groups = [g for g in data_obj['groups'] if any(d.get('group') == g['id'] for d in pub)]
assert [s['group'] for s in out['sections']] == [g['id'] for g in groups], \
    (out['sections'], [g['id'] for g in groups])
for s, g in zip(out['sections'], groups):
    expected = [d['title'] for d in pub if d.get('group') == g['id']]
    assert s['cardTitles'] == expected, (s['group'], s['cardTitles'], expected)
    assert s['label'] == g['label'] and s['rule']
featured = [d for d in pub if d.get('featured')]
if featured:
    fl = [s for s in out['sections'] if s['firstTitle'] == featured[0]['title']]
    assert fl and fl[0]['cardTitles'][0] == featured[0]['title']
assert out['emptyDefault'] == 'none'
assert out['interaction']['clicked'] == {'view': 'dossierDetail', 'id': pub[0]['id']}
assert out['interaction']['keyed'] == {'view': 'dossierDetail', 'id': pub[0]['id']}
assert out['fixtureFilter']['visibleSections'] == 0 and out['fixtureFilter']['emptyShown'] != 'none'
assert out['realFilter']['visibleSections'] == [groups[1]['id']]
assert out['allFilter'] == len(groups)
assert out['chips'][0] == 'All' and 'Fixture Empty Section' in out['chips']
print('DOM-stub render test PASS: %d sections, %d cards (expectations derived from the compiled data), dividers labelled, filter counts cards, empty state on the fixture group, card click and Enter-key wiring set the detail view, featured-first preserved' % (len(out['sections']), sum(s['cards'] for s in out['sections'])))
