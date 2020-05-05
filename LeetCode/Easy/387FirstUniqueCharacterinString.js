//Naive

var firstUniqChar = function (s) {
  if (!s.length) {
    return -1;
  }
  if (s.length === 1) {
    return 0;
  }
  let myMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!myMap[s[i]]) {
      myMap[s[i]] = 1;
    } else {
      myMap[s[i]] += 1;
    }
  }
  let arr = Object.entries(myMap);
  let unique;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].includes(1)) {
      unique = arr[j][0];
      return s.indexOf(unique);
    }
  }
  return -1;
};

//O(n)
var firstUniqChar = function (s) {
  let hash = {};
  if (s.length === 0 || s === null) return -1;
  for (let i = 0; i < s.length; i++) {
    if (hash.hasOwnProperty(s[i])) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }
  return -1;
};
