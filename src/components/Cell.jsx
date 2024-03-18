export default function Cell({ id }) {
  const handleFlip = (event) => {
    console.log("flip!");
    console.log(event.target);
  };
  return (
    <div
      id={`${id}`}
      className="border border-neutral-600 h-32 w-32 rounded-lg"
      onClick={handleFlip}
    ></div>
  );
}
