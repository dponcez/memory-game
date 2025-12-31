import { states } from '../variables/globals.js';
import { incrementTimer } from './gameController.js';

const { screen } = states;
export const startGame = () => {
  screen.remove();
  incrementTimer();
}