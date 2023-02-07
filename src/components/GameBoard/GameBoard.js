import Cards from "./Cards";

const GameBoard = ({
  levelCardsAmount,
  incrementAttempts,
  incrementGuessed,
  startTimer,
}) => {
  return (
    <section
      className="h-full bg-stone-200 py-6"
      onClick={() => startTimer()}
    >
      <Cards
        initialCardsAmount={levelCardsAmount}
        incrementAttempts={incrementAttempts}
        incrementGuessed={incrementGuessed}
      />
    </section>
  );
};

export default GameBoard;
