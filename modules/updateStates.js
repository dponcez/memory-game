import { states } from '../variables/globals.js';

const { timer_text, score_text } = states;

export const updateScreen = (time) => timer_text.textContent = `${time}`;
export const updateScore = (score) => score_text.textContent = `${score}`;