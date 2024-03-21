import gridSize from "../utils/gridSize";

export default function Modal({
  level,
  setLevel,
  setGrid,
  setShow,
  setSeconds,
  setIsRunning,
  setSelectedCells,
  setComplete,
}) {
  const handleLevel = (event) => {
    setLevel(level + 1);
    // if (event.target.id === "next-level") {
    //   setLevel(level + 1);
    // } else if (event.target.id === "restart-level") {
    //   setLevel(level);
    // }
    setGrid(gridSize[`level${level}`].size);
    setShow(true);
    setSeconds(3);
    setIsRunning(true);
    setSelectedCells([]);
    setComplete(false);
  };

  // const handleRestartLevel = () => {
  //   setLevel(level);
  //   setGrid(gridSize[`level${level}`].size);
  //   setShow(true);
  //   setSeconds(3);
  //   setIsRunning(true);
  //   setSelectedCells([]);
  //   setComplete(false);
  // };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed inset-0 flex z-50 justify-center items-center">
      <div className="relative p-4 w-full w-auto max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <h1>You have completed this level!</h1>
          </div>

          <div className="flex items-center justify-center p-4 md:p-5 border-gray-200 rounded-b">
            <button
              id="next-level"
              className="text-white bg-green-400 hover:bg-green-500 border-2 border-green-400 rounded-lg px-5 py-2.5 text-center"
              onClick={handleLevel}
            >
              Next Level
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
