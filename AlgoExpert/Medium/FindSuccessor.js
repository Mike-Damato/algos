//O(N) Time | O(N) Space
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.
  if (!tree) return null;
  const arr = [];
  dfs(tree, arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value === node.value) {
      return arr[i + 1] || null;
    }
  }
}

const dfs = (node, arr) => {
  if (!node) return;

  if (node.left) {
    dfs(node.left, arr);
  }
  arr.push(node);
  if (node.right) {
    dfs(node.right, arr);
  }
  return arr;
};

//O(N) Time | O(1) space
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if (!tree) return null;

  if (node.right) return getLeftMost(node.right);

  return getRightMostParent(node);
}

const getLeftMost = (node) => {
  if (!node) return null;
  let current = node;
  while (current.left) {
    current = current.left;
  }
  return current;
};

const getRightMostParent = (node) => {
  if (!node) return null;
  let current = node;
  while (current.parent && current.parent.right === current) {
    current = current.parent;
  }
  return current.parent;
};
