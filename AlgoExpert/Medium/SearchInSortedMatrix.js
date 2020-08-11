function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return [row, col];
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return [-1, -1];
}
