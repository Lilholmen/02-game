import React from "react";
import {
  BsGearFill,
  BsGridFill,
  BsQuestionCircle,
  BsCheckCircle,
} from "react-icons/bs";
import Timer from "./Timer";

const Header = ({ attempts, guessed }) => {
  return (
    <header className="flex bg-white text-3xl text-zinc-500 dark:bg-stone-700 dark:text-stone-300">
      <div className="bg-zinc-500 px-3 py-3 text-white dark:bg-stone-800 dark:text-stone-300">
        <BsGridFill />
      </div>
      <div className="flex w-full items-center px-2">
        <div className="flex w-1/3 items-center gap-1">
          <BsQuestionCircle className="text-xl" />
          {attempts}
        </div>
        <div className="w-1/3 font-mono-time text-2xl">
          <Timer />
        </div>
        <div className="flex w-1/3 items-center justify-end gap-1">
          <BsCheckCircle className="text-xl" />
          {guessed}
        </div>
      </div>
      <div className="bg-zinc-500 px-3 py-3 text-white dark:bg-stone-800 dark:text-stone-300">
        <BsGearFill />
      </div>
      {console.log("render header")}
    </header>
  );
};

export default Header;
