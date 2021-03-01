var distributeCandies = function (candyType) {
  const map = new Map();

  for (const candy of candyType) {
    map.set(candy, (map.get(candy) || 0) + 1);
  }

  let n = Math.floor(candyType.length / 2);

  return Math.min(map.size, n);
};
