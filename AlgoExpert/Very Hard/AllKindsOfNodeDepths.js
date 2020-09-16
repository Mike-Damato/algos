function allKindsOfNodeDepths(root, sum = 0, depth = 0) {
  if (!root) {
    return 0;
  }
  sum += depth;
  return (
    sum +
    allKindsOfNodeDepths(root.left, sum, depth + 1) +
    allKindsOfNodeDepths(root.right, sum, depth + 1)
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
