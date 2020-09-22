var anagramMappings = function (A, B) {
  let map = new Map();
  for (let i = 0; i < B.length; i++) {
    if (!map.has(B[i])) {
      map.set(B[i], i);
    }
  }

  let ans = [];
  for (const num of A) {
    ans.push(map.get(num));
  }
  return ans;
};
