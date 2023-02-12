import React from "react";
import LevelItem from "./LevelItem";
import levels from "../../data/levels";
import THEMES from "../../data/themes";
import ThemeItem from "./ThemeItem";

const LevelsAndSettingsMenu = ({ toggleMenu }) => {
  return (
    <div className="absolute z-10 h-full w-full bg-stone-300 px-3 py-3 text-stone-900">
      <h3 className="text-center text-5xl">Choose level</h3>
      <nav className="flex flex-wrap justify-center gap-2">
        {levels.map((level) => (
          <LevelItem
            key={level.id}
            levelInfo={level}
            toggleMenu={toggleMenu}
          />
        ))}
      </nav>
      <h3 className="text-center text-5xl">Theme</h3>
      <div className="flex gap-4">
        {THEMES.map((theme, index) => (
          <ThemeItem
            key={index}
            theme={theme}
            id={index}
            toggleMenu={toggleMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelsAndSettingsMenu;
