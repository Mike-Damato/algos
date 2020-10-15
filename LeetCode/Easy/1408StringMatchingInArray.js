var stringMatching = function (words) {
  let ans = [];
  words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(word)) {
        ans.push(word);
        break;
      }
    }
  }
  return ans;
};
