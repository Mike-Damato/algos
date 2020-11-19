var longestConsecutive = function (root) {
  if (!root) return 0;
  let max = -Infinity;

  const dfs = (node, path = 0, prev) => {
    if (!node) return;

    if (node.val - 1 === prev) {
      path++;
    } else {
      path = 1;
    }
    max = Math.max(max, path);
    dfs(node.left, path, node.val);
    dfs(node.right, path, node.val);
  };

  dfs(root);
  return max === -Infinity ? 0 : max;
};
