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
}) {
  const [flip, setFlip] = useState(false);
  let greenCells = green;

  useEffect(() => {
    console.log("green", green);
    console.log("selected", selectedCells);
    console.log("isRunning", isRunning);
  }, [selectedCells, isRunning]);

  const handleFlip = (event) => {
    console.log("flip:", event.target.id);
    setSelectedCells([...selectedCells, event.target.id]);
    setFlip(true);
  };

  return (
    <>
      <CSSTransition in={!isRunning && !flip} timeout={1000} classNames="flip">
        <div
          id={`${id}`}
          className={`border border-neutral-600 h-32 w-32 rounded-lg ${
            greenCells.includes(id) && show ? "bg-green-400" : ""
          }`}
          onClick={handleFlip}
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
