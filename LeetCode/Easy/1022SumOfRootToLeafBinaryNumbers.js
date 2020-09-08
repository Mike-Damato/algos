const sumRootToLeaf = (root) => {
  let tree = [];
  const dfs = (node, str) => {
    if (!node) {
      return;
    }
    str = `${str}${node.val}`;
    if (!node.left && !node.right) {
      tree.push(str);
    }
    dfs(node.left, str);
    dfs(node.right, str);
  };
  dfs(root, '');

  return tree.reduce((a, b) => (a += parseInt(b, 2)), 0);
};
