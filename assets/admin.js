import { BUILT_IN_CARDS } from './cards.js';
import {
  getSupabase, randomToken, parseAdminHash, formatTime, modeLabel, difficultyLabel,
  timerFor, forbiddenCount, shuffle, csvEscape, downloadText, showToast, safeFileName
} from './common.js';

const HISTORY_KEY = 'sayit-session-history-v1';
const CUSTOM_KEY = 'sayit-custom-cards-v1';
const els = Object.fromEntries([...document.querySelectorAll('[id]')].map(el => [el.id, el]));
let supabase;
let sessionId;
let adminToken;
let state;
let channel;
let deck = [];
let timerInterval;
let expiring = false;
let customCards = loadJson(CUSTOM_KEY, []);

function loadJson(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}
function saveJson(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

function setLive(text, kind = 'neutral') {
  els.liveStatus.className = `status-chip ${kind}`;
  els.liveStatus.innerHTML = '<span class="status-dot"></span>' + text;
}
function showConfigError(message) {
  els.configError.textContent = message;
  els.configError.classList.remove('hidden');
}
function setBusy(button, busy, busyText = 'Working…') {
  if (!button) return;
  if (busy) { button.dataset.label = button.textContent; button.textContent = busyText; }
  else if (button.dataset.label) button.textContent = button.dataset.label;
  button.disabled = busy;
}

function getHistory() { return loadJson(HISTORY_KEY, []); }
function saveHistory(entry) {
  const history = getHistory().filter(item => item.id !== entry.id);
  history.unshift(entry);
  saveJson(HISTORY_KEY, history.slice(0, 12));
  renderHistory();
}
function renderHistory() {
  const history = getHistory();
  els.historyList.replaceChildren();
  if (!history.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-history';
    empty.textContent = 'Your reusable admin links will appear here.';
    els.historyList.append(empty);
    return;
  }
  history.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = 'history-item';
    const title = document.createElement('b'); title.textContent = item.engineer || 'Mentoring session';
    const meta = document.createElement('small');
    meta.textContent = `${modeLabel(item.mode)} · ${new Date(item.createdAt).toLocaleDateString()}`;
    const button = document.createElement('button');
    button.className = 'btn btn-secondary'; button.type = 'button'; button.textContent = 'Open mentor console';
    button.addEventListener('click', () => { location.hash = `session=${item.id}&key=${item.token}`; location.reload(); });
    wrapper.append(title, meta, button);
    els.historyList.append(wrapper);
  });
}

function allCards() { return [...BUILT_IN_CARDS, ...customCards]; }
function resetDeck() {
  const pool = allCards().filter(card => {
    const modeMatch = state.mode === 'mixed' || card.mode === state.mode;
    return modeMatch && card.difficulty === state.difficulty;
  });
  deck = shuffle(pool);
}
function drawCard() {
  if (!deck.length) resetDeck();
  const selected = deck.pop();
  if (!selected) throw new Error('No cards match this setup. Add a custom card or select another mode.');
  return {
    id: selected.id,
    target: selected.target,
    forbidden: selected.forbidden.slice(0, forbiddenCount(state.difficulty)),
    example: selected.example,
    category: selected.category,
    mode: selected.mode,
    difficulty: selected.difficulty
  };
}

async function broadcastChange() {
  if (!channel) return;
  try { await channel.send({ type: 'broadcast', event: 'state_changed', payload: { at: Date.now() } }); } catch { /* polling is the fallback */ }
}
async function patch(patchData, { broadcast = true } = {}) {
  const { data, error } = await supabase.rpc('admin_patch_game_session', {
    p_session_id: sessionId,
    p_admin_token: adminToken,
    p_patch: patchData
  });
  if (error) throw error;
  state = data;
  renderGame();
  if (broadcast) await broadcastChange();
  return data;
}

