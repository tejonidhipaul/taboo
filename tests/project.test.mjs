import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { BUILT_IN_CARDS, forbiddenCount, eligibleCards } from '../assets/cards.js';
import { fitTextToWidth } from '../assets/common.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');

test('card text shrinks only when needed and restores its size when space increases', () => {
  const previous = globalThis.getComputedStyle;
  globalThis.getComputedStyle = () => ({ fontSize: '40px' });
  try {
    const element = { style: { fontSize: '' }, clientWidth: 100, scrollWidth: 200 };
    fitTextToWidth(element);
    assert.ok(parseFloat(element.style.fontSize) < 20);
    element.clientWidth = 250;
    fitTextToWidth(element);
    assert.equal(element.style.fontSize, '');
    element.clientWidth = 0;
    fitTextToWidth(element);
    assert.equal(element.style.fontSize, '');
  } finally {
    if (previous === undefined) delete globalThis.getComputedStyle;
    else globalThis.getComputedStyle = previous;
  }
});

test('card library contains 350 unique, complete cards with concise entries', () => {
  assert.equal(BUILT_IN_CARDS.length, 350);
  assert.equal(new Set(BUILT_IN_CARDS.map((card) => card.id)).size, 350);
  assert.equal(new Set(BUILT_IN_CARDS.map((card) => card.target.toLowerCase())).size, 350);
  for (const card of BUILT_IN_CARDS) {
    assert.ok(['everyday', 'technical', 'customer'].includes(card.theme));
    assert.ok(card.target.trim().split(/\s+/).length <= 2, `Target is longer than two words: ${card.target}`);
    assert.equal(card.forbidden.length, 6);
    assert.equal(new Set(card.forbidden.map((word) => word.toLowerCase())).size, 6);
    for (const word of card.forbidden) assert.ok(word.trim().split(/\s+/).length <= 2, `Forbidden entry is longer than two words: ${card.target} -> ${word}`);
    assert.ok(card.explanation.length > 30);
  }
});

test('the revised library contains the PDF, Esko, technical and customer collections', () => {
  const counts = Object.groupBy ? Object.groupBy(BUILT_IN_CARDS, (card) => card.category) : BUILT_IN_CARDS.reduce((all, card) => ((all[card.category] ||= []).push(card), all), {});
  assert.equal(Object.keys(counts).length, 8);
  for (let index = 1; index <= 5; index += 1) assert.equal(counts[`Classic Taboo ${index}`].length, 40);
  assert.equal(counts['Esko Products'].length, 50);
  assert.equal(counts['Technical Jargon'].length, 50);
  assert.equal(counts['Customer Challenge'].length, 50);
});

test('theme and difficulty behavior matches the UI', () => {
  assert.equal(eligibleCards(BUILT_IN_CARDS, 'everyday').length, 200);
  assert.equal(eligibleCards(BUILT_IN_CARDS, 'technical').length, 100);
  assert.equal(eligibleCards(BUILT_IN_CARDS, 'customer').length, 50);
  assert.equal(eligibleCards(BUILT_IN_CARDS, 'mixed').length, 350);
  assert.deepEqual(['beginner', 'intermediate', 'advanced'].map(forbiddenCount), [4, 5, 6]);
});

