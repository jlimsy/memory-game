export default function Cell() {
  const handleFlip = () => {
    console.log("flip!");
  };
  return (
    <div
      className="border border-neutral-600 h-32 w-32 rounded-lg"
      onClick={handleFlip}
    ></div>
  );
}
