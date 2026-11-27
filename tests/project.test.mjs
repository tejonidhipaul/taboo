import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BUILT_IN_CARDS, forbiddenCount, eligibleCards } from '../assets/cards.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');

test('card library contains 300 unique, complete cards', () => {
  assert.equal(BUILT_IN_CARDS.length, 300);
  assert.equal(new Set(BUILT_IN_CARDS.map((card) => card.id)).size, 300);
  assert.equal(new Set(BUILT_IN_CARDS.map((card) => card.target.toLowerCase())).size, 300);
  for (const card of BUILT_IN_CARDS) {
    assert.ok(['everyday', 'technical', 'customer'].includes(card.theme));
    assert.equal(card.forbidden.length, 6);
    assert.equal(new Set(card.forbidden.map((word) => word.toLowerCase())).size, 6);
    assert.ok(card.explanation.length > 30);
  }
});

test('six categories have exactly 50 cards each', () => {
  const counts = Object.groupBy ? Object.groupBy(BUILT_IN_CARDS, (card) => card.category) : BUILT_IN_CARDS.reduce((all, card) => ((all[card.category] ||= []).push(card), all), {});
  assert.equal(Object.keys(counts).length, 6);
  for (const cards of Object.values(counts)) assert.equal(cards.length, 50);
});

test('theme and difficulty behavior matches the UI', () => {
  assert.equal(eligibleCards(BUILT_IN_CARDS, 'everyday').length, 150);
  assert.equal(eligibleCards(BUILT_IN_CARDS, 'technical').length, 100);
  assert.equal(eligibleCards(BUILT_IN_CARDS, 'customer').length, 50);
  assert.equal(eligibleCards(BUILT_IN_CARDS, 'mixed').length, 300);
  assert.deepEqual(['beginner', 'intermediate', 'advanced'].map(forbiddenCount), [4, 5, 6]);
});

test('every JavaScript DOM id exists in its page', () => {
  for (const [scriptName, htmlName] of [['assets/admin.js', 'admin.html'], ['assets/engineer.js', 'engineer.html']]) {
    const script = read(scriptName);
    const html = read(htmlName);
    const ids = [...script.matchAll(/\$\('([^']+)'\)/g)].map((match) => match[1]);
    const htmlIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
    const missing = [...new Set(ids)].filter((id) => !htmlIds.has(id));
    assert.deepEqual(missing, [], `${scriptName} references missing IDs: ${missing.join(', ')}`);
  }
});

test('mentor words are hidden in markup by default and live selectors exist', () => {
  const html = read('admin.html');
  assert.match(html, /id="hiddenCard" class="hidden-card"/);
  assert.match(html, /id="revealedCard" class="revealed-card is-hidden"/);
  assert.match(html, /id="liveMode"/);
  assert.match(html, /id="liveDifficulty"/);
  assert.match(html, /id="applyChallenge"/);
});

test('SQL requires authentication for mentor RPCs and limits public state', () => {
  const sql = read('supabase/schema.sql');
  assert.match(sql, /mentor_id uuid references auth\.users/);
  assert.match(sql, /if v_user is null then/);
  assert.match(sql, /grant execute on function public\.create_game_session[\s\S]*to authenticated/);
  assert.match(sql, /grant execute on function public\.get_public_session_state[\s\S]*to anon, authenticated/);
  const publicFunction = sql.slice(sql.indexOf('create function public.get_public_session_state'), sql.indexOf('-- Keep timestamps'));
  assert.doesNotMatch(publicFunction, /admin_token_hash/);
  assert.doesNotMatch(publicFunction, /observations/);
  assert.doesNotMatch(publicFunction, /review/);
  assert.doesNotMatch(publicFunction, /explanation/);
});

test('Netlify function never exposes a secret key variable', () => {
  const config = read('netlify/functions/config.mjs');
  assert.match(config, /SUPABASE_PUBLISHABLE_KEY/);
  assert.doesNotMatch(config, /SERVICE_ROLE|SECRET_KEY/);
  assert.match(config, /cache-control.*no-store/);
});
