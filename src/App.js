import { useEffect, useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Modal from "./components/Modal";

import levels from "./data/levels";
import colors from "./data/colors";
import LevelMenu from "./components/LevelMenu";
import Footer from "./components/Footer";

const STARTING_LEVEL = 1;
const LAST_LEVEL = 5;

const App = () => {
  const [gameStatus, setGameStatus] = useState({
    currentLevel: levels.find((level) => level.id === STARTING_LEVEL),
    shownLevelMenu: false,
    shownModal: false,
    paused: false,
  });
  const [levelInfo, setLevelInfo] = useState({
    isCompleted: false,
    correct: 0,
    score: 0,
  });
  const [cards, setCards] = useState([]);
  const [onCheck, setOnCheck] = useState(null);

  const levelMenuHandler = () => {
    setGameStatus({
      ...gameStatus,
      shownLevelMenu: !gameStatus.shownLevelMenu,
    });
  };

  const switchLevel = (transitionalLevelId) => {
    const newLevel = levels.find((level) => level.id === transitionalLevelId);

    setGameStatus({
      currentLevel: { ...newLevel },
      shownLevelMenu: false,
      shownModal: false,
      paused: false,
    });
    setOnCheck(null);
    setLevelInfo({
      isCompleted: false,
      correct: 0,
      score: 0,
    });
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

    cardsArray.sort(() => Math.floor(Math.random() - 0.5));
    setCards(cardsArray);
  };

  useEffect(() => {
    initiateCards(gameStatus.currentLevel.amount);
  }, [gameStatus.currentLevel]);

  return (
    <div className="App flex h-screen flex-col font-sans-main text-stone-200">
      {levelInfo.correct === gameStatus.currentLevel.pairs
        ? (levelInfo.isCompleted = true)
        : null}
      <Modal
        restart={() => switchLevel(gameStatus.currentLevel.id)}
        nextLevel={
          gameStatus.currentLevel.id < LAST_LEVEL
            ? () => switchLevel(gameStatus.currentLevel.id + 1)
            : false
        }
        levelInfo={{
          ...levelInfo,
          currentId: gameStatus.currentLevel.id,
          currentAmount: gameStatus.currentLevel.amount,
        }}
      />

      <Header
        currentLevel={gameStatus.currentLevel}
        levelInfo={levelInfo}
        restartLevel={() => switchLevel(gameStatus.currentLevel.id)}
        showLevelMenu={levelMenuHandler}
      />

      {gameStatus.shownLevelMenu ? (
        <LevelMenu switchLevel={switchLevel} />
      ) : null}

      <Board
        cards={cards}
        guess={checkHandler}
      />

      <Footer />
    </div>
  );
};

export default App;
