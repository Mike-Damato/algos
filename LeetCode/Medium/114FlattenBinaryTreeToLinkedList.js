var flatten = function (root) {
  if (root === null) {
    return null;
  }
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
    current.right = stack[stack.length - 1];
    current.left = null;
  }
};

//Recursive
const flatten = (root) => {
  let prev = null;
  const flattenHelper = (node) => {
    if (!node) {
      return null;
    }
    flattenHelper(node.right);
    flattenHelper(node.left);

    node.left = null;
    node.right = prev;
    prev = node;
  };
  flattenHelper(root);
};

//Constant Space
const flatten = (root) => {
  if (!root) {
    return null;
  }
  let current = root;
  let rightMost;
  while (current) {
    if (current.left) {
      rightMost = current.left;
      while (rightMost.right) {
        rightMost = rightMost.right;
      }
      rightMost.right = current.right;
      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
};
