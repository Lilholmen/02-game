import { createContext, useContext, useState } from "react";
import THEMES from "../data/themes";

const CardsThemeContext = createContext(null);

export const useCardsTheme = () => {
  return useContext(CardsThemeContext);
};

export const CardsThemeContextProvider = ({ children }) => {
  const [cardsTheme, setCardsTheme] = useState(THEMES[0]);

  const cardsThemeHandler = (themeId) => {
    if (themeId < THEMES.length) setCardsTheme(THEMES[themeId]);
    else console.log("Unavalible theme!");
  };

  return (
    <CardsThemeContext.Provider
      value={{ theme: cardsTheme, setTheme: cardsThemeHandler }}
    >
      {children}
    </CardsThemeContext.Provider>
  );
};
