import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(15);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  }, [seconds]);

  return <>{seconds}</>;
}
