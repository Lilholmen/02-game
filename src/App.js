import { createContext, useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import useLocalStorage from "./components/hooks/useLocalStorage";
import useTime from "./components/hooks/useTime";
import useCards from "./components/hooks/useCards";

import levels from "./data/levels";
import GameBoard from "./components/GameBoard/GameBoard";
import THEMES from "./data/themes";

export const cardsThemeContext = createContext(null);

const App = () => {
  const [currentLevelId, setCurrentLevelId] = useLocalStorage(
    "currentLevelId",
    0
  );
  const [cards, setCards, updateCards] = useCards(
    levels[currentLevelId].amount
  );
  const [levelAttempts, setLevelAttempts] = useState(0);
  const [levelGuessed, setLevelGuessed] = useState(0);
  const [levelTime, startTimer, pauseTimer, stopTimer] = useTime(0);
  const [leaderBoard, setLeaderBoard] = useLocalStorage(
    "leaderBoard",
    Array.from({ length: levels.length }, () => ({
      time: null,
      attempts: null,
    }))
  );

  const [cardsThemeValue, setCardsThemeValue] = useState(THEMES[0]);

  const changeCardsThemeHandler = (themeId) => {
    if (themeId < THEMES.length) setCardsThemeValue(THEMES[themeId]);
    else console.log("Unavalible theme!");
  };

  const currentLevel = levels[currentLevelId];
  const completed = currentLevel.pairs === levelGuessed;

  const switchLevel = (transitionalLevelId = null) => {
    if (transitionalLevelId !== null) {
      setCurrentLevelId(transitionalLevelId);
    }
    setCards(0);
    setLevelAttempts(0);
    setLevelGuessed(0);
    stopTimer();
  };

  const incrementLevelAttempts = () => {
    setLevelAttempts((prev) => prev + 1);
  };

  const incrementLevelGuessed = () => {
    setLevelGuessed((prev) => prev + 1);
  };

  useEffect(() => {
    if (cards.length === 0) {
      setCards(currentLevel.amount);
    }
  }, [cards.length, currentLevel.amount, setCards]);

  return (
    <div className="flex h-screen select-none flex-col font-sans-main text-stone-200">
      {completed ? (
        <>
          {pauseTimer()}
          <Modal
            switchLevel={switchLevel}
            isLastLevel={levels.length === currentLevel.id + 1}
            time={levelTime}
            attempts={levelAttempts}
            currentLevel={currentLevel}
            best={leaderBoard[currentLevelId]}
          />
        </>
      ) : null}

      <cardsThemeContext.Provider value={changeCardsThemeHandler}>
        <Header
          currentLevel={currentLevel}
          attempts={levelAttempts}
          guessed={levelGuessed}
          switchLevel={switchLevel}
          levels={levels}
          time={levelTime}
        />
      </cardsThemeContext.Provider>

      <cardsThemeContext.Provider value={cardsThemeValue}>
        <GameBoard
          levelCardsAmount={currentLevel.amount}
          incrementAttempts={incrementLevelAttempts}
          incrementGuessed={incrementLevelGuessed}
          startTimer={startTimer}
        />
      </cardsThemeContext.Provider>

      <Footer />
    </div>
  );
};

export default App;
