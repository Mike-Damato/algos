var buildArray = function (target, n) {
  const ans = [];
  for (let i = 0, j = 1; i < target.length; i++, j++) {
    if (target[i] === j) {
      ans.push('Push');
    } else {
      ans.push('Push', 'Pop');
      i--;
    }
  }
  return ans;
};
