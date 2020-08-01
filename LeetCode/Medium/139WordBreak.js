const wordBreak = (s, wordDict) => {
  let set = new Set();
  for (const word of wordDict) {
    set.add(word);
  }

  // let length = s.length;
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = 0;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

//Alternate
const wordBreak = (s, wordDict) => {
  return checkBreak(s, wordDict, 0);
};

const checkBreak = (word, wordDict, start, memo = {}) => {
  //base case
  //we were able to  reach the end of the word passed in, so we are done!
  if (start === word.length) {
    return true;
  }
  if (memo[start] !== undefined) {
    return memo[start];
  }
  //+1 to include the first letter
  for (let end = start + 1; end <= word.length; end++) {
    let potentialWord = word.substring(start, end);
    if (
      wordDict.includes(potentialWord) &&
      checkBreak(word, wordDict, end, memo)
    ) {
      return (memo[start] = true);
    }
  }
  return (memo[start] = false);
};
