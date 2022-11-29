import {
  BsQuestionSquare,
  BsCheckSquare,
  BsArrowClockwise,
  BsGridFill,
} from 'react-icons/bs';
import Button from './UI/Button';
import styles from './Header.module.css';

const Header = ({ score, correct, total, change, restart }) => {
  return (
    <div className={styles.header}>
      <div className={styles.settings}>
        <Button action={() => change(2)}>
          <BsGridFill />
        </Button>
        <Button action={restart}>
          <BsArrowClockwise />
        </Button>
      </div>

      <div className={styles.info}>
        <div className={styles.score}>
          <BsQuestionSquare />
          <div>{score}</div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.score}>
          <BsCheckSquare />
          <div>
            {correct} / {total}
          </div>
        </div>
      </div>

      <div className={styles.timer}>00 : 00</div>
    </div>
  );
};

export default Header;
