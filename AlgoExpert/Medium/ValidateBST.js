class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const helper = (root, min, max) => {
  if (root === null) {
    return true;
  }
  if (root.value < min || root.value >= max) {
    return false;
  }
  const left = helper(root.left, min, root.value);
  return left && helper(root.right, root.value, max);
};

var validateBst = function (tree) {
  return helper(tree, -Infinity, Infinity);
};
