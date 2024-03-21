import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import wrongSound from "../assets/wrong.mp3";
import rightSound from "../assets/beep.mp3";

export default function Cell({
  id,
  green,
  show,
  selectedCells,
  setSelectedCells,
  isRunning,
  complete,
  wrong,
  setWrong,
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
    new Audio(wrongSound).play();
  }

  function playRight() {
    new Audio(rightSound).play();
  }

  const handleFlip = (event) => {
    if (!selectedCells.includes(event.target.id)) {
      setSelectedCells([...selectedCells, event.target.id]);
    }

    if (!greenCells.includes(parseInt(event.target.id))) {
      setWiggle(true);
      playWrong();
      setWrong(wrong + 1);
      setTimeout(() => {
        setWiggle(false);
      }, 1000);
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
        classNames={flip ? "flip" : wiggle ? "wiggle" : ""}
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
