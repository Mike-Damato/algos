var getRow = function (rowIndex) {
  let pascals = [];
  let size = 1;
  for (let i = 0; i <= rowIndex; i++) {
    pascals.push(new Array(size).fill(1));
    size++;
  }

  for (let i = 0; i < pascals.length; i++) {
    for (let j = 0; j < pascals[i].length; j++) {
      if (i > 0 && j > 0) {
        let above = pascals[i - 1][j] + pascals[i - 1][j - 1] || 1;
        pascals[i][j] = above;
      }
    }
  }
  return pascals[rowIndex];
};
