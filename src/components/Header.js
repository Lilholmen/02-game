import { BsQuestionSquare, BsCheckSquare } from 'react-icons/bs';
import styles from './Header.module.css';

const Header = ({ score, total }) => {
  return (
    <div className={styles.header}>
      <div className={styles.info}>
        <div className={styles.score}>
          <BsQuestionSquare />
          <span>{score}</span>
        </div>
        <div className={styles.score}>
          <BsCheckSquare />
          <span>0 / {total}</span>
        </div>
      </div>
      <div className={styles.title}>Find The Pair</div>
      <div className={styles.settings}>Button</div>
    </div>
  );
};

export default Header;
