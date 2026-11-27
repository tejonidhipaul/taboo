# Deploy the v2.1.0 update

This update is website-only. **No Supabase SQL or environment-variable changes are required** when your existing v2 site already creates working sessions.

1. Extract `Say-It-Netlify-v2.1.0.zip`.
2. Upload the extracted folder contents to the root of the same GitHub repository used by Netlify.
3. Replace files with the same names and commit once.
4. Wait for the Netlify deploy to show **Published**.
5. Hard-refresh `/admin.html` with Ctrl+F5, or test in an incognito window.

## Test the waiting flow

1. Sign in and create a session with an engineer name.
2. Copy the visible engineer link and open it in another browser or device.
3. Confirm the engineer sees `Welcome, <name>!` and no card.
4. In the mentor console, select **Start session**.
5. Confirm the first card appears on the engineer screen.

## Test the library

- Select **Everyday English** for cards from the attached Taboo PDF.
- Select **Technical Talk** for Esko products and technical jargon.
- Select **Customer Challenge** for concise support scenarios.
- Confirm targets and forbidden entries contain no more than two words.
