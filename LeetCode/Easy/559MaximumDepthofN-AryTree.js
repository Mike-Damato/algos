var maxDepth = function (root) {
  if (root === null) return 0;

  let height = 1;

  for (let child of root.children) {
    let childDepth = 1;
    childDepth += maxDepth(child);
    height = Math.max(childDepth, height);
  }

  return height;
};

var maxDepth = function (root) {
  if (root === null) {
    return null;
  }
  let stack = [[root, 1]];
  let height = 1;
  while (stack.length) {
    let [curr, localDepth] = stack.pop();
    if (curr !== null) {
      height = Math.max(height, localDepth);
      for (const child of curr.children) {
        stack.push([child, localDepth + 1]);
      }
    }
  }
  return height;
};
