# Say It! Communication Challenge — v2.1.0

A real-time, Taboo-style communication game for one-to-one mentoring with support engineers. The static site runs on Netlify; Supabase provides email/password mentor authentication, protected session state and live updates.

## What changed in v2.1.0

- Engineers now land on a waiting screen instead of seeing the first card immediately.
- The waiting screen greets the engineer by name.
- The mentor console has a visible engineer-link field and a dedicated **Start session** button.
- The first card is sent only when the mentor selects **Start session**.
- The library now contains 350 cards: 200 from the supplied Taboo PDF, 50 Esko products, 50 technical terms, and 50 customer challenges.
- Every target and forbidden entry is limited to one or two words.
- Custom cards and CSV imports now follow the same one-or-two-word rule.
- The engineer waiting screen explains the rules; live cards use a vertical Taboo-card layout with forbidden words stacked beneath the target and a flip animation. Card entries can wrap between words, while long individual words resize to fit on phones.
- Mentors can reveal a clue and show or hide the timer on the engineer’s screen; the timer starts hidden there.
- Engineers can select **Guessed** or **Taboo** to score the current card and move on while the mentor console is open.
- The live mentor console uses a tighter layout to reduce scrolling.

## What changed in v2.0

- The mentor’s target and forbidden words are **hidden by default** on every new card. Use **View words** only when needed.
- The mentor console now requires a **Supabase Auth email/password account**.
- Change among **Everyday English, Technical Talk, Customer Challenge and Mixed Challenge** during a live session.
- Change **Beginner, Intermediate or Advanced** during a live session. The same engineer link continues to work.
- Beginner now shows **4 forbidden words**; Intermediate shows 5; Advanced shows 6.
- The included SQL works as both a fresh install and a safe upgrade from v1.

The package also retains custom cards and CSV import/export, live timer and score controls, observations, mentor notes, CSV session summaries, Realtime notifications and polling fallback.

## Project files

- `index.html` — landing and engineer-link join page
- `admin.html` — authenticated mentor console
- `engineer.html` — login-free engineer screen
- `assets/` — styles, scripts and 350-card library
- `card-library-v2.1.0.csv` — complete, auditable card list
- `cards.v2.1.0.json` — structured card data
- `netlify/functions/config.mjs` — exposes only the browser-safe Supabase URL and publishable key
- `supabase/schema.sql` — fresh install or in-place v2 upgrade
- `supabase/upgrade-v2.sql` — duplicate convenience copy for an existing v1 project
- `supabase/upgrade-live-controls.sql` — targeted RPC update for existing v2.1 projects
- `supabase/upgrade-mentee-controls.sql` — adds engineer scoring and includes the live clue/timer public-state update
- `tests/` — local validation tests

## Update an existing v2.1 project

In Supabase SQL Editor, run the complete `supabase/upgrade-mentee-controls.sql`. It preserves existing sessions and includes the clue and timer update; you do not need to run `upgrade-live-controls.sql` separately. Then deploy the updated files and hard-refresh both game screens. Do **not** rerun the full `schema.sql` on an existing installation, and do not run `upgrade-live-controls.sql` after the mentee-controls migration, because it replaces the public-state function.

For a fresh install, run `supabase/schema.sql` followed by `supabase/upgrade-mentee-controls.sql`. When upgrading from v1, run `supabase/upgrade-v2.sql` followed by `supabase/upgrade-mentee-controls.sql`.

## A. Upgrade an older v1 Say It! site

Do these steps in order so the new authenticated code and database functions switch together.

1. **Back up if desired.** In Supabase, use Table Editor to export `game_sessions`. The upgrade does not drop that table or delete rows.
2. Open **Supabase → SQL Editor → New query**.
3. Run the entire contents of `supabase/upgrade-v2.sql`, then run `supabase/upgrade-mentee-controls.sql`. A successful run normally ends with “Success. No rows returned.”
4. Open **Supabase → Authentication → Users → Add user**.
5. Enter the mentor email and a strong password. Select **Auto Confirm User** (wording can vary) so the account can sign in immediately.
6. For a single-mentor site, disable public registration under **Authentication → Providers → Email** by turning off **Allow new users to sign up**. The game has no sign-up screen, but disabling registration is the stronger setting.
7. Replace the contents of your GitHub repository with this package while keeping the same repository and Netlify site.
8. Commit once. Netlify deploys the full update.
9. Your existing Netlify variables remain valid: `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`.
10. Test `/admin.html` in an incognito window: sign in, create a session, copy the engineer link and open it in a second incognito window. Confirm the waiting screen appears before you select **Start session**.

Existing v1 sessions have no mentor owner. They remain in the table for history, but cannot be resumed in the v2 mentor console. Create a new authenticated session after upgrading.

## B. Fresh deployment

### 1. Create and configure Supabase

