import { useState, useEffect } from "react";
import GamePage from "./GamePage";
import Grid from "../components/Grid";

export default function WelcomePage() {
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState(1);
  const [seconds, setSeconds] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("isRunning", isRunning);
    if (isRunning) {
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
      if (seconds === 0) {
        setIsRunning(false);
        setShow(false);
      }
    }
  }, [seconds]);

  const handleStart = () => {
    setStart(true);
    setIsRunning(true);
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  };

  return (
    <div className="flex flex-col h-screen mx-auto my-auto justify-center items-center">
      <div className="">
        {start ? (
          <h1 className="text-center text-3xl mb-5 text-green-500">
            Level {level}
          </h1>
        ) : (
          <h1 className="text-center text-3xl mb-5 text-green-500">
            Memory game
          </h1>
        )}
      </div>

      {start || (
        <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h2 className="text-left mb-4">Instructions</h2>
          <ol className="space-y-4 mb-4 text-left list-decimal list-inside">
            <li>
              You are given{" "}
              <span className="font-bold text-green-500">
                {seconds} seconds
              </span>{" "}
              to remember the location of the green squares.
            </li>
            <li> After 15 seconds, the green squares will be covered.</li>
            <li>
              Click on the squares where the{" "}
              <span className="font-bold text-green-500">green squares</span>{" "}
              were previously located.
            </li>
            <li>
              Click on all green squares correctly to proceed to the next level.
              There are 10 levels in this game.
            </li>
          </ol>
          <button onClick={handleStart}>Start Game</button>
        </div>
      )}
      <div>
        {start && (
          <GamePage
            seconds={seconds}
            setSeconds={setSeconds}
            show={show}
            setShow={setShow}
            level={level}
            setLevel={setLevel}
          />
        )}
      </div>
    </div>
  );
}
