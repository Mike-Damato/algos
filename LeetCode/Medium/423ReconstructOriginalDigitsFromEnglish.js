var originalDigits = function (s) {
  const words = {
    z: 'zero',
    x: 'six',
    w: 'two',
    u: 'four',
    g: 'eight',
    s: 'seven',
    v: 'five',
    r: 'three',
    o: 'one',
    n: 'nine',
  };
  const nums = { z: 0, x: 6, w: 2, u: 4, g: 8, s: 7, v: 5, r: 3, o: 1, n: 9 };
  let order = 'zxwugsvron';
  const counts = {};

  for (const char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }
  const ans = new Array(10);
  for (let key of order) {
    while (counts[key]) {
      for (let word of words[key]) {
        counts[word]--;
      }
      ans[nums[key]] = (ans[nums[key]] || '') + nums[key];
    }
  }
  return ans.join('');
};
