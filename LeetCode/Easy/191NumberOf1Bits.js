var hammingWeight = function (n) {
  let count = 0;
  let str = n.toString(2);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') count++;
  }
  return count;
};
