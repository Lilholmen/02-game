const HeaderSection = ({ children }) => {
  return (
    <div className="flex h-14 items-center justify-center p-2 text-3xl first:bg-stone-600 even:w-full sm:h-20 sm:p-4 sm:text-5xl lg:h-28 lg:text-7xl">
      {children}
    </div>
  );
};

export default HeaderSection;
