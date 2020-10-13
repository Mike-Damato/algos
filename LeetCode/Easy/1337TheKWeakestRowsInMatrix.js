var kWeakestRows = function (mat, k) {
  let rows = [];
  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) count++;
    }
    rows.push([count, i]);
  }
  rows.sort((a, b) => a[0] - b[0]);

  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(rows[i][1]);
  }
  return ans;
};
