import { selectorAll, handler } from "../_fns/custom_functions.js";
import { scrumbleCards } from "./scrumbleCards.js";
import { handleFlipCards } from './flipCards.js';
import { states } from '../variables/globals.js';

export const createTable = (icons) => {
  const { tableBody } = states;
  const scrumble_cards = scrumbleCards(icons);

  scrumble_cards.forEach((card, index) => {
    tableBody.innerHTML += `
      <div class="box flip--card" data-card="${card}" data-index="${index}">
        <span>${card}</span>
      </div>`;
  });

  const cards = selectorAll("[data-index]");
  cards.forEach((card) => handler(card, 'click', handleFlipCards));
};
