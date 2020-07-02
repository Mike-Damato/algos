var getAllElements = function (root1, root2) {
  let arr = [];
  const dfs = (node) => {
    if (!node) {
      return null;
    }
    if (node.left) {
      dfs(node.left);
    }
    arr.push(node.val);
    if (node.right) {
      dfs(node.right);
    }
    return arr;
  };
  dfs(root1);
  dfs(root2);
  return arr.sort((a, b) => a - b);
};
