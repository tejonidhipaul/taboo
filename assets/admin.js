import { BUILT_IN_CARDS, THEME_LABELS, DIFFICULTY_LABELS, forbiddenCount, eligibleCards } from './cards.js';
import { createSupabaseClient, randomToken, formatTimer, csvEscape, downloadText, parseCsv, safeFilePart } from './common.js';

const $ = (id) => document.getElementById(id);
const CUSTOM_KEY = 'say-it-custom-cards-v2';
let supabaseClient;
let activeSession = null;
let adminToken = '';
let wordsRevealed = false;
let timerHandle = null;
let tickBusy = false;
let usedCardIds = new Set();

function showOnly(panel) {
  ['loadingPanel', 'authPanel', 'setupPanel', 'livePanel'].forEach((id) => $(id).classList.toggle('is-hidden', id !== panel));
}

function toast(message) {
  $('toast').textContent = message;
  $('toast').classList.add('show');
  clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => $('toast').classList.remove('show'), 2600);
}

function setBusy(button, busy, busyText) {
  if (!button.dataset.label) button.dataset.label = button.textContent;
  button.disabled = busy;
  button.textContent = busy ? busyText : button.dataset.label;
}

function customCards() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

function saveCustomCards(cards) {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(cards));
  renderCustomCount();
}

function allCards() { return [...BUILT_IN_CARDS, ...customCards()]; }

function renderCustomCount() {
  const count = customCards().length;
  $('customCount').textContent = `${count} custom card${count === 1 ? '' : 's'}`;
}

function cleanCard(card, difficulty) {
  return {
    id: card.id,
    target: card.target,
    theme: card.theme,
    category: card.category || 'Custom card',
    level: card.level || difficulty,
    forbidden: card.forbidden.slice(0, forbiddenCount(difficulty)),
    explanation: card.explanation
  };
}

function chooseCard(theme, difficulty) {
  let pool = eligibleCards(allCards(), theme);
  if (!pool.length) throw new Error('No cards are available for this theme.');
  let available = pool.filter((card) => !usedCardIds.has(card.id));
  if (!available.length) { usedCardIds.clear(); available = pool; }
  const card = available[Math.floor(Math.random() * available.length)];
  usedCardIds.add(card.id);
  return cleanCard(card, difficulty);
}

async function rpc(name, parameters) {
  const { data, error } = await supabaseClient.rpc(name, parameters);
  if (error) throw error;
  return data;
}

async function patchSession(patch, { quiet = false } = {}) {
  if (!activeSession || !adminToken) return;
  try {
    const data = await rpc('admin_patch_game_session', {
      p_session_id: activeSession.id,
      p_admin_token: adminToken,
      p_patch: patch
    });
    activeSession = data;
    renderSession();
    if (!quiet) $('connectionStatus').textContent = 'Saved · engineer screen updated';
  } catch (error) {
    $('connectionStatus').textContent = 'Update failed';
    if (!quiet) toast(error.message || 'The session could not be updated.');
    throw error;
  }
}

function sessionTokenKey(id) { return `say-it-admin-token-${id}`; }

async function loadSession(id) {
  adminToken = localStorage.getItem(sessionTokenKey(id)) || '';
  if (!adminToken) throw new Error('This browser does not have the control key for that session. Create a new session here.');
  activeSession = await rpc('admin_get_game_session', { p_session_id: id, p_admin_token: adminToken });
  const currentId = activeSession.current_card?.id;
  if (currentId) usedCardIds.add(currentId);
  wordsRevealed = false;
  showOnly('livePanel');
  renderSession();
}

function engineerLink() {
  return `${location.origin}${location.pathname.replace(/admin\.html$/, '')}engineer.html?s=${encodeURIComponent(activeSession.id)}`;
}

