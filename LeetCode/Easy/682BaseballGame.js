var calPoints = function (ops) {
  let ans = [];
  for (const char of ops) {
    if (!isNaN(char)) {
      ans.push(+char);
    } else if (char === '+') {
      ans.push(ans[ans.length - 1] + ans[ans.length - 2]);
    } else if (char === 'D') {
      ans.push(ans[ans.length - 1] * 2);
    } else {
      ans.pop();
    }
  }
  return ans.reduce((a, b) => a + b, 0);
};
