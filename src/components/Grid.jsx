import { useState } from "react";

export default function Grid({ grid }) {
  const [green, setGreen] = useState(true);

  let rows = [];
  let columns = [];

  for (let i = 0; i < grid; i++) {
    rows.push(i);
    columns.push(i);
  }

  return (
    <>
      {rows.map((cell, idx) =>
        setGreen ? (
          <div key={idx} className="cell border h-32 w-32 bg-lime-400">
            cell
          </div>
        ) : (
          <div key={idx} className="cell border h-32 w-32">
            cell
          </div>
        )
      )}
    </>
  );
}
