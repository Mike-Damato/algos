/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var increasingBST = function (root) {
  const arr = [];
  if (!root) return arr;

  dfs(root, arr);

  let newTreeRoot = new TreeNode(arr[0]);
  let prev = newTreeRoot;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new TreeNode(arr[i]);
    prev.right = newNode;
    prev = prev.right;
  }
  return newTreeRoot;
};

const dfs = (node, arr) => {
  if (!node) return;
  if (node.left) {
    dfs(node.left, arr);
  }
  arr.push(node.val);
  if (node.right) {
    dfs(node.right, arr);
  }
  return arr;
};
