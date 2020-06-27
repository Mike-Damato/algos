var sumNumbers = function (root) {
  if (!root) {
    return null;
  }
  let sum = 0;
  const traverse = (node, num = '') => {
    if (!node.left && !node.right) {
      sum += Number(num + JSON.stringify(node.val));
    }
    if (node.left) {
      traverse(node.left, num + JSON.stringify(node.val));
    }
    if (node.right) {
      traverse(node.right, num + JSON.stringify(node.val));
    }
  };
  traverse(root);
  return sum;
};
