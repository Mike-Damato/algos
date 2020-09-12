var combinationSum3 = function (k, n) {
  let ans = [];

  const backtrack = (arr, sum, start) => {
    if (sum > n) {
      return;
    }
    if (arr.length === k) {
      if (sum === n) {
        ans.push(arr);
        return;
      }
    }
    for (let i = start; i < 10; i++) {
      backtrack([...arr, i], sum + i, i + 1);
    }
  };
  backtrack([], 0, 1);
  return ans;
};
