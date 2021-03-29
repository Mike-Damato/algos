var flipMatchVoyage = function (root, voyage) {
  let i = 0;
  const ans = [];
  const dfs = (node, v) => {
    if (!node) return true;

    if (node.val !== v[i++]) return false;
    if (node.left && node.left.val !== v[i]) {
      ans.push(node.val);
      return dfs(node.right, v) && dfs(node.left, v);
    }
    return dfs(node.left, v) && dfs(node.right, v);
  };
  return dfs(root, voyage) ? ans : [-1];
};
