var minOperations = function (logs) {
  let stack = [];
  for (const log of logs) {
    if (log === '../') {
      stack.pop();
    } else if (log !== './') {
      stack.push(log);
    }
  }
  return stack.length;
};
