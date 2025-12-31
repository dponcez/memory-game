import { selector } from "../_fns/custom_functions.js";
import { cardIcons } from "../modules/cardIcons.js";

export const states = {
  startGameBtn: selector('[data-start-btn]'),
  screen: selector('[data-screen]'),
  timer_text: selector('[data-timer]'),
  score_text: selector('[data-score]'),
  moves_text: selector('[data-moves]'),
  tableBody: selector('[data-main]'),
  icons: cardIcons()
} 