function timerRemaining() {
  if (!state || !state.timer_seconds) return 0;
  if (state.timer_running && state.round_ends_at) {
    return Math.max(0, Math.ceil((new Date(state.round_ends_at).getTime() - Date.now()) / 1000));
  }
  return Math.max(0, state.time_remaining || 0);
}
function startTimerLoop() {
  clearInterval(timerInterval);
  timerInterval = setInterval(async () => {
    if (!state || state.status !== 'playing' || !state.timer_seconds) return;
    const remaining = timerRemaining();
    renderTimer(remaining);
    if (state.timer_running && remaining <= 0 && !expiring) {
      expiring = true;
      try {
        await patch({ status: 'paused', timer_running: false, time_remaining: 0, round_ends_at: null });
        showToast('Time is up — score the card or continue.');
      } catch (error) { showToast(error.message); }
      finally { expiring = false; }
    }
  }, 250);
}
function renderTimer(remaining = timerRemaining()) {
  if (!state?.timer_seconds) {
    els.timerDisplay.textContent = 'Untimed';
    els.timerDisplay.classList.remove('warning');
    els.pauseButton.disabled = true;
    els.restartTimerButton.disabled = true;
    return;
  }
  els.timerDisplay.textContent = formatTime(remaining);
  els.timerDisplay.classList.toggle('warning', remaining <= 10);
  els.pauseButton.disabled = false;
  els.restartTimerButton.disabled = false;
  els.pauseButton.textContent = state.timer_running ? 'Pause' : 'Resume';
}

function renderGame() {
  if (!state) return;
  els.setupView.classList.add('hidden');
  els.gameView.classList.remove('hidden');
  els.sessionTitle.textContent = state.engineer_name;
  els.modeBadge.textContent = modeLabel(state.mode);
  els.difficultyBadge.textContent = `${difficultyLabel(state.difficulty)}${state.timer_seconds ? ` · ${state.timer_seconds}s` : ' · Untimed'}`;
  els.engineerLink.value = `${location.origin}/engineer.html?s=${sessionId}`;
  els.correctScore.textContent = state.score_correct;
  els.skippedScore.textContent = state.score_skipped;
  els.tabooScore.textContent = state.score_taboo;
  els.successRate.textContent = state.cards_attempted ? `${Math.round((state.score_correct / state.cards_attempted) * 100)}%` : '—';
  els.cardCounter.textContent = state.card_index || 0;

  const hasCard = Boolean(state.current_card) && !['ended', 'review'].includes(state.status);
  els.cardEmpty.classList.toggle('hidden', hasCard || ['ended', 'review'].includes(state.status));
  els.cardContent.classList.toggle('hidden', !hasCard);
  if (hasCard) {
    const card = state.current_card;
    els.cardCategory.textContent = card.category;
    els.cardPromptLabel.textContent = card.mode === 'customer' ? 'Customer challenge' : 'Target word';
    els.targetWord.textContent = card.target;
    els.exampleText.textContent = card.example;
    els.forbiddenWords.replaceChildren(...(card.forbidden || []).map(word => {
      const span = document.createElement('span'); span.textContent = word; return span;
    }));
    renderTimer();
  } else if (state.status === 'waiting') {
    els.cardCategory.textContent = 'Waiting to start';
  } else {
    els.cardCategory.textContent = 'Session complete';
  }

  renderObservations();
  const ended = ['ended', 'review'].includes(state.status);
  els.reviewPanel.classList.toggle('hidden', !ended);
  els.endSessionButton.disabled = ended;
  if (ended) renderReview();
  startTimerLoop();
}

function renderObservations() {
  els.observationLog.replaceChildren();
  const observations = state?.observations || [];
  observations.slice().reverse().forEach((item, reverseIndex) => {
    const actualIndex = observations.length - 1 - reverseIndex;
    const row = document.createElement('div'); row.className = 'observation-entry';
    const text = document.createElement('span'); text.textContent = `${item.card ? `#${item.card} · ` : ''}${item.text}`;
    const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = '×'; remove.setAttribute('aria-label', 'Remove observation');
    remove.addEventListener('click', async () => {
      const next = observations.filter((_, index) => index !== actualIndex);
      try { await patch({ observations: next }, { broadcast: false }); } catch (error) { showToast(error.message); }
    });
    row.append(text, remove); els.observationLog.append(row);
  });
}

function renderReview() {
  const attempted = state.cards_attempted || 0;
  const rate = attempted ? Math.round(state.score_correct / attempted * 100) : 0;
  const values = [[attempted, 'Attempted'], [state.score_correct, 'Correct'], [state.score_taboo, 'Taboo'], [`${rate}%`, 'Success rate']];
  els.reviewSummary.replaceChildren(...values.map(([value, label]) => {
    const div = document.createElement('div');
    const strong = document.createElement('strong'); strong.textContent = value;
    const span = document.createElement('span'); span.textContent = label;
    div.append(strong, span); return div;
  }));
  const feedback = state.feedback || {};
  els.feedbackSentence.value = feedback.sentenceStructure || '';
  els.feedbackVocabulary.value = feedback.vocabulary || '';
  els.feedbackClarity.value = feedback.clarity || '';
  els.feedbackFluency.value = feedback.fluency || '';
  els.mentorNotes.value = feedback.notes || '';
}

