var generateParenthesis = function (n) {
  let ans = [];

  const go = (str, left, right) => {
    if (left > right) return;

    if (left === 0 && right === 0) {
      ans.push(str);
      return;
    }
    if (left > 0) {
      go(str + '(', left - 1, right);
    }
    if (right > 0) {
      go(str + ')', left, right - 1);
    }
  };

  go('', n, n);
  return ans;
};
