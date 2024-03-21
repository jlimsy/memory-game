import gridSize from "../utils/gridSize";

export default function Modal({
  level,
  setLevel,
  setGrid,
  setShow,
  setSeconds,
  setIsRunning,
  setSelectedCells,
  complete,
  setComplete,
  setWrong,
}) {
  const handleLevel = (event) => {
    setLevel(level + 1);
    setGrid(gridSize[`level${level}`].size);
    setShow(true);
    setSeconds(3);
    setIsRunning(true);
    setSelectedCells([]);
    setComplete(false);
    setWrong(0);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed inset-0 flex z-50 justify-center items-center">
      <div className="relative p-4 w-auto max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            {level < 10 && (
              <h1 className="text-neutral-800">
                You have completed this level!
              </h1>
            )}
            {level === 10 && (
              <div className="text-center">
                <h1>Congratulations,</h1>
                <h1 className="text-neutral-800">
                  You have completed all levels!
                </h1>
              </div>
            )}
          </div>

          {level < 10 && (
            <div className="flex items-center justify-center p-4 md:p-5 border-gray-200 rounded-b">
              <button
                id="next-level"
                className="text-white bg-green-400 hover:bg-green-500 border-2 border-green-400 rounded-lg px-5 py-2.5 text-center"
                onClick={handleLevel}
              >
                Next Level
              </button>
            </div>
          )}

          {level === 10 && (
            <div className="flex items-center justify-center p-4 md:p-5 border-gray-200 rounded-b">
              <button
                id="next-level"
                className="text-white bg-green-400 hover:bg-green-500 border-2 border-green-400 rounded-lg px-5 py-2.5 text-center"
                onClick={handleRestart}
              >
                Restart Game{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
