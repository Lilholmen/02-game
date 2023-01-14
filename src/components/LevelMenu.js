import Level from "./Level";

const LevelMenu = ({ switchLevel, levels }) => {
  return (
    <div className="fixed top-14 z-10 h-full w-full border-stone-200 bg-stone-600 text-5xl sm:top-20 sm:text-6xl md:h-max md:w-2/3 lg:top-28 lg:w-max lg:border-b-8 lg:border-r-8">
      <h3 className="p-2 sm:p-4 lg:px-8">Choose Level:</h3>
      <nav className="md:pb-10">
        <ul>
          {levels.map((level) => (
            <li
              className="relative hover:bg-stone-400"
              key={level.id}
            >
              <Level
                action={switchLevel}
                levelInfo={level}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LevelMenu;
