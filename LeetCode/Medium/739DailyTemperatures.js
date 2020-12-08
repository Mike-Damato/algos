var dailyTemperatures = function (T) {
  const ans = new Array(T.length).fill(0);
  const stack = [];
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      let j = stack.pop();
      ans[j] = i - j;
    }
    stack.push(i);
  }
  return ans;
};
