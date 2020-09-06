var largestOverlap = function (A, B) {
  let overlaps = 0;
  let aArr = [];
  let bArr = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1) {
        aArr.push([i, j]);
      }
      if (B[i][j] === 1) {
        bArr.push([i, j]);
      }
    }
  }
  let map = new Map(); // {dx#dy : count}
  for (const coordA of aArr) {
    for (const coordB of bArr) {
      let dx = coordB[0] - coordA[0];
      let dy = coordB[1] - coordA[1];
      let key = dx + '#' + dy;
      map.set(key, (map.get(key) || 0) + 1);
      overlaps = Math.max(overlaps, map.get(key));
    }
  }
  return overlaps;
};
