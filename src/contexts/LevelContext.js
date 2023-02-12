import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import levels from "../data/levels";

const LevelContext = createContext(null);

export const useLevel = () => {
  return useContext(LevelContext);
};

export const LevelContextProvider = ({ children }) => {
  const [currentLevelId, setCurrentLevelId] = useLocalStorage(
    "currentLevelId",
    0
  );
  const [currentLevel, setCurrentLevel] = useState(levels[currentLevelId]);
  const [restartInitiated, setRestartInitiated] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [guessed, setGuessed] = useState(0);
  const [timeToComplete, setTimeToComplete] = useState(0);
  const [isLevelCompleted, setIsLevelCompleted] = useState(false);

  const changeLevelHandler = (transitionalLevelId) => {
    setAttempts(0);
    setGuessed(0);
    setTimeToComplete(0);
    setIsLevelCompleted(false);
    setCurrentLevelId(transitionalLevelId);

    setCurrentLevel(levels[transitionalLevelId]);
  };

  const restartHandler = () => {
    setAttempts(0);
    setGuessed(0);
    setTimeToComplete(0);
    setIsLevelCompleted(false);
    setRestartInitiated(true);
  };

  const incrementAttempts = () => {
    setAttempts((prev) => prev + 1);
  };

  const incrementGuessed = () => {
    setGuessed((prev) => prev + 1);
  };

  useEffect(() => {
    if (guessed === currentLevel.pairs) setIsLevelCompleted(true);
  }, [guessed, currentLevel.pairs]);

  return (
    <LevelContext.Provider
      value={{
        attempts,
        guessed,
        timeToComplete,
        currentLevel,
        currentLevelId,
        restartInitiated,
        isLevelCompleted,
        changeLevel: changeLevelHandler,
        incrementAttempts,
        incrementGuessed,
        restartHandler,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};
