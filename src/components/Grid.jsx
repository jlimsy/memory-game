const LEVEL1 = 3;

export default function Grid() {
  let rows = [];
  let columns = [];

  for (let i = 0; i < LEVEL1; i++) {
    rows.push(i);
    columns.push(i);
  }

  return (
    <>
      {rows.map((cell, idx) => (
        <div key={idx} className="cell">
          cell
        </div>
      ))}
    </>
  );
}
