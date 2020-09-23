var sumZero = function (n) {
  let ans = [];
  if (n % 2 !== 0) {
    ans.push(0);
  }
  for (let i = 1; i < n; i++) {
    if (ans.length === n) {
      break;
    }
    ans.push(i);
    ans.push(i * -1);
  }
  return ans;
};
