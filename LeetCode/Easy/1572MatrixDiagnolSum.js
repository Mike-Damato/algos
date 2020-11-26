var diagonalSum = function (mat) {
  const n = mat.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += mat[i][i];
    if (n - i - 1 !== i) {
      ans += mat[n - i - 1][i];
    }
  }
  return ans;
};
