const kthSmallest = (node, k) => {
  // left-->root-->right
  const inOrderTraversal = (root, arr = []) => {
    if (root === null) return [];
    // left side
    if (root.left) {
      inOrderTraversal(root.left, arr);
    }
    // root
    arr.push(root.val);
    // right side
    if (root.right) {
      inOrderTraversal(root.right, arr);
    }
    return arr;
  };
  let sortedNums = inOrderTraversal(node);
  return sortedNums[k - 1];
};
