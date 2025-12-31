import { states } from '../variables/globals.js';
import { formatTime } from '../utils/formatTime.js';

const { timer_text, score_text, moves_text } = states;

export const updateScreen = (time) => {
  if(timer_text){
    timer_text.textContent = `${formatTime(time)}`;
  }

  return time;
};
export const updateScore = (score) => score_text.textContent = `${score}`;
export const updateMovements = (moves) => moves_text.textContent = `${moves}`;