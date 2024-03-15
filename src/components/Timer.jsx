import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(15);
  const [isRunning, setIsRunning] = useState(false);

  const handleCountdown = () => {
    let interval;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  };

  return (
    <>
      <button onClick={handleCountdown}>Start Game</button>
      {seconds}
    </>
  );
}
