export async function createSupabaseClient() {
  if (!window.supabase?.createClient) throw new Error('The Supabase library did not load. Check your internet connection.');
  const response = await fetch('/.netlify/functions/config', { cache: 'no-store' });
  const config = await response.json().catch(() => ({}));
  if (!response.ok || !config.supabaseUrl || !config.supabaseAnonKey) {
    throw new Error(config.error || 'Supabase is not configured. Add SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY in Netlify.');
  }
  return window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    realtime: { params: { eventsPerSecond: 5 } }
  });
}

export function randomToken(bytes = 32) {
  const values = new Uint8Array(bytes);
  crypto.getRandomValues(values);
  return [...values].map((value) => value.toString(16).padStart(2, '0')).join('');
}

export function formatTimer(totalSeconds) {
  const safe = Math.max(0, Number(totalSeconds) || 0);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function updateTimerAlert(element, totalSeconds, remaining, running) {
  const timed = Number(totalSeconds) > 0;
  element.classList.toggle('timer-warning', timed && running && remaining > 0 && remaining <= 5);
  element.classList.toggle('timer-ended', timed && remaining <= 0);
}

const visibilityTransitions = new WeakMap();

export function setAnimatedVisibility(element, visible, { immediate = false, onHidden, expand = false } = {}) {
  const previous = visibilityTransitions.get(element);
  const wasVisible = previous ? previous.visible : !element.classList.contains('is-hidden');
  if (!immediate && wasVisible === visible) return;
  const currentStyle = expand && previous && !immediate ? window.getComputedStyle(element) : null;
  const interrupted = currentStyle ? { height: currentStyle.height, opacity: currentStyle.opacity } : null;
  previous?.animation?.cancel();
  visibilityTransitions.delete(element);
  element.setAttribute('aria-hidden', String(!visible));
  if (visible) element.classList.remove('is-hidden');
  let animation;
  const finish = () => {
    if (!visible) {
      element.classList.add('is-hidden');
      if (onHidden) onHidden();
    }
    animation?.cancel();
    visibilityTransitions.delete(element);
  };
  if (immediate || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !element.animate) {
    finish();
    return;
  }
  const collapsed = expand ? { height: '0px', opacity: 0 } : { opacity: 0 };
  const expanded = expand ? { height: `${element.scrollHeight}px`, opacity: 1 } : { opacity: 1 };
  animation = element.animate(
    [interrupted || (visible ? collapsed : expanded), visible ? expanded : collapsed],
    { duration: expand ? 320 : 180, easing: 'ease-out', fill: 'both' }
  );
  visibilityTransitions.set(element, { visible, animation });
  animation.onfinish = finish;
}

export function celebrate(element) {
  element.classList.remove('celebrate');
  void element.offsetWidth;
  element.classList.add('celebrate');
}

export function fitTextToWidth(element) {
  element.style.fontSize = '';
  const width = element.clientWidth;
  const textWidth = element.scrollWidth;
  if (width > 0 && textWidth > width) {
    const fontSize = parseFloat(getComputedStyle(element).fontSize);
    element.style.fontSize = `${fontSize * width / textWidth * 0.99}px`;
  }
}

export function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function downloadText(filename, text, type = 'text/plain;charset=utf-8') {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

export function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { field += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(field); field = ''; }
    else if (char === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (char !== '\r') field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows.filter((candidate) => candidate.some((cell) => cell.trim()));
}

export function safeFilePart(value) {
  return String(value || 'session').trim().replace(/[^a-z0-9_-]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'session';
}
