var groupAnagrams = function (strs) {
  let hash = {};
  for (const str of strs) {
    let sorted = str.split('').sort().join('');
    if (hash.hasOwnProperty(sorted)) {
      hash[sorted].push(str);
    } else {
      hash[sorted] = [str];
    }
  }
  return Object.values(hash);
};
