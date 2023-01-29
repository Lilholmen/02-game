import { useState } from "react";

import Card from "./Card";

const Board = ({ setAttempts, setGuessed, updateCards, cards, startTimer }) => {
  const [disable, setDisable] = useState(false);

  const onCheck = cards.find((card) => card.isChecked);

  const checkHandler = (checkedCard) => {
    startTimer();

    if (!onCheck) {
      updateCards(
        cards.map((card) =>
          card.id === checkedCard.id ? { ...card, isChecked: true } : card
        )
      );
    } else {
      if (onCheck.value === checkedCard.value) {
        updateCards(
          cards.map((card) =>
            card.value === checkedCard.value
              ? { ...card, isGuessed: true, isChecked: false }
              : card
          )
        );

        setAttempts((prev) => prev + 1);
        setGuessed((prev) => prev + 1);
      } else {
        setAttempts((prev) => prev + 1);
        updateCards(
          cards.map((card) =>
            card.id === checkedCard.id ? { ...card, isChecked: true } : card
          )
        );
        setDisable(true);

        setTimeout(() => {
          updateCards(
            cards.map((card) => ({
              ...card,
              isChecked: false,
            }))
          );
          setDisable(false);
        }, 1000);
      }
    }
  };

  return (
    <section className="h-full bg-stone-200 py-6">
      <div className="grid h-full auto-rows-auto grid-cols-4 gap-2 lg:gap-4 lg:px-8">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            guess={checkHandler}
            disable={disable}
          />
        ))}
      </div>
    </section>
  );
};

export default Board;
