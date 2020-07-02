var preorder = function (root) {
  const ans = [];
  const traverse = (node) => {
    if (!node) {
      return null;
    }
    ans.push(node.val);
    node.children.forEach((child) => {
      traverse(child);
    });
  };
  traverse(root);
  return ans;
};
