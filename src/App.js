import { useEffect, useState } from "react";

import Board from "./components/Board";
import Header from "./components/Header";
import Modal from "./components/Modal";
import LevelMenu from "./components/LevelMenu";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

import getLevelsFromLocalStorage from "./components/utilities/getLevelsFromLocalStorage";
import initiateCards from "./components/utilities/initiateCards";
import writeRecord from "./components/utilities/writeRecord";

const levels = getLevelsFromLocalStorage();

const STARTING_LEVEL = 1;
const LAST_LEVEL = levels.length;

const App = () => {
  const [gameStatus, setGameStatus] = useState({
    currentLevel: levels.find((level) => level.id === STARTING_LEVEL),
    shownLevelMenu: false,
    shownModal: false,
    isPlaying: false,
  });
  const [levelInfo, setLevelInfo] = useState({
    isCompleted: false,
    correct: 0,
    score: 0,
    time: 0,
  });
  const [cards, setCards] = useState([]);
  const [onCheck, setOnCheck] = useState(null);
  const [timePassed, setTimePassed] = useState(0);

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
      isPlaying: false,
    });
    setOnCheck(null);
    setLevelInfo({
      isCompleted: false,
      correct: 0,
      score: 0,
      time: 0,
    });

    setTimePassed(0);
  };

  const checkHandler = (checkedCard) => {
    if (!gameStatus.isPlaying) {
      setGameStatus({ ...gameStatus, isPlaying: true });
    }

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
          isCompleted:
            levelInfo.correct + 1 === gameStatus.currentLevel.pairs
              ? true
              : false,
          correct: levelInfo.correct + 1,
          score: levelInfo.score + 1,
          time:
            levelInfo.correct + 1 === gameStatus.currentLevel.pairs
              ? timePassed
              : 0,
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
    initiateCards(gameStatus.currentLevel.amount, setCards);
  }, [gameStatus.currentLevel]);

  const writeLocal = (id) => {
    const currentLevel = levels.find((level) => level.id === id);

    if (currentLevel.bestTime === null && currentLevel.bestTry === null) {
      currentLevel.bestTime = levelInfo.time;
      currentLevel.bestTry = levelInfo.score;
    } else {
      if (levelInfo.time < currentLevel.bestTime)
        currentLevel.bestTime = levelInfo.time;
      if (levelInfo.score < currentLevel.bestTry)
        currentLevel.bestTry = levelInfo.score;
    }

    window.localStorage.setItem("levels", JSON.stringify(levels));
  };

  return (
    <div className="App flex h-screen flex-col font-sans-main text-stone-200">
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
          bestTime: gameStatus.currentLevel.bestTime,
          bestTry: gameStatus.currentLevel.bestTry,
        }}
        save={writeLocal}
      />

      <Header
        currentLevel={gameStatus.currentLevel}
        levelInfo={levelInfo}
        restartLevel={() => switchLevel(gameStatus.currentLevel.id)}
        showLevelMenu={levelMenuHandler}
      >
        <Timer
          running={gameStatus.isPlaying}
          levelInfo={levelInfo}
          time={timePassed}
          incrementTime={() => setTimePassed((prev) => prev + 1)}
        />
      </Header>

      {gameStatus.shownLevelMenu ? (
        <LevelMenu
          switchLevel={switchLevel}
          levels={levels}
        />
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
