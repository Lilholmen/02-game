import Header from "./components/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer";

import { LevelContextProvider } from "./contexts/LevelContext";
import { CardsThemeContextProvider } from "./contexts/CardsThemeContext";
import useLocalStorage from "./hooks/useLocalStorage";

import levels from "./data/levels";

const App = () => {
  const [leaderBoard, setLeaderBoard] = useLocalStorage(
    "leaderBoard",
    Array.from({ length: levels.length }, () => ({
      time: null,
      attempts: null,
    }))
  );

  return (
    <div className="flex h-screen select-none flex-col font-sans-main">
      {console.log("render app")}

      <LevelContextProvider>
        <CardsThemeContextProvider>
          <Header />
          <GameBoard />
        </CardsThemeContextProvider>
      </LevelContextProvider>

      <Footer />
    </div>
  );
};

export default App;
