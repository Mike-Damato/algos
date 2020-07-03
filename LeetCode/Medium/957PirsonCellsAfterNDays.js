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

//alternate
const prisonAfterNDays = (cells, N) => {
  if (N % 14 === 0) {
    N = 14;
  } else {
    N = N % 14;
  }
  let myMap = new Map();
  for (let i = 0; i < N; i++) {
    let arr = [];
    arr[0] = 0;
    arr[7] = 0;
    if (myMap.has(cells)) {
      cells = myMap.get(cells);
      continue;
    }
    for (let j = 1; j < 7; j++) {
      if (cells[j - 1] === cells[j + 1]) {
        arr[j] = 1;
      } else {
        arr[j] = 0;
      }
    }
    myMap.set(cells, arr);
    cells = arr;
  }
  return cells;
};
