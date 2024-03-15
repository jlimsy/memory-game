export default function Grid({ grid }) {
  let rows = [];
  let columns = [];

  for (let i = 0; i < grid; i++) {
    rows.push(i);
    columns.push(i);
  }

  return (
    <>
      {rows.map((cell, idx) => (
        <div key={idx} className="cell border h-32 w-32 ">
          cell
        </div>
      ))}
    </>
  );
}
