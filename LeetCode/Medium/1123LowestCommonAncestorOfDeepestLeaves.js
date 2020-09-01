var lcaDeepestLeaves = function (root) {
  if (!root) {
    return null;
  }

  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    let left = dfs(node.left);
    let right = dfs(node.right);
    return 1 + Math.max(left, right);
  };

  let left = dfs(root.left);
  let right = dfs(root.right);

  // both subtrees would have the same depth
  // if this node is the common ancestor of the deepest leaves
  if (left === right) {
    return root;
  }

  // otherwise, the common ancestor of the deepest leaves must be in the subtree whose depth is larger
  if (left > right) {
    return lcaDeepestLeaves(root.left);
  }
  return lcaDeepestLeaves(root.right);
};
