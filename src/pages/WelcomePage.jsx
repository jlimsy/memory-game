import { useState, useEffect } from "react";
import GamePage from "./GamePage";

export default function WelcomePage() {
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState(1);
  const [seconds, setSeconds] = useState(3);
  const [isRunning, setIsRunning] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
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
    <div className="">
      <div className="flex flex-col mt-20 mx-auto my-auto justify-center items-center">
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
          <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-10 mr-10">
            <h2 className="text-left mb-4">Instructions</h2>
            <ol className="space-y-4 mb-4 text-left list-decimal list-inside font-normal">
              <li>
                You are given{" "}
                <span className="font-bold text-green-500">
                  {seconds} seconds
                </span>{" "}
                to remember where the green squares are.
              </li>
              <li> After 15 seconds, the green squares will be hidden.</li>
              <li>
                Click on where the{" "}
                <span className="font-bold text-green-500">green squares</span>{" "}
                were before.
              </li>
              <li>
                Click on all the{" "}
                <span className="font-bold text-green-500">green squares</span>{" "}
                correctly to proceed to the next level. There are 10 levels in
                this game.
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
              isRunning={isRunning}
              setIsRunning={setIsRunning}
              show={show}
              setShow={setShow}
              level={level}
              setLevel={setLevel}
            />
          )}
        </div>
      </div>
    </div>
  );
}
