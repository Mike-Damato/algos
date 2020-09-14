class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = (node, arr) => {
  if (!node) {
    return null;
  }
  if (node.left) {
    traverse(node.left, arr);
  }
  arr.push(node);
  if (node.right) {
    traverse(node.right, arr);
  }
  return arr;
};

function flattenBinaryTree(root) {
  // Write your code here.
  let arr = [];
  const list = traverse(root, arr);
  for (let i = 0; i < list.length - 1; i++) {
    let leftNode = list[i];
    let rightNode = list[i + 1];
    leftNode.right = rightNode;
    rightNode.left = leftNode;
  }
  return list[0];
}
