const shuffleGreen = (array, level, gridSize) => {
  let greenCells = [];
  array.sort(() => Math.random() - 0.5);

  for (let i = 0; i < gridSize[`level${level}`].green; i++) {
    greenCells.push(array[i]);
  }

  return greenCells;
};

export default shuffleGreen;
