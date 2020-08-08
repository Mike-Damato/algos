const pathSum = (root, sum) => {
  if (!root) {
    return 0;
  }
  let count = 0;

  const dfs = (node, currentValue) => {
    if (!node) {
      return;
    }
    let currentSum = node.val + currentValue;
    if (currentSum === sum) {
      count++;
    }

    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  };

  dfs(root, 0);
  count += pathSum(root.left, sum);
  count += pathSum(root.right, sum);
  return count;
};

//Alternate
var pathSum = function (root, sum) {
  let count = 0;

  const dfs = (root) => {
    let arr = [];
    if (!root) {
      return [];
    }
    let left = dfs(root.left);
    let right = dfs(root.right);

    arr.push(root.val);

    for (let val of left) {
      let sum = val + root.val;
      arr.push(sum);
    }

    for (let val of right) {
      let sum = val + root.val;
      arr.push(sum);
    }

    for (let num of arr) {
      if (num === sum) {
        count++;
      }
    }
    return arr;
  };
  dfs(root);
  return count;
};
