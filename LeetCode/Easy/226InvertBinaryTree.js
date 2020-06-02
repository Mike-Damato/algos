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

//Iterative
var invertTree = function (root) {
  if (root === null) return null;
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    [current.left, current.right] = [current.right, current.left];
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return root;
};
