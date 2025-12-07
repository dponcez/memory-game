import { selector, selectorAll, handler } from "../_fns/custom_functions.js";
import { scrumbleCards } from "./scrumbleCards.js";
import { handleFlipCards } from './flipCards.js';

export const createTable = (icons) => {
  const scrumble_cards = scrumbleCards(icons);
  const tableBody = selector("[data-main]");

  scrumble_cards.forEach((card, index) => {
    tableBody.innerHTML += `
      <div class="box flip--card" data-card="${card}" data-index="${index}">
        <span>${card}</span>
      </div>`;
  });

  const cards = selectorAll("[data-index]");
  cards.forEach((card) => handler(card, 'click', handleFlipCards));
};
