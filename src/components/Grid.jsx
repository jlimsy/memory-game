import { useState } from "react";

export default function Grid({ grid, show, setShow }) {
  // give each cell an id
  let numCells;
  for (let i = 1; i <= grid; i++) {
    numCells = [...Array(Math.pow(i, 2))].map((cell, idx) => idx);
  }

  console.log(numCells.length);

  return (
    <>
      {numCells.map((cell, idx) =>
        show ? (
          <div key={idx} className="cell border h-32 w-32 bg-green-400">
            cell
          </div>
        ) : (
          <div
            key={idx}
            className="cell border h-32 w-32"
            onClick={() => setShow(true)}
          >
            cell
          </div>
        )
      )}
    </>
  );
}
