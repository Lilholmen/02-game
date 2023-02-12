import { memo, useEffect, useState } from "react";
import representTime from "../../utils/representTime";

const Timer = memo(function () {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);
  return <span>{representTime(time)}</span>;
});

export default Timer;
