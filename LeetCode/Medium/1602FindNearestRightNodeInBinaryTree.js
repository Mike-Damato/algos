var findNearestRightNode = function (root, u) {
  if (!root) return null;
  let queue = [root];
  let size, current, found;
  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      if (current === u) {
        if (i !== size - 1) {
          return queue[0];
        } else {
          return null;
        }
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return null;
};
