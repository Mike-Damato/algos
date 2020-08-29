var pancakeSort = function (A) {
  let res = [];
  let curr = A.length;
  while (curr > 0) {
    const idx = A.indexOf(curr);
    if (idx !== curr - 1) {
      res.push(idx + 1);
      flip(idx, A);
      res.push(curr);
      flip(curr - 1, A);
    }
    curr--;
  }
  return res;
};

const flip = (i, A) => {
  for (let j = 0; j <= Math.floor(i / 2); j++) {
    [A[i - j], A[j]] = [A[j], A[i - j]];
  }
};
