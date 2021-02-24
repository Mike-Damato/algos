var scoreOfParentheses = function (str) {
  const stack = [0];
  for (const char of str) {
    if (char === '(') {
      stack.push(0);
    } else {
      let last = stack.pop();
      stack[stack.length - 1] += Math.max(2 * last, 1);
    }
  }
  return stack[stack.length - 1];
};
