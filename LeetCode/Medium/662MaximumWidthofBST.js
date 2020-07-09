var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxWidth = 1;
  let queue = [root];

  while (queue.length) {
    let level = [];

    for (let node of queue) {
      if (!node) {
        level.push(null);
        level.push(null);
      } else {
        level.push(node.left);
        level.push(node.right);
      }
    }

    let firstNotNull = level.findIndex((x) => x !== null);
    if (firstNotNull === -1) return maxWidth;
    // trim the start
    level = level.slice(firstNotNull).reverse();
    firstNotNull = level.findIndex((x) => x !== null);
    // trim the end
    level = level.slice(firstNotNull).reverse();
    maxWidth = Math.max(level.length, maxWidth);
    queue = level;
  }
};

//Alternate Solution
var widthOfBinaryTree = function (root) {
  if (root == null) return 0;
  let max = 0;
  let queue = [[root, 0]];
  while (queue.length) {
    let size = queue.length;
    let currentLevel = [];
    for (let i = 0; i < size; i++) {
      let [node, position] = queue.shift();
      currentLevel.push([node, position]);
      if (node.left) {
        queue.push([node.left, position * 2]);
      }
      if (node.right) {
        queue.push([node.right, position * 2 + 1]);
      }
    }

    let currLevelWidth =
      currentLevel.length === 1
        ? 1
        : currentLevel[currentLevel.length - 1][1] - currentLevel[0][1] + 1;
    max = Math.max(max, currLevelWidth);
  }
  return max;
};

//Javascript | Node.js | React | Redux | Express | REST API | PostgreSQL | Sequelize | Firebase |
