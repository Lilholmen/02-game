import { useState } from "react";

import colors from "../../data/colors";

const createCards = (cardsAmount) => {
  const cardsArray = [];

  for (let i = 0; i < cardsAmount; i++) {
    cardsArray.push({
      id: i + 1,
      value: Math.floor(i / 2),
      color: colors[Math.floor(i / 2)],
      isChecked: false,
      isGuessed: false,
    });
  }

  return cardsArray;
};

const useCards = (initialAmount) => {
  const [cards, setCards] = useState(createCards(initialAmount));

  const resetCards = (amount) => {
    const sortedCards = createCards(amount);

    setCards(sortedCards.sort(() => Math.floor(Math.random() - 0.5)));
  };

  const updateCards = (newState) => {
    setCards(newState);
  };

  return [cards, resetCards, updateCards];
};

export default useCards;
