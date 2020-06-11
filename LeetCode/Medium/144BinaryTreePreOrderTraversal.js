var preorderTraversal = function (root, arr = []) {
  if (root === null) {
    return [];
  }
  arr.push(root.val);
  if (root.left) {
    preorderTraversal(root.left, arr);
  }
  if (root.right) {
    preorderTraversal(root.right, arr);
  }
  return arr;
};

//Iterative
var preorderTraversal = function (root) {
  if (root === null) {
    return [];
  }
  let arr = [];
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    arr.push(current.val);
    console.log(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return arr;
};
