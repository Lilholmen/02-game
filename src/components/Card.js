import { FaCheck } from 'react-icons/fa';
import styles from './Card.module.css';

const Card = ({ card, guess }) => {
  return card.isGuessed ? (
    <div className={`${styles.card} ${styles.cardGuessed}`}>{<FaCheck />}</div>
  ) : (
    <div
      style={card.isChecked ? { backgroundColor: card.color } : {}}
      className={`${styles.card} ${card.isChecked ? styles.cardChecked : ''}`}
      onClick={card.isChecked ? () => {} : () => guess(card.id)}
    >
      {/* {card.value} */}
    </div>
  );
};

export default Card;
