import {
  BsQuestionSquare,
  BsCheckSquare,
  BsArrowClockwise,
  BsGridFill,
} from "react-icons/bs";
import Button from "./UI/Button";

const Header = ({ score, correct, total, change, restart }) => {
  return (
    <div className="flex w-full divide-x divide-neutral-200 bg-neutral-800 font-sans text-[40px] text-neutral-200 shadow-md shadow-black lg:bg-transparent lg:shadow-none">
      <div className="flex h-28 basis-1/2 justify-between divide-x lg:divide-x-0">
        <div className="flex h-full w-60 items-center justify-around bg-neutral-800 px-8 lg:rounded-br-large">
          <Button action={() => change(2)}>
            <BsGridFill />
          </Button>
          <Button action={restart}>
            <BsArrowClockwise />
          </Button>
        </div>

        <div className="flex h-full w-60 items-center justify-end bg-neutral-800 px-4 lg:rounded-bl-large lg:px-8">
          <div className="m-4">{score}</div>
          <BsQuestionSquare />
        </div>
      </div>

      <div className="flex h-28 basis-1/2 justify-between divide-x lg:divide-x-0">
        <div className="flex h-full w-60 items-center justify-start bg-neutral-800 px-4 lg:rounded-br-large lg:px-8">
          <BsCheckSquare />
          <div className="m-4">
            {correct} / {total}
          </div>
        </div>

        <div className="flex h-full w-60 items-center justify-center bg-neutral-800 text-6xl lg:rounded-bl-large">
          <div>00 : 00</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
