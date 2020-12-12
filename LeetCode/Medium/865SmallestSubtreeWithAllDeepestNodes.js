var subtreeWithAllDeepest = function (root) {
  if (!root) return null;
  let max = -1;
  let parent = root;
  const dfs = (node, depth) => {
    if (!node) return depth;

    let left = dfs(node.left, depth + 1);
    let right = dfs(node.right, depth + 1);

    if (left === right && left >= max) {
      max = left;
      parent = node;
    }
    return Math.max(left, right);
  };

  dfs(root, 0);
  return parent;
};
