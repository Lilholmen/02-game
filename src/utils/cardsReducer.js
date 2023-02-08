export const reducer = (cardsState, action) => {
  switch (action.type) {
    case "RESTART":
      const temp = [...cardsState];
      temp.sort(() => Math.random() - 0.5);
      return temp;

    case "FIRST_CHECKED":
      return cardsState.map((card) =>
        card.id === action.card.id ? { ...card, isChecked: true } : card
      );

    case "GUESSED_RIGHT":
      return cardsState.map((card) =>
        card.value === action.card.value
          ? { ...card, isChecked: false, isGuessed: true }
          : card
      );

    case "GUESSED_WRONG":
      return cardsState.map((card) =>
        card.id === action.card.id ? { ...card, isChecked: true } : card
      );

    case "UNCHECK_ALL":
      return cardsState.map((card) => ({ ...card, isChecked: false }));

    default:
      console.log("Unknown command: " + action.type);
      break;
  }
};

export const init = (initialAmount) => {
  const initialCards = [];

  for (let i = 0; i < initialAmount; i++) {
    initialCards.push({
      id: i + 1,
      value: Math.floor(i / 2),
      isChecked: false,
      isGuessed: false,
    });
  }

  initialCards.sort(() => Math.random() - 0.5);

  return initialCards;
};