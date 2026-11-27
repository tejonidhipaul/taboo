# Changelog

## 2.1.0

- Added a true engineer waiting room. Creating a session no longer exposes the first card.
- Added a prominent **Start session** control; the first card appears only after the mentor selects it.
- Added a personalised engineer greeting using the name entered by the mentor.
- Added a permanently visible engineer link field with resilient copy fallbacks.
- Rebuilt the library as 350 concise cards: 200 from the attached Taboo PDF, 50 Esko products, 50 technical terms, and 50 customer challenges.
- Limited every built-in target and forbidden entry to one or two words.
- Enforced the same one-or-two-word rule for custom card creation and CSV imports.

## 2.0.1

- Replaced the category-pool generator with 300 individually curated card definitions.
- Gave every card six target-specific forbidden words.
- Corrected all cards whose previous generic words were unrelated or too weak to be useful in Taboo.
- Kept all card IDs, themes, categories, difficulty behavior, and model explanations compatible with v2.0.0.

## 2.0.0

- Added Supabase email/password authentication for the mentor console.
- Added authenticated mentor ownership to every new session.
- Hid mentor-side target and forbidden words by default, with explicit reveal/hide control.
- Added live theme switching without creating a new session.
- Added live difficulty switching without creating a new session.
- Set forbidden-word counts to 4/5/6 for Beginner/Intermediate/Advanced.
- Added upgrade-safe SQL, Realtime refresh signals and polling fallback.
- Refreshed responsive mentor and engineer interfaces.
