var maxPathSum = function (root) {
  const [_, maxSum] = findMax(root);
  return maxSum;
};

const findMax = (node) => {
  if (node === null) {
    return [0, -Infinity];
  }
  const [leftMaxAsBranch, leftMax] = findMax(node.left);
  const [rightMaxAsBranch, rightMax] = findMax(node.right);
  const maxBranch = Math.max(leftMaxAsBranch, rightMaxAsBranch);

  const { val } = node;
  const maxSumAsBranch = Math.max(maxBranch + val, val);
  const maxRoot = Math.max(
    leftMaxAsBranch + val + rightMaxAsBranch,
    maxSumAsBranch
  );
  const maxPathSum = Math.max(leftMax, rightMax, maxRoot);

  return [maxSumAsBranch, maxPathSum];
};
