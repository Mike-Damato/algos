var findBottomLeftValue = function (root) {
  if (!root) return null;
  let queue = [root];
  let size, current;
  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left) {
        queue.push(current.left);
      }
    }
  }
  return current.val;
};
