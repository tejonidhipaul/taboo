export default async () => {
  const rawUrl = (Netlify.env.get('SUPABASE_URL') || '').trim().replace(/^["']|["']$/g, '');
  const supabaseAnonKey = (Netlify.env.get('SUPABASE_PUBLISHABLE_KEY') || Netlify.env.get('SUPABASE_ANON_KEY') || '').trim();
  let supabaseUrl = '';
  try { supabaseUrl = new URL(rawUrl).origin; } catch { supabaseUrl = ''; }
  const configured = Boolean(supabaseUrl && supabaseAnonKey);
  return new Response(JSON.stringify(configured ? { supabaseUrl, supabaseAnonKey } : { error: 'Supabase is not configured.' }), {
    status: configured ? 200 : 503,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  });
};
