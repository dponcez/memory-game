import { selector, selectorAll, handler } from '../_fns/custom_functions.js';

// icons
const icons = [
  '🍎', '🍌', '🍇', '🍉',
  '🍎', '🍌', '🍇', '🍉',
  '🎁', '🏀', '🐶', '❤️',
  '🎁', '🏀', '🐶', '❤️'

];

let cards = [];
let isDisabled = false;

const scrambleCards = (cards) => {
  const sliceCards = cards.slice();
  const length = sliceCards.length;

  while(length > 0){
    const randomizeCards = Math.floor(Math.random() * length);
    length--;

    [sliceCards[length], 
     sliceCards[randomizeCards]
    ] = 
    [sliceCards[randomizeCards], 
     sliceCards[length]
    ]
  };

  return sliceCards;
}

// create table for memory game
const createTable = () => {
  const scrambled_cards = scrambleCards(icons);
  const tableBody = selector('[data-main]');

  scrambled_cards.forEach((card, index) => {
    tableBody.innerHTML = `
      <div class="box flip--card" data-card="${card}" data-index="${index}">
        <span>${card}</span>>
      </div>
    `
  })
}