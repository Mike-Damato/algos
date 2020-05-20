var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === q || root === p) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  if (left === null) {
    return right;
  }
  if (right === null) {
    return left;
  }
};
