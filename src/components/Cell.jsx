import { useEffect, useRef, useState } from "react";
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
  const nodeRef = useRef(null);
  const [flip, setFlip] = useState(false);

  let greenCells = green;

  useEffect(() => {
    if (complete) {
      setFlip(false);
    }
  }, [complete]);

  const handleFlip = (event) => {
    if (!selectedCells.includes(event.target.id)) {
      setSelectedCells([...selectedCells, event.target.id]);
    }

    if (greenCells.includes(parseInt(event.target.id))) {
      setFlip(true);
    }
  };

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={!flip}
        timeout={1000}
        classNames="flip"
      >
        <div
          id={`${id}`}
          ref={nodeRef}
          className={`border border-neutral-600 h-24 w-24 md:h-30 md:w-30 rounded-lg  shadow ${
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
