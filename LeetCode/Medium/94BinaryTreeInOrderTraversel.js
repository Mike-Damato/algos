var inorderTraversal = function (root, vals = []) {
  if (root === null) return [];
  if (root.left !== null) {
    inorderTraversal(root.left, vals);
  }
  vals.push(root.val);
  if (root.right !== null) {
    inorderTraversal(root.right, vals);
  }
  return vals;
};
