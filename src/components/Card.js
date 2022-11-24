import styles from './Card.module.css';

const Card = ({ card, toggleChecked, markGuessed, guess }) => {
  return (
    <div
      style={
        card.isChecked || card.isGuessed ? { backgroundColor: card.color } : {}
      }
      className={styles.card}
      onClick={() => guess(card.id)}
    >
      {card.value}
    </div>
  );
};

export default Card;
