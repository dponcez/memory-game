import { cardIcons } from '../modules/cardIcons.js';

const icons = cardIcons();

if (!Array.isArray(icons)) {
  console.error('Assertion failed: cardIcons() did not return an array');
  process.exit(1);
}

if (icons.length === 0) {
  console.error('Assertion failed: cardIcons() returned an empty array');
  process.exit(1);
}

console.log(`cardIcons OK — ${icons.length} icons`);
process.exit(0);
