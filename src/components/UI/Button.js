import styles from './Button.module.css';

const Button = ({ children, action }) => {
  return (
    <button className={styles.button} type='button' onClick={action}>
      {children}
    </button>
  );
};

export default Button;
