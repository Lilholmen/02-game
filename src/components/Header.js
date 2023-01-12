import {
  BsQuestionSquare,
  BsCheckSquare,
  BsArrowClockwise,
  BsGridFill,
} from "react-icons/bs";

import Button from "./UI/Button";
import HeaderSection from "./UI/HeaderSection";
import Icon from "./UI/Icon";

const Header = ({ levelInfo, currentLevel, restartLevel, showLevelMenu }) => {
  return (
    <header className="flex justify-between bg-stone-700">
      <HeaderSection>
        <Button action={showLevelMenu}>
          <BsGridFill />
        </Button>
      </HeaderSection>

      <HeaderSection>
        <div className="ml-2 flex w-full items-center justify-start lg:ml-4">
          <Icon>
            <BsQuestionSquare />
          </Icon>
          <span className="pl-2 lg:pl-4">{levelInfo.score}</span>
        </div>
      </HeaderSection>

      <HeaderSection>
        <span className="font-bold">00:00</span>
      </HeaderSection>

      <HeaderSection>
        <div className="flex w-full items-center justify-end">
          <Icon>
            <BsCheckSquare />
          </Icon>
          <span className="flex-nowrap pl-2 lg:pl-4">
            {levelInfo.correct} / {currentLevel.pairs}
          </span>
        </div>
      </HeaderSection>

      <HeaderSection>
        <Button action={restartLevel}>
          <BsArrowClockwise />
        </Button>
      </HeaderSection>
    </header>
  );
};

export default Header;
