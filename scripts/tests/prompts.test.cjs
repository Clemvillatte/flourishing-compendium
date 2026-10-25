'use strict';
// Shuffle-bag and filter behaviour of site/assets/prompts.js (pure model, no DOM).
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const FCP = require(path.join(__dirname, '..', '..', 'site', 'assets', 'prompts.js'));

function seeded(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const mk = (n, genre) => Array.from({ length: n }, (_, i) => ({ id: genre[0].toUpperCase() + i, genre, text: 't' + i, title: 'T' + i }));
const bank = [].concat(mk(5, 'poetry'), mk(4, 'fiction'), mk(3, 'essay'));

test('every prompt appears once before any repeat', () => {
  const m = FCP.create(bank, seeded(7));
  const seen = [];
  for (let i = 0; i < bank.length; i++) seen.push(m.next().id);
  assert.strictEqual(new Set(seen).size, bank.length);
});

test('no immediate repeat across the round boundary', () => {
  for (let seed = 1; seed < 200; seed++) {
    const m = FCP.create(bank, seeded(seed));
    let last = null;
    for (let i = 0; i < bank.length * 3; i++) {
      const p = m.next();
      assert.notStrictEqual(p.id, last, 'repeat at seed ' + seed + ' step ' + i);
      last = p.id;
    }
  }
});

test('genre filter returns only that genre and reports its size', () => {
  const m = FCP.create(bank, seeded(3));
  m.setGenre('fiction');
  assert.strictEqual(m.size(), 4);
  for (let i = 0; i < 10; i++) assert.strictEqual(m.next().genre, 'fiction');
});

test('unknown genre falls back to all; empty genre gives null', () => {
  const m = FCP.create(bank, seeded(3));
  m.setGenre('nonsense');
  assert.strictEqual(m.genre(), 'all');
  const only = FCP.create(mk(2, 'poetry'), seeded(1));
  only.setGenre('memoir');
  assert.strictEqual(only.next(), null);
});

test('previous steps back through history and next walks forward again', () => {
  const m = FCP.create(bank, seeded(11));
  const a = m.next(), b = m.next(), c = m.next();
  assert.strictEqual(m.prev().id, b.id);
  assert.strictEqual(m.prev().id, a.id);
  assert.strictEqual(m.prev(), null);
  assert.strictEqual(m.next().id, b.id);
  assert.strictEqual(m.next().id, c.id);
  assert.notStrictEqual(m.next().id, c.id);
});

test('a single-prompt bank repeats without crashing', () => {
  const m = FCP.create(mk(1, 'essay'), seeded(5));
  assert.strictEqual(m.next().id, m.next().id);
});

test('genres() lists only forms that exist in the bank', () => {
  assert.deepStrictEqual(FCP.create(bank).genres(), ['poetry', 'fiction', 'essay']);
});

test('asPlainText carries the title, text and done-when line', () => {
  const t = FCP.asPlainText({ title: 'A', text: 'B', done_when: 'C' });
  assert.match(t, /^A\n\nB\n\nYou are done when: C$/);
});
