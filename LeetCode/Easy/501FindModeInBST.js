var findMode = function (root) {
  const map = new Map();
  const modes = [];
  if (!root) return [];

  let max = 1;

  const dfs = (node) => {
    if (!node) return;

    if (node.left) {
      dfs(node.left);
    }

    if (!map.has(node.val)) {
      map.set(node.val, 1);
    } else {
      map.set(node.val, map.get(node.val) + 1);
      max = Math.max(max, map.get(node.val));
    }

    if (node.right) {
      dfs(node.right);
    }
  };
  dfs(root, map, max);

  for (const [key, val] of map) {
    if (val === max) {
      modes.push(key);
    }
  }

  return modes;
};
