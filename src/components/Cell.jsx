import { useState } from "react";

export default function Cell({ id, green }) {
  // const [selectedCells, setSelectedCells] = useState([]);

  let greenCells = green;
  let selectedCellId;
  const handleFlip = (event) => {
    console.log("flip!");
    // setSelectedCells([...selectedCells, event.target.id]);
    selectedCellId = event.target.id;
  };

  const checkCells = () => {};

  return (
    <>
      <div
        id={`${id}`}
        className={`border border-neutral-600 h-32 w-32 rounded-lg ${
          greenCells.includes(id) ? "bg-green-400" : ""
        }`}
      >
        {id}
      </div>
    </>
  );
}
