var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }

  if (root.val === key) {
    //If only 1 node
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.right) {
      return root.left;
    }

    const nextNode = getMostLeft(root.right);
    root.val = nextNode.val;
    root.right = deleteNode(root.right, nextNode.val);
    return root;
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
};

const getMostLeft = (node) => {
  if (!node) {
    return null;
  }
  while (node.left) {
    node = node.left;
  }
  return node;
};
