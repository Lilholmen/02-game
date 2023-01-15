import { useEffect, useState } from "react";
import {
  BsQuestionSquare,
  BsCheckSquare,
  BsArrowClockwise,
  BsGridFill,
} from "react-icons/bs";
import LevelMenu from "./LevelMenu";

import Button from "./UI/Button";
import HeaderSection from "./UI/HeaderSection";
import Icon from "./UI/Icon";
import Time from "./UI/Time";

const Header = ({ levelScore, currentLevel, switchLevel, levels, time }) => {
  const [showLevelMenu, setShowLevelMenu] = useState(false);

  useEffect(() => {
    setShowLevelMenu(false);
  }, [currentLevel]);

  return (
    <header className="flex justify-between bg-stone-700">
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
          <span className="pl-2 lg:pl-4">{levelScore.attempts}</span>
        </div>
      </HeaderSection>

      <HeaderSection>
        <span className="font-bold">
          <Time value={time} />
        </span>
      </HeaderSection>

      <HeaderSection>
        <div className="flex w-full items-center justify-end">
          <Icon>
            <BsCheckSquare />
          </Icon>
          <span className="flex-nowrap pl-2 lg:pl-4">
            {levelScore.guessed} / {currentLevel.pairs}
          </span>
        </div>
      </HeaderSection>

      <HeaderSection>
        <Button action={() => switchLevel(currentLevel.id)}>
          <BsArrowClockwise />
        </Button>
      </HeaderSection>

      {showLevelMenu ? (
        <LevelMenu
          switchLevel={switchLevel}
          levels={levels}
        />
      ) : null}
    </header>
  );
};

export default Header;
