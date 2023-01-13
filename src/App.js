import { useEffect, useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import initiateCards from "./components/utilities/initiateCards";
import useLocalStorage from "./components/utilities/useLocalStorage";
import useTime from "./components/utilities/useTime";

import rawLevels from "./data/rawLevels";

const INITIAL_SCORE = {
  attempts: 0,
  guessed: 0,
};

const App = () => {
  const [levels, setLevels] = useLocalStorage("levels", rawLevels);
  const [currentLevel, setCurrentLevel] = useState(
    levels.find((level) => level.isCurrent)
  );
  const [levelScore, setLevelScore] = useState(INITIAL_SCORE);
  const [levelTime, isRunning, setIsRunning] = useTime(0);
  const [cards, setCards] = useState([]);
  const [onCheck, setOnCheck] = useState(null);

  const [isCompleted, setIsComplited] = useState(false);

  const switchLevel = (transitionalLevelId) => {
    setCurrentLevel({
      ...levels.find((level) => level.id === transitionalLevelId),
    });
    setLevelScore(INITIAL_SCORE);
    setIsComplited(false);
    setIsRunning(false);
    setOnCheck(null);
  };

  const checkHandler = (checkedCard) => {
    if (!isRunning) {
      setIsRunning(true);
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
        setLevelScore({
          attempts: levelScore.attempts + 1,
          guessed: levelScore.guessed + 1,
        });
      } else {
        setLevelScore({
          ...levelScore,
          attempts: levelScore.attempts + 1,
        });
        checkedCard.isChecked = true;
      }
      setOnCheck(null);
    }
  };

  useEffect(() => {
    initiateCards(currentLevel.amount, setCards);
  }, [currentLevel]);

  useEffect(() => {
    if (levelScore.guessed === currentLevel.pairs) {
      setIsComplited(true);
      setIsRunning(false);
    }
  }, [levelScore.guessed, currentLevel.pairs, setIsRunning]);

  /* const writeLocal = (id) => {
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
  }; */

  return (
    <div className="App flex h-screen flex-col font-sans-main text-stone-200">
      {isCompleted ? (
        <Modal
          switchLevel={switchLevel}
          lastLevelId={levels.length}
          levelScore={levelScore}
          currentLevelInfo={currentLevel}
          timePassed={levelTime}
        />
      ) : null}

      <Header
        currentLevel={currentLevel}
        levelScore={levelScore}
        switchLevel={switchLevel}
        levels={levels}
        time={levelTime}
      />

      <Board
        cards={cards}
        guess={checkHandler}
      />

      <Footer />
    </div>
  );
};

export default App;
