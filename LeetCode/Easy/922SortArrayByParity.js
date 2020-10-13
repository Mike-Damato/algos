var sortArrayByParityII = function (A) {
  let ans = new Array(A.length);
  let even = 0;
  let odd = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      ans[even] = A[i];
      even += 2;
    } else {
      ans[odd] = A[i];
      odd += 2;
    }
  }
  return ans;
};
