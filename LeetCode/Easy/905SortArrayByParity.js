var sortArrayByParity = function (A) {
  let evensArr = [];
  let oddsArr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evensArr.push(A[i]);
    } else {
      oddsArr.push(A[i]);
    }
  }
  return evensArr.concat(oddsArr);
};
