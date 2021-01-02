var smallestFromLeaf = function (root, path = '') {
  if (!root) return path;

  const char = String.fromCharCode(root.val + 97);

  if (!root.right) {
    return smallestFromLeaf(root.left, char + path);
  }

  if (!root.left) {
    return smallestFromLeaf(root.right, char + path);
  }

  const leftSmallest = smallestFromLeaf(root.left, char + path);
  const rightSmallest = smallestFromLeaf(root.right, char + path);

  return leftSmallest < rightSmallest ? leftSmallest : rightSmallest;
};
