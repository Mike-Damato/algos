var rob = function (root) {
  if (!root) return 0;

  const dfs = (node) => {
    if (!node) return [0, 0];
    const [leftRob, leftNeighbor] = dfs(node.left);
    const [rightRob, rightNeighbor] = dfs(node.right);

    return [
      node.val + leftNeighbor + rightNeighbor,
      Math.max(
        leftRob + rightRob,
        leftNeighbor + rightNeighbor,
        leftRob + rightNeighbor,
        rightRob + leftNeighbor
      ),
    ];
  };

  return Math.max(...dfs(root));
};
