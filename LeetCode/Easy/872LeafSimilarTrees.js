const leafSimilar = (root1, root2) => {
  const dfs = (node, arr) => {
    if (!node) return arr;

    if (!node.left && !node.right) {
      arr.push(node.val);
    }
    dfs(node.left, arr);
    dfs(node.right, arr);
  };

  let tree1 = [];
  let tree2 = [];
  dfs(root1, tree1);
  dfs(root2, tree2);

  if (tree1.length !== tree2.length) return false;

  for (let i = 0; i < tree1.length; i++) {
    if (tree1[i] !== tree2[i]) return false;
  }
  return true;
};
