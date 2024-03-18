import { useState } from "react";
import Grid from "../components/Grid";
import Timer from "../components/Timer";
import gridSize from "../utils/gridSize";

export default function GamePage({
  seconds,
  setSeconds,
  show,
  setShow,
  level,
  setLevel,
}) {
  const [grid, setGrid] = useState(gridSize.level1.size);

  const handleLevel = () => {
    setLevel(level + 1);
    setGrid(gridSize[`level${level}`].size);
    console.log("level", level);
    console.log("grid", grid);
    setShow(true);
    setSeconds(5);
  };

  const handleRestart = () => {
    window.location.reload();
  };
  console.log(grid);

  return (
    <>
      <Timer seconds={seconds} />
      <Grid grid={grid} show={show} setShow={setShow} />
      {level < 10 && <button onClick={handleLevel}>Next Level</button>}
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}