async function presentNextCard(extraPatch = {}) {
  const card = drawCard();
  const duration = state.timer_seconds || 0;
  const patchData = {
    ...extraPatch,
    status: 'playing',
    current_card: card,
    card_index: (state.card_index || 0) + 1,
    timer_running: duration > 0,
    time_remaining: duration,
    round_ends_at: duration > 0 ? new Date(Date.now() + duration * 1000).toISOString() : null
  };
  await patch(patchData);
}
async function scoreAndNext(kind, button) {
  setBusy(button, true);
  try {
    const extra = { cards_attempted: (state.cards_attempted || 0) + 1 };
    if (kind === 'correct') extra.score_correct = (state.score_correct || 0) + 1;
    if (kind === 'skipped') extra.score_skipped = (state.score_skipped || 0) + 1;
    if (kind === 'taboo') extra.score_taboo = (state.score_taboo || 0) + 1;
    await presentNextCard(extra);
  } catch (error) { showToast(error.message); }
  finally { setBusy(button, false); }
}

async function connectChannel() {
  if (channel) await supabase.removeChannel(channel);
  channel = supabase.channel(`taboo:${sessionId}`, { config: { private: false, broadcast: { ack: true } } })
    .subscribe(status => {
      if (status === 'SUBSCRIBED') setLive('Live sync', 'success');
      else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') setLive('Reconnecting', 'warning');
    });
}
async function loadSession(id, token) {
  sessionId = id; adminToken = token;
  const { data, error } = await supabase.rpc('admin_get_game_session', { p_session_id: id, p_admin_token: token });
  if (error || !data) throw error || new Error('This admin link is invalid or the session no longer exists.');
  state = data;
  resetDeck();
  await connectChannel();
  renderGame();
}

async function createSession(event) {
  event.preventDefault();
  setBusy(els.createSessionButton, true, 'Creating session…');
  try {
    const engineer = els.engineerName.value.trim();
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    const seconds = timerFor(difficulty, els.untimedMode.checked);
    const token = randomToken();
    const { data, error } = await supabase.rpc('create_game_session', {
      p_admin_token: token,
      p_engineer_name: engineer,
      p_mode: mode,
      p_difficulty: difficulty,
      p_timer_seconds: seconds
    });
    if (error) throw error;
    saveHistory({ id: data, token, engineer, mode, createdAt: new Date().toISOString() });
    location.hash = `session=${data}&key=${token}`;
    await loadSession(data, token);
    showToast('Live session created. Share the engineer link.');
  } catch (error) { showConfigError(error.message); }
  finally { setBusy(els.createSessionButton, false); }
}

