var countArrangement = function (N) {
  let count = 0;
  let visited = new Set();

  const go = (idx) => {
    if (idx >= N) {
      count++;
    }
    if (visited.size >= N) return;

    for (let i = 1; i <= N; i++) {
      if (visited.has(i)) continue;

      if (i % (idx + 1) === 0 || (idx + 1) % i === 0) {
        visited.add(i);
        go(idx + 1);
        visited.delete(i);
      }
    }
  };
  go(0);
  return count;
};
