//O(N * M) Time | O(N*M) Space
function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  const ans = new Array(width).fill([]).map(() => {
    return new Array(height).fill(1);
  });

  for (let row = 1; row < width; row++) {
    for (let col = 1; col < height; col++) {
      ans[row][col] = ans[row - 1][col] + ans[row][col - 1];
    }
  }

  return ans[width - 1][height - 1];
}
