var findTilt = function (root) {
  let total = 0;
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    let tilt = Math.abs(left - right);
    total += tilt;

    return left + right + node.val;
  };
  dfs(root);
  return total;
};
