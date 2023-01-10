import Card from "./Card";

const Board = ({ cards, guess }) => {
  return (
    <section className="container mx-auto my-6 h-full bg-stone-200">
      <div className="grid h-full auto-rows-auto grid-cols-4 gap-2 lg:gap-4 lg:px-8">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            guess={guess}
          />
        ))}
      </div>
    </section>
  );
};

export default Board;
