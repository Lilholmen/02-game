import levels from "../../data/levels";

const getLevelsFromLocalStorage = () => {
  let localLevels = JSON.parse(window.localStorage.getItem("levels"));

  if (localLevels === null) {
    localLevels = levels;

    window.localStorage.setItem("levels", JSON.stringify(levels));
  }

  return localLevels;
};

export default getLevelsFromLocalStorage;
