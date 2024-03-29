import THEMES from "../data/themes";
import { useCardsTheme } from "../contexts/CardsThemeContext";
import Level from "./Level";
import levels from "../data/levels";

const LevelMenu = ({ switchLevel, currentLevel }) => {
  const { setTheme } = useCardsTheme();

  return (
    <div className="fixed top-14 z-10 h-full w-full border-stone-200 bg-stone-600 text-5xl sm:top-20 sm:text-6xl md:h-max md:w-2/3 lg:top-28 lg:w-max lg:border-b-8 lg:border-r-8">
      <h3 className="p-2 sm:p-4 lg:px-8">Choose Level:</h3>
      <nav className="md:pb-10">
        <ul>
          {levels.map((level) => (
            <li
              className="relative"
              key={level.id}
            >
              <Level
                action={switchLevel}
                levelInfo={level}
                isCurrent={currentLevel.id === level.id}
              />
            </li>
          ))}
        </ul>
      </nav>
      <h3 className="p-2 sm:p-4 lg:px-8">Choose Theme:</h3>
      <ul>
        {THEMES.map((theme, index) => (
          <li key={theme}>
            <button onClick={() => setTheme(index)}>
              {theme.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LevelMenu;
