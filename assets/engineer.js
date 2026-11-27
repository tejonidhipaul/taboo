import { THEME_LABELS, DIFFICULTY_LABELS } from './cards.js';
import { createSupabaseClient, fitTextToWidth, formatTimer } from './common.js';

const $ = (id) => document.getElementById(id);
const sessionId = new URLSearchParams(location.search).get('s');
let supabaseClient;
let pollHandle;
let fetching = false;
let lastState = null;
let lastCardIndex = null;
let submittingAction = false;
let waitingCardIndex = null;

function showOnly(panel) {
  ['engineerLoading', 'engineerError', 'engineerWaiting', 'engineerGame', 'engineerEnded'].forEach((id) => $(id).classList.toggle('is-hidden', id !== panel));
}

function setCardText(element, text) {
  element.replaceChildren(...text.split(/(\s+)/).filter(Boolean).map((part) => {
    if (/^\s+$/.test(part)) return document.createTextNode(part);
    return Object.assign(document.createElement('span'), { className: 'card-word', textContent: part });
  }));
}

function fitCardWords() {
  if ($('engineerGame').classList.contains('is-hidden')) return;
  document.querySelectorAll('#engineerCard .card-word').forEach(fitTextToWidth);
}

function render(state) {
  lastState = state;
  const cardIndex = Number(state.card_index || 0);
  if (lastCardIndex !== null && cardIndex !== lastCardIndex) {
    waitingCardIndex = null;
    $('engineerActionStatus').textContent = '';
  }
  if (lastCardIndex !== null && cardIndex > 0 && cardIndex !== lastCardIndex) {
    const cardElement = $('engineerCard');
    cardElement.classList.remove('card-flip');
    void cardElement.offsetWidth;
    cardElement.classList.add('card-flip');
  }
  lastCardIndex = cardIndex;
  $('engineerConnection').textContent = 'Live · connected';
  if (state.status === 'ended' || state.phase === 'ended') { showOnly('engineerEnded'); return; }
  const card = state.current_card || {};
  if (state.phase !== 'active' || !card.target) {
    const name = state.engineer_name?.trim();
    $('waitingGreeting').textContent = name ? `Welcome, ${name}!` : 'Welcome!';
    $('waitingName').textContent = 'Your mentor will start the first card when ready.';
    showOnly('engineerWaiting');
    return;
  }
  $('engineerTheme').textContent = THEME_LABELS[state.mode] || state.mode;
  $('engineerDifficulty').textContent = DIFFICULTY_LABELS[state.difficulty] || state.difficulty;
  setCardText($('engineerTarget'), card.target);
  $('engineerForbidden').replaceChildren(...(card.forbidden || []).map((entry) => {
    const element = document.createElement('span');
    setCardText(element, entry);
    return element;
  }));
  $('engineerClueText').textContent = card.clue || '';
  $('engineerClue').classList.toggle('is-hidden', !card.clue);
  $('engineerRound').textContent = state.card_index || 1;
  const timerHidden = card.timer_visible !== true;
  $('engineerTimerCell').classList.toggle('is-hidden', timerHidden);
  $('engineerFooter').classList.toggle('timer-hidden', timerHidden);
  $('engineerTimer').textContent = state.timer_seconds === 0 ? 'Untimed' : formatTimer(state.timer_remaining);
  $('engineerScore').textContent = state.score_correct || 0;
  const pending = Boolean(state.pending_mentee_action) || waitingCardIndex === cardIndex;
  $('engineerGuessed').disabled = submittingAction || pending;
  $('engineerTaboo').disabled = submittingAction || pending;
  if (pending) $('engineerActionStatus').textContent = 'Recorded. Waiting for the mentor console to show the next card…';
  showOnly('engineerGame');
  fitCardWords();
}

async function submitAction(action) {
  if (!lastState || submittingAction || waitingCardIndex !== null || lastState.pending_mentee_action) return;
  const cardIndex = Number(lastState.card_index);
  submittingAction = true;
  $('engineerGuessed').disabled = true;
  $('engineerTaboo').disabled = true;
  $('engineerActionStatus').textContent = 'Recording your result…';
  try {
    const { error } = await supabaseClient.rpc('submit_mentee_action', {
      p_session_id: sessionId, p_card_index: cardIndex, p_action: action
    });
    if (error) throw error;
    if (Number(lastState.card_index) === cardIndex) {
      waitingCardIndex = cardIndex;
      $('engineerActionStatus').textContent = 'Recorded. Waiting for the mentor console to show the next card…';
    }
    await fetchState();
  } catch (error) {
    $('engineerActionStatus').textContent = error.message || 'Could not record the result. Check your connection and try again.';
    await fetchState();
  } finally {
    submittingAction = false;
    if (lastState?.phase === 'active' && !lastState.pending_mentee_action && waitingCardIndex === null) {
      $('engineerGuessed').disabled = false;
      $('engineerTaboo').disabled = false;
    }
  }
}

async function fetchState() {
  if (fetching || !supabaseClient) return;
  fetching = true;
  try {
    const { data, error } = await supabaseClient.rpc('get_public_session_state', { p_session_id: sessionId });
    if (error) throw error;
    if (!data) throw new Error('This session does not exist.');
    render(data);
  } catch (error) {
    if (!lastState) {
      $('engineerErrorTitle').textContent = 'Unable to join';
      $('engineerErrorText').textContent = error.message || 'Check the session link with your mentor.';
      showOnly('engineerError');
    }
    $('engineerConnection').textContent = 'Reconnecting…';
  } finally { fetching = false; }
}

async function init() {
  if (!sessionId || !/^[0-9a-f-]{36}$/i.test(sessionId)) {
    $('engineerErrorTitle').textContent = 'Invalid session link';
    $('engineerErrorText').textContent = 'Ask your mentor to share the complete engineer link again.';
    showOnly('engineerError');
    return;
  }
  try {
    supabaseClient = await createSupabaseClient();
    await fetchState();
    supabaseClient.channel(`session:${sessionId}`)
      .on('broadcast', { event: 'session_changed' }, fetchState)
      .subscribe((status) => {
        $('engineerConnection').textContent = status === 'SUBSCRIBED' ? 'Live · connected' : 'Connecting…';
      });
    pollHandle = setInterval(fetchState, 3000);
    window.addEventListener('beforeunload', () => clearInterval(pollHandle));
  } catch (error) {
    $('engineerErrorTitle').textContent = 'Unable to connect';
    $('engineerErrorText').textContent = error.message || 'Check the link and try again.';
    showOnly('engineerError');
    $('engineerConnection').textContent = 'Offline';
  }
}

window.addEventListener('resize', fitCardWords);
$('engineerGuessed').addEventListener('click', () => submitAction('correct'));
$('engineerTaboo').addEventListener('click', () => submitAction('taboo'));
document.fonts.ready.then(fitCardWords);
init();
