class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
//O(N^2) Time | O(N) Space
function reconstructBst(preorder) {
  if (!preorder || !preorder.length) return null;
  const value = preorder[0];
  let rightSubtreeRootIdx = preorder.length;

  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] >= value) {
      rightSubtreeRootIdx = i;
      break;
    }
  }
  const leftSubtree = reconstructBst(preorder.slice(1, rightSubtreeRootIdx));
  const rightSubtree = reconstructBst(preorder.slice(rightSubtreeRootIdx));
  return new BST(value, leftSubtree, rightSubtree);
}
