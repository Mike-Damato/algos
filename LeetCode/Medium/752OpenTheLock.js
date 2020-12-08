var openLock = function (deadends, target) {
  let dead = new Set(deadends);
  let count = 0;
  let visited = new Set(['0000']);
  let queue = ['0000'];

  while (queue.length) {
    let next = [];
    for (const combo of queue) {
      if (combo === target) return count;
      if (dead.has(combo)) continue;

      for (let char of getCombinations(combo)) {
        if (visited.has(char)) continue;
        visited.add(char);
        next.push(char);
      }
    }
    count++;
    queue = next;
  }
  return -1;
};

const getCombinations = (combo) => {
  const ans = [];
  for (let i = 0; i < combo.length; i++) {
    ans.push(combo.slice(0, i) + ((+combo[i] + 1) % 10) + combo.slice(i + 1));
    ans.push(combo.slice(0, i) + ((+combo[i] + 9) % 10) + combo.slice(i + 1));
  }
  return ans;
};
