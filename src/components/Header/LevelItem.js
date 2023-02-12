import React from "react";
import { useLevel } from "../../contexts/LevelContext";

const LevelItem = ({ levelInfo, toggleMenu }) => {
  const { changeLevel, currentLevelId } = useLevel();

  return (
    <button
      className="flex h-12 w-12 items-center justify-center rounded border-2 border-stone-500 bg-stone-400 hover:bg-stone-500 disabled:border-none disabled:bg-emerald-700"
      onClick={() => {
        changeLevel(levelInfo.id);
        toggleMenu();
      }}
      disabled={currentLevelId === levelInfo.id}
    >
      {levelInfo.id + 1}
    </button>
  );
};

export default LevelItem;
