export default async () => {
  const supabaseUrl = Netlify.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Netlify.env.get("SUPABASE_PUBLISHABLE_KEY") || Netlify.env.get("SUPABASE_ANON_KEY") || "";

  return new Response(JSON.stringify({ supabaseUrl, supabaseAnonKey }), {
    status: supabaseUrl && supabaseAnonKey ? 200 : 503,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300"
    }
  });
};
