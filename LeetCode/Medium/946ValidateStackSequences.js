var validateStackSequences = function (pushed, popped) {
  let i = 0;
  const stack = [];
  for (const num of pushed) {
    stack.push(num);
    while (
      stack.length &&
      i < popped.length &&
      stack[stack.length - 1] === popped[i]
    ) {
      stack.pop();
      i++;
    }
  }
  return i === popped.length;
};
