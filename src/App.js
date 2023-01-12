import { useEffect, useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Modal from "./components/Modal";

import levels from "./data/levels";
import colors from "./data/colors";

const STARTING_LEVEL = 1;
const LAST_LEVEL = 5;

const App = () => {
  const [cards, setCards] = useState([]);
  const [onCheck, setOnCheck] = useState(null);
  const [levelInfo, setLevelInfo] = useState({
    isCompleted: false,
    correct: 0,
    score: 0,
  });
  const [currentLevel, setCurrentLevel] = useState(
    levels.find((level) => level.id === STARTING_LEVEL)
  );

  const resetLevelInfo = () => {
    setLevelInfo({
      isCompleted: false,
      correct: 0,
      score: 0,
    });
  };

  const switchLevel = (transitionalLevelId) => {
    const newLevel = levels.find((level) => level.id === transitionalLevelId);
    setCurrentLevel({ ...newLevel });
    setOnCheck(null);
    resetLevelInfo();
  };

  const checkHandler = (checkedCard) => {
    if (!onCheck) {
      setCards(
        cards.map((card) =>
          card.id === checkedCard.id
            ? { ...card, isChecked: true }
            : { ...card, isChecked: false }
        )
      );
      setOnCheck(checkedCard);
    } else {
      if (onCheck.value === checkedCard.value) {
        setCards(
          cards.map((card) =>
            card.value === checkedCard.value
              ? { ...card, isGuessed: true }
              : card
          )
        );
        setOnCheck(null);
        setLevelInfo({
          ...levelInfo,
          correct: levelInfo.correct + 1,
          score: levelInfo.score + 1,
        });
      } else {
        setOnCheck(null);
        setLevelInfo({
          ...levelInfo,
          score: levelInfo.score + 1,
        });
        checkedCard.isChecked = true;
      }
    }
  };

  useEffect(() => {
    const initiateCards = () => {
      const cardsArray = [];

      for (let i = 0; i < currentLevel.amount; i++) {
        cardsArray.push({
          id: i + 1,
          value: Math.floor(i / 2),
          color: colors[Math.floor(i / 2)],
          isChecked: false,
          isGuessed: false,
        });
      }

      cardsArray.sort(() => Math.floor(Math.random() - 0.5));
      setCards(cardsArray);
    };

    initiateCards();
  }, [currentLevel]);

  return (
    <div className="App flex h-screen flex-col font-sans-main text-stone-200">
      {levelInfo.correct === currentLevel.pairs
        ? (levelInfo.isCompleted = true)
        : null}
      <Modal
        restart={() => switchLevel(currentLevel.id)}
        nextLevel={
          currentLevel.id < LAST_LEVEL
            ? () => switchLevel(currentLevel.id + 1)
            : false
        }
        levelInfo={{
          ...levelInfo,
          currentId: currentLevel.id,
          currentAmount: currentLevel.amount,
        }}
      />

      <Header
        currentLevel={currentLevel}
        levelInfo={levelInfo}
        switchLevel={switchLevel}
      />

      <Board
        cards={cards}
        guess={checkHandler}
      />
    </div>
  );
};

export default App;
