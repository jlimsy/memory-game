import { useState } from "react";
import Grid from "../components/Grid";
import Timer from "../components/Timer";
import gridSize from "../utils/gridSize";

export default function GamePage({
  seconds,
  setSeconds,
  isRunning,
  setIsRunning,
  show,
  setShow,
  level,
  setLevel,
}) {
  const [grid, setGrid] = useState(gridSize.level1.size);
  const [selectedCells, setSelectedCells] = useState([]);

  const handleLevel = () => {
    setLevel(level + 1);
    setGrid(gridSize[`level${level}`].size);
    setShow(true);
    setSeconds(5);
    setIsRunning(true);
    setSelectedCells([]);
  };

  const handleRestart = () => {
    window.location.reload();
  };
  console.log(grid);

  return (
    <div className="grid gap-3">
      <div className="text-center mb-5">
        <Timer seconds={seconds} />
        <span>to remember location of green squares</span>
      </div>
      <Grid
        grid={grid}
        show={show}
        setShow={setShow}
        level={level}
        selectedCells={selectedCells}
        setSelectedCells={setSelectedCells}
        isRunning={isRunning}
      />
      {(level < 10 && isRunning) || (
        <button onClick={handleLevel}>Next Level</button>
      )}
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
