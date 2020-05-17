var flatten = function (root) {
  if (root === null) {
    return null;
  }
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
    current.right = stack[stack.length - 1];
    current.left = null;
  }
};
