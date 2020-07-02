var partitionLabels = function (str) {
  if (str.length === 0 || str === null) {
    return [0];
  }
  let ans = [];
  let myMap = new Map();
  //make a map storing the last idx of each character
  for (let i = str.length - 1; i >= 0; i--) {
    if (!myMap.has(str[i])) {
      myMap.set(str[i], i);
    }
  }

  let start = 0;
  let end = 0;
  for (let i = 0; i < str.length; i++) {
    let lastIdx = myMap.get(str[i]);
    if (end < lastIdx) {
      end = lastIdx;
    }
    if (i === end) {
      //we have found the last item in a word with repeating chars
      ans.push(end - start + 1);
      //now adjust start to the next substring
      start = end + 1;
    }
  }
  return ans;
};
