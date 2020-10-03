var getMinimumDifference = function (root) {
  let min = Infinity;
  let prev = Infinity;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    if (node.left) {
      dfs(node.left);
    }
    min = Math.min(abs(node.val, prev), min);

    prev = node.val;

    if (node.right) {
      dfs(node.right);
    }
  };

  dfs(root);
  return min;
};

const abs = (a, b) => {
  return Math.abs(a - b);
};
