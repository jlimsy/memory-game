import { useEffect, useState } from "react";

export default function Cell({ id, green, selectedCells, setSelectedCells }) {
  let greenCells = green;

  const handleFlip = (event) => {
    console.log("flip:", event.target.id);
    setSelectedCells([...selectedCells, event.target.id]);
  };

  return (
    <>
      {/* <div
        id={`${id}`}
        className={`border border-neutral-600 h-32 w-32 rounded-lg ${
          greenCells.includes(id) ? "bg-green-400" : ""
        }`}
      >
        {id}
      </div> */}
      <div
        id={`${id}`}
        className="front border border-neutral-600 h-32 w-32 rounded-lg bg-green-400"
      >
        {id}
      </div>
      <div
        id={`${id}`}
        className="back border border-neutral-600 h-32 w-32 rounded-lg"
        onClick={handleFlip}
      >
        {id}
      </div>
    </>
  );
}
