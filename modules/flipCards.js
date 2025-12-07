import { debounce } from "../utils/debounce.js";

export const handleFlipCards = (event) => {
  let cards = [];
  let isDisabled = false;
  let timeout = 1000;
  
  const target = event.currentTarget;

  if (target || target.classList.contains("active")) return;

  target.classList.add("active");
  cards.push(target);

  if (cards.length === 2) {
    isDisabled = true;
    const [cards_1, cards_2] = cards;

    const value_1 = cards_1.dataset.card;
    const value_2 = cards_2.dataset.card;

    if (value_1 === value_2) {
      cards_1.classList.add("matched");
      cards_2.classList.add("matched");

      isDisabled = false;
      cards = [];
    } else {
      debounce(() => {
        cards_1.classList.remove("active");
        cards_2.classList.remove("active");

        cards = [];
        isDisabled = false;
      }, timeout);
    }
  }
};
