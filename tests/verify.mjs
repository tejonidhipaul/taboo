import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { BUILT_IN_CARDS } = await import(pathToFileURL(path.join(root, 'assets/cards.js')));
const assert = (condition, message) => { if (!condition) throw new Error(message); };

assert(BUILT_IN_CARDS.length === 300, `Expected 300 cards; found ${BUILT_IN_CARDS.length}`);
assert(new Set(BUILT_IN_CARDS.map(card => card.id)).size === 300, 'Card IDs are not unique');
const categories = new Map();
for (const card of BUILT_IN_CARDS) {
  assert(card.target && card.example, `Missing content on ${card.id}`);
  assert(['everyday','technical','customer'].includes(card.mode), `Bad mode on ${card.id}`);
  assert(['beginner','intermediate','advanced'].includes(card.difficulty), `Bad difficulty on ${card.id}`);
  assert(Array.isArray(card.forbidden) && card.forbidden.length === 6, `Expected six forbidden words on ${card.id}`);
  assert(new Set(card.forbidden.map(word => word.toLowerCase())).size === 6, `Duplicate forbidden word on ${card.id}`);
  categories.set(card.category, (categories.get(card.category) || 0) + 1);
}
assert(categories.size === 6, `Expected six categories; found ${categories.size}`);
for (const [category, count] of categories) assert(count === 50, `${category} has ${count} cards, expected 50`);

const htmlIds = new Set();
for (const file of ['admin.html','engineer.html','index.html']) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of html.matchAll(/\bid="([^"]+)"/g)) htmlIds.add(match[1]);
}
const adminSource = fs.readFileSync(path.join(root, 'assets/admin.js'), 'utf8');
for (const match of adminSource.matchAll(/els\.([A-Za-z][A-Za-z0-9_]*)/g)) {
  assert(htmlIds.has(match[1]), `admin.js references missing element #${match[1]}`);
}

const schema = fs.readFileSync(path.join(root, 'supabase/schema.sql'), 'utf8');
for (const required of ['enable row level security','revoke all on public.game_sessions','get_public_session_state','admin_patch_game_session']) {
  assert(schema.toLowerCase().includes(required), `Schema missing ${required}`);
}

console.log('Verification passed');
console.log(`Cards: ${BUILT_IN_CARDS.length}`);
console.log(`Categories: ${[...categories.entries()].map(([name,count]) => `${name}=${count}`).join(', ')}`);
