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
  const [green, setGreen] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [complete, setComplete] = useState(false);

  const handleLevel = () => {
    setLevel(level + 1);
    setGrid(gridSize[`level${level}`].size);
    setShow(true);
    setSeconds(3);
    setIsRunning(true);
    setSelectedCells([]);
    setComplete(false);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="grid gap-3">
      <div className="text-center mb-5">
        <Timer seconds={seconds} />
        <span>to remember location of green squares</span>
      </div>
      No. of green cells left: {gridSize[`level${level}`].green}
      <Grid
        grid={grid}
        show={show}
        setShow={setShow}
        level={level}
        green={green}
        setGreen={setGreen}
        selectedCells={selectedCells}
        setSelectedCells={setSelectedCells}
        isRunning={isRunning}
        complete={complete}
        setComplete={setComplete}
      />
      {(level < 10 && !complete) || (
        <div className="text-center">
          <h1>You have completed this level!</h1>
          <button onClick={handleLevel}>Next Level</button>
        </div>
      )}
      {level === 10 && <button onClick={handleRestart}>Restart Game</button>}
    </div>
  );
}
