var countPairs = function (root, distance) {
  let ans = 0;

  const dfs = (node) => {
    if (!node) return;
    if (!node.left && !node.right) return [1];

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (!node.left || !node.right) {
      if (left) {
        return left.map((val) => val + 1);
      } else {
        return right.map((val) => val + 1);
      }
    }

    for (const leftNode of left) {
      for (const rightNode of right) {
        if (leftNode + rightNode <= distance) {
          ans++;
        }
      }
    }
    return [...left, ...right].map((val) => val + 1);
  };
  dfs(root);
  return ans;
};
