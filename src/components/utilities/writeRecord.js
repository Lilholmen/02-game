const writeRecord = ({ time, tries, levelId }) => {
  const levels = JSON.parse(window.localStorage.levels);
  const currentLevel = levels.find((level) => level.id === levelId);

  currentLevel.bestTime = time;
  currentLevel.bestTry = tries;

  window.localStorage.setItem("levels", levels);
};

export default writeRecord;
