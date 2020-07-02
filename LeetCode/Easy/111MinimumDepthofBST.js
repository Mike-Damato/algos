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
