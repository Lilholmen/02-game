const ModalButton = ({ children, isDisabled = true, action }) => {
  return (
    <button
      className="rounded-md py-2 px-4 text-base font-semibold text-amber-200 hover:bg-slate-700 hover:text-amber-50 disabled:text-red-800 disabled:hover:bg-transparent"
      disabled={isDisabled}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default ModalButton;
