'use strict';
// Shuffle-bag and family-filter behaviour of site/assets/prompts.js (pure model, no DOM).
// The bank schema is {id, family, text, connections, dossier, sensitive} — no poetry/
// fiction/memoir genres, no workshop fields.
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const FCP = require(path.join(__dirname, '..', '..', 'site', 'assets', 'prompts.js'));

function seeded(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const mk = (n, family) => Array.from({ length: n }, (_, i) => ({ id: family[0].toUpperCase() + i, family, text: 't' + i, connections: [], dossier: null, sensitive: false }));
const bank = [].concat(mk(5, 'suffering'), mk(4, 'wisdom'), mk(3, 'attention'));

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

test('family filter returns only that family and reports its size', () => {
  const m = FCP.create(bank, seeded(3));
  m.setFamily('wisdom');
  assert.strictEqual(m.size(), 4);
  for (let i = 0; i < 10; i++) assert.strictEqual(m.next().family, 'wisdom');
});

test('unknown family falls back to all; empty family gives null', () => {
  const m = FCP.create(bank, seeded(3));
  m.setFamily('nonsense');
  assert.strictEqual(m.family(), 'all');
  // a bank with zero prompts in a family: next() yields null (empty pool)
  const empty = FCP.create([], seeded(1));
  assert.strictEqual(empty.next(), null);
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
  const m = FCP.create(mk(1, 'suffering'), seeded(5));
  assert.strictEqual(m.next().id, m.next().id);
});

test('families() lists only families that exist in the bank, in first-appearance order', () => {
  assert.deepStrictEqual(FCP.create(bank).families(), ['suffering', 'wisdom', 'attention']);
});

test('asPlainText carries just the spark text', () => {
  const t = FCP.asPlainText({ id: 'X1', family: 'wisdom', text: 'What is enough?', connections: [] });
  assert.strictEqual(t, 'What is enough?');
});

test('the shipped bank has no poetry/fiction/memoir fields and no workshop fields', () => {
  const fs = require('node:fs');
  const bankPath = path.join(__dirname, '..', '..', 'site', 'assets', 'prompts-bank.json');
  const parsed = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
  const prompts = parsed.prompts || [];
  assert.ok(prompts.length >= 12, 'bank too small');
  for (const p of prompts) {
    assert.strictEqual(p.genre, undefined, p.id + ' still carries a genre field');
    assert.strictEqual(p.done_when, undefined, p.id + ' still carries a done_when field');
    assert.strictEqual(p.move, undefined, p.id + ' still carries a move field');
    assert.strictEqual(p.word_count, undefined, p.id + ' still carries a word_count field');
    assert.ok(p.family, p.id + ' missing family');
    assert.ok(p.text, p.id + ' missing text');
    assert.ok(p.connections, p.id + ' missing connections');
  }
});
