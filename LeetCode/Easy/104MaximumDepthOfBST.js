var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let lHeight = 1;
  let rHeight = 1;
  if (root.right) {
    rHeight += maxDepth(root.right);
  }
  if (root.left) {
    lHeight += maxDepth(root.left);
  }
  return Math.max(lHeight, rHeight);
};
