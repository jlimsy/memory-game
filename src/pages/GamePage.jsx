import Grid from "../components/Grid";
import Timer from "../components/Timer";

export default function GamePage({ grid }) {
  return (
    <>
      <Grid grid={grid} />
      <Timer />
    </>
  );
}
