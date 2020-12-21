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

//Alternate with O(1) space
var findRoot = function (tree) {
  let sum = 0;
  for (const node of tree) {
    sum += node.val;
    for (const child of node.children) {
      sum -= child.val;
    }
  }

  for (const node of tree) {
    if (node.val === sum) return node;
  }
};
