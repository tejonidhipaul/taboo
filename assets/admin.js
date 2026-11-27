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
let refreshHandle = null;
let refreshBusy = false;
let updateQueue = Promise.resolve();

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

function isOneOrTwoWords(value) {
  return value.trim().split(/\s+/).filter(Boolean).length <= 2;
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

function queueUpdate(work) {
  const result = updateQueue.then(work);
  updateQueue = result.catch(() => {});
  return result;
}

async function patchSession(patch, { quiet = false, cardIndex = ('current_card' in patch || 'timer_remaining' in patch || ('timer_running' in patch && !('status' in patch))) ? activeSession?.card_index : null } = {}) {
  try {
    await queueUpdate(async () => {
      if (!activeSession || !adminToken) throw new Error('The session is no longer available.');
      if (cardIndex !== null && activeSession.card_index !== cardIndex) throw new Error('The card changed before this update was applied.');
      activeSession = await rpc('admin_patch_game_session', {
        p_session_id: activeSession.id,
        p_admin_token: adminToken,
        p_patch: patch
      });
      renderSession({ preserveEdits: true });
    });
    if (!quiet) $('connectionStatus').textContent = 'Saved · engineer screen updated';
  } catch (error) {
    $('connectionStatus').textContent = 'Update failed';
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
  if (activeSession.timer_running) startLocalTimer();
  startSessionRefresh();
}

function engineerLink() {
  return `${location.origin}${location.pathname.replace(/admin\.html$/, '')}engineer.html?s=${encodeURIComponent(activeSession.id)}`;
}

function renderEngineerLink() {
  if (!activeSession) return;
  $('engineerLinkInput').value = engineerLink();
}

async function copyEngineerLink() {
  renderEngineerLink();
  const input = $('engineerLinkInput');
  input.focus();
  input.select();
  try {
    await navigator.clipboard.writeText(input.value);
    toast('Engineer link copied.');
    return;
  } catch {}
  try {
    if (document.execCommand('copy')) {
      toast('Engineer link copied.');
      return;
    }
  } catch {}
  toast('Link selected. Press Ctrl+C to copy it.');
}

function renderSession({ preserveEdits = false } = {}) {
  if (!activeSession) return;
  renderEngineerLink();
  $('liveTitle').textContent = `${activeSession.engineer_name || 'Engineer'} · ${THEME_LABELS[activeSession.mode] || activeSession.mode}`;
  if (!preserveEdits) {
    $('liveMode').value = activeSession.mode;
    $('liveDifficulty').value = activeSession.difficulty;
  }
  $('timerDisplay').textContent = activeSession.timer_seconds === 0 ? '∞' : formatTimer(activeSession.timer_remaining);
  $('scoreCorrect').textContent = activeSession.score_correct;
  $('scoreSkip').textContent = activeSession.score_skip;
  $('scoreTaboo').textContent = activeSession.score_taboo;
  const attempts = activeSession.score_correct + activeSession.score_skip + activeSession.score_taboo;
  $('successRate').textContent = `${attempts ? Math.round((activeSession.score_correct / attempts) * 100) : 0}%`;
  if (!preserveEdits) $('mentorNotes').value = activeSession.review?.notes || '';

  const selectedNotes = new Set(activeSession.observations || []);
  document.querySelectorAll('#observationChips button').forEach((button) => button.classList.toggle('active', selectedNotes.has(button.dataset.note)));

  const card = activeSession.current_card || {};
  const hasCard = Boolean(card.target);
  const waiting = activeSession.phase === 'waiting' && activeSession.status !== 'ended';
  const ended = activeSession.status === 'ended';
  const canPlay = hasCard && !waiting && !ended;
  $('mentorWaitingCard').classList.toggle('is-hidden', !waiting);
  $('startSession').classList.toggle('is-hidden', !waiting);
  $('startSession').disabled = !waiting;
  $('launchStatus').textContent = ended ? 'Session ended' : waiting ? `Waiting for ${activeSession.engineer_name || 'the engineer'}` : 'Session in progress';
  $('toggleWords').disabled = !canPlay;
  $('toggleClue').disabled = !canPlay;
  $('correctCard').disabled = !canPlay;
  $('skipCard').disabled = !canPlay;
  $('tabooCard').disabled = !canPlay;
  $('nextCard').disabled = !canPlay;
  $('hiddenCard').classList.toggle('is-hidden', waiting || (wordsRevealed && hasCard));
  $('revealedCard').classList.toggle('is-hidden', waiting || !wordsRevealed || !hasCard);
  $('toggleWords').textContent = wordsRevealed ? 'Hide words' : 'View words';
  $('toggleWords').setAttribute('aria-pressed', String(wordsRevealed));
  const clueShown = card.clue_shown === true;
  const engineerTimerVisible = card.timer_visible === true;
  $('toggleClue').textContent = clueShown ? 'Hide clue' : 'Show clue';
  $('toggleClue').setAttribute('aria-pressed', String(clueShown));
  $('toggleClue').disabled = !canPlay || !card.explanation;
  $('toggleEngineerTimer').textContent = engineerTimerVisible ? 'Hide timer' : 'Show timer';
  $('toggleEngineerTimer').setAttribute('aria-pressed', String(engineerTimerVisible));
  $('toggleEngineerTimer').disabled = !canPlay;
  if (hasCard) {
    $('cardCategory').textContent = `${card.category} · ${DIFFICULTY_LABELS[activeSession.difficulty]}`;
    $('cardTarget').textContent = card.target;
    $('forbiddenWords').replaceChildren(...card.forbidden.map((word) => Object.assign(document.createElement('span'), { textContent: word })));
    $('modelExplanation').textContent = card.explanation || 'Ask the engineer to explain the purpose, context and next step clearly.';
  }
  $('connectionStatus').textContent = activeSession.status === 'ended' ? 'Session ended' : 'Connected · changes sync live';
  $('endSession').disabled = ended;
  $('applyChallenge').disabled = ended || waiting;
  $('startTimer').disabled = !canPlay;
  $('pauseTimer').disabled = !canPlay;
  $('resetTimer').disabled = !canPlay;
}

async function drawCard(overrides = {}, outcome = null, expectedIndex = activeSession?.card_index) {
  await queueUpdate(async () => {
    if (!activeSession || !adminToken) throw new Error('The session is no longer available.');
    if (activeSession.card_index !== expectedIndex) throw new Error('The card has already changed.');
    const mode = overrides.mode || activeSession.mode;
    const difficulty = overrides.difficulty || activeSession.difficulty;
    const card = {
      ...chooseCard(mode, difficulty),
      clue_shown: false,
      timer_visible: activeSession.current_card?.timer_visible === true
    };
    activeSession = await rpc('admin_advance_game_session', {
      p_session_id: activeSession.id,
      p_admin_token: adminToken,
      p_card_index: expectedIndex,
      p_next_card: card,
      p_outcome: outcome,
      p_mode: mode,
      p_difficulty: difficulty
    });
    wordsRevealed = false;
    stopLocalTimer();
    renderSession({ preserveEdits: true });
  });
}

async function scoreAndAdvance(kind) {
  await drawCard({}, kind);
}

function onUpdate(id, handler) {
  $(id).addEventListener('click', (event) => {
    handler(event).catch((error) => {
      $('connectionStatus').textContent = 'Update failed';
      toast(error.message || 'The session could not be updated.');
    });
  });
}

function stopSessionRefresh() {
  if (refreshHandle) clearInterval(refreshHandle);
  refreshHandle = null;
}

function startSessionRefresh() {
  stopSessionRefresh();
  const sessionId = activeSession.id;
  async function refresh() {
    if (refreshBusy || !activeSession || activeSession.id !== sessionId) return;
    refreshBusy = true;
    try {
      await queueUpdate(async () => {
        if (!activeSession || activeSession.id !== sessionId) return;
        const data = await rpc('admin_get_game_session', { p_session_id: sessionId, p_admin_token: adminToken });
        if (!activeSession || activeSession.id !== sessionId) return;
        if (data.updated_at !== activeSession.updated_at) {
          activeSession = data;
          renderSession({ preserveEdits: true });
        }
      });
      if (activeSession?.id === sessionId && activeSession.pending_mentee_action) {
        await drawCard({}, null, activeSession.card_index);
      }
    } catch (error) {
      $('connectionStatus').textContent = `Session update failed: ${error.message || 'Check your connection.'}`;
    } finally { refreshBusy = false; }
  }
  refreshHandle = setInterval(refresh, 2000);
  refresh();
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
    if (!activeSession?.id) throw new Error('The session was created without an ID. Re-run the current Supabase upgrade script, then try again.');
    localStorage.setItem(sessionTokenKey(activeSession.id), adminToken);
    history.replaceState({}, '', `admin.html?s=${activeSession.id}`);
    showOnly('livePanel');
    wordsRevealed = false;
    renderSession();
    startSessionRefresh();
    toast('Session created. Share the link, then start when the engineer is ready.');
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
  const target = $('customTarget').value.trim();
  const forbidden = $('customForbidden').value.split(',').map((word) => word.trim()).filter(Boolean);
  if (forbidden.length < 4 || forbidden.length > 6) { $('customStatus').textContent = 'Enter between 4 and 6 forbidden words.'; return; }
  if (!target || !isOneOrTwoWords(target) || forbidden.some((word) => !isOneOrTwoWords(word))) { $('customStatus').textContent = 'Enter a target and keep it and every forbidden entry to one or two words.'; return; }
  const explanation = $('customExplanation').value.trim();
  if (!explanation) { $('customStatus').textContent = 'Enter a model explanation.'; return; }
  const cards = customCards();
  cards.push({
    id: `custom-${crypto.randomUUID()}`,
    target,
    theme: $('customTheme').value,
    category: 'Custom card',
    level: 'intermediate',
    forbidden,
    explanation
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
      if (!row[0]?.trim() || !isOneOrTwoWords(row[0]) || forbidden.some((word) => !isOneOrTwoWords(word)) || !['everyday', 'technical', 'customer'].includes(row[1]?.trim()) || forbidden.length < 4 || !row[3]?.trim()) return null;
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
  stopSessionRefresh();
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
  $('toggleWords').addEventListener('click', () => { wordsRevealed = !wordsRevealed; renderSession({ preserveEdits: true }); });
  onUpdate('toggleClue', () => patchSession({ current_card: { ...activeSession.current_card, clue_shown: activeSession.current_card.clue_shown !== true } }));
  onUpdate('toggleEngineerTimer', () => patchSession({ current_card: { ...activeSession.current_card, timer_visible: activeSession.current_card.timer_visible !== true } }));
  onUpdate('nextCard', () => drawCard());
  onUpdate('correctCard', () => scoreAndAdvance('correct'));
  onUpdate('skipCard', () => scoreAndAdvance('skip'));
  onUpdate('tabooCard', () => scoreAndAdvance('taboo'));
  onUpdate('applyChallenge', () => drawCard({ mode: $('liveMode').value, difficulty: $('liveDifficulty').value }));
  $('engineerLinkInput').addEventListener('click', (event) => event.target.select());
  $('copyLink').addEventListener('click', copyEngineerLink);
  $('startSession').addEventListener('click', async () => {
    const button = $('startSession');
    setBusy(button, true, 'Starting…');
    try {
      await drawCard();
      toast('Session started. The first card is now visible to the engineer.');
    } catch (error) {
      toast(error.message || 'The session could not be started.');
    } finally {
      setBusy(button, false, 'Starting…');
    }
  });
  onUpdate('startTimer', async () => {
    if (activeSession.timer_seconds === 0) { toast('This is an untimed coaching session.'); return; }
    if (activeSession.timer_remaining <= 0) activeSession.timer_remaining = activeSession.timer_seconds;
    await patchSession({ timer_running: true, timer_remaining: activeSession.timer_remaining });
    startLocalTimer();
  });
  onUpdate('pauseTimer', async () => { stopLocalTimer(); await patchSession({ timer_running: false }); });
  onUpdate('resetTimer', async () => { stopLocalTimer(); await patchSession({ timer_running: false, timer_remaining: activeSession.timer_seconds }); });
  onUpdate('endSession', async () => {
    if (!confirm('End this live session? The engineer will see a completion screen.')) return;
    stopLocalTimer();
    await patchSession({ status: 'ended', phase: 'ended', timer_running: false });
    stopSessionRefresh();
    toast('Session ended. You can still export the summary.');
  });
  onUpdate('observationChips', async (event) => {
    const button = event.target.closest('button[data-note]');
    if (!button) return;
    const notes = new Set(activeSession.observations || []);
    notes.has(button.dataset.note) ? notes.delete(button.dataset.note) : notes.add(button.dataset.note);
    await patchSession({ observations: [...notes] }, { quiet: true });
  });
  onUpdate('saveNotes', async () => {
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
