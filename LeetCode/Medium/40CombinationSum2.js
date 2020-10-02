var combinationSum2 = function (candidates, target) {
  let ans = [];
  candidates.sort((a, b) => a - b);

  const go = (diff, idx, arr) => {
    if (diff < 0) return;

    if (diff === 0) {
      ans.push([...arr]);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      //Avoid duplicates
      if (i > idx && candidates[i] === candidates[i - 1]) continue;

      arr.push(candidates[i]);
      go(diff - candidates[i], i + 1, arr);
      arr.pop();
    }
  };
  go(target, 0, []);
  return ans;
};
