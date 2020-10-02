var combinationSum = function (candidates, target) {
  let ans = [];

  const go = (diff, idx, arr) => {
    if (diff < 0) return;

    if (diff === 0) ans.push([...arr]);

    for (let i = idx; i < candidates.length; i++) {
      arr.push(candidates[i]);
      go(diff - candidates[i], i, arr);
      arr.pop();
    }
  };

  go(target, 0, []);
  return ans;
};
