const helper = (root, min = -Infinity, max = Infinity) => {
  if (!root) {
    return true;
  }
  if (root.val <= min || root.val >= max) {
    return false;
  }
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};

var isValidBST = function (root) {
  return helper(root);
};
