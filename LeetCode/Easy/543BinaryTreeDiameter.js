function binaryTreeDiameter(tree) {
  let ans = 1;
  const dfs = (node) => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    ans = Math.max(ans, left + right + 1);
    return Math.max(left, right) + 1;
  };
  dfs(tree);
  return ans - 1;
}
