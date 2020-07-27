var buildTree = function (inorder, postorder) {
  const helper = (arr) => {
    if (!arr.length) {
      return null;
    }
    const val = postorder.pop();
    const idx = arr.indexOf(val);
    const node = new TreeNode(val);
    node.right = helper(arr.slice(idx + 1));
    node.left = helper(arr.slice(0, idx));
    return node;
  };
  return helper(inorder);
};

//Using a map
var buildTree = function (inorder, postorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const helper = (start, end) => {
    if (start > end) {
      return null;
    }
    const val = postorder.pop();
    const idx = map.get(val);
    const node = new TreeNode(val);
    node.right = helper(idx + 1, end);
    node.left = helper(start, idx - 1);
    return node;
  };

  return helper(0, inorder.length - 1);
};
