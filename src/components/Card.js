import styles from './Card.module.css';

const Card = ({ card, toggleChecked, markGuessed }) => {
  return (
    <div
      style={
        card.isChecked || card.isGuessed ? { backgroundColor: card.color } : {}
      }
      className={styles.card}
      onClick={() => toggleChecked(card.id)}
    >
      {card.value}
    </div>
  );
};

export default Card;
