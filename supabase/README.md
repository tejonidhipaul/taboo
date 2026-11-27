# Supabase SQL

- Use `schema.sql` for a new project.
- Use `upgrade-v2.sql` when replacing a v1 Say It! deployment.

Both files intentionally contain the same idempotent script. It creates missing objects, adds missing v2 columns, replaces the four RPC functions and preserves existing `game_sessions` rows.

After running the SQL, create the mentor in **Authentication → Users → Add user**, auto-confirm the account, and disable public email sign-ups when only invited mentors should have access.
