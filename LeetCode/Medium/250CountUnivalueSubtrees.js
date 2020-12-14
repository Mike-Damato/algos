var countUnivalSubtrees = function (root) {
  if (!root) return 0;
  let count = 0;
  const isValid = (node) => {
    if (!node) return true;

    let left = isValid(node.left);
    let right = isValid(node.right);

    if (!left || !right) return false;

    if (node.left !== null && node.left.val !== node.val) return false;
    if (node.right !== null && node.right.val !== node.val) return false;
    count++;
    return true;
  };

  isValid(root);
  return count;
};
