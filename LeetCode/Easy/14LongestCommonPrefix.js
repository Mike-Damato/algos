var longestCommonPrefix = function (strs) {
  //in order for prefix every first letter has to be the same, if not immediately return ''
  let prefix = '';
  if (strs.length === 0) {
    return prefix;
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }
  return prefix;
};
