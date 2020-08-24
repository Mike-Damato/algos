var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }

  return helper(root, false);
};

const helper = (node, left) => {
  if (!node) {
    return 0;
  }
  if (left && !node.left && !node.right) {
    return node.val;
  }
  return helper(node.left, true) + helper(node.right, false);
};
