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
