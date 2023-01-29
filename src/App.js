import { useEffect, useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import useLocalStorage from "./components/hooks/useLocalStorage";
import useTime from "./components/hooks/useTime";
import useCards from "./components/hooks/useCards";

import levels from "./data/levels";

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

  /* const updateLeaderBoard = () => {
    const isNewBestTime =
      leaderBoard[currentLevelId].time === null ||
      levelTime < leaderBoard[currentLevelId].time;
    const isNewBestAttempt =
      leaderBoard[currentLevelId].attempts === null ||
      levelAttempts < leaderBoard[currentLevelId].attempts;

    setLeaderBoard(
      leaderBoard.map((level) =>
        level.id === currentLevelId
          ? {
              time: isNewBestTime ? levelTime : level.time,
              attempts: isNewBestAttempt ? levelAttempts : level.attempts,
            }
          : level
      )
    );

    return [isNewBestTime, isNewBestAttempt];
  }; */

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

      <Header
        currentLevel={currentLevel}
        attempts={levelAttempts}
        guessed={levelGuessed}
        switchLevel={switchLevel}
        levels={levels}
        time={levelTime}
      />

      <Board
        setAttempts={setLevelAttempts}
        setGuessed={setLevelGuessed}
        updateCards={updateCards}
        cards={cards}
        startTimer={startTimer}
      />

      <Footer />
    </div>
  );
};

export default App;
