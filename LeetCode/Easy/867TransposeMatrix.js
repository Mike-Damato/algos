var transpose = function (A) {
  if (!A.length) return [];
  let ans = [];
  for (let i = 0; i < A[0].length; i++) {
    let newCol = [];
    for (let j = 0; j < A.length; j++) {
      newCol.push(A[j][i]);
    }
    ans.push(newCol);
  }
  return ans;
};
