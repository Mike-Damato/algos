var isSymmetric = function (root) {
  const isMirror = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    }
    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    return (
      isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right)
    );
  };
  return isMirror(root, root);
};
