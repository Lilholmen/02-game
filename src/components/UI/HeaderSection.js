const HeaderSection = ({ children }) => {
  return (
    <div className="flex items-center justify-center p-2 text-3xl first:bg-stone-600 even:w-full sm:p-4 sm:text-5xl lg:text-7xl">
      {children}
    </div>
  );
};

export default HeaderSection;
