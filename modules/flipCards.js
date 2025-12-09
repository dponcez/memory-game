let cards = [];
let isDisabled = false;
let timeout = 1000;

export const handleFlipCards = (event) => {  
  const target = event.currentTarget;
  console.log(target)
  
  if(isDisabled || target.classList.contains("active")) return;

  target.classList.add("active");
  cards.push(target);

  if(cards.length === 2){
    isDisabled = true;
    const [card_1, card_2] = cards;

    const value_1 = card_1.dataset.card;
    const value_2 = card_2.dataset.card;

    if(value_1 === value_2){
      card_1.classList.add("matched");
      card_2.classList.add("matched");

      cards = [];
      isDisabled = false;
    }else{
      setTimeout(() => {
        card_1.classList.remove("active");
        card_2.classList.remove("active");

        cards = [];
        isDisabled = false;
      }, timeout);
    }
  }
};
