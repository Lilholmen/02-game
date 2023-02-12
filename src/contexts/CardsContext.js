import { createContext, useContext, useReducer, useState } from "react";
import THEMES from "../data/themes";
import reducer from "../utils/cardsReducer";

const CardsContext = createContext(null);

export const useCards = () => {
  return useContext(CardsContext);
};

export const CardsContextProvider = ({ children }) => {
  const [cardsState, cardsDispatch] = useReducer(reducer, []);
  const [cardsTheme, setCardsTheme] = useState(THEMES[0]);

  const cardsThemeHandler = (themeId) => {
    if (themeId < THEMES.length) setCardsTheme(THEMES[themeId]);
    else console.log("Unavalible theme!");
  };

  return (
    <CardsContext.Provider
      value={{
        cardsTheme,
        setTheme: cardsThemeHandler,
        cardsState,
        cardsDispatch,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
