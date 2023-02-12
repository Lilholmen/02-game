import { createContext, useContext, useReducer } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import reducer from "../utils/cardsReducer";

import THEMES from "../data/themes";

const CardsContext = createContext(null);

export const useCards = () => {
  return useContext(CardsContext);
};

export const CardsContextProvider = ({ children }) => {
  const [cardsState, cardsDispatch] = useReducer(reducer, []);
  const [cardsTheme, setCardsTheme] = useLocalStorage("cardsTheme", THEMES[0]);

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
