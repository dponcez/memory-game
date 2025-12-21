import { createTable } from '../modules/createTable.js';
import { handler } from '../_fns/custom_functions.js';
import { states } from '../variables/globals.js';
import { startGame } from '../modules/startGame.js';
import { cardIcons } from '../modules/cardIcons.js';

const { startGameBtn } = states;
const icons = cardIcons();

handler(startGameBtn, 'click', startGame);
createTable(icons)