var ladderLength = function (beginWord, endWord, wordList) {
  let set = new Set(wordList);
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let step = 1;
  let queue = [beginWord];

  while (queue.length) {
    let nextQ = [];
    for (let word of queue) {
      if (word === endWord) {
        return step;
      }
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
          let wordArr = word.split('');
          wordArr[i] = alphabet[j];
          let newWord = wordArr.join('');

          if (set.has(newWord)) {
            nextQ.push(newWord);
            set.delete(newWord);
          }
        }
      }
    }
    queue = nextQ;
    step++;
  }
  return 0;
};
