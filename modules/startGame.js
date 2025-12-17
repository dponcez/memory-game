import { states } from '../variables/globals.js';
import { initializeTimer } from './gameController.js';

const { screen } = states;
export const startGame = () => {
  screen.remove();
  initializeTimer();
}