var findRoot = function (tree) {
  const set = new Set();

  for (const node of tree) {
    for (const child of node.children) {
      set.add(child.val);
    }
  }

  for (const node of tree) {
    if (!set.has(node.val)) return node;
  }
};
