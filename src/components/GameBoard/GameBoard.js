import { useLevel } from "../../contexts/LevelContext";
import Modal from "../Modal";
import Cards from "./Cards";

const GameBoard = () => {
  const level = useLevel();

  return (
    <section
      className="h-full bg-stone-200 py-6"
      onClick={() => {}}
    >
      {console.log("render game board")}
      {level.restartInitiated ? (
        level.setRestartInitiated(false)
      ) : (
        <Cards
          key={level.currentLevel.amount}
          initialCardsAmount={level.currentLevel.amount}
          incrementAttempts={level.incrementAttempts}
          incrementGuessed={level.incrementGuessed}
        />
      )}
      {level.isLevelCompleted ? (
        <Modal
          changeLevel={level.changeLevel}
          attempts={level.attempts}
          currentLevel={level.currentLevel}
          best={null}
          time={level.timeToComplete}
          isLastLevel={level.currentLevelId === 4}
          restartLevel={level.restartHandler}
        />
      ) : null}
    </section>
  );
};

export default GameBoard;
