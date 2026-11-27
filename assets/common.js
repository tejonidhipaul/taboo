import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

let clientPromise;
export async function getSupabase() {
  if (!clientPromise) {
    clientPromise = fetch('/.netlify/functions/config', { headers: { accept: 'application/json' } })
      .then(async response => {
        const config = await response.json().catch(() => ({}));
        if (!response.ok || !config.supabaseUrl || !config.supabaseAnonKey) {
          throw new Error('Supabase is not configured. Add SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY in Netlify.');
        }
        return createClient(config.supabaseUrl, config.supabaseAnonKey, {
          auth: { persistSession: false, autoRefreshToken: false },
          realtime: { params: { eventsPerSecond: 10 } }
        });
      });
  }
  return clientPromise;
}

export function randomToken(bytes = 32) {
  const data = crypto.getRandomValues(new Uint8Array(bytes));
  return Array.from(data, value => value.toString(16).padStart(2, '0')).join('');
}

export function parseAdminHash() {
  const params = new URLSearchParams(location.hash.slice(1));
  return { sessionId: params.get('session'), token: params.get('key') };
}

export function formatTime(totalSeconds) {
  const seconds = Math.max(0, Number(totalSeconds) || 0);
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

export function modeLabel(mode) {
  return ({ everyday: 'Everyday English', technical: 'Technical Talk', customer: 'Customer Challenge', mixed: 'Mixed Challenge' })[mode] || mode;
}

export function difficultyLabel(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}

export function timerFor(difficulty, untimed = false) {
  if (untimed) return 0;
  return ({ beginner: 90, intermediate: 60, advanced: 45 })[difficulty] || 60;
}

export function forbiddenCount(difficulty) {
  return ({ beginner: 3, intermediate: 5, advanced: 6 })[difficulty] || 5;
}

export function shuffle(items) {
  const output = [...items];
  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

export function csvEscape(value) {
  const text = value == null ? '' : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function downloadText(filename, text, type = 'text/csv;charset=utf-8') {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

export function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('visible'), 2400);
}

export function safeFileName(value) {
  return String(value || 'session').trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}
