var minDepth = function (root) {
  if (!root) {
    return null;
  }
  let min = Infinity;
  const dfs = (node, level) => {
    if (!node.left && !node.right) {
      min = Math.min(min, level);
    }
    if (node.left) {
      dfs(node.left, level + 1);
    }
    if (node.right) {
      dfs(node.right, level + 1);
    }
  };
  dfs(root, 1);
  return min;
};

//BFS
var minDepth = function (root) {
  if (!root) return 0;
  let queue = [[root, 1]];
  let size;
  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      let [current, depth] = queue.shift();
      if (!current.left && !current.right) {
        return depth;
      }
      if (current.left) {
        queue.push([current.left, depth + 1]);
      }
      if (current.right) {
        queue.push([current.right, depth + 1]);
      }
    }
  }
};
