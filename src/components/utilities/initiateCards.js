import colors from "../../data/colors";

const initiateCards = (cardsAmount, stateSetter) => {
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

  cardsArray.sort(() => Math.floor(Math.random() - 0.5));
  stateSetter(cardsArray);
};

export default initiateCards;
