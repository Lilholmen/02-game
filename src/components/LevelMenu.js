import levels from "../data/levels";

const LevelMenu = () => {
  return (
    <nav>
      <ul>
        {levels.map((level) => (
          <li key={level.id}>{level.id}</li>
        ))}
      </ul>
    </nav>
  );
};

export default LevelMenu;
