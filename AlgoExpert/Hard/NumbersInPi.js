function numbersInPi(pi, numbers) {
  // Write your code here.
  let set = new Set();
  for (const num of numbers) {
    set.add(num);
  }
  const minSpaces = getMinSpaces(pi, set, {}, 0);
  return minSpaces === Infinity ? -1 : minSpaces;
}

const getMinSpaces = (pi, set, cache, idx) => {
  if (idx === pi.length) {
    return -1;
  }
  if (cache.hasOwnProperty(idx)) {
    return cache[idx];
  }
  let minSpaces = Infinity;
  for (let i = idx; i < pi.length; i++) {
    let prefix = pi.slice(idx, i + 1);
    if (set.has(prefix)) {
      let minSpacesInSuffix = getMinSpaces(pi, set, cache, i + 1);
      minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
    }
  }
  cache[idx] = minSpaces;
  return cache[idx];
};