async function togglePause() {
  try {
    if (state.timer_running) {
      await patch({ status: 'paused', timer_running: false, time_remaining: timerRemaining(), round_ends_at: null });
    } else {
      const remaining = Math.max(1, state.time_remaining || state.timer_seconds);
      await patch({ status: 'playing', timer_running: true, time_remaining: remaining, round_ends_at: new Date(Date.now() + remaining * 1000).toISOString() });
    }
  } catch (error) { showToast(error.message); }
}
async function restartTimer() {
  try {
    const duration = state.timer_seconds;
    await patch({ status: 'playing', timer_running: true, time_remaining: duration, round_ends_at: new Date(Date.now() + duration * 1000).toISOString() });
  } catch (error) { showToast(error.message); }
}
async function endSession() {
  if (!confirm('End this game and open the mentoring review?')) return;
  try {
    await patch({ status: 'ended', current_card: null, timer_running: false, time_remaining: 0, round_ends_at: null });
    saveHistory({ id: sessionId, token: adminToken, engineer: state.engineer_name, mode: state.mode, createdAt: state.created_at });
    els.reviewPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (error) { showToast(error.message); }
}
async function addObservation(text) {
  const observations = [...(state.observations || []), { text, card: state.card_index || 0, at: new Date().toISOString() }];
  try { await patch({ observations }, { broadcast: false }); showToast('Observation added'); }
  catch (error) { showToast(error.message); }
}
async function saveFeedback() {
  const feedback = {
    sentenceStructure: els.feedbackSentence.value,
    vocabulary: els.feedbackVocabulary.value,
    clarity: els.feedbackClarity.value,
    fluency: els.feedbackFluency.value,
    notes: els.mentorNotes.value.trim(),
    savedAt: new Date().toISOString()
  };
  setBusy(els.saveFeedbackButton, true, 'Saving…');
  try {
    await patch({ feedback }, { broadcast: false });
    els.feedbackSaved.textContent = 'Saved';
    setTimeout(() => { els.feedbackSaved.textContent = ''; }, 2200);
  } catch (error) { showToast(error.message); }
  finally { setBusy(els.saveFeedbackButton, false); }
}
function exportSummary() {
  const feedback = state.feedback || {};
  const observations = (state.observations || []).map(item => `Card ${item.card}: ${item.text}`).join('; ');
  const headers = ['Engineer','Date','Mode','Difficulty','Timer seconds','Cards attempted','Correct','Skipped','Taboo','Success rate','Sentence structure','Vocabulary','Clarity','Fluency','Observations','Mentor notes'];
  const rate = state.cards_attempted ? Math.round(state.score_correct / state.cards_attempted * 100) : 0;
  const row = [state.engineer_name, state.created_at, modeLabel(state.mode), difficultyLabel(state.difficulty), state.timer_seconds, state.cards_attempted, state.score_correct, state.score_skipped, state.score_taboo, `${rate}%`, feedback.sentenceStructure, feedback.vocabulary, feedback.clarity, feedback.fluency, observations, feedback.notes];
  downloadText(`say-it-${safeFileName(state.engineer_name)}-${new Date().toISOString().slice(0,10)}.csv`, headers.map(csvEscape).join(',') + '\n' + row.map(csvEscape).join(','));
}

function renderCustomCards() {
  els.cardLibraryCount.textContent = `${BUILT_IN_CARDS.length} built-in · ${customCards.length} custom`;
  els.customCardList.replaceChildren();
  if (!customCards.length) {
    const empty = document.createElement('div'); empty.className = 'empty-history'; empty.textContent = 'No custom cards yet.'; els.customCardList.append(empty); return;
  }
  customCards.forEach(card => {
    const row = document.createElement('div'); row.className = 'custom-card-item';
    const info = document.createElement('div');
    const title = document.createElement('b'); title.textContent = card.target;
    const meta = document.createElement('p'); meta.textContent = `${modeLabel(card.mode)} · ${difficultyLabel(card.difficulty)} · ${card.forbidden.join(', ')}`;
    info.append(title, meta);
    const actions = document.createElement('div'); actions.className = 'custom-card-actions';
    const edit = document.createElement('button'); edit.type = 'button'; edit.textContent = 'Edit';
    edit.addEventListener('click', () => fillCustomForm(card));
    const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = 'Delete';
    remove.addEventListener('click', () => {
      if (!confirm(`Delete “${card.target}”?`)) return;
      customCards = customCards.filter(item => item.id !== card.id); saveJson(CUSTOM_KEY, customCards); renderCustomCards();
    });
    actions.append(edit, remove); row.append(info, actions); els.customCardList.append(row);
  });
}
function fillCustomForm(card = null) {
  els.customCardId.value = card?.id || '';
  els.customTarget.value = card?.target || '';
  els.customForbidden.value = card?.forbidden?.join(', ') || '';
  els.customMode.value = card?.mode || 'everyday';
  els.customDifficulty.value = card?.difficulty || 'beginner';
  els.customExample.value = card?.example || '';
  els.customTarget.focus();
}
function saveCustomCard(event) {
  event.preventDefault();
  const forbidden = els.customForbidden.value.split(',').map(item => item.trim()).filter(Boolean);
  if (forbidden.length < 3 || forbidden.length > 6) { showToast('Enter between 3 and 6 forbidden words.'); return; }
  const id = els.customCardId.value || `custom-${crypto.randomUUID()}`;
  const card = { id, target: els.customTarget.value.trim(), forbidden, example: els.customExample.value.trim(), category: 'Custom Cards', mode: els.customMode.value, difficulty: els.customDifficulty.value, custom: true };
  customCards = [...customCards.filter(item => item.id !== id), card];
  saveJson(CUSTOM_KEY, customCards); fillCustomForm(); renderCustomCards(); showToast('Custom card saved');
}
function exportCustomCards() {
  const headers = ['target','forbidden1','forbidden2','forbidden3','forbidden4','forbidden5','forbidden6','mode','difficulty','example'];
  const rows = customCards.map(card => [card.target, ...Array.from({length: 6}, (_, i) => card.forbidden[i] || ''), card.mode, card.difficulty, card.example]);
  downloadText('say-it-custom-cards.csv', [headers, ...rows].map(row => row.map(csvEscape).join(',')).join('\n'));
}
function parseCsv(text) {
  const rows = []; let row = []; let value = ''; let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"' && quoted && text[i + 1] === '"') { value += '"'; i += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === ',' && !quoted) { row.push(value); value = ''; }
    else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && text[i + 1] === '\n') i += 1;
      row.push(value); if (row.some(cell => cell.trim())) rows.push(row); row = []; value = '';
    } else value += char;
  }
  row.push(value); if (row.some(cell => cell.trim())) rows.push(row);
  return rows;
}
async function importCustomCards(file) {
  const rows = parseCsv(await file.text());
  if (rows.length < 2) throw new Error('The CSV has no card rows.');
  const headers = rows[0].map(value => value.trim().toLowerCase());
  const imported = rows.slice(1).map((row, index) => {
    const get = name => row[headers.indexOf(name)]?.trim() || '';
    const target = get('target');
    const forbidden = Array.from({length: 6}, (_, i) => get(`forbidden${i+1}`)).filter(Boolean);
    const mode = get('mode') || 'everyday'; const difficulty = get('difficulty') || 'beginner';
    if (!target || forbidden.length < 3 || !['everyday','technical','customer'].includes(mode) || !['beginner','intermediate','advanced'].includes(difficulty)) throw new Error(`Invalid card on CSV row ${index + 2}.`);
    return { id: `custom-${crypto.randomUUID()}`, target, forbidden, mode, difficulty, example: get('example') || `Explain ${target} using purpose, context, and result.`, category: 'Custom Cards', custom: true };
  });
  customCards = [...customCards, ...imported]; saveJson(CUSTOM_KEY, customCards); renderCustomCards(); showToast(`${imported.length} custom cards imported`);
}

