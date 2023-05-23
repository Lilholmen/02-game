import Cards from "./Cards";
import Modal from "../Modal";

import { useLevel } from "../../contexts/LevelContext";

const GameBoard = () => {
  const {
    currentLevel,
    setRestartInitiated,
    restartInitiated,
    isLevelCompleted,
  } = useLevel();

  return (
    <section
      className="h-full bg-stone-200 py-6"
      onClick={() => {}}
    >
      {restartInitiated ? (
        setRestartInitiated(false)
      ) : (
        <Cards key={currentLevel.amount} />
      )}

      {isLevelCompleted ? <Modal /> : null}
    </section>
  );
};

export default GameBoard;
