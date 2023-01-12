import { useEffect } from "react";

import Time from "./UI/Time";

const Timer = ({ running, levelInfo, time, incrementTime }) => {
  useEffect(() => {
    let interval;

    if (running && !levelInfo.isCompleted) {
      interval = setInterval(() => {
        incrementTime();
      }, 1000);
    } else clearInterval(interval);

    return () => clearInterval(interval);
  }, [running, levelInfo.isCompleted]);

  return (
    <div className="flex">
      <Time value={time} />
    </div>
  );
};

export default Timer;
