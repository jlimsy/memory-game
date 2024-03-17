import { useState, useEffect } from "react";
import GamePage from "./GamePage";
import gridSize from "../utils/gridSize";

export default function WelcomePage() {
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState(gridSize.level1.size);
  const [seconds, setSeconds] = useState(15);
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

  const handleLevel = () => {
    setLevel(level + 1);
    // setGrid(gridSize[`level+${level}`].size);
    setGrid(gridSize[`level${level}`].size);
    console.log("level", level);
    console.log("grid", grid);
    setShow(true);
    setSeconds(15);
  };

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
          <h2 className="text-left">Instructions</h2>
          <p className="text-left">
            You are given 15 seconds to memorise the postion of the green
            squares. After 15 seconds, the green squares will be covered and you
            have to click on the squares where the green sqaures were
            previously. Click on all green squares correctly, and you can
            proceed to the next level. There are 10 levels in this game.
          </p>
          <button onClick={handleStart}>Start Game</button>
        </div>
      )}
      <div>
        {start && (
          <GamePage
            grid={grid}
            seconds={seconds}
            show={show}
            setShow={setShow}
          />
        )}
        <div>
          {" "}
          <button onClick={handleLevel}>Next Level</button>
          <button>Restart</button>
          <h1>Grid size {grid}</h1>
        </div>
      </div>
    </div>
  );
}
