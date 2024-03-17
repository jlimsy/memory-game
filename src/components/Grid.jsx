import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Grid({ grid, show, setShow }) {
  // give each cell an id
  let numCells;
  for (let i = 1; i <= grid; i++) {
    numCells = [...Array(Math.pow(i, 2))].map((cell, idx) => idx);
    numCells.sort(() => Math.random() - 0.5);
  }

  console.log(numCells);

  // when green === true, only selected cells are green

  return (
    <>
      {" "}
      {numCells.map((cell, idx) =>
        show ? (
          <div
            key={idx}
            className="border border-neutral-600 h-32 w-32 bg-green-400 rounded-lg"
          >
            {idx}
          </div>
        ) : (
          <div
            key={idx}
            className=" border  border-neutral-800 h-32 w-32 rounded-lg hover:bg-neutral-300"
            onClick={() => setShow(true)}
          ></div>
        )
      )}
    </>
  );
}
