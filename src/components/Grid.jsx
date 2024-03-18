import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Cell from "./Cell";

export default function Grid({ grid, show, setShow }) {
  // give each cell an id

  // for (let i = 1; i <= grid; i++) {
  //   numCells = [...Array(Math.pow(i, 2))].map((cell, idx) => idx);
  //   numCells.sort(() => Math.random() - 0.5);
  // }

  let numCells = [...Array(Math.pow(grid, 2))].map((cell, idx) => idx);
  numCells.sort(() => Math.random() - 0.5);

  // when green === true, only selected cells are green

  // const gridCols = ;
  // console.log("grid", grid);
  // console.log("gridCols", gridCols);
  // console.log("gridSize[grid]", gridSize[grid]);

  return (
    <div className={`grid grid-cols-${grid} gap-3`}>
      {numCells.map((cell, idx) => (
        <Cell key={idx} />
      ))}
    </div>
  );
}
