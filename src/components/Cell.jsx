import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Cell({
  id,
  green,
  show,
  setShow,
  selectedCells,
  setSelectedCells,
  isRunning,
  complete,
}) {
  const [flip, setFlip] = useState(false);

  let greenCells = green;

  useEffect(() => {
    console.log("greenCells", greenCells);
    console.log("selected", selectedCells);
    console.log("setFlip???", flip);

    if (complete) {
      setFlip(false);
    }
  }, [selectedCells, complete]);

  const handleFlip = (event) => {
    console.log("flip:", event.target.id);
    if (!selectedCells.includes(event.target.id)) {
      setSelectedCells([...selectedCells, event.target.id]);
    }

    if (greenCells.includes(parseInt(event.target.id))) {
      console.log("the cell is green");
      setFlip(true);
      console.log("flip if correct cell", flip);
    }
  };

  return (
    <>
      <CSSTransition in={!flip} timeout={1000} classNames="flip">
        <div
          id={`${id}`}
          className={`border border-neutral-600 h-32 w-32 rounded-lg ${
            greenCells.includes(id) && (show || flip || complete)
              ? "bg-green-400"
              : ""
          }`}
          onClick={isRunning ? null : handleFlip}
        ></div>

        {/* {greenCells.includes(id) && show ? (
        <div
          id={`${id}`}
          className="front border border-neutral-600 h-32 w-32 rounded-lg bg-green-400"
        >
          {id}
        </div>
      ) : (
        <div
          id={`${id}`}
          className="back border border-neutral-600 h-32 w-32 rounded-lg"
          onClick={handleFlip}
        >
          {id}
        </div>
      )} */}
      </CSSTransition>
    </>
  );
}
