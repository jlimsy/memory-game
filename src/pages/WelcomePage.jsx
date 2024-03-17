import { useState } from "react";
import GamePage from "./GamePage";
import gridSize from "../utils/gridSize";

export default function WelcomePage() {
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState(gridSize.level1.size);

  const handleLevel = () => {
    setLevel(level + 1);
    // setGrid(gridSize[`level+${level}`].size);
    setGrid(gridSize[`level${level}`].size);
    console.log("level", level);
    console.log("grid", grid);
  };

  return (
    <div className="flex h-full">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body bg-green-400">
          <h1>Memory game</h1>
          <h2>Instructions</h2>
          <p>
            You are given 15 seconds to memorise the postion of the green
            squares. After 15 seconds, the green squares will be covered and you
            have to click on the squares where the green sqaures were
            previously. Click on all green squares correctly, and you can
            proceed to the next level. There are 10 levels in this game.
          </p>
        </div>
      </div>{" "}
      {start && (
        <div className={`grid grid-cols-${grid} grid-rows-${grid}`}>
          <GamePage grid={grid} />
        </div>
      )}
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={handleLevel}>Next Level</button>
      <h1>Current Level: {level}</h1>
      <button>Restart</button>
      <h1>Grid size {grid}</h1>
    </div>
  );
}
