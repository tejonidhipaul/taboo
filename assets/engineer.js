import { getSupabase } from './common.js';

const sessionId = new URLSearchParams(location.search).get('s');
const views = ['waitingState', 'playingState', 'pausedState', 'endedState', 'engineerError'];
let supabase;
let channel;
let lastUpdated = '';

function showView(id) {
  views.forEach(viewId => document.getElementById(viewId).classList.toggle('hidden', viewId !== id));
}

function setConnection(text, state = 'neutral') {
  const badge = document.getElementById('connectionBadge');
  badge.className = `status-chip ${state}`;
  badge.innerHTML = '<span class="status-dot"></span>' + text;
}

function render(state) {
  if (!state) return;
  lastUpdated = state.updated_at || lastUpdated;
  if (state.status === 'ended' || state.status === 'review') { showView('endedState'); return; }
  if (state.status === 'paused') { showView('pausedState'); return; }
  if (state.status !== 'playing' || !state.current_card) { showView('waitingState'); return; }

  const card = state.current_card;
  document.getElementById('engineerPrompt').textContent = card.mode === 'customer' ? 'Your customer challenge' : 'Your word';
  document.getElementById('engineerTarget').textContent = card.target;
  const list = document.getElementById('engineerForbidden');
  list.replaceChildren(...(card.forbidden || []).map(word => {
    const span = document.createElement('span');
    span.textContent = word;
    return span;
  }));
  showView('playingState');
}

async function refreshState() {
  if (!supabase || !sessionId) return;
  const { data, error } = await supabase.rpc('get_public_session_state', { p_session_id: sessionId });
  if (error || !data) throw error || new Error('Session not found');
  render(data);
}

async function init() {
  if (!sessionId || !/^[0-9a-f-]{36}$/i.test(sessionId)) {
    document.getElementById('engineerErrorText').textContent = 'The session link is incomplete. Ask your mentor to share it again.';
    showView('engineerError');
    setConnection('Invalid link', 'error');
    return;
  }
  try {
    supabase = await getSupabase();
    await refreshState();
    channel = supabase.channel(`taboo:${sessionId}`, { config: { private: false } })
      .on('broadcast', { event: 'state_changed' }, () => refreshState().catch(() => {}))
      .subscribe(status => {
        if (status === 'SUBSCRIBED') setConnection('Live', 'success');
        else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') setConnection('Reconnecting', 'warning');
      });
    setInterval(() => refreshState().catch(() => setConnection('Reconnecting', 'warning')), 5000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshState().catch(() => {}); });
  } catch (error) {
    document.getElementById('engineerErrorText').textContent = error?.message || 'Check the link with your mentor.';
    showView('engineerError');
    setConnection('Offline', 'error');
  }
}

init();
