function invertBinaryTree(tree) {
  // Write your code here.
  if (!tree) {
    return null;
  }
  [tree.left, tree.right] = [tree.right, tree.left];
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  return tree;
}
