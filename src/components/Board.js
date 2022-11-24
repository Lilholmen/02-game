import Card from './Card';
import styles from './Board.module.css';

const Board = ({ cards, toggleChecked, markGuessed }) => {
  return (
    <div className={styles.board}>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          toggleChecked={toggleChecked}
          markGuessed={markGuessed}
        />
      ))}
    </div>
  );
};

export default Board;
