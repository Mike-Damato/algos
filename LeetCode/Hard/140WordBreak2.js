const wordBreak = (s, wordDict) => {
  let wordMap = {};
  wordDict.forEach((word) => {
    wordMap[word] = true;
  });

  let memo = {};

  //str = current string
  const helper = (str) => {
    //base case if string is empty return empty array
    if (str === '') {
      return [[]];
    }
    if (memo[str] !== undefined) {
      return memo[str];
    }

    memo[str] = [];
    for (let i = 1; i <= str.length; i++) {
      let word = str.substring(0, i);
      if (wordMap[word]) {
        let rest = helper(str.substring(i));
        for (let j = 0; j < rest.length; j++) {
          memo[str].push([word, ...rest[j]]);
        }
      }
    }
    return memo[str];
  };

  helper(s);

  let ans = {};

  memo[s].forEach((sentence) => {
    ans[sentence.join(' ')] = true;
  });

  return Object.keys(ans);
};

//Alternate syntax
const wordBreak = (s, wordDict) => {
  let wordMap = {};

  for (const word of wordDict) {
    wordMap[word] = true;
  }

  let memo = {};

  //str = current string
  const helper = (str) => {
    //base case if string is empty return empty array
    if (str === '') {
      return [[]];
    }
    if (memo.hasOwnProperty(str)) {
      return memo[str];
    }

    memo[str] = [];
    for (let i = 1; i <= str.length; i++) {
      let word = str.substring(0, i);
      if (wordMap.hasOwnProperty(word)) {
        let rest = helper(str.substring(i));
        for (let j = 0; j < rest.length; j++) {
          memo[str].push([word, ...rest[j]]);
        }
      }
    }
    return memo[str];
  };

  helper(s);

  let ans = {};

  for (const word of memo[s]) {
    ans[word.join(' ')] = true;
  }

  return Object.keys(ans);
};
