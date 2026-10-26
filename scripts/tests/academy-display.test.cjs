/* Permanent publication-policy tests. No production fixtures or data edits. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const app = fs.readFileSync(path.join(__dirname, '../../site/assets/app.js'), 'utf8');
const dataStart = app.indexOf('window.fcAcademyData = ') + 'window.fcAcademyData = '.length;
// The Academy assignment is a single JSON line, terminated with a semicolon.
const data = JSON.parse(app.slice(dataStart, app.indexOf(';\n', dataStart)));
const helpers = app.slice(app.indexOf('function acadDegreeVisible('), app.indexOf('function acadDegreesBy('));
function setup() {
  const academy = structuredClone(data);
  const scope = { window: { fcAcademyData: academy }, moduleById: id => academy.modules[id] };
  vm.createContext(scope);
  vm.runInContext(helpers, scope);
  return { academy, visible: scope.acadDegreeVisible, moduleVisible: scope.acadModuleVisible };
}
function fixture(academy, status = 'complete', modules = ['test-module']) {
  const deg = { id: 'test-degree', title: 'Test only', kind: 'degree', status, modules };
  academy.degrees.push(deg);
  academy.modules['test-module'] = { id: 'test-module', degree_id: deg.id };
  return deg;
}
test('production unfinished degrees are hidden, legacy and practica retain access', () => {
  const { academy, visible, moduleVisible } = setup();
  for (const deg of academy.degrees) {
    if (deg.legacy || deg.kind === 'practicum') {
      assert.equal(visible(deg), true, deg.id);
      for (const id of deg.modules || []) assert.equal(moduleVisible(academy.modules[id]), true, id);
    } else if (deg.status !== 'complete') {
      assert.equal(visible(deg), false, deg.id);
    }
  }
  assert.equal(visible(null), false);
  assert.equal(moduleVisible(null), false);
});
test('draft, absent and unknown status never publish even with real module data', () => {
  for (const status of ['draft', 'in-development', 'published', 'ready', '', undefined, null, true]) {
    const { academy, visible, moduleVisible } = setup();
    const deg = fixture(academy, status);
    // Explicit undefined must test absence, not fixture's default.
    if (status === undefined) delete deg.status;
    assert.equal(visible(deg), false, String(status));
    assert.equal(moduleVisible(academy.modules['test-module']), false, String(status));
  }
});
test('explicit completion with a valid integrated syllabus permits degree and module', () => {
  const { academy, visible, moduleVisible } = setup();
  const deg = fixture(academy);
  assert.equal(visible(deg), true);
  assert.equal(moduleVisible(academy.modules['test-module']), true);
  assert.equal(moduleVisible({ id: 'unlisted', degree_id: deg.id }), false);
});
test('complete label cannot publish an empty, malformed, dangling or mis-owned syllabus', () => {
  for (const modules of [[], null, 'test-module', ['missing'], ['test-module', 'missing'], ['test-module', 'test-module'], [null]]) {
    const { academy, visible } = setup();
    assert.equal(visible(fixture(academy, 'complete', modules)), false, JSON.stringify(modules));
  }
  const { academy, visible, moduleVisible } = setup();
  const deg = fixture(academy);
  academy.modules['test-module'].degree_id = 'other-degree';
  assert.equal(visible(deg), false);
  assert.equal(moduleVisible(academy.modules['test-module']), false);
  academy.modules['test-module'].degree_id = deg.id;
  academy.modules['test-module'].id = 'wrong-self-id';
  assert.equal(visible(deg), false);
});
test('unknown kinds do not acquire degree publication access', () => {
  const { academy, visible } = setup();
  const deg = fixture(academy);
  delete deg.kind;
  assert.equal(visible(deg), false);
});
test('mixed verified/unverified module work cannot promote an unfinished degree', () => {
  const { academy, visible, moduleVisible } = setup();
  const deg = fixture(academy, 'in-development', ['test-module', 'test-unverified']);
  academy.modules['test-module'].status = 'verified';
  academy.modules['test-unverified'] = { id: 'test-unverified', degree_id: deg.id, status: 'unverified' };
  assert.equal(visible(deg), false);
  assert.equal(moduleVisible(academy.modules['test-module']), false);
  assert.equal(moduleVisible(academy.modules['test-unverified']), false);
});
test('reserved Greek, existentialism and positive psychology remain unpublished', () => {
  const { academy, visible } = setup();
  for (const id of ['deg-wol-greek', 'deg-wol-existentialism', 'deg-wol-positive']) {
    const deg = academy.degrees.find(d => d.id === id);
    assert.ok(deg, id);
    if (deg.status !== 'complete') assert.equal(visible(deg), false, id);
  }
});
