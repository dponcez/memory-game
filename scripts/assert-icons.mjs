import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let cardIcons;

try {
  // Try dynamic ESM import first
  const mod = await import('../modules/cardIcons.js');
  cardIcons = mod.cardIcons || (mod.default && mod.default.cardIcons) || mod.default || mod;
} catch (err) {
  // Fallback to CommonJS require
  const mod = require('../modules/cardIcons.js');
  cardIcons = mod.cardIcons || (mod.default && mod.default.cardIcons) || mod.default || mod;
}

if (typeof cardIcons !== 'function') {
  console.error('Assertion failed: cardIcons is not a function');
  process.exit(1);
}

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
