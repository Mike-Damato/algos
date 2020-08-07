var verticalTraversal = function (root) {
  let hash = {};

  const dfs = (root, x, y) => {
    if (!root) {
      return;
    }

    if (!hash.hasOwnProperty(x)) {
      hash[x] = {};
      hash[x][y] = [root.val];
    } else if (hash[x][y] === undefined) {
      hash[x][y] = [root.val];
    } else {
      hash[x][y].push(root.val);
    }

    //left
    dfs(root.left, x - 1, y + 1);
    //right
    dfs(root.right, x + 1, y + 1);
  };
  dfs(root, 0, 0);
  let keysArr = Object.keys(hash);
  keysArr.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < keysArr.length; i++) {
    let key = hash[keysArr[i]];
    let yCoord = Object.keys(key).sort((a, b) => a - b);
    let temp = [];
    for (let j = 0; j < yCoord.length; j++) {
      key[yCoord[j]].sort((a, b) => a - b);
      temp = temp.concat(key[yCoord[j]]);
    }
    ans.push(temp);
  }
  return ans;
};
