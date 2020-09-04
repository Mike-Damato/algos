var minInsertions = function (s) {
  let memo = new Map();

  const helper = (s, start, end) => {
    if (start >= end) {
      return 0;
    }

    let key = `${start}-${end}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    if (s[start] === s[end]) {
      return helper(s, start + 1, end - 1);
    }
    // let choice1 = 1 + helper(start+1, end)
    // let choice2 = 1 + helper(start, end-1)
    memo.set(
      key,
      1 + Math.min(helper(s, start + 1, end), helper(s, start, end - 1))
    );
    return memo.get(key);
  };

  return helper(s, 0, s.length - 1);
};
