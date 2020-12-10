var findDuplicateSubtrees = function (root) {
  const map = new Map();
  const ans = [];

  const dfs = (node) => {
    if (!node) return '#';

    let key =
      node.val.toString() + '-' + dfs(node.left) + '-' + dfs(node.right);

    if (!map.has(key)) {
      map.set(key, 1);
    } else if (map.get(key) === 1) {
      ans.push(node);
      map.set(key, map.get(key) + 1);
    }
    return key;
  };
  dfs(root);
  return ans;
};
