//Reccursive
var postorder = function (root) {
  if (root === null) {
    return [];
  }
  let stack = [];
  const traverse = (node) => {
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
    stack.push(node.val);
  };
  traverse(root);
  return stack;
};

//Iterative
var postorder = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }

  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    result.push(current.val);
    stack.push(...current.children);
  }
  return result.reverse();
};
