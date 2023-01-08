const Button = ({ children, action }) => {
  return (
    <button
      className="flex items-center justify-center bg-transparent text-7xl text-neutral-200"
      type="button"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
