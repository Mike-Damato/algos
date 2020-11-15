var rangeSumBST = function (root, low, high) {
  if (!root) return null;
  let sum = 0;
  const dfs = (node) => {
    if (!node) return;
    if (node.left) {
      dfs(node.left);
    }
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    if (node.right) {
      dfs(node.right);
    }
  };

  dfs(root);
  return sum;
};

//BFS
const rangeSumBST = (root, low, high) => {
  if (!root) return null;
  let queue = [root];
  let size, current;
  let sum = 0;
  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      if (current.val >= low && current.val <= high) {
        sum += current.val;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return sum;
};
