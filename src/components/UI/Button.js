const Button = ({ children, action }) => {
  return (
    <button
      className="flex items-center justify-center bg-transparent"
      type="button"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
