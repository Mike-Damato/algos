//Recursive In Order DFS
var countNodes = function (root, arr = []) {
  if (!root) {
    return null;
  }
  if (root.left) {
    countNodes(root.left, arr);
  }
  arr.push(root.val);
  if (root.right) {
    countNodes(root.right, arr);
  }
  return arr.length;
};

//Iterative BFS
var countNodes = function (root) {
  if (!root) {
    return null;
  }
  let queue = [root];
  let current;
  let ans = [];
  while (queue.length) {
    current = queue.shift();
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    ans.push(current);
  }
  return ans.length;
};

//Recurisve O(1) space
var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};