function bindEvents() {
  els.setupForm.addEventListener('submit', createSession);
  els.copyLinkButton.addEventListener('click', async () => { await navigator.clipboard.writeText(els.engineerLink.value); showToast('Engineer link copied'); });
  els.startGameButton.addEventListener('click', async () => { try { await presentNextCard(); } catch (error) { showToast(error.message); } });
  els.nextCardButton.addEventListener('click', async () => { try { await presentNextCard(); } catch (error) { showToast(error.message); } });
  document.querySelectorAll('[data-score]').forEach(button => button.addEventListener('click', () => scoreAndNext(button.dataset.score, button)));
  els.pauseButton.addEventListener('click', togglePause);
  els.restartTimerButton.addEventListener('click', restartTimer);
  els.endSessionButton.addEventListener('click', endSession);
  els.observationButtons.addEventListener('click', event => { const button = event.target.closest('[data-observation]'); if (button) addObservation(button.dataset.observation); });
  els.saveFeedbackButton.addEventListener('click', saveFeedback);
  els.exportSummaryButton.addEventListener('click', exportSummary);
  els.newSessionButton.addEventListener('click', () => { location.href = 'admin.html'; });
  els.customCardsButton.addEventListener('click', () => { renderCustomCards(); els.customCardsDialog.showModal(); });
  els.customCardForm.addEventListener('submit', saveCustomCard);
  els.exportCardsButton.addEventListener('click', exportCustomCards);
  els.importCardsInput.addEventListener('change', async event => { try { if (event.target.files[0]) await importCustomCards(event.target.files[0]); } catch (error) { showToast(error.message); } finally { event.target.value = ''; } });
}

async function init() {
  bindEvents(); renderHistory(); renderCustomCards();
  try {
    supabase = await getSupabase();
    setLive('Ready', 'success');
    const hash = parseAdminHash();
    if (hash.sessionId && hash.token) await loadSession(hash.sessionId, hash.token);
  } catch (error) {
    setLive('Setup required', 'error');
    showConfigError(error.message);
    els.createSessionButton.disabled = true;
  }
}

init();
