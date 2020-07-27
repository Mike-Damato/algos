var buildTree = function (preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const helper = (start, end) => {
    if (start > end) {
      return null;
    }
    const val = preorder.shift();
    const idx = map.get(val);
    const node = new TreeNode(val);
    node.left = helper(start, idx - 1);
    node.right = helper(idx + 1, end);
    return node;
  };
  return helper(0, inorder.length - 1);
};
