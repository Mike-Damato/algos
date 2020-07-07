//Iterative
function spiralTraverse(array) {
  let ans = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      ans.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      ans.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) {
        break;
      }
      ans.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) {
        break;
      }
      ans.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return ans;
}

//Recursive

function spiralTraverse(array) {
  // Write your code here.
  let ans = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
  traverse(array, startRow, endRow, startCol, endCol, ans);
  return ans;
}

const traverse = (arr, startRow, endRow, startCol, endCol, ans) => {
  if (startRow > endRow || startCol > endCol) {
    return;
  }
  for (let col = startCol; col <= endCol; col++) {
    ans.push(arr[startRow][col]);
  }

  for (let row = startRow + 1; row <= endRow; row++) {
    ans.push(arr[row][endCol]);
  }

  for (let col = endCol - 1; col >= startCol; col--) {
    if (startRow === endRow) {
      break;
    }
    ans.push(arr[endRow][col]);
  }

  for (let row = endRow - 1; row > startRow; row--) {
    if (startCol === endCol) {
      break;
    }
    ans.push(arr[row][startCol]);
  }

  traverse(arr, startRow + 1, endRow - 1, startCol + 1, endCol - 1, ans);
};
