var bstFromPreorder = function (preorder) {
  if (preorder.length === 0) return null;
  let root = new TreeNode(preorder[0]);
  // find the right side
  let i = 0;
  while (i < preorder.length) {
    if (preorder[i] > preorder[0]) {
      break;
    }
    i++;
  }
  root.left = bstFromPreorder(preorder.slice(1, i));
  root.right = bstFromPreorder(preorder.slice(i));
  return root;
};
