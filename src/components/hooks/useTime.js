import { useEffect, useState } from "react";

const useTime = (initial = 0) => {
  const [time, setTime] = useState(initial);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else setTime(0);

    return () => clearInterval(interval);
  }, [time, isRunning]);

  return [time, isRunning, setIsRunning];
};

export default useTime;
