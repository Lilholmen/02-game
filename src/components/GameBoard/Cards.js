import { useState, useEffect } from "react";
import { useCards } from "../../contexts/CardsContext";
import { useLevel } from "../../contexts/LevelContext";
import Card from "./Card";

const Cards = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { cardsTheme, cardsState, cardsDispatch } = useCards();
  const { incrementAttempts, incrementGuessed, currentLevel } = useLevel();

  const onCheck = cardsState.find((card) => card.isChecked);

  const dispatchCommand = (cardInfo) => {
    if (cardInfo.isChecked || cardInfo.isGuessed) return null;

    if (!onCheck) cardsDispatch({ type: "FIRST_CHECKED", card: cardInfo });
    else if (onCheck.value === cardInfo.value) {
      incrementAttempts();
      incrementGuessed();
      cardsDispatch({ type: "GUESSED_RIGHT", card: cardInfo });
    } else {
      incrementAttempts();
      cardsDispatch({ type: "GUESSED_WRONG", card: cardInfo });
      setIsDisabled(true);
      setTimeout(() => {
        cardsDispatch({ type: "UNCHECK_ALL" });
        setIsDisabled(false);
      }, 500);
    }
  };

  useEffect(() => {
    cardsDispatch({
      type: "INITIATE_CARDS",
      initialAmount: currentLevel.amount,
    });
  }, []);

  return (
    <div className={"container mx-auto grid h-full grid-cols-4 gap-2"}>
      {cardsState.map((card) => (
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
