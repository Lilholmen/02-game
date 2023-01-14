import { useState } from "react";

import colors from "../../data/colors";

const useCards = () => {
  const [cards, setCards] = useState([]);

  const initiateCards = (cardsAmount) => {
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

    setCards(cardsArray.sort(() => Math.floor(Math.random() - 0.5)));
  };

  const updateCards = (newState) => {
    setCards(newState);
  };

  return [cards, initiateCards, updateCards];
};

export default useCards;
