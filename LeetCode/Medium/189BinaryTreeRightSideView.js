var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let ans = [root.val];
  let current;
  while (queue.length) {
    let next = [];
    while (queue.length) {
      current = queue.shift();
      if (current.left) {
        next.push(current.left);
      }
      if (current.right) {
        next.push(current.right);
      }
    }
    if (next[next.length - 1]) {
      ans.push(next[next.length - 1].val);
    }
    queue = next;
  }
  return ans;
};

//Using DFS
const rightSideView = (root) => {
  if (!root) {
    return [];
  }
  let arr = [];
  let ans = [];
  dfs(root, 0, arr);
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i][arr[i].length-1])
    let last = arr[i][arr[i].length - 1];
    ans.push(last);
  }
  // console.log(ans)
  return ans;
};

const dfs = (node, level, arr) => {
  if (!node) {
    return null;
  }
  if (arr[level]) {
    arr[level].push(node.val);
  } else {
    arr.push([node.val]);
  }
  dfs(node.left, level + 1, arr);
  dfs(node.right, level + 1, arr);
};
