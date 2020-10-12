var largestValues = function (root) {
  if (!root) return [];

  let queue = [root];
  let tree = [];
  let current, size, max;

  while (queue.length) {
    size = queue.length;
    max = -Infinity;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      max = Math.max(current.val, max);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    tree.push(max);
  }
  return tree;
};
