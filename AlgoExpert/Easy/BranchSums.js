class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const dfs = (node, runningSum, list) => {
  let newSum = runningSum + node.value;
  if (!node.left && !node.right) {
    list.push(newSum);
    return;
  }
  dfs(node.left, newSum, list);
  dfs(node.right, newSum, list);
};
const branchSums = (root) => {
  let arr = [];

  dfs(root, 0, arr);
  return arr;
};
