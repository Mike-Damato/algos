var hasAllCodes = function (s, k) {
  const target = Math.pow(2, k);
  const set = new Set();
  for (let i = 0; i < s.length - k + 1; i++) {
    let sub = s.slice(i, i + k);
    set.add(sub);
  }
  return set.size === target;
};
