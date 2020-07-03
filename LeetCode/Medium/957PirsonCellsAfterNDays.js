var prisonAfterNDays = function (cells, N) {
  let copy = [...cells];
  let maxIter = 2 * cells.length - 2;
  if (N % maxIter === 0) {
    N = maxIter;
  } else {
    N = N % maxIter;
  }
  // N = N % maxIter === 0 ? maxIter : N % maxIter;
  while (N > 0) {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i - 1] === cells[i + 1]) {
        copy[i] = 1;
      } else {
        copy[i] = 0;
      }
    }
    cells = [...copy];
    N--;
  }
  return cells;
};
