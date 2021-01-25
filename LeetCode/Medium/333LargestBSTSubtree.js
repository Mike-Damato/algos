var largestBSTSubtree = function (root) {
  if (!root) return 0;
  let max = 0;

  const dfs = (node) => {
    if (!node) return [0, Infinity, -Infinity];
    const [leftSubTree, leftMin, leftMax] = dfs(node.left);
    const [rightSubTree, rightMin, rightMax] = dfs(node.right);

    if (
      leftSubTree >= 0 &&
      rightSubTree >= 0 &&
      node.val > leftMax &&
      rightMin > node.val
    ) {
      max = Math.max(max, leftSubTree + rightSubTree + 1);
      return [
        leftSubTree + rightSubTree + 1,
        Math.min(leftMin, node.val),
        Math.max(rightMax, node.val),
      ];
    }
    return [-1, 0, 0];
  };

  dfs(root);
  return max;
};
