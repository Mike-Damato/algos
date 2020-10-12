var balanceBST = function (root) {
  if (!root) return null;
  let arr = [];
  dfs(root, arr);
  return makeTree(arr);
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

const makeTree = (arr) => {
  if (!arr.length) return null;
  let mid = Math.floor(arr.length / 2);
  let node = new TreeNode(arr[mid]);
  node.left = makeTree(arr.slice(0, mid));
  node.right = makeTree(arr.slice(mid + 1));

  return node;
};
