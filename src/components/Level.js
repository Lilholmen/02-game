import { MdOutlineTimer } from "react-icons/md";
import Time from "./UI/Time";

const Level = ({ levelInfo, action }) => {
  return (
    <button
      className="flex w-full items-center justify-between p-2 sm:px-6 lg:gap-16 lg:px-10 lg:py-4"
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
          best:<span className="pl-4">{levelInfo.bestTry ?? 0}</span>
        </div>
        <div className="flex items-center justify-end">
          <MdOutlineTimer />
          <span className="pl-2">
            <Time value={levelInfo.bestTime ?? 0} />
          </span>
        </div>
      </div>
    </button>
  );
};

export default Level;
