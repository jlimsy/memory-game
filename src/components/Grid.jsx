import { useState } from "react";

export default function Grid({ grid }) {
  const [green, setGreen] = useState(true);

  // give each cell an id
  let numCells;
  for (let i = 1; i <= grid; i++) {
    numCells = [...Array(Math.pow(i, 2))].map((cell, idx) => idx);
  }

  console.log(numCells);

  return (
    <>
      {numCells.map((cell, idx) =>
        setGreen ? (
          <div key={idx} className="cell border h-32 w-32 bg-green-400">
            cell
          </div>
        ) : (
          <div key={idx} className="cell border h-32 w-32">
            cell
          </div>
        )
      )}
    </>
  );
}
