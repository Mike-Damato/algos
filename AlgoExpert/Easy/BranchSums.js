class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const dfs = (node, runningSum, list) => {
  if (!node) {
    return null;
  }
  let newSum = runningSum + node.value;
  //if it is a leaf node we can push to our list
  if (!node.left && !node.right) {
    list.push(newSum);
    return list;
  }
  //then we traverse back upwards check if there is a left or a right and repeat
  dfs(node.left, newSum, list);
  dfs(node.right, newSum, list);
};
const branchSums = (root) => {
  let arr = [];
  //we start at the root
  //initial sum is 0 because we havent added anything yet
  //our arr is our list stores each branch sum
  dfs(root, 0, arr);
  return arr;
};
