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
  const [checked, setChecked] = useState([]);
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

  const markChecked = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isChecked: true } : card
      )
    );
  };

  const markGuessed = (value) => {
    setCards(
      cards.map((card) =>
        card.value === value ? { ...card, isGuessed: true } : card
      )
    );
  };

  const guessHandler = (id) => {
    markChecked(id);

    setChecked([...checked, cards.find((card) => card.id === id)]);
  };

  const changeLevel = (transitionalLevel) => {
    setCurrentLevel(levels.find((level) => level.id === transitionalLevel));

    resetLevelInfo();
  };

  const restartLevel = () => {
    setCurrentLevel({ ...currentLevel });

    resetLevelInfo();
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

  useEffect(() => {
    if (checked.length === 2) {
      if (checked[0].value === checked[1].value) {
        markGuessed(checked[0].value);

        setChecked([]);
        setLevelInfo({
          ...levelInfo,
          correct: levelInfo.correct + 1,
          score: levelInfo.score + 1,
        });
      } else {
        setLevelInfo({ ...levelInfo, score: levelInfo.score + 1 });
      }
    }
    if (checked.length === 3) {
      setCards(
        cards.map((card) =>
          card.id === checked[0].id || card.id === checked[1].id
            ? { ...card, isChecked: false }
            : card
        )
      );

      setChecked([checked[2]]);
    }
  }, [checked]);

  return (
    <div className="App flex h-screen flex-col bg-neutral-200 font-sans-serif">
      {levelInfo.correct === currentLevel.pairs
        ? (levelInfo.isCompleted = true)
        : null}
      <Modal
        restart={restartLevel}
        nextLevel={
          currentLevel.id < LAST_LEVEL
            ? () => changeLevel(currentLevel.id + 1)
            : false
        }
        levelInfo={{
          ...levelInfo,
          currentId: currentLevel.id,
          currentAmount: currentLevel.amount,
        }}
      />

      <Header
        score={levelInfo.score}
        correct={levelInfo.correct}
        total={currentLevel.pairs}
        change={changeLevel}
        restart={restartLevel}
      />

      <Board
        cards={cards}
        guess={guessHandler}
      />
    </div>
  );
};

export default App;
