var fourSumCount = function (A, B, C, D) {
  const map = new Map();
  let count = 0;
  for (const a of A) {
    for (const b of B) {
      let key = a + b;
      map.set(key, (map.get(key) || 0) + 1);
    }
  }
  for (const c of C) {
    for (const d of D) {
      let found = (c + d) * -1;
      count += map.get(found) || 0;
    }
  }
  return count;
};
