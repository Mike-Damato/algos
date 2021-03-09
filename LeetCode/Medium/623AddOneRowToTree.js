const addOneRow = (root, v, d) => {
  if (!root) return null;
  if (d === 1) {
    root = new TreeNode(v, root);
  }

  const dfs = (node, depth) => {
    if (!node) return;

    if (depth === d - 1) {
      node.left = new TreeNode(v, node.left);
      node.right = new TreeNode(v, null, node.right);
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 1);
  return root;
};
