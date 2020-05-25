var isPrefixOfWord = function (sentence, searchWord) {
  let splitSentence = sentence.split(' ');
  let end = searchWord.length;
  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].slice(0, end) === searchWord) {
      return i + 1;
    }
  }
  return -1;
};
