import { selector, handler } from '../_fns/custom_functions.js';
import { initializeTimer } from './gameController';

const startGameBtn = selector('[data-start-btn]');
const screen = selector('[data-screen]');

export const startGame = () => {
  screen.remove();
  initializeTimer();
}

handler(startGameBtn, 'click', startGame);