import { THEME_LABELS, DIFFICULTY_LABELS } from './cards.js';
import { createSupabaseClient, formatTimer } from './common.js';

const $ = (id) => document.getElementById(id);
const sessionId = new URLSearchParams(location.search).get('s');
let supabaseClient;
let pollHandle;
let fetching = false;
let lastState = null;

function showOnly(panel) {
  ['engineerLoading', 'engineerError', 'engineerWaiting', 'engineerGame', 'engineerEnded'].forEach((id) => $(id).classList.toggle('is-hidden', id !== panel));
}

function render(state) {
  lastState = state;
  $('engineerConnection').textContent = 'Live · connected';
  if (state.status === 'ended' || state.phase === 'ended') { showOnly('engineerEnded'); return; }
  const card = state.current_card || {};
  if (state.phase !== 'active' || !card.target) {
    $('waitingName').textContent = state.engineer_name ? `${state.engineer_name}, your mentor will send the first card.` : 'Your mentor will send the first card.';
    showOnly('engineerWaiting');
    return;
  }
  $('engineerTheme').textContent = THEME_LABELS[state.mode] || state.mode;
  $('engineerDifficulty').textContent = DIFFICULTY_LABELS[state.difficulty] || state.difficulty;
  $('engineerTarget').textContent = card.target;
  $('engineerForbidden').replaceChildren(...(card.forbidden || []).map((word) => Object.assign(document.createElement('span'), { textContent: word })));
  $('engineerRound').textContent = state.card_index || 1;
  $('engineerTimer').textContent = state.timer_seconds === 0 ? 'Untimed' : formatTimer(state.timer_remaining);
  $('engineerScore').textContent = state.score_correct || 0;
  showOnly('engineerGame');
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

init();
