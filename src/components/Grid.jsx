const gridSize = {
  level1: {
    size: 3,
    green: 3,
  },

  level2: {
    size: 4,
    green: 4,
  },

  level3: {
    size: 4,
    green: 4,
  },

  level4: {
    size: 4,
    green: 5,
  },

  level5: {
    size: 4,
    green: 6,
  },

  level6: {
    size: 5,
    green: 5,
  },

  level7: {
    size: 5,
    green: 7,
  },

  level8: {
    size: 5,
    green: 7,
  },

  level9: {
    size: 6,
    green: 6,
  },

  level10: {
    size: 7,
    green: 7,
  },
};

export default function Grid() {
  let rows = [];
  let columns = [];

  for (let i = 0; i < gridSize.level1.size; i++) {
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
