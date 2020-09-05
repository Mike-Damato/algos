var getAllElements = function (root1, root2) {
  let arr = [];
  const dfs = (node) => {
    if (!node) {
      return null;
    }
    if (node.left) {
      dfs(node.left);
    }
    arr.push(node.val);
    if (node.right) {
      dfs(node.right);
    }
    return arr;
  };
  dfs(root1);
  dfs(root2);
  return arr.sort((a, b) => a - b);
};

//Using Merge Sort

const getAllElements = (root1, root2) => {
  let arr1 = [];
  let arr2 = [];

  const dfs = (node, arr) => {
    if (!node) {
      return null;
    }
    if (node.left) {
      dfs(node.left, arr);
    }

    arr.push(node.val);

    if (node.right) {
      dfs(node.right, arr);
    }
  };

  dfs(root1, arr1);
  dfs(root2, arr2);

  return merge(arr1, arr2);
};

const merge = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let ans = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      ans.push(arr1[p1]);
      p1++;
    } else {
      ans.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    ans.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    ans.push(arr2[p2]);
    p2++;
  }
  return ans;
};
