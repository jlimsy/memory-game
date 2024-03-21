import { useState } from "react";
import Grid from "../components/Grid";
import Timer from "../components/Timer";
import gridSize from "../utils/gridSize";
import Modal from "../components/Modal";

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
  const [remainingCells, setRemainingCells] = useState(
    gridSize[`level${level}`].green
  );
  const [wrong, setWrong] = useState(0);

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="grid gap-3">
      <div className="text-center mb-5 p-5 mr-10 ml-10 bg-white border border-gray-200 rounded-lg shadow">
        {isRunning ? <Timer seconds={seconds} /> : <h1>Your turn</h1>}
        <p>
          to remember where the{" "}
          <span className="text-green-500">green squares</span> are:
        </p>
      </div>
      <div className="text-center">
        {" "}
        <p>
          {" "}
          There {remainingCells === 1 ? "is " : "are "}
          <span className="text-green-500">
            {remainingCells} green {remainingCells === 1 ? "square" : "squares"}
          </span>
          {remainingCells === gridSize[`level${level}`].size ? "." : " left."}
        </p>
        {wrong > 0 && <p className="text-orange-500">Wrong guesses: {wrong}</p>}
      </div>

      <Grid
        grid={grid}
        setGrid={setGrid}
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
        remainingCells={remainingCells}
        setRemainingCells={setRemainingCells}
        wrong={wrong}
        setWrong={setWrong}
      />

      {(level <= 10 && !complete) || (
        <>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
          <Modal
            level={level}
            setLevel={setLevel}
            setGrid={setGrid}
            setShow={setShow}
            setSeconds={setSeconds}
            setIsRunning={setIsRunning}
            setSelectedCells={setSelectedCells}
            complete={complete}
            setComplete={setComplete}
            setWrong={setWrong}
          />
        </>
      )}

      <button
        className="bg-neutral-200 border-2 border-neutral-300 text-green-400 hover:bg-neutral-300 w-1/2 justify-self-center mt-5"
        onClick={handleRestart}
      >
        Exit Game
      </button>
    </div>
  );
}
