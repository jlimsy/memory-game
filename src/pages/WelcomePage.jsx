import { useState } from "react";
import GamePage from "./GamePage";
import gridSize from "../utils/gridSize";

export default function WelcomePage() {
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState(gridSize.level1.size);

  const handleLevel = () => {
    setLevel(level + 1);
    setGrid;
  };

  return (
    <div className="flex h-full">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="">Memory game</h1>
          <h2>Instructions</h2>
          <p>
            You are given 15 seconds to memorise the postion of the green
            squares. After 15 seconds, the green squares will be covered and you
            have to click on the squares where the green sqaures were
            previously. Click on all green squares correctly, and you can
            proceed to the next level. There are 10 levels in this game.
          </p>
        </div>
      </div>
      <button>Start</button>
      <button onClick={handleLevel}>Next Level</button>
      <h1>Current Level: {level}</h1>
      <button>Restart</button>
      <div className={`grid grid-cols-${grid}`}>
        <GamePage grid={grid} />
      </div>
    </div>
  );
}
