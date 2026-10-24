const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const src = fs.readFileSync('site/assets/app.js', 'utf8');
const start = src.indexOf("const statsEl = $('stats');");
const end = src.indexOf('/* ================= theme', start);
assert.ok(start >= 0 && end > start);
const code = src.slice(start, end);
test('removed optional stats element cannot abort application boot', () => {
  assert.doesNotThrow(() => vm.runInNewContext(code, {
    $: () => null, DATA: [{type: 'principle'}], volumes: []
  }));
});
test('stats text is retained in layouts that include the element', () => {
  const el = {};
  vm.runInNewContext(code, {
    $: () => el, DATA: [{type: 'principle'}, {type: 'concept'}], volumes: [{}]
  });
  assert.equal(el.textContent, '2 entries · 1 principles · 1 volumes');
});
