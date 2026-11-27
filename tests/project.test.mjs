import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { BUILT_IN_CARDS, forbiddenCount, eligibleCards } from '../assets/cards.js';
import { fitTextToWidth, formatTimer, parseCsv, setAnimatedVisibility, updateTimerAlert } from '../assets/common.js';

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

test('visibility transitions handle rapid changes and reduced motion', () => {
  const previousWindow = globalThis.window;
  let reducedMotion = false;
  globalThis.window = { matchMedia: () => ({ matches: reducedMotion }) };
  const classes = new Set(['is-hidden']);
  const animations = [];
  const element = {
    classList: { contains: (name) => classes.has(name), add: (name) => classes.add(name), remove: (name) => classes.delete(name) },
    setAttribute(name, value) { this[name] = value; },
    animate() {
      const animation = { cancel() { this.cancelled = true; } };
      animations.push(animation);
      return animation;
    }
  };
  try {
    setAnimatedVisibility(element, true);
    assert.equal(classes.has('is-hidden'), false);
    assert.equal(element['aria-hidden'], 'false');
    let cleared = false;
    setAnimatedVisibility(element, false, { onHidden: () => { cleared = true; } });
    assert.equal(animations[0].cancelled, true);
    assert.equal(element['aria-hidden'], 'true');
    setAnimatedVisibility(element, true);
    assert.equal(animations[1].cancelled, true);
    assert.equal(cleared, false);
    setAnimatedVisibility(element, false, { onHidden: () => { cleared = true; } });
    animations[3].onfinish();
    assert.equal(classes.has('is-hidden'), true);
    assert.equal(cleared, true);
    reducedMotion = true;
    setAnimatedVisibility(element, true);
    assert.equal(classes.has('is-hidden'), false);
    assert.equal(animations.length, 4);
    setAnimatedVisibility(element, false, { immediate: true });
    assert.equal(classes.has('is-hidden'), true);
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test('clue transitions expand and collapse smoothly, including interrupted toggles', () => {
  const previousWindow = globalThis.window;
  globalThis.window = {
    matchMedia: () => ({ matches: false }),
    getComputedStyle: () => ({ height: '45px', opacity: '0.5' })
  };
  const classes = new Set(['is-hidden']);
  const animations = [];
  const element = {
    scrollHeight: 100,
    classList: { contains: (name) => classes.has(name), add: (name) => classes.add(name), remove: (name) => classes.delete(name) },
    setAttribute() {},
    animate(frames) {
      const animation = { frames, cancel() { this.cancelled = true; } };
      animations.push(animation);
      return animation;
    }
  };
  try {
    setAnimatedVisibility(element, true, { expand: true });
    assert.deepEqual(animations[0].frames, [{ height: '0px', opacity: 0 }, { height: '100px', opacity: 1 }]);
    setAnimatedVisibility(element, false, { expand: true });
    assert.deepEqual(animations[1].frames, [{ height: '45px', opacity: '0.5' }, { height: '0px', opacity: 0 }]);
    animations[1].onfinish();
    assert.equal(classes.has('is-hidden'), true);
    assert.equal(animations[1].cancelled, true);
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test('timer alerts start at five seconds, end at zero, and clear on reset', () => {
  const classes = new Set();
  const timer = { classList: { toggle(name, active) { if (active) classes.add(name); else classes.delete(name); } } };
  updateTimerAlert(timer, 30, 6, true);
  assert.equal(classes.size, 0);
  updateTimerAlert(timer, 30, 5, true);
  assert.equal(classes.has('timer-warning'), true);
  updateTimerAlert(timer, 30, 1, true);
  assert.equal(classes.has('timer-warning'), true);
  updateTimerAlert(timer, 30, 1, false);
  assert.equal(classes.size, 0);
  updateTimerAlert(timer, 30, 0, false);
  assert.equal(classes.has('timer-ended'), true);
  updateTimerAlert(timer, 30, 30, true);
  assert.equal(classes.size, 0);
  updateTimerAlert(timer, 0, 0, false);
  assert.equal(classes.size, 0);
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

test('all built-in cards have short distinct hints without target or forbidden words', () => {
  const jsonCards = JSON.parse(read('cards.v2.1.0.json'));
  const rows = parseCsv(read('card-library-v2.1.0.csv'));
  assert.deepEqual(jsonCards, BUILT_IN_CARDS);
  assert.equal(rows[0].at(-1), 'hint');
  assert.equal(rows.length, BUILT_IN_CARDS.length + 1);
  assert.equal(new Set(BUILT_IN_CARDS.map((card) => card.hint)).size, BUILT_IN_CARDS.length);
  for (const [index, card] of BUILT_IN_CARDS.entries()) {
    assert.ok(card.hint && card.hint.trim().split(/\s+/).length <= 10, `${card.target}: missing or long hint`);
    assert.equal(rows[index + 1][0], card.id);
    assert.equal(rows[index + 1].at(-1), card.hint);
    for (const word of [card.target, ...card.forbidden]) {
      const literal = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      assert.doesNotMatch(card.hint, new RegExp(`(^|[^a-z0-9])${literal}(?=$|[^a-z0-9])`, 'i'), `${card.target}: hint contains ${word}`);
    }
  }
});

test('mentor sends tailored hints and preserves older custom card explanations', async () => {
  const script = read('assets/admin.js');
  const cleanSource = script.slice(script.indexOf('function cleanCard'), script.indexOf('function chooseCard'));
  const cleanCard = vm.runInNewContext(`${cleanSource}; cleanCard`, { forbiddenCount });
  assert.equal(cleanCard(BUILT_IN_CARDS[0], 'intermediate').hint, BUILT_IN_CARDS[0].hint);
  assert.equal(cleanCard({ ...BUILT_IN_CARDS[0], hint: '' }, 'intermediate').hint, BUILT_IN_CARDS[0].explanation);

  let saved;
  const importSource = script.slice(script.indexOf('async function importCustomCards'), script.indexOf('async function handleSignedIn'));
  const importCustomCards = vm.runInNewContext(`${importSource}; importCustomCards`, {
    parseCsv, isOneOrTwoWords: () => true, crypto: { randomUUID: () => 'test' },
    customCards: () => [], saveCustomCards: (cards) => { saved = cards; }, $: () => ({})
  });
  const csv = 'target,theme,forbidden_words,explanation,hint\nOld,everyday,a;b;c;d,Old explanation\nNew,everyday,a;b;c;d,New explanation,New clue';
  await importCustomCards({ target: { files: [{ text: async () => csv }], value: 'file.csv' } });
  assert.equal(saved.length, 2);
  assert.equal(cleanCard(saved[0], 'beginner').hint, 'Old explanation');
  assert.equal(cleanCard(saved[1], 'beginner').hint, 'New clue');
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

test('mentor can reveal only forbidden words without exposing the target', () => {
  const elements = new Map();
  const element = (id) => {
    if (!elements.has(id)) {
      const classes = new Set();
      elements.set(id, {
        textContent: '', disabled: false, value: '', dataset: {}, attributes: {}, handlers: {},
        classList: {
          toggle(name, force) { if (force) classes.add(name); else classes.delete(name); },
          contains: (name) => classes.has(name), add: (name) => classes.add(name), remove: (name) => classes.delete(name)
        },
        setAttribute(name, value) { this.attributes[name] = value; },
        addEventListener(name, handler) { this.handlers[name] = handler; },
        replaceChildren(...children) { this.children = children; }
      });
    }
    return elements.get(id);
  };
  const state = {
    id: 'session', card_index: 1, status: 'active', phase: 'active', engineer_name: 'Alex',
    mode: 'everyday', difficulty: 'beginner', timer_seconds: 30, timer_remaining: 30,
    score_correct: 0, score_skip: 0, score_taboo: 0, observations: [], review: {},
    current_card: { target: 'Secret', category: 'Example', forbidden: ['First', 'Second'], explanation: 'Secret explanation' }
  };
  const context = vm.createContext({
    document: { getElementById: element, querySelectorAll: () => [], createElement: () => ({}) },
    location: { origin: 'http://localhost', pathname: '/admin.html' }, state,
    THEME_LABELS: { everyday: 'Everyday' }, DIFFICULTY_LABELS: { beginner: 'Beginner' }, formatTimer, updateTimerAlert,
    setAnimatedVisibility(target, visible) { target.classList.toggle('is-hidden', !visible); }, celebrate() {}
  });
  const script = read('assets/admin.js').replace(/^import .*;\r?\n/gm, '').replace(/\ninit\(\);\s*$/, '');
  vm.runInContext(`${script}\nwireEvents(); activeSession = state; renderSession();`, context);
  const click = (id) => element(id).handlers.click();
  const hidden = (id) => element(id).classList.contains('is-hidden');
  click('toggleForbidden');
  assert.equal(hidden('revealedCard'), false);
  assert.equal(hidden('cardTarget'), true);
  assert.equal(hidden('cardCategory'), true);
  assert.equal(hidden('modelBox'), true);
  assert.deepEqual(element('forbiddenWords').children.map((child) => child.textContent), ['First', 'Second']);
  click('toggleWords');
  assert.equal(hidden('cardTarget'), false);
  assert.equal(hidden('modelBox'), false);
  click('toggleForbidden');
  assert.equal(hidden('cardTarget'), true);
  click('toggleForbidden');
  assert.equal(hidden('revealedCard'), true);
  click('toggleForbidden');
  vm.runInContext('activeSession = { ...activeSession, card_index: 2 }; renderSession();', context);
  assert.equal(hidden('revealedCard'), true, 'A new card must be hidden by default.');
  assert.equal(element('toggleForbidden').attributes['aria-pressed'], 'false');
  vm.runInContext("activeSession = { ...activeSession, phase: 'waiting' }; renderSession();", context);
  assert.equal(element('toggleForbidden').disabled, true);
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
  assert.match(engineerScript, /card\.timer_visible === true/);
  assert.match(engineerScript, /if \(card\.clue\) \$\('engineerClueText'\)\.textContent = card\.clue/);
  assert.match(engineerScript, /card-flip/);
  assert.match(styles, /@keyframes taboo-card-flip/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(migration, /create or replace function public\.get_public_session_state/);
  for (const sql of [schema, v1Upgrade, migration]) {
    const publicFunction = sql.slice(sql.indexOf('create function public.get_public_session_state') >= 0
      ? sql.indexOf('create function public.get_public_session_state')
      : sql.indexOf('create or replace function public.get_public_session_state'));
    assert.match(publicFunction, /when coalesce\(\(v_session\.current_card->>'clue_shown'\)::boolean, false\) then coalesce\(nullif\(v_session\.current_card->'hint'/);
    assert.match(publicFunction, /else 'null'::jsonb/);
    assert.match(publicFunction, /timer_visible.*false/);
    assert.doesNotMatch(publicFunction, /'difficulty', v_session\.difficulty/);
  }
  assert.doesNotMatch(engineerHtml, /id="engineerDifficulty"/);
  assert.match(engineerHtml, /class="engineer-meta"[\s\S]*id="engineerTimerCell"/);
  assert.match(styles, /@keyframes timer-pulse/);
});

test('timer shortcuts start, add time in order, and reject invalid input', async () => {
  const elements = new Map();
  const element = (id) => {
    if (!elements.has(id)) elements.set(id, { textContent: '', classList: { add() {}, remove() {} } });
    return elements.get(id);
  };
  let state = {
    id: 'test', card_index: 1, timer_seconds: 90, timer_remaining: 90, timer_running: false,
    current_card: { target: 'Word', clue_shown: true, timer_visible: false }
  };
  let tick;
  const client = {
    async rpc(name, parameters) {
      await new Promise((resolve) => setTimeout(resolve, 5));
      if (name === 'admin_patch_game_session') {
        state = { ...state, ...parameters.p_patch };
      } else {
        assert.equal(name, 'admin_advance_game_session');
        state = {
          ...state, card_index: state.card_index + 1, current_card: parameters.p_next_card,
          timer_remaining: state.timer_seconds, timer_running: parameters.p_next_card.timer_visible
        };
      }
      return { data: state, error: null };
    }
  };
  const context = vm.createContext({
    document: { getElementById: element }, client, initialState: state,
    setInterval(callback) { tick = callback; return 1; }, clearInterval() {},
    setTimeout, clearTimeout
  });
  const script = read('assets/admin.js').replace(/^import .*;\r?\n/gm, '').replace(/\ninit\(\);\s*$/, '');
  vm.runInContext(`${script}\nsupabaseClient = client; activeSession = initialState; adminToken = 'test'; renderSession = () => {}; chooseCard = () => ({ target: 'Next', forbidden: [] });`, context);
  await context.useTimerSeconds(30);
  assert.equal(state.timer_seconds, 30);
  assert.equal(state.timer_remaining, 30);
  assert.equal(state.timer_running, true);
  assert.equal(state.current_card.timer_visible, true);
  assert.equal(state.current_card.clue_shown, true);
  await Promise.all([context.useTimerSeconds(20), context.useTimerSeconds(10), tick()]);
  assert.equal(state.timer_remaining, 59);
  assert.equal(state.timer_seconds, 30);
  assert.equal(state.timer_running, true);
  await assert.rejects(context.useTimerSeconds(0), /whole number/);
  await assert.rejects(context.useTimerSeconds(1.5), /whole number/);
  assert.equal(state.timer_remaining, 59);
  const previousTick = tick;
  await Promise.all([context.drawCard(), previousTick()]);
  assert.equal(state.card_index, 2);
  assert.equal(state.timer_remaining, 30);
  assert.equal(state.timer_running, true);
  await tick();
  assert.equal(state.timer_remaining, 29, 'An old card tick must not stop the new timer.');
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
    timer_seconds: 90, score_correct: 0, current_card: { target: 'Word', forbidden: [] }
  };
  let submissions = 0;
  let celebrations = 0;
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
    client, updateTimerAlert, setAnimatedVisibility(element, visible) { element.classList.toggle('is-hidden', !visible); },
    celebrate() { celebrations += 1; }
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
  assert.equal(celebrations, 1, 'A successfully recorded guess celebrates immediately.');
  assert.match(element('engineerActionStatus').textContent, /Waiting for the mentor console/);
  assert.equal(element('engineerGuessed').disabled, true);
  state = { ...state, card_index: 2, pending_mentee_action: null, score_correct: 1 };
  context.render(state);
  context.render(state);
  assert.equal(celebrations, 1, 'The same correct result must not celebrate twice.');
  state = { ...state, card_index: 3, score_correct: 2 };
  context.render(state);
  assert.equal(celebrations, 2, 'A correct result from the mentor also celebrates.');
  assert.equal(element('engineerGuessed').disabled, false);
  assert.equal(element('engineerActionStatus').textContent, '');
  submitError = 'Could not record the result.';
  await context.submitAction('correct');
  assert.equal(element('engineerActionStatus').textContent, submitError);
  assert.equal(element('engineerGuessed').disabled, false);
});

test('engineer timer counts between updates and resynchronizes when paused or disconnected', async () => {
  const elements = new Map();
  const element = (id) => {
    if (!elements.has(id)) {
      const classes = new Set();
      elements.set(id, {
        textContent: '', disabled: false, style: {},
        classList: {
          toggle(name, active) { if (active) classes.add(name); else classes.delete(name); },
          add: (name) => classes.add(name), remove: (name) => classes.delete(name), contains: (name) => classes.has(name)
        },
        addEventListener() {}, replaceChildren() {}, setAttribute() {}
      });
    }
    return elements.get(id);
  };
  let now = 10000;
  const context = vm.createContext({
    document: {
      getElementById: element, createElement: () => element(Symbol()), createTextNode: (text) => text,
      querySelectorAll: () => [], fonts: { ready: Promise.resolve() }
    },
    window: { addEventListener() {} }, location: { search: '?s=11111111-1111-4111-8111-111111111111' },
    URLSearchParams, THEME_LABELS: {}, fitTextToWidth() {}, formatTimer,
    Date: { now: () => now }, updateTimerAlert, setAnimatedVisibility(element, visible) { element.classList.toggle('is-hidden', !visible); },
    celebrate() {},
    client: { async rpc() { return { error: { message: 'Offline' } }; } }
  });
  const script = read('assets/engineer.js').replace(/^import .*;\r?\n/gm, '').replace(/\ninit\(\);\s*$/, '');
  vm.runInContext(`${script}\nsupabaseClient = client;`, context);
  const state = {
    status: 'active', phase: 'active', card_index: 1, mode: 'everyday',
    timer_seconds: 30, timer_remaining: 30, timer_running: true,
    current_card: { target: 'Word', forbidden: [], timer_visible: true }
  };
  context.render(state);
  now += 1100;
  context.renderTimer();
  assert.equal(element('engineerTimer').textContent, '00:29');
  now += 1000;
  context.renderTimer();
  assert.equal(element('engineerTimer').textContent, '00:28');
  context.render({ ...state, timer_remaining: 25, timer_running: false });
  now += 2000;
  context.renderTimer();
  assert.equal(element('engineerTimer').textContent, '00:25');
  context.render({ ...state, timer_remaining: 15 });
  now += 2100;
  context.renderTimer();
  assert.equal(element('engineerTimer').textContent, '00:13');
  await context.fetchState();
  now += 2000;
  context.renderTimer();
  assert.equal(element('engineerTimer').textContent, '00:15');
  assert.equal(element('engineerConnection').textContent, 'Reconnecting…');
  context.render({ ...state, timer_remaining: 6 });
  now += 1000;
  context.renderTimer();
  assert.equal(element('engineerTimer').textContent, '00:05');
  assert.equal(element('engineerTimerCell').classList.contains('timer-warning'), true);
  now += 5000;
  context.renderTimer();
  assert.equal(element('engineerTimer').textContent, '00:00');
  assert.equal(element('engineerTimerCell').classList.contains('timer-ended'), true);
  context.render({ ...state, timer_remaining: 30 });
  assert.equal(element('engineerTimerCell').classList.contains('timer-ended'), false);
});

test('pages bypass old cached assets and revalidate future updates', () => {
  const config = read('netlify.toml');
  assert.match(config, /for = "\/assets\/\*"[\s\S]*Cache-Control = "public, max-age=0, must-revalidate"/);
  for (const page of ['index.html', 'admin.html', 'engineer.html']) {
    assert.match(read(page), /assets\/styles\.css\?v=\d+/);
  }
  for (const [page, script] of [['admin.html', 'admin.js'], ['engineer.html', 'engineer.js']]) {
    assert.match(read(page), new RegExp(`assets/${script.replace('.', '\\.')}\\?v=\\d+`));
    assert.match(read(`assets/${script}`), /\.\/common\.js\?v=\d+/);
    assert.match(read(`assets/${script}`), /\.\/cards\.js\?v=\d+/);
  }
});

test('mentee migration guards card outcomes and advances under a row lock', () => {
  const sql = read('supabase/upgrade-mentee-controls.sql');
  assert.match(sql, /p_action not in \('correct', 'taboo'\)/);
  assert.match(sql, /card_index = p_card_index and pending_mentee_action is null/);
  assert.match(sql, /for update;[\s\S]*v_session\.card_index is distinct from p_card_index/);
  assert.match(sql, /coalesce\(v_session\.pending_mentee_action, p_outcome\)/);
  assert.match(sql, /pending_mentee_action = null/);
  assert.match(sql, /timer_remaining = timer_seconds,\s*timer_running = timer_seconds > 0 and coalesce\(\(p_next_card->>'timer_visible'\)::boolean, false\)/);
  const publicFunction = sql.slice(sql.indexOf('create or replace function public.get_public_session_state'));
  assert.doesNotMatch(publicFunction, /'difficulty', v_session\.difficulty/);
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
  assert.match(publicFunction, /when coalesce\(\(v_session\.current_card->>'clue_shown'\)::boolean, false\) then coalesce\(nullif\(v_session\.current_card->'hint', 'null'::jsonb\), v_session\.current_card->'explanation'\)/);
  assert.match(publicFunction, /else 'null'::jsonb/);
});

test('Netlify function never exposes a secret key variable', () => {
  const config = read('netlify/functions/config.mjs');
  assert.match(config, /SUPABASE_PUBLISHABLE_KEY/);
  assert.doesNotMatch(config, /SERVICE_ROLE|SECRET_KEY/);
  assert.match(config, /cache-control.*no-store/);
});
