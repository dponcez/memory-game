import { selector } from '../_fns/custom_functions.js';

let timer_text = selector('[data-timer]');

export const updateScreen = (time) => timer_text.textContent = `${time}`;