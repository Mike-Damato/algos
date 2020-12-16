var isUnivalTree = function (root) {
  if (!root) return true;
  const tree = [];
  dfs(root, tree);

  for (let i = 1; i < tree.length; i++) {
    if (tree[i] !== tree[0]) return false;
  }
  return true;
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

//Alternate
var isUnivalTree = function (root) {
  if (!root) return true;
  let isLeft =
    !root.left || (root.val === root.left.val && isUnivalTree(root.left));
  let isRight =
    !root.right || (root.val === root.right.val && isUnivalTree(root.right));

  return isLeft && isRight;
};
