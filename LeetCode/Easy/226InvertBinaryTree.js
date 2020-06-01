var invertTree = function (root) {
  //base case
  if (root === null) {
    return null;
  }
  //Swap the left and the right
  [root.left, root.right] = [root.right, root.left];
  //Call function on left subtree
  invertTree(root.left);
  //Call function on right subtree
  invertTree(root.right);
  return root;
};
