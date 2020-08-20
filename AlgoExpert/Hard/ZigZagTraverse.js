function zigzagTraverse(array) {
  // Write your code here.
  let ans = [];
  let row = 0;
  let col = 0;
  let height = array.length - 1;
  let width = array[0].length - 1;
  let down = true;

  while (!checkBounds(row, col, height, width)) {
    ans.push(array[row][col]);
    if (down) {
      if (col === 0 || row === height) {
        down = false;
        if (row === height) {
          col++;
        } else {
          row++;
        }
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === width) {
        down = true;
        if (col === width) {
          row++;
        } else {
          col++;
        }
      } else {
        row--;
        col++;
      }
    }
  }
  return ans;
}

const checkBounds = (row, col, height, width) => {
  return row < 0 || row > height || col < 0 || col > width;
};
