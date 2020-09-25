var generateTrees = function (n) {
  if (n === 0) return [];
  return helper(1, n);
};

const helper = (start, end) => {
  const ans = [];
  if (start > end) {
    ans.push(null);
    return ans;
  }
  for (let i = start; i <= end; i++) {
    let left = helper(start, i - 1);
    let right = helper(i + 1, end);

    for (let j = 0; j < left.length; j++) {
      for (let k = 0; k < right.length; k++) {
        let root = new TreeNode(i);
        root.left = left[j];
        root.right = right[k];
        ans.push(root);
      }
    }
  }
  return ans;
};
