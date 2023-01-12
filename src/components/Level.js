import { MdOutlineTimer } from "react-icons/md";

const Level = ({ levelInfo, action }) => {
  return (
    <button
      className="flex w-full items-center justify-between p-2 sm:px-6 lg:gap-16 lg:px-10 lg:py-4" // px-6 sm:py-6 sm:px-8"
      onClick={() => action(levelInfo.id)}
    >
      <div className="flex w-3/4 items-center gap-4">
        <div className="w-10 border-2 border-t-0 border-l-0">
          {levelInfo.id}
        </div>
        <div className="uppercase">{levelInfo.amount} cards</div>
      </div>

      <div className="flex w-1/4 flex-col px-2 text-lg sm:text-2xl ">
        <div className="text-right uppercase">
          best:<span className="pl-4">{levelInfo.amount}</span>
        </div>
        <div className="flex items-center justify-end">
          <MdOutlineTimer />
          <span className="pl-2">05:42</span>
        </div>
      </div>
    </button>
  );
};

export default Level;
