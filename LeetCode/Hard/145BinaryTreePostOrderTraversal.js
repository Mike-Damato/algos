var postorderTraversal = function (root, ans = []) {
  if (root === null) return [];
  if (root.left) {
    postorderTraversal(root.left, ans);
  }
  if (root.right) {
    postorderTraversal(root.right, ans);
  }
  ans.push(root.val);
  return ans;
};
