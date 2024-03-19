import { useEffect, useState } from "react";
import Cell from "./Cell";
import gridSize from "../utils/gridSize";

export default function Grid({
  grid,
  show,
  setShow,
  level,
  green,
  setGreen,
  selectedCells,
  setSelectedCells,
  isRunning,
}) {
  //* give each cell an id
  let numCells = [...Array(Math.pow(grid, 2))].map((cell, idx) => idx);

  useEffect(() => {
    //* randomly assign cell ids to be set to green
    numCells.sort(() => Math.random() - 0.5);

    let greenCells = [];
    for (let i = 0; i < gridSize[`level${level}`].green; i++) {
      greenCells.push(numCells[i]);
    }

    setGreen(greenCells);
    console.log(selectedCells);
  }, [level]);

  return (
    <div className={`grid grid-cols-${grid} gap-3`}>
      {numCells.map((cell, idx) => (
        <Cell
          key={idx}
          id={idx}
          green={green}
          show={show}
          setShow={setShow}
          selectedCells={selectedCells}
          setSelectedCells={setSelectedCells}
          isRunning={isRunning}
        />
      ))}
    </div>
  );
}
