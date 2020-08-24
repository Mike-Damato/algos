function maxPathSum(tree) {
  // Write your code here.
  const [_, maxSum] = findMaxSum(tree);
  return maxSum;
}

const findMaxSum = (tree) => {
  if (tree === null) {
    return [0, -Infinity];
  }
  const [leftMaxAsBranch, leftMax] = findMaxSum(tree.left);
  const [rightMaxAsBranch, rightMax] = findMaxSum(tree.right);
  const maxBranch = Math.max(leftMaxAsBranch, rightMaxAsBranch);

  const { value } = tree;
  const maxSumAsBranch = Math.max(maxBranch + value, value);
  const maxRoot = Math.max(
    leftMaxAsBranch + value + rightMaxAsBranch,
    maxSumAsBranch
  );
  const maxPathSum = Math.max(leftMax, rightMax, maxRoot);

  return [maxSumAsBranch, maxPathSum];
};
