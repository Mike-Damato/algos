var minimumLengthEncoding = function (words) {
  const set = new Set(words);
  words.forEach((word) => {
    for (let i = 1; i < word.length; i++) {
      set.delete(word.slice(i));
    }
  });

  return [...set].reduce((acc, word) => {
    acc += word.length + 1;
    return acc;
  }, 0);
};
