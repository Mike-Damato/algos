//Recursive
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

//Iterative
var postorderTraversal = function (root) {
  if (root === null) return [];
  let stack = [root];
  let arr = [];
  while (stack.length) {
    let current = stack.pop();

    if (current.left) {
      stack.push(current.left);
    }
    arr.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
  }
  return arr.reverse();
};
