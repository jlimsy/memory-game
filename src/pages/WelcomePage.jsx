import GamePage from "./GamePage";

export default function WelcomePage() {
  return (
    <>
      <h1>Welcome</h1>
      <h2>Instructions</h2>
      <p>
        You are given 15 seconds to memorise the postion of the green squares.
        After 15 seconds, the green squares will be covered and you have to
        click on the squares where the green sqaures were previously. Click on
        all green squares correctly, and you can proceed to the next level.
        There are 10 levels in this game.
      </p>
      <button>Start</button>
      <button>Next Level</button>
      <button>Restart</button>
      <GamePage />
    </>
  );
}
