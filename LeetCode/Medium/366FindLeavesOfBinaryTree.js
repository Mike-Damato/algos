var findLeaves = function (root) {
  if (!root) return [];
  let map = new Map();

  const dfs = (node) => {
    if (!node) return 0;
    let depth = Math.max(dfs(node.left), dfs(node.right));
    if (map.has(depth)) {
      map.get(depth).push(node.val);
    } else {
      map.set(depth, [node.val]);
    }
    return depth + 1;
  };
  dfs(root);
  return [...map.values()];
};
