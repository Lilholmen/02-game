import { useContext, useEffect, useState } from "react";
import {
  BsQuestionSquare,
  BsCheckSquare,
  BsArrowClockwise,
  BsGridFill,
} from "react-icons/bs";
import { useLevel } from "../contexts/LevelContext";
import LevelMenu from "./LevelMenu";

import Button from "./UI/Button";
import HeaderSection from "./UI/HeaderSection";
import Icon from "./UI/Icon";
import Time from "./UI/Time";

const Header = () => {
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const level = useLevel();

  useEffect(() => {
    setShowLevelMenu(false);
  }, [level.currentLevel]);

  return (
    <header className="flex justify-between bg-stone-700">
      {console.log("render header")}
      <HeaderSection>
        <Button action={() => setShowLevelMenu((prev) => !prev)}>
          <BsGridFill />
        </Button>
      </HeaderSection>

      <HeaderSection>
        <div className="ml-2 flex w-full items-center justify-start lg:ml-4">
          <Icon>
            <BsQuestionSquare />
          </Icon>
          <span className="pl-2 lg:pl-4">{level.attempts}</span>
        </div>
      </HeaderSection>

      <HeaderSection>
        <span className="font-bold">
          <Time value={level.timeToComplete} />
        </span>
      </HeaderSection>

      <HeaderSection>
        <div className="flex w-full items-center justify-end">
          <Icon>
            <BsCheckSquare />
          </Icon>
          <span className="flex-nowrap pl-2 lg:pl-4">
            {level.guessed} / {level.currentLevel.pairs}
          </span>
        </div>
      </HeaderSection>

      <HeaderSection>
        <Button action={() => level.restartHandler(true)}>
          <BsArrowClockwise />
        </Button>
      </HeaderSection>

      {showLevelMenu ? (
        <LevelMenu
          switchLevel={level.changeLevel}
          currentLevel={level.currentLevel}
        />
      ) : null}
    </header>
  );
};

export default Header;
