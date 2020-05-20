var verticalOrder = function (root) {
  let result = [];
  if (root === null) return result;

  let queue = [[root, 0]];
  let columns = {}; // {current.val: column vs root which is 0}
  while (queue.length) {
    const [current, column] = queue.shift();
    if (current === null) continue;
    if (!columns[column]) columns[column] = [];
    columns[column].push(current.val);

    queue.push([current.left, column - 1]);
    queue.push([current.right, column + 1]);
  }
  return Object.keys(columns)
    .sort((a, b) => a - b)
    .map((key) => columns[key]);
};
