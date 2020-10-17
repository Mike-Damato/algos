var findRepeatedDnaSequences = function (s) {
  let set = new Set();
  let ans = new Set();
  for (let i = 0; i < s.length - 10 + 1; i++) {
    let temp = s.substring(i, i + 10);
    if (set.has(temp)) {
      ans.add(temp);
    } else {
      set.add(temp);
    }
  }
  return [...ans];
};
