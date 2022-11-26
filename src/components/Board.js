import Card from './Card';
import styles from './Board.module.css';

const Board = ({ cards, guess, level }) => {
  return (
    <div className={styles.board}>
      {cards.map((card) => (
        <Card key={card.id} card={card} guess={guess} />
      ))}
    </div>
  );
};

export default Board;
