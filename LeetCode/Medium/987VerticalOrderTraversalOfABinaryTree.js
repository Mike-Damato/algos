const { abort } = require('process');

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

//Alternate

const verticalTraversal = (root) => {
  const tree = [];

  const dfs = (node, x, y) => {
    if (!node) {
      return;
    }
    tree.push([x, y, node.val]);
    //it will be y-1 for both because we are going down
    dfs(node.left, x - 1, y - 1);
    dfs(node.right, x + 1, y - 1);
  };

  dfs(root, 0, 0);

  tree.sort((a, b) => {
    let [xA, yA, valA] = a;
    let [xB, yB, valB] = b;

    if (xA !== xB) return xA - xB;
    if (yA !== yB) return yB - yA;
    return valA - valB;
  });

  let map = new Map();

  for (let [x, y, val] of tree) {
    if (!map.has(x)) {
      map.set(x, []);
    } else {
      map.get(x).push(val);
    }
  }
  return [...map.values()];
};
