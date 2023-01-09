import Card from './Card';

const Board = ({ cards, guess }) => {
  return (
    <div className='mt-6 flex h-full flex-wrap justify-center'>
      {cards.map((card) => (
        <Card key={card.id} card={card} guess={guess} />
      ))}
    </div>
  );
};

export default Board;