function renderSession() {
  if (!activeSession) return;
  $('liveTitle').textContent = `${activeSession.engineer_name || 'Engineer'} · ${THEME_LABELS[activeSession.mode] || activeSession.mode}`;
  $('liveMode').value = activeSession.mode;
  $('liveDifficulty').value = activeSession.difficulty;
  $('timerDisplay').textContent = activeSession.timer_seconds === 0 ? '∞' : formatTimer(activeSession.timer_remaining);
  $('scoreCorrect').textContent = activeSession.score_correct;
  $('scoreSkip').textContent = activeSession.score_skip;
  $('scoreTaboo').textContent = activeSession.score_taboo;
  const attempts = activeSession.score_correct + activeSession.score_skip + activeSession.score_taboo;
  $('successRate').textContent = `${attempts ? Math.round((activeSession.score_correct / attempts) * 100) : 0}%`;
  $('mentorNotes').value = activeSession.review?.notes || '';

  const selectedNotes = new Set(activeSession.observations || []);
  document.querySelectorAll('#observationChips button').forEach((button) => button.classList.toggle('active', selectedNotes.has(button.dataset.note)));

  const card = activeSession.current_card || {};
  const hasCard = Boolean(card.target);
  $('toggleWords').disabled = !hasCard;
  $('correctCard').disabled = !hasCard;
  $('skipCard').disabled = !hasCard;
  $('tabooCard').disabled = !hasCard;
  $('hiddenCard').classList.toggle('is-hidden', wordsRevealed && hasCard);
  $('revealedCard').classList.toggle('is-hidden', !wordsRevealed || !hasCard);
  $('toggleWords').textContent = wordsRevealed ? 'Hide words' : 'View words';
  $('toggleWords').setAttribute('aria-pressed', String(wordsRevealed));
  if (hasCard) {
    $('cardCategory').textContent = `${card.category} · ${DIFFICULTY_LABELS[activeSession.difficulty]}`;
    $('cardTarget').textContent = card.target;
    $('forbiddenWords').replaceChildren(...card.forbidden.map((word) => Object.assign(document.createElement('span'), { textContent: word })));
    $('modelExplanation').textContent = card.explanation || 'Ask the engineer to explain the purpose, context and next step clearly.';
  }
  $('connectionStatus').textContent = activeSession.status === 'ended' ? 'Session ended' : 'Connected · changes sync live';
  const ended = activeSession.status === 'ended';
  document.querySelectorAll('#livePanel button').forEach((button) => {
    if (!['exportSummary', 'copyLink', 'signOut'].includes(button.id)) button.disabled = ended || button.disabled;
  });
}

async function drawCard(overrides = {}) {
  const mode = overrides.mode || activeSession.mode;
  const difficulty = overrides.difficulty || activeSession.difficulty;
  const card = chooseCard(mode, difficulty);
  wordsRevealed = false;
  await patchSession({
    mode,
    difficulty,
    current_card: card,
    card_index: Number(activeSession.card_index || 0) + 1,
    phase: 'active',
    timer_remaining: activeSession.timer_seconds,
    timer_running: false
  });
  stopLocalTimer();
}

async function scoreAndAdvance(kind) {
  const key = `score_${kind}`;
  const nextScore = Number(activeSession[key] || 0) + 1;
  await patchSession({ [key]: nextScore });
  await drawCard();
}

function stopLocalTimer() {
  if (timerHandle) clearInterval(timerHandle);
  timerHandle = null;
  tickBusy = false;
}

function startLocalTimer() {
  stopLocalTimer();
  timerHandle = setInterval(async () => {
    if (tickBusy || !activeSession?.timer_running) return;
    const remaining = Math.max(0, Number(activeSession.timer_remaining) - 1);
    activeSession.timer_remaining = remaining;
    $('timerDisplay').textContent = formatTimer(remaining);
    tickBusy = true;
    try {
      await patchSession({ timer_remaining: remaining, timer_running: remaining > 0 }, { quiet: true });
      if (remaining === 0) { stopLocalTimer(); toast('Time is up.'); }
    } catch { stopLocalTimer(); }
    finally { tickBusy = false; }
  }, 1000);
}

