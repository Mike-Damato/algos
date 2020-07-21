var connect = function (root) {
  if (!root) {
    return root;
  }
  let queue = [root];
  let current;
  let level;
  while (queue.length) {
    level = [...queue];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      current.next = level[i + 1];
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return root;
};
