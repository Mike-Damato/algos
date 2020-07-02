var getAllElements = function (root1, root2) {
  let arr = [];
  const dfsPreOrder = (node) => {
    if (!node) {
      return null;
    }
    if (node.left) {
      dfsPreOrder(node.left);
    }
    arr.push(node.val);
    if (node.right) {
      dfsPreOrder(node.right);
    }
    return arr;
  };
  dfsPreOrder(root1);
  dfsPreOrder(root2);
  return arr.sort((a, b) => a - b);
};
