# Say It! — Communication Challenge

A deploy-ready, real-time Taboo game for one-to-one communication mentoring with Level 1 support engineers.

## What is included

- Separate **mentor/admin console** and **engineer screen**
- Login-free engineer access through an unguessable shared session link
- Live updates through Supabase Realtime Broadcast, with 5-second state polling as a reconnect fallback
- Admin-controlled cards, start/pause/resume/restart timer, scoring, next card, and session ending
- Engineer screen that displays only the active target/scenario and forbidden words (plus connection/session status)
- Four modes: Everyday English, Technical Talk, Customer Challenge, and Mixed Challenge
- Three difficulty levels:
  - Beginner: 90 seconds and 3 forbidden words
  - Intermediate: 60 seconds and 5 forbidden words
  - Advanced: 45 seconds and 6 forbidden words
- Optional untimed coaching mode
- 300 curated built-in cards across six 50-card categories
- Custom card add/edit/delete, CSV import, and CSV export
- Model explanations visible only to the mentor
- Correct / Skip / Taboo scoring and success rate
- Quick mentoring observations, four skill ratings, mentor notes, and CSV session summary
- Responsive layouts for Teams, laptops, tablets, and phones

## Architecture

- **Frontend:** static HTML, CSS, and JavaScript hosted by Netlify
- **Runtime configuration:** a small Netlify Function exposes the public Supabase URL and publishable key to the browser
- **Synchronization:** Supabase Realtime Broadcast notifies the engineer screen immediately; the engineer then fetches the latest safe public state
- **Persistence:** Supabase Postgres stores game state and mentoring results
- **Security:** direct table access is disabled with Row Level Security. The engineer can call only a restricted public-state function. Admin mutations require a 256-bit key stored in the admin URL fragment and hashed in the database.
- **Custom library and recent admin links:** stored in the mentor's browser localStorage

The Supabase publishable key is intentionally public, as designed for browser clients. Security comes from RLS, restricted database functions, unguessable session UUIDs, and the admin key—not from hiding the publishable key.

## Deploy in about 10 minutes

### 1. Create the Supabase backend

1. Create a Supabase project.
2. Open **SQL Editor**.
3. Paste and run the complete contents of `supabase/schema.sql`.
4. In **Project Settings → API**, copy:
   - Project URL
   - Publishable key (an older project may label it `anon`)

No table needs to be added to the Realtime publication because this app uses Realtime Broadcast rather than Postgres Changes.

### 2. Deploy to Netlify

Choose either method. A plain drag-and-drop static deploy is not recommended because this project includes a Netlify Function for runtime configuration.

**Git deployment (recommended)**
1. Push the folder to a Git repository.
2. Import it in Netlify.
3. Netlify reads `netlify.toml`; no build command is required.
4. In **Site configuration → Environment variables**, add:
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY` (recommended), or `SUPABASE_ANON_KEY` for an older key
5. Deploy the site.

**Netlify CLI**
1. Unzip the project and open a terminal in its root folder.
2. Run `npm install`, then `npx netlify login` and `npx netlify init`.
3. Add the two environment variables in the Netlify site settings or with `npx netlify env:set`.
4. Run `npx netlify deploy --prod`. The CLI uses `netlify.toml` to publish both the static site and function.

### 3. Smoke test

1. Open `/admin.html` on your Netlify site.
2. Create a session.
3. Copy the engineer link and open it in a private/incognito window or on a phone.
4. Start a card in the mentor console.
5. Confirm that the engineer screen changes without a refresh.
6. Test pause/resume, each scoring action, end session, feedback saving, and CSV export.

## Custom-card CSV format

Use this header:

```csv
target,forbidden1,forbidden2,forbidden3,forbidden4,forbidden5,forbidden6,mode,difficulty,example
```

Allowed modes: `everyday`, `technical`, `customer`  
Allowed difficulties: `beginner`, `intermediate`, `advanced`

At least three forbidden words are required. The app's own export creates a re-importable CSV.

## Operating notes

- Share only the engineer link. Do not share the mentor-console URL because its fragment contains the admin key.
- The engineer does not create an account or sign in.
- A person with the engineer link can view that session's current public card state. Use a new session for each mentoring appointment.
- Recent mentor links and custom cards are local to the browser. Export custom cards before clearing browser storage or switching computers.
- The database keeps session rows for mentoring history. Add an organizational retention process if these notes contain personal data.
- Netlify and Supabase free tiers are suitable for light mentoring use, subject to each provider's current limits.

## Project structure

```text
admin.html                    Mentor console
engineer.html                 Login-free engineer screen
index.html                    Landing/join screen
assets/admin.js               Admin game state, cards, scoring, mentoring
assets/engineer.js            Engineer rendering and live subscription
assets/common.js              Supabase/config and shared helpers
assets/cards.js               300-card curated library
assets/styles.css             Responsive visual design
netlify/functions/config.mjs  Runtime public configuration
supabase/schema.sql           Tables, RLS, and restricted RPC functions
netlify.toml                  Hosting, functions, redirects, security headers
```
