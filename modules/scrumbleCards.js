export const scrumbleCards = (cards) => {
  const sliceCards = cards.slice();
  let length = sliceCards.length;

  while (length > 0) {
    const randomizeCards = Math.floor(Math.random() * length);
    length--;

    [sliceCards[length], 
      sliceCards[randomizeCards]] = 
    [sliceCards[randomizeCards], 
      sliceCards[length]];
  }

  return sliceCards;
};