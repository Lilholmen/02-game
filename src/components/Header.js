import {
  BsQuestionSquare,
  BsCheckSquare,
  BsArrowClockwise,
  BsGridFill,
} from "react-icons/bs";
import Button from "./UI/Button";
import HeaderSection from "./UI/HeaderSection";
import Icon from "./UI/Icon";

const Header1 = ({ score, correct, total, change, restart }) => {
  return (
    <header className="font-sans flex w-full divide-x divide-neutral-200 bg-neutral-800 text-[40px] text-neutral-200 shadow-md shadow-black lg:bg-transparent lg:shadow-none">
      <div className="flex h-28 basis-1/2 justify-between divide-x lg:divide-x-0">
        <div className="flex h-full basis-1/2 items-center justify-around bg-neutral-800 px-8 lg:rounded-br-large">
          <Button action={() => change(5)}>
            <BsGridFill />
          </Button>
          <Button action={restart}>
            <BsArrowClockwise />
          </Button>
        </div>

        <div className="flex h-full basis-1/2 items-center justify-end bg-neutral-800 px-4 lg:rounded-bl-large lg:px-8">
          <div className="m-4">{score}</div>
          <BsQuestionSquare />
        </div>
      </div>

      <div className="flex h-28 basis-1/2 justify-between divide-x lg:divide-x-0">
        <div className="flex h-full basis-1/2 items-center justify-start bg-neutral-800 px-4 lg:rounded-br-large lg:px-8">
          <BsCheckSquare />
          <div className="m-4">
            {correct} / {total}
          </div>
        </div>

        <div className="flex h-full basis-1/2 items-center justify-center bg-neutral-800 text-6xl lg:rounded-bl-large">
          <div>00 : 00</div>
        </div>
      </div>
    </header>
  );
};

const Header = ({ change, restart, score, correct, total }) => {
  return (
    <header className="">
      <div className="flex justify-between bg-stone-700">
        <HeaderSection>
          <Button action={() => change(5)}>
            <BsGridFill />
          </Button>
        </HeaderSection>

        <HeaderSection>
          <div className="ml-2 flex w-full items-center justify-start lg:ml-4">
            <Icon>
              <BsQuestionSquare />
            </Icon>
            <span className="pl-2 lg:pl-4">{score}</span>
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
              {correct} / {total}
            </span>
          </div>
        </HeaderSection>

        <HeaderSection>
          <Button action={restart}>
            <BsArrowClockwise />
          </Button>
        </HeaderSection>
      </div>
    </header>
  );
};

export default Header;
