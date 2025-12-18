import { createTable } from '../modules/createTable.js';
import { handler } from '../_fns/custom_functions.js';
import { states } from '../variables/globals.js';
import { startGame } from '../modules/startGame.js';

const { startGameBtn } = states;
const icons = [
  '🍎', '🍌', '🍇', '🍉',
  '🍎', '🍌', '🍇', '🍉',
  '🎁', '🏀', '🐶', '❤️',
  '🎁', '🏀', '🐶', '❤️'

];

handler(startGameBtn, 'click', startGame);
createTable(icons)