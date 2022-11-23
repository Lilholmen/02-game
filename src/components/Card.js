import styles from './Card.module.css';

const Card = ({ value, color }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      {value}
    </div>
  );
};

export default Card;
