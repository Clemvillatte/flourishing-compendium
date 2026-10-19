const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const model = require('../../site/assets/randomizer-model.js');
const books = [
  { id: 'dao', book: 'Daoism', bookFile: 'Daoism', vol: 'I', e: [{ n: 1, w: 'D001', c: 'First' }] },
  { id: 'bud', book: 'Buddhism', bookFile: 'Buddhism', vol: 'I', e: [{ n: 1, w: 'B001', c: 'Second' }] },
  { id: 'aff', book: 'Affect', bookFile: 'Affect', vol: 'V', e: [{ n: 1, w: 'AF001', c: 'First' }] }
];
const wiki = [
  { id: 'D001', file: 'D001 — Dao', type: 'principle', content: '[[Shared concept]]' },
  { id: 'B001', type: 'principle', content: '' },
  { id: 'AF001', type: 'principle', content: '' },
  { id: 'Shared concept', type: 'concept', content: '[[B001]]' },
  { id: 'Unlinked', type: 'concept', content: '' },
  { id: 'Affect theory', type: 'concept', tags: ['theory'], content: '[[AF001]]' },
  { id: 'Story', type: 'story', content: '[[D001 — Dao|A Daoist principle]]' },
  { id: 'Saying', type: 'saying', content: '[[D001]]' }
];
const built = model.create(books, wiki);
const entries = built.books.flatMap(b => b.e);
function pool(categories, types = [], layer = '') {
  return entries.filter(e => model.matches(e, new Set(categories), new Set(types), 3, layer));
}
test('default pool contains only original principles/kernels', () => {
  assert.deepEqual(pool([0, 1, 2]).map(e => e.w), ['D001', 'B001', 'AF001']);
});
test('category selection is OR, and deselect all is genuinely empty', () => {
  assert.deepEqual(pool([0, 1]).map(e => e.w), ['D001', 'B001']);
  assert.deepEqual(pool([0, 2]).map(e => e.w), ['D001', 'AF001']);
  assert.equal(pool([], model.EXTRA_TYPES).length, 0);
});
test('theory-tagged concepts belong only to Theories, not both toggles', () => {
  assert.equal(model.kindOf(wiki[5]), 'theory');
  assert.equal(pool([2], ['concept']).some(e => e.w === 'Affect theory'), false);
  assert.equal(pool([2], ['theory']).some(e => e.w === 'Affect theory'), true);
});
test('extra categories follow incoming and outgoing explicit wikilinks', () => {
  assert.equal(pool([0], ['concept']).some(e => e.w === 'Shared concept'), true);
  assert.equal(pool([1], ['concept']).some(e => e.w === 'Shared concept'), true);
  assert.equal(pool([2], ['concept']).some(e => e.w === 'Shared concept'), false);
  assert.equal(pool([0], ['story']).some(e => e.w === 'Story'), true);
});
test('unlinked extra entries require all categories and their enabled type', () => {
  assert.equal(pool([0], ['concept']).some(e => e.w === 'Unlinked'), false);
  assert.equal(pool([0, 1, 2], ['concept']).some(e => e.w === 'Unlinked'), true);
  assert.equal(pool([0, 1, 2]).some(e => e.w === 'Unlinked'), false);
});
test('layer filter remains an additional intersection', () => {
  assert.deepEqual(pool([0, 1, 2], model.EXTRA_TYPES, 'First').map(e => e.w), ['D001', 'AF001']);
});
test('source book entries remain unmodified', () => {
  assert.equal(books[0].e[0].categories, undefined);
});
test('production source data preserves default total and has unique extra identities', () => {
  const root = path.resolve(__dirname, '../..');
  const read = name => JSON.parse(fs.readFileSync(path.join(root, 'data-src', name), 'utf8'));
  const productionBooks = read('randData.json');
  // Tests run before build in CI; parse the checked-in markdown corpus via the
  // build's output when present, otherwise the fixture tests above still apply.
  const data = path.join(root, 'site/data/wikiData.json.gz');
  if (!fs.existsSync(data)) return;
  const productionWiki = JSON.parse(zlib.gunzipSync(fs.readFileSync(data)));
  const result = model.create(productionBooks, productionWiki);
  const all = new Set(result.categories.map(c => c.index));
  const selected = result.books.flatMap(b => b.e).filter(e => model.matches(e, all, new Set(), result.categoryCount, ''));
  assert.equal(selected.length, productionBooks.reduce((n, b) => n + b.e.length, 0));
  const extras = result.books.filter(b => b.extra).flatMap(b => b.e);
  assert.equal(extras.length, new Set(extras.map(e => e.w)).size);
});