test('homepage card count and resumed mentor timer match the current library', () => {
  const homepage = read('index.html');
  const adminScript = read('assets/admin.js');
  assert.match(homepage, /<strong>350<\/strong><span>built-in cards<\/span>/);
  const loadSessionBody = adminScript.slice(adminScript.indexOf('async function loadSession'), adminScript.indexOf('function engineerLink'));
  assert.match(loadSessionBody, /if \(activeSession\.timer_running\) startLocalTimer\(\)/);
  const addCustomCardBody = adminScript.slice(adminScript.indexOf('function addCustomCard'), adminScript.indexOf('function exportCustomCards'));
  assert.match(addCustomCardBody, /if \(!target \|\| !isOneOrTwoWords\(target\)/);
  assert.match(addCustomCardBody, /if \(!explanation\)/);
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
  assert.match(html, /id="hiddenCard" class="hidden-card is-hidden"/);
  assert.match(html, /id="revealedCard" class="revealed-card is-hidden"/);
  assert.match(html, /id="liveMode"/);
  assert.match(html, /id="liveDifficulty"/);
  assert.match(html, /id="applyChallenge"/);
});

test('new sessions wait for the mentor and show a personalised engineer greeting', () => {
  const adminHtml = read('admin.html');
  const adminScript = read('assets/admin.js');
  const engineerHtml = read('engineer.html');
  const engineerScript = read('assets/engineer.js');
  assert.match(adminHtml, /id="engineerLinkInput"/);
  assert.match(adminHtml, /id="startSession"/);
  assert.match(adminHtml, /id="mentorWaitingCard"/);
  assert.match(adminScript, /\$\('startSession'\)\.addEventListener/);
  assert.match(adminScript, /Session created\. Share the link, then start/);
  const createSessionBody = adminScript.slice(adminScript.indexOf('async function createLiveSession'), adminScript.indexOf('function escapeCsvRows'));
  assert.doesNotMatch(createSessionBody, /drawCard\(/, 'Creating a session must not send a card.');
  const startHandler = adminScript.slice(adminScript.indexOf("$('startSession').addEventListener"), adminScript.indexOf("$('startTimer').addEventListener"));
  assert.match(startHandler, /await drawCard\(\)/, 'Start session must send the first card.');
  assert.match(engineerHtml, /id="waitingGreeting"/);
  assert.match(engineerScript, /`Welcome, \$\{name\}!`/);
  assert.match(engineerScript, /state\.phase !== 'active'/);
});

test('engineer rules, card, clue, timer visibility and flip animation are wired', () => {
  const adminHtml = read('admin.html');
  const adminScript = read('assets/admin.js');
  const engineerHtml = read('engineer.html');
  const engineerScript = read('assets/engineer.js');
  const styles = read('assets/styles.css');
  const schema = read('supabase/schema.sql');
  const v1Upgrade = read('supabase/upgrade-v2.sql');
  const migration = read('supabase/upgrade-live-controls.sql');

  assert.match(engineerHtml, /class="waiting-rules"/);
  assert.match(engineerHtml, /id="engineerCard" class="engineer-taboo-card"/);
  assert.match(engineerHtml, /id="engineerClue"/);
  assert.match(adminHtml, /id="toggleClue"/);
  assert.match(adminHtml, /id="toggleEngineerTimer"[^>]*aria-pressed="false">Show timer/);
  assert.match(adminScript, /clue_shown: false/);
  assert.match(adminScript, /timer_visible: activeSession\.current_card\?\.timer_visible === true/);
  assert.match(engineerScript, /card\.timer_visible !== true/);
  assert.match(engineerScript, /card\.clue \|\| ''/);
  assert.match(engineerScript, /card-flip/);
  assert.match(styles, /@keyframes taboo-card-flip/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(migration, /create or replace function public\.get_public_session_state/);
  for (const sql of [schema, v1Upgrade, migration]) {
    const publicFunction = sql.slice(sql.indexOf('create function public.get_public_session_state') >= 0
      ? sql.indexOf('create function public.get_public_session_state')
      : sql.indexOf('create or replace function public.get_public_session_state'));
    assert.match(publicFunction, /when coalesce\(\(v_session\.current_card->>'clue_shown'\)::boolean, false\) then/);
    assert.match(publicFunction, /else 'null'::jsonb/);
    assert.match(publicFunction, /timer_visible.*false/);
  }
});

test('engineer result submission waits for the mentor and prevents duplicate clicks', async () => {
  const elements = new Map();
  const element = (id) => {
    if (!elements.has(id)) elements.set(id, {
      textContent: '', disabled: false, style: {},
      classList: { toggle() {}, add() {}, remove() {}, contains() { return false; } },
      addEventListener() {}, replaceChildren() {}, setAttribute() {}
    });
    return elements.get(id);
  };
  let state = {
    status: 'active', phase: 'active', card_index: 1, mode: 'everyday', difficulty: 'beginner',
    timer_seconds: 90, current_card: { target: 'Word', forbidden: [] }
  };
  let submissions = 0;
  let submitError = null;
  let release;
  const client = {
    async rpc(name, parameters) {
      if (name === 'get_public_session_state') return { data: state, error: null };
      submissions += 1;
      assert.equal(parameters.p_action, 'correct');
      if (submitError) return { error: { message: submitError } };
      await new Promise((resolve) => { release = resolve; });
      state = { ...state, pending_mentee_action: 'correct' };
      return { error: null };
    }
  };
  const context = vm.createContext({
    document: {
      getElementById: element, createElement: () => element(Symbol()), createTextNode: (text) => text,
      querySelectorAll: () => [], fonts: { ready: Promise.resolve() }
    },
    window: { addEventListener() {} }, location: { search: '?s=11111111-1111-4111-8111-111111111111' },
    URLSearchParams, THEME_LABELS: {}, DIFFICULTY_LABELS: {}, fitTextToWidth() {}, formatTimer: () => '01:30',
    client
  });
  const script = read('assets/engineer.js').replace(/^import .*;\r?\n/gm, '').replace(/\ninit\(\);\s*$/, '');
  vm.runInContext(`${script}\nsupabaseClient = client;`, context);
  context.render(state);
  const first = context.submitAction('correct');
  await context.submitAction('taboo');
  assert.equal(submissions, 1);
  assert.equal(element('engineerTaboo').disabled, true);
  release();
  await first;
  assert.match(element('engineerActionStatus').textContent, /Waiting for the mentor console/);
  assert.equal(element('engineerGuessed').disabled, true);
  state = { ...state, card_index: 2, pending_mentee_action: null };
  context.render(state);
  assert.equal(element('engineerGuessed').disabled, false);
  assert.equal(element('engineerActionStatus').textContent, '');
  submitError = 'Could not record the result.';
  await context.submitAction('correct');
  assert.equal(element('engineerActionStatus').textContent, submitError);
  assert.equal(element('engineerGuessed').disabled, false);
});

test('mentee migration guards card outcomes and advances under a row lock', () => {
  const sql = read('supabase/upgrade-mentee-controls.sql');
  assert.match(sql, /p_action not in \('correct', 'taboo'\)/);
  assert.match(sql, /card_index = p_card_index and pending_mentee_action is null/);
  assert.match(sql, /for update;[\s\S]*v_session\.card_index is distinct from p_card_index/);
  assert.match(sql, /coalesce\(v_session\.pending_mentee_action, p_outcome\)/);
  assert.match(sql, /pending_mentee_action = null/);
  assert.match(sql, /grant execute on function public\.admin_advance_game_session[\s\S]*to authenticated/);
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
  assert.match(publicFunction, /when coalesce\(\(v_session\.current_card->>'clue_shown'\)::boolean, false\) then v_session\.current_card->'explanation'/);
  assert.match(publicFunction, /else 'null'::jsonb/);
});

test('Netlify function never exposes a secret key variable', () => {
  const config = read('netlify/functions/config.mjs');
  assert.match(config, /SUPABASE_PUBLISHABLE_KEY/);
  assert.doesNotMatch(config, /SERVICE_ROLE|SECRET_KEY/);
  assert.match(config, /cache-control.*no-store/);
});
