var generateMatrix = function (n) {
  if (!n) return [];
  let startCol = 0;
  let startRow = 0;
  let endCol = n - 1;
  let endRow = n - 1;

  const ans = [];
  let count = 1;

  while (startRow <= endRow && startCol <= endCol) {
    //Left to right
    for (let i = startCol; i <= endCol; i++) {
      if (!ans[startRow]) {
        ans[startRow] = [];
      }
      ans[startRow][i] = count;
      count++;
    }
    startRow++;

    //Top to bottom
    for (let i = startRow; i <= endRow; i++) {
      if (!ans[i]) {
        ans[i] = [];
      }
      ans[i][endCol] = count;
      count++;
    }
    endCol--;

    if (startRow <= endRow && startCol <= endCol) {
      //Right to left
      for (let i = endCol; i >= startCol; i--) {
        if (!ans[endRow]) {
          ans[endRow] = [];
        }
        ans[endRow][i] = count;
        count++;
      }
    }
    endRow--;

    //Bottom to top
    for (let i = endRow; i >= startRow; i--) {
      if (!ans[i]) {
        ans[i] = [];
      }
      ans[i][startCol] = count;
      count++;
    }
    startCol++;
  }
  return ans;
};
