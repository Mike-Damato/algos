var copyRandomBinaryTree = function (root) {
  if (!root) return null;
  let map = new Map();

  const dfs = (node) => {
    if (!node) return null;
    if (map.has(node)) {
      return map.get(node);
    }
    let copy = new NodeCopy(node.val);
    map.set(node, copy);
    copy.left = dfs(node.left);
    copy.right = dfs(node.right);
    copy.random = dfs(node.random);
    return copy;
  };
  return dfs(root);
};
