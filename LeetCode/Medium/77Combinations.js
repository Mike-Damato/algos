var combine = function (n, k) {
  let ans = [];

  const go = (start, arr) => {
    if (arr.length === k) {
      ans.push([...arr]);
    }

    for (let i = start; i <= n; i++) {
      arr.push(i);
      go(i + 1, arr);
      arr.pop();
    }
  };
  go(1, []);
  return ans;
};