async function createLiveSession(event) {
  event.preventDefault();
  const button = $('createSession');
  setBusy(button, true, 'Creating…');
  $('setupError').textContent = '';
  try {
    adminToken = randomToken();
    activeSession = await rpc('create_game_session', {
      p_admin_token: adminToken,
      p_difficulty: $('difficulty').value,
      p_engineer_name: $('engineerName').value.trim(),
      p_mode: $('mode').value,
      p_timer_seconds: Number($('timerSeconds').value)
    });
    localStorage.setItem(sessionTokenKey(activeSession.id), adminToken);
    history.replaceState({}, '', `admin.html?s=${activeSession.id}`);
    showOnly('livePanel');
    await drawCard();
    toast('Session created. Share the engineer link when ready.');
  } catch (error) {
    $('setupError').textContent = error.message || 'Could not create the session.';
    activeSession = null;
    adminToken = '';
  } finally { setBusy(button, false, 'Creating…'); }
}

function escapeCsvRows(rows) { return rows.map((row) => row.map(csvEscape).join(',')).join('\n'); }

function exportSummary() {
  const rows = [
    ['Say It! mentoring summary'],
    ['Engineer', activeSession.engineer_name],
    ['Session ID', activeSession.id],
    ['Created', activeSession.created_at],
    ['Theme', THEME_LABELS[activeSession.mode]],
    ['Difficulty', DIFFICULTY_LABELS[activeSession.difficulty]],
    ['Correct', activeSession.score_correct],
    ['Skipped', activeSession.score_skip],
    ['Taboo', activeSession.score_taboo],
    ['Observations', (activeSession.observations || []).join('; ')],
    ['Mentor notes', activeSession.review?.notes || '']
  ];
  downloadText(`say-it-${safeFilePart(activeSession.engineer_name)}-${new Date().toISOString().slice(0, 10)}.csv`, `\ufeff${escapeCsvRows(rows)}`, 'text/csv;charset=utf-8');
}

function addCustomCard(event) {
  event.preventDefault();
  const forbidden = $('customForbidden').value.split(',').map((word) => word.trim()).filter(Boolean);
  if (forbidden.length < 4 || forbidden.length > 6) { $('customStatus').textContent = 'Enter between 4 and 6 forbidden words.'; return; }
  const cards = customCards();
  cards.push({
    id: `custom-${crypto.randomUUID()}`,
    target: $('customTarget').value.trim(),
    theme: $('customTheme').value,
    category: 'Custom card',
    level: 'intermediate',
    forbidden,
    explanation: $('customExplanation').value.trim()
  });
  saveCustomCards(cards);
  $('customCardForm').reset();
  $('customStatus').textContent = 'Custom card added.';
}

function exportCustomCards() {
  const rows = [['target', 'theme', 'forbidden_words', 'explanation'], ...customCards().map((card) => [card.target, card.theme, card.forbidden.join(';'), card.explanation])];
  downloadText('say-it-custom-cards.csv', `\ufeff${escapeCsvRows(rows)}`, 'text/csv;charset=utf-8');
}

async function importCustomCards(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const rows = parseCsv(await file.text());
    const body = rows[0]?.[0]?.toLowerCase() === 'target' ? rows.slice(1) : rows;
    const imported = body.map((row) => {
      const forbidden = String(row[2] || '').split(/[;|]/).map((word) => word.trim()).filter(Boolean).slice(0, 6);
      if (!row[0]?.trim() || !['everyday', 'technical', 'customer'].includes(row[1]?.trim()) || forbidden.length < 4 || !row[3]?.trim()) return null;
      return { id: `custom-${crypto.randomUUID()}`, target: row[0].trim(), theme: row[1].trim(), category: 'Custom card', level: 'intermediate', forbidden, explanation: row[3].trim() };
    }).filter(Boolean);
    saveCustomCards([...customCards(), ...imported]);
    $('customStatus').textContent = `${imported.length} card${imported.length === 1 ? '' : 's'} imported.`;
  } catch (error) { $('customStatus').textContent = error.message || 'Could not import this CSV.'; }
  event.target.value = '';
}

async function handleSignedIn(user) {
  $('accountEmail').textContent = user.email || 'Mentor';
  $('accountBar').classList.remove('is-hidden');
  const id = new URLSearchParams(location.search).get('s');
  if (id) {
    try { await loadSession(id); }
    catch (error) { toast(error.message); history.replaceState({}, '', 'admin.html'); showOnly('setupPanel'); }
  } else showOnly('setupPanel');
}

