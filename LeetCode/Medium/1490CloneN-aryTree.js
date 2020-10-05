var cloneTree = function (root) {
  if (!root) return null;

  const clone = (node) => {
    if (!node) return;
    let current = new Node(node.val);
    for (const newNode of node.children) {
      current.children.push(clone(newNode));
    }
    return current;
  };
  return clone(root);
};
