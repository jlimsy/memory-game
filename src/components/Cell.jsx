import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import wrong from "../assets/wrong.mp3";
import right from "../assets/beep.mp3";

export default function Cell({
  id,
  green,
  show,
  selectedCells,
  setSelectedCells,
  isRunning,
  complete,
}) {
  const nodeRef = useRef(null);
  const [flip, setFlip] = useState(false);
  const [wiggle, setWiggle] = useState(false);

  let greenCells = green;

  useEffect(() => {
    if (complete) {
      setFlip(false);
    }
  }, [complete]);

  function playWrong() {
    new Audio(wrong).play();
  }

  function playRight() {
    new Audio(right).play();
  }

  const handleFlip = (event) => {
    if (!selectedCells.includes(event.target.id)) {
      setSelectedCells([...selectedCells, event.target.id]);
    }

    if (!greenCells.includes(parseInt(event.target.id))) {
      setWiggle(true);
      playWrong();
    }

    if (greenCells.includes(parseInt(event.target.id))) {
      setFlip(true);
      playRight();
    }
  };

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={!flip && !wiggle}
        timeout={1000}
        classNames={flip ? "flip" : "shake"}
      >
        <div
          id={`${id}`}
          ref={nodeRef}
          className={`cell border border-neutral-600 h-20 w-20 md:h-30 md:w-30 rounded-lg  shadow ${
            greenCells.includes(id) && (show || flip || complete)
              ? "bg-green-400"
              : "bg-neutral-50"
          }`}
          onClick={isRunning ? null : handleFlip}
        ></div>
      </CSSTransition>
    </>
  );
}
