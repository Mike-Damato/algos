var findLongestWord = function (s, d) {
  let ans = '';

  const isValid = (word) => {
    if (word.length > s.length) return false;
    if (word === s) return true;

    let wPtr = 0;
    let sPtr = 0;
    while (sPtr <= s.length) {
      if (wPtr === word.length) return true;
      if (sPtr === s.length) return false;
      if (word[wPtr] === s[sPtr]) {
        wPtr++;
      }
      sPtr++;
    }
  };

  for (const word of d) {
    if (isValid(word)) {
      if (ans.length < word.length) {
        ans = word;
      } else if (ans.length === word.length) {
        //Handle lexographic order per prompt
        if (word < ans) {
          ans = word;
        }
      }
    }
  }
  return ans;
};
