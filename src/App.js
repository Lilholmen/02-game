import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer";

import { LevelContextProvider } from "./contexts/LevelContext";
import { CardsContextProvider } from "./contexts/CardsContext";
import useLocalStorage from "./hooks/useLocalStorage";

import levels from "./data/levels";

const App = () => {
  /* const [leaderBoard, setLeaderBoard] = useLocalStorage(
    "leaderBoard",
    Array.from({ length: levels.length }, () => ({
      time: null,
      attempts: null,
    }))
  ); */

  return (
    <div className="flex h-screen select-none flex-col font-sans-main">
      {console.log("render app")}

      <LevelContextProvider>
        <CardsContextProvider>
          <Header />
          <GameBoard />
        </CardsContextProvider>
      </LevelContextProvider>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
