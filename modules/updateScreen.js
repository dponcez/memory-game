import { states } from '../variables/globals.js';

const { timer_text } = states;
export const updateScreen = (time) => timer_text.textContent = `${time}`;