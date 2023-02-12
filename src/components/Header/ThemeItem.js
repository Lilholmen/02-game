import React from "react";
import { useCards } from "../../contexts/CardsContext";

const ThemeItem = ({ theme, id, toggleMenu }) => {
  const { setTheme } = useCards();

  return (
    <button
      className="w-full border-4 border-stone-500"
      onClick={() => {
        setTheme(id);
        toggleMenu();
      }}
    >
      <div className="">{theme}</div>
    </button>
  );
};

export default ThemeItem;
