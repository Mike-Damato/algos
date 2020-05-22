//Solution 1
const frequencySort = (s) => {
  let freq = {};
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (!freq[s[i]]) {
      freq[s[i]] = 1;
    } else {
      freq[s[i]]++;
    }
  }

  let sortedArr = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  sortedArr.forEach((freqArr) => (str += freqArr[0].repeat(freqArr[1])));

  return str;
};

//Solution 2
const frequencySort = (s) => {
  let hash = {};
  let result = '';
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
  }
  Object.keys(hash)
    .sort((a, b) => hash[b] - hash[a])
    .forEach((letter) => {
      for (let i = 0; i < hash[letter]; i++) {
        result += letter;
      }
    });
  return result;
};

//Solution 3
var frequencySort = function (s) {
  let ans = '';
  if (s.length < 1) {
    return ans;
  }
  let hash = {};
  for (const letter in s) {
    if (hash[s[letter]]) {
      hash[s[letter]] += 1;
    } else {
      hash[s[letter]] = 1;
    }
  }
  let arr = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] >= 1) {
      ans += arr[i][0];
      arr[i][1] -= 1;
      i--;
    }
  }
  return ans;
};
