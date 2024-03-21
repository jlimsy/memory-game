import { useEffect, useState } from "react";
import Cell from "./Cell";
import gridSize from "../utils/gridSize";

export default function Grid({
  grid,
  setGrid,
  show,
  setShow,
  level,
  green,
  setGreen,
  selectedCells,
  setSelectedCells,
  isRunning,
  complete,
  setComplete,
  setRemainingCells,
  wrong,
  setWrong,
}) {
  //* give each cell an id
  let numCells = [...Array(Math.pow(grid, 2))].map((cell, idx) => idx);

  useEffect(() => {
    setGrid(gridSize[`level${level}`].size);
    //* randomly assign cell ids to be set to green
    numCells.sort(() => Math.random() - 0.5);

    let greenCells = [];
    for (let i = 0; i < gridSize[`level${level}`].green; i++) {
      greenCells.push(numCells[i]);
    }

    setGreen(greenCells);
  }, [level]);

  useEffect(() => {
    //* check if selectedCells contain all elements in green
    let correctCells = [];

    for (let i of green) {
      if (selectedCells.includes(i.toString())) {
        correctCells.push(i);
      }
    }

    setRemainingCells(gridSize[`level${level}`].green - correctCells.length);

    if (correctCells.length === gridSize[`level${level}`].green) {
      // console.log("complete!", complete);
      setComplete(true);
      // console.log("complete!", complete);
    }
  }, [selectedCells, green, level, setComplete]);

  return (
    <div
      className={`grid grid-cols-${grid} gap-3 justify-items-center justify-self-center`}
    >
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
          complete={complete}
          wrong={wrong}
          setWrong={setWrong}
        />
      ))}
    </div>
  );
}
