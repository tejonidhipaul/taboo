import { THEME_LABELS } from './cards.js?v=2026112705';
import { createSupabaseClient, fitTextToWidth, formatTimer, setAnimatedVisibility, celebrate, updateTimerAlert } from './common.js?v=2026112710';

const $ = (id) => document.getElementById(id);
const sessionId = new URLSearchParams(location.search).get('s');
let supabaseClient;
let pollHandle;
let fetching = false;
let lastState = null;
let lastCardIndex = null;
let timerVisible = false;
let timerObservedAt = 0;
let timerConnected = false;
let submittingAction = false;
let waitingCardIndex = null;
let celebratedCardIndex = null;

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

function renderTimer() {
  if (!lastState || lastState.phase !== 'active') return;
  const timerCell = $('engineerTimerCell');
  if (Number(lastState.timer_seconds) === 0) {
    $('engineerTimer').textContent = 'Untimed';
    updateTimerAlert(timerCell, 0, 0, false);
    return;
  }
  const elapsed = lastState.timer_running && timerConnected
    ? Math.floor(Math.max(0, Date.now() - timerObservedAt) / 1000)
    : 0;
  const remaining = Math.max(0, Number(lastState.timer_remaining) - elapsed);
  $('engineerTimer').textContent = formatTimer(remaining);
  if (remaining <= 5) timerCell.classList.remove('timer-pulse');
  updateTimerAlert(timerCell, lastState.timer_seconds, remaining, lastState.timer_running && timerConnected);
}

function render(state) {
  if (lastState && lastState.id === state.id && Number(state.score_correct) > Number(lastState.score_correct)
      && celebratedCardIndex !== Number(lastState.card_index)) {
    celebrate($('engineerActions'));
    celebratedCardIndex = Number(lastState.card_index);
  }
  lastState = state;
  timerObservedAt = Date.now();
  timerConnected = true;
  const cardIndex = Number(state.card_index || 0);
  const firstCard = lastCardIndex === null;
  const cardChanged = !firstCard && cardIndex !== lastCardIndex;
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
  setCardText($('engineerTarget'), card.target);
  $('engineerForbidden').replaceChildren(...(card.forbidden || []).map((entry) => {
    const element = document.createElement('span');
    setCardText(element, entry);
    return element;
  }));
  if (card.clue) $('engineerClueText').textContent = card.clue;
  setAnimatedVisibility($('engineerClue'), Boolean(card.clue), {
    immediate: firstCard || cardChanged,
    expand: true,
    onHidden: () => { $('engineerClueText').textContent = ''; }
  });
  $('engineerRound').textContent = state.card_index || 1;
  const showTimer = card.timer_visible === true;
  const timerCell = $('engineerTimerCell');
  setAnimatedVisibility(timerCell, showTimer);
  if (showTimer && !timerVisible) {
    timerCell.classList.remove('timer-pulse');
    void timerCell.offsetWidth;
    timerCell.classList.add('timer-pulse');
  }
  timerVisible = showTimer;
  renderTimer();
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
      if (action === 'correct' && celebratedCardIndex !== cardIndex) {
        celebrate($('engineerActions'));
        celebratedCardIndex = cardIndex;
      }
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
    timerConnected = false;
    renderTimer();
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
    const poll = async () => {
      await fetchState();
      const interval = lastState?.timer_running && lastState.current_card?.timer_visible ? 1000 : 3000;
      pollHandle = setTimeout(poll, interval);
    };
    pollHandle = setTimeout(poll, lastState?.timer_running && lastState.current_card?.timer_visible ? 1000 : 3000);
    const timerHandle = setInterval(renderTimer, 250);
    window.addEventListener('beforeunload', () => { clearTimeout(pollHandle); clearInterval(timerHandle); });
  } catch (error) {
    $('engineerErrorTitle').textContent = 'Unable to connect';
    $('engineerErrorText').textContent = error.message || 'Check the link and try again.';
    showOnly('engineerError');
    $('engineerConnection').textContent = 'Offline';
  }
}

window.addEventListener('resize', fitCardWords);
$('engineerTimerCell').addEventListener('animationend', (event) => {
  if (event.animationName === 'timer-pulse') $('engineerTimerCell').classList.remove('timer-pulse');
});
$('engineerGuessed').addEventListener('click', () => submitAction('correct'));
$('engineerTaboo').addEventListener('click', () => submitAction('taboo'));
document.fonts.ready.then(fitCardWords);
init();
