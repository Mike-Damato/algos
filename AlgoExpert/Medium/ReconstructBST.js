class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
//O(N^2) Time | O(H) Space
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

//Optimized solution
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  constructor(root) {
    this.root = root;
  }
}
//O(N) Time | O(N) Space
function reconstructBst(preorder) {
  if (!preorder || !preorder.length) return null;
  const newTree = new TreeInfo(0);
  return reconstructBSTFromArray(-Infinity, Infinity, preorder, newTree);
}

const reconstructBSTFromArray = (left, right, preorder, newTree) => {
  if (newTree.root === preorder.length) return null;

  const rootVal = preorder[newTree.root];
  if (rootVal < left || rootVal >= right) return null;
  newTree.root++;
  const leftSubtree = reconstructBSTFromArray(left, rootVal, preorder, newTree);
  const rightSubtree = reconstructBSTFromArray(
    rootVal,
    right,
    preorder,
    newTree
  );
  return new BST(rootVal, leftSubtree, rightSubtree);
};