function handleSignedOut() {
  stopLocalTimer();
  activeSession = null;
  adminToken = '';
  $('accountBar').classList.add('is-hidden');
  showOnly('authPanel');
}

function wireEvents() {
  $('signInForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    $('authError').textContent = '';
    setBusy($('signInButton'), true, 'Signing in…');
    const { error } = await supabaseClient.auth.signInWithPassword({ email: $('email').value.trim(), password: $('password').value });
    if (error) $('authError').textContent = error.message;
    setBusy($('signInButton'), false, 'Signing in…');
  });
  $('signOut').addEventListener('click', async () => { await supabaseClient.auth.signOut(); history.replaceState({}, '', 'admin.html'); });
  $('sessionForm').addEventListener('submit', createLiveSession);
  $('toggleWords').addEventListener('click', () => { wordsRevealed = !wordsRevealed; renderSession(); });
  $('nextCard').addEventListener('click', () => drawCard());
  $('correctCard').addEventListener('click', () => scoreAndAdvance('correct'));
  $('skipCard').addEventListener('click', () => scoreAndAdvance('skip'));
  $('tabooCard').addEventListener('click', () => scoreAndAdvance('taboo'));
  $('applyChallenge').addEventListener('click', () => drawCard({ mode: $('liveMode').value, difficulty: $('liveDifficulty').value }));
  $('copyLink').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(engineerLink()); toast('Engineer link copied.'); }
    catch { prompt('Copy this engineer link:', engineerLink()); }
  });
  $('startTimer').addEventListener('click', async () => {
    if (activeSession.timer_seconds === 0) { toast('This is an untimed coaching session.'); return; }
    if (activeSession.timer_remaining <= 0) activeSession.timer_remaining = activeSession.timer_seconds;
    await patchSession({ timer_running: true, timer_remaining: activeSession.timer_remaining });
    startLocalTimer();
  });
  $('pauseTimer').addEventListener('click', async () => { stopLocalTimer(); await patchSession({ timer_running: false }); });
  $('resetTimer').addEventListener('click', async () => { stopLocalTimer(); await patchSession({ timer_running: false, timer_remaining: activeSession.timer_seconds }); });
  $('endSession').addEventListener('click', async () => {
    if (!confirm('End this live session? The engineer will see a completion screen.')) return;
    stopLocalTimer();
    await patchSession({ status: 'ended', phase: 'ended', timer_running: false });
    toast('Session ended. You can still export the summary.');
  });
  $('observationChips').addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-note]');
    if (!button) return;
    const notes = new Set(activeSession.observations || []);
    notes.has(button.dataset.note) ? notes.delete(button.dataset.note) : notes.add(button.dataset.note);
    await patchSession({ observations: [...notes] }, { quiet: true });
  });
  $('saveNotes').addEventListener('click', async () => {
    await patchSession({ review: { ...(activeSession.review || {}), notes: $('mentorNotes').value.trim() } }, { quiet: true });
    $('saveStatus').textContent = 'Saved';
    setTimeout(() => { $('saveStatus').textContent = ''; }, 1800);
  });
  $('exportSummary').addEventListener('click', exportSummary);
  $('customCardForm').addEventListener('submit', addCustomCard);
  $('exportCards').addEventListener('click', exportCustomCards);
  $('importCsv').addEventListener('change', importCustomCards);
  $('clearCards').addEventListener('click', () => {
    if (confirm('Delete every custom card stored in this browser?')) { saveCustomCards([]); $('customStatus').textContent = 'Custom cards cleared.'; }
  });
}

async function init() {
  wireEvents();
  renderCustomCount();
  try {
    supabaseClient = await createSupabaseClient();
    supabaseClient.auth.onAuthStateChange((_event, authSession) => {
      setTimeout(() => authSession?.user ? handleSignedIn(authSession.user) : handleSignedOut(), 0);
    });
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    if (data.session?.user) await handleSignedIn(data.session.user);
    else handleSignedOut();
  } catch (error) {
    showOnly('authPanel');
    $('authError').textContent = error.message || 'The mentor console could not connect.';
    $('signInButton').disabled = true;
  }
}

init();