1. Create a project at Supabase.
2. In **SQL Editor**, run all of `supabase/schema.sql`, then run all of `supabase/upgrade-mentee-controls.sql`.
3. In **Authentication → Users**, add the mentor’s email/password account and auto-confirm it.
4. Under **Authentication → Providers → Email**, disable **Allow new users to sign up** when only invited mentors should have access.
5. In **Project Settings → Data API**, copy the Project URL. It must look like `https://xxxx.supabase.co` with nothing after `.co`.
6. In **Project Settings → API Keys**, copy the **publishable** key (`sb_publishable_...`). Never use a secret/service-role key in Netlify or browser code.

### 2. Deploy through Git and Netlify

This project includes a Netlify Function, so use a Git-connected Netlify site (recommended) or Netlify CLI—not the simple static drag-and-drop uploader.

1. Create a GitHub repository and upload the **contents** of this folder. `index.html` and `netlify.toml` must be at the repository root.
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. Netlify reads `netlify.toml`; no build command is required.
4. Under **Site configuration → Environment variables**, add:
   - `SUPABASE_URL` = the exact project URL
   - `SUPABASE_PUBLISHABLE_KEY` = the full publishable key
5. Leave “Contains secret values” unchecked for these browser-safe values.
6. Make the variables available to Functions/Runtime and Production, or use the default all-scopes setting.
7. Trigger one production deploy.

### 3. Test end to end

1. Open `https://your-site.netlify.app/admin.html` in an incognito window.
2. Sign in with the mentor account.
3. Create a session and copy the engineer link.
4. Open the engineer link in another incognito window or on a phone.
5. Confirm the engineer sees a personalised waiting screen and no card.
6. Select **Start session** in the mentor console and confirm the first card appears automatically.
7. Confirm the mentor console says **Words are hidden**, then click **View words** and **Hide words**.
8. Change the live theme and difficulty, then click **Apply & show next card**. The engineer view should update without a new link.
9. Test timer, Correct/Skip/Taboo, notes and CSV export.
10. Confirm the mentor can show/hide a clue and the engineer timer; draw another card and confirm the clue resets while timer visibility persists.
11. With the mentor console open, select **Guessed** and then **Taboo** on the engineer screen. Confirm each result updates the corresponding mentor score and advances the card.

The mentor console must remain open and connected to process engineer results and choose the next card, including custom cards stored in that browser. Until it does, the engineer screen displays a waiting message and disables both result buttons.

## How live theme and difficulty changes work

The dropdowns in the running mentor console do not affect the current engineer card until **Apply & show next card** is clicked. That action updates the session and draws a card from the selected theme with the selected number of forbidden words:

- Beginner: 4
- Intermediate: 5
- Advanced: 6

The words are hidden again automatically whenever a new card is drawn.

## Custom-card CSV

Use these columns:

```csv
target,theme,forbidden_words,explanation
Cache,technical,"memory;temporary;browser;fast;store;clear","Explain temporary saved information in plain language."
```

Allowed themes are `everyday`, `technical`, and `customer`. Separate 4–6 forbidden entries with semicolons. The target and each forbidden entry must be one or two words. Custom cards are stored in that mentor browser’s local storage; export them before clearing browser data or moving devices.

## Security design

- Mentor actions require a valid Supabase Auth session.
- Sessions are owned by the authenticated mentor’s user ID.
- A separate 256-bit per-session control token is generated in the browser; only its SHA-256 hash is stored in Supabase.
- Row Level Security is enabled and clients receive no direct table privileges.
- Anyone with an engineer link can read public session state and submit one Guessed or Taboo result for the current active card. The public state omits mentor identity, control-token hash, hidden model explanations, observations and private notes. A model explanation is included only after the mentor selects **Show clue**.
- Realtime broadcasts contain only a session ID and act as a refresh signal; polling is the fallback.
- The publishable key is intentionally public. Never add the secret/service-role key.

## Local checks

With Node.js 18 or newer:

```bash
npm test
npm run check
```

No `npm install` is needed because the test suite uses only Node’s standard library. The deployed pages load Supabase JS from jsDelivr.

## Troubleshooting

- **“Supabase is not configured”** — check exact Netlify variable names and redeploy. Open `/.netlify/functions/config`; `supabaseUrl` must end at `.supabase.co`.
- **“Could not find the function…”** — run the full SQL file in the same Supabase project referenced by Netlify, then run `notify pgrst, 'reload schema';`.
- **“Invalid login credentials”** — confirm the mentor user exists, is confirmed, and the email/password are exact.
- **Engineer page does not update immediately** — it polls every three seconds even if Realtime is unavailable. Check the engineer link and Supabase status.
- **Engineer remains on the waiting screen** — select **Start session** in the mentor console. Creating a session intentionally does not send a card.
- **Engineer result remains pending** — reopen the mentor console in the browser that created the session, keep it connected, and check its connection status.
- **Old session cannot be resumed after upgrade** — v1 rows have no authenticated mentor owner; create a new v2 session.
