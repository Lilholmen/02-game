import styles from './Info.module.css';

const Info = ({ score }) => {
  return <div className={styles.info}>{score}</div>;
};

export default Info;
