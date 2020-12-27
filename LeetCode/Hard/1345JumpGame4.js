var minJumps = function (arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i]).push(i);
  }

  const visited = new Set([0]);
  const queue = [{ idx: 0, jumps: 0 }];

  while (queue.length) {
    let { idx, jumps } = queue.shift();
    if (idx === arr.length - 1) return jumps;
    jumps++;

    const idxs = map.get(arr[idx]);

    for (let i = idxs.length - 1; i >= 0; i--) {
      if (!visited.has(idxs[i])) {
        visited.add(idxs[i]);
        queue.push({ idx: idxs[i], jumps: jumps });
      }
    }

    map.set(arr[idx], []);

    const next = idx + 1;
    const prev = idx - 1;

    if (!visited.has(next)) {
      visited.add(next);
      queue.push({ idx: next, jumps: jumps });
    }

    if (prev >= 0 && !visited.has(prev)) {
      visited.add(prev);
      queue.push({ idx: prev, jumps: jumps });
    }
  }
};
