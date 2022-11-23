import Card from './Card';
import styles from './Board.module.css';

const Board = ({ cards }) => {
  return (
    <div className={styles.board}>
      {cards.map((card) => (
        <Card key={card.id} value={card.value} color={card.color} />
      ))}
    </div>
  );
};

export default Board;
