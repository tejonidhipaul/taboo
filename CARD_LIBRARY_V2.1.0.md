# Say It! card library - v2.1.0

## Summary

The built-in library contains **350 unique cards**. Every target and every forbidden entry is limited to **one or two words**.

| Collection | Theme | Cards |
|---|---|---:|
| Attached Taboo PDF | Everyday English | 200 |
| Esko products | Technical Talk | 50 |
| Technical jargon | Technical Talk | 50 |
| Customer challenges | Customer Challenge | 50 |
| **Total** |  | **350** |

## PDF cards

All 200 target cards from `taboo-game.pdf` are represented. Five source clues were retained wherever possible and a sixth target-specific clue was added for the Advanced difficulty.

Small quality corrections were made where needed:

- Wrapped clue lines were reconstructed as single entries.
- The damaged text layer on PDF page 18 was verified against the rendered page and transcribed visually.
- Duplicate targets were disambiguated as `NYC` and `Bed Blanket` so the game retains unique targets.
- `Kung Fu Panda` and `Nan She Shan` were shortened to `Kungfu Panda` and `Nan Shan` to meet the two-word maximum.
- Dated or inappropriate wheelchair terminology was replaced with respectful, current terms.

## Esko and technical cards

The technical theme contains:

- 50 Esko product and product-family cards covering workflow, artwork, structural design, color, flexo platemaking, inspection, cloud, and legacy support terminology.
- 50 support and software terms used in incident handling, diagnosis, escalation, licensing, case management, and customer communication.

## Quality checks

The automated test suite verifies:

- 350 unique IDs and 350 unique targets.
- Exactly six distinct forbidden entries per card.
- One or two words per target and forbidden entry.
- 200 Everyday English, 100 Technical Talk, and 50 Customer Challenge cards.
- Difficulty behavior remains 4 / 5 / 6 forbidden entries.

For a full row-by-row review, open `card-library-v2.1.0.csv` or `cards.v2.1.0.json`.
