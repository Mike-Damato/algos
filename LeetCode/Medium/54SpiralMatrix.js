var spiralOrder = function (matrix) {
  let result = [];
  if (matrix === null || matrix.length === 0) return result;
  //define boundaries, define path
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  //matrix[i][j]
  //result.length === total points in matrix m * n
  let total = matrix.length * matrix[0].length;

  while (result.length < total) {
    //for top
    for (let i = left; i <= right && result.length < total; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    //for right
    for (let i = top; i <= bottom && result.length < total; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    //for bottom
    for (let i = right; i >= left && result.length < total; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    //for left
    for (let i = bottom; i >= top && result.length < total; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  return result;
};

//Alternate
var spiralOrder = function (array) {
  let ans = [];

  if (array.length < 1) {
    return ans;
  }

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
};
