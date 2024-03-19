import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Cell from "./Cell";
import gridSize from "../utils/gridSize";

export default function Grid({ grid, show, setShow, level }) {
  const [green, setGreen] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);

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
    console.log("green", green);
    console.log(selectedCells);
  }, [level, selectedCells]);

  return (
    <div className={`grid grid-cols-${grid} gap-3`}>
      {numCells.map((cell, idx) => (
        <Cell
          key={idx}
          id={idx}
          green={green}
          selectedCells={selectedCells}
          setSelectedCells={setSelectedCells}
        />
      ))}
    </div>
  );
}
