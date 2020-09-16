class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function rightSiblingTree(root) {
  helper(root, null, null);
  return root;
}

const helper = (node, parent, leftChild) => {
  if (!node) {
    return;
  }
  const { left, right } = node;
  helper(left, node, true);
  if (!parent) {
    node.right = null;
  } else if (leftChild) {
    node.right = parent.right;
  } else {
    if (!parent.right) {
      node.right = null;
    } else {
      node.right = parent.right.left;
    }
  }
  helper(right, node, false);
};
