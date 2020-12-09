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

//With Map
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const word of strs) {
    let sorted = word.split('').sort().join('');
    if (map.has(sorted)) {
      map.get(sorted).push(word);
    } else {
      map.set(sorted, [word]);
    }
  }
  return [...map.values()];
};
