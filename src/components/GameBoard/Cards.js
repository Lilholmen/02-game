import { useState, useReducer, useContext } from "react";
import { reducer, init } from "../../utils/cardsReducer";
import { cardsThemeContext } from "../../App";
import Card from "./Card";

const Cards = ({ initialCardsAmount, incrementAttempts, incrementGuessed }) => {
  const [cards, dispatchCards] = useReducer(reducer, initialCardsAmount, init);
  const [isDisabled, setIsDisabled] = useState(false);
  const cardsTheme = useContext(cardsThemeContext);

  const onCheck = cards.find((card) => card.isChecked);

  const dispatchCommand = (cardInfo) => {
    if (cardInfo.isChecked || cardInfo.isGuessed) return null;

    if (!onCheck) dispatchCards({ type: "FIRST_CHECKED", card: cardInfo });
    else if (onCheck.value === cardInfo.value) {
      incrementAttempts();
      incrementGuessed();
      dispatchCards({ type: "GUESSED_RIGHT", card: cardInfo });
    } else {
      incrementAttempts();
      dispatchCards({ type: "GUESSED_WRONG", card: cardInfo });
      setIsDisabled(true);
      setTimeout(() => {
        dispatchCards({ type: "UNCHECK_ALL" });
        setIsDisabled(false);
      }, 500);
    }
  };

  return (
    <div className="grid h-full auto-rows-auto grid-cols-4 gap-2 lg:gap-4 lg:px-8">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          guess={dispatchCommand}
          disable={isDisabled}
          theme={cardsTheme}
        />
      ))}
    </div>
  );
};

export default Cards;
