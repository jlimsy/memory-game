import Grid from "../components/Grid";
import Timer from "../components/Timer";

export default function GamePage({ grid, seconds, show, setShow }) {
  return (
    <>
      <Timer seconds={seconds} />
      <div className={`grid grid-cols-${grid}`}>
        <Grid grid={grid} show={show} setShow={setShow} />
      </div>
    </>
  );
}
