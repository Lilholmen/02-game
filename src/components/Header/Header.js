import { useState } from "react";
import {
  BsGearFill,
  BsGridFill,
  BsQuestionCircle,
  BsCheckCircle,
} from "react-icons/bs";
import { useLevel } from "../../contexts/LevelContext";
import LevelsAndSettingsMenu from "./LevelsAndSettingsMenu";
import Timer from "./Timer";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const level = useLevel();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="bg-white text-zinc-500 dark:bg-stone-700 dark:text-stone-300">
      <ul className="flex text-3xl">
        <li className="flex-none">
          <button
            className="flex items-center justify-center bg-zinc-500 px-3 py-3 text-white dark:bg-stone-800 dark:text-stone-300"
            onClick={toggleMenu}
          >
            <BsGridFill />
          </button>
          {showMenu ? <LevelsAndSettingsMenu toggleMenu={toggleMenu} /> : null}
        </li>

        <li className="flex w-16 flex-none items-center gap-1 px-2">
          <BsQuestionCircle className="text-xl" />
          {level.attempts}
        </li>

        <li className="flex w-16 flex-none items-center justify-end gap-1 px-2">
          <BsCheckCircle className="text-xl" />
          {level.guessed}
        </li>

        <li className="flex flex-1 items-center justify-end pr-3 font-mono-time text-2xl">
          <Timer />
        </li>
      </ul>
      {console.log("render header")}
    </header>
  );
};

export default Header;
