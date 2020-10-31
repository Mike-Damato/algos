var recoverTree = function (root) {
  let prev, first, second;

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    if (prev && prev.val > node.val) {
      if (!first) {
        first = prev;
      }
      second = node;
    }
    prev = node;
    dfs(node.right);
  };
  dfs(root);

  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};
