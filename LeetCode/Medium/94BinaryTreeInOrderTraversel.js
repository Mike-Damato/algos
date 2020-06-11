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

//Iterative
var inorderTraversal = function (root) {
  const stack = [];
  const res = [];

  //while there is a root, or there is something in the stack
  while (root || stack.length) {
    //if root isn't null / it exists
    if (root) {
      //push it into the stack
      stack.push(root);
      //reassign, traverse to bottom left
      root = root.left;
    } else {
      //no more left? then start popping off what you have in the stack
      root = stack.pop();
      //push vals into res
      res.push(root.val);
      //reassign root to be root.right, checks if there's a right
      root = root.right;
    }
  }
  return res;
};

//Alternate Iterative
var inorderTraversal = function (root) {
  if (root === null) return [];
  let current = root;
  let stack = [];
  let arr = [];
  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      arr.push(current.val);
      current = current.right;
    }
  }
  return arr;
};
