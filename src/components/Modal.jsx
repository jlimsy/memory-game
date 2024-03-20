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
  const handleLevel = () => {
    setLevel(level + 1);
    setGrid(gridSize[`level${level}`].size);
    setShow(true);
    setSeconds(3);
    setIsRunning(true);
    setSelectedCells([]);
    setComplete(false);
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <h1>You have completed this level!</h1>
          </div>

          <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button
              type="button"
              className="text-white bg-green-400 hover:bg-green-500 rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleLevel}
            >
              Go to the Next Level
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
