var uncommonFromSentences = function (A, B) {
  if (!A.length || !B.length) {
    return A || B;
  }
  let a = A.split(' ');
  let b = B.split(' ');
  let map = new Map();
  let ans = [];

  for (const word of a) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      map.set(word, map.get(word) + 1);
    }
  }

  for (const word of b) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      map.set(word, map.get(word) + 1);
    }
  }

  for (const [word, count] of map) {
    if (count === 1) {
      ans.push(word);
    }
  }
  return ans;
};
