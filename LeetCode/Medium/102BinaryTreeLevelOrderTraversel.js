var levelOrder = function (root) {
  let res = [];
  if (root === null) return res;

  let q = [root];

  while (q.length) {
    let level = [];
    let currLength = q.length

    for (let i = 0; i < currLength; i++) {
      let curr = q.shift();
      level.push(curr.val)

      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)

    }
    res.push(level)

  }

  return res;
