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

//Alternate syntax
var isValidBST = function (root) {
  if (!root) return true;

  const helper = (node, min = -Infinity, max = Infinity) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) {
      return false;
    }
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };
  return helper(root);
};
