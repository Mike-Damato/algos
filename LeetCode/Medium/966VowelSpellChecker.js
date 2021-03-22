var spellchecker = function (wordlist, queries) {
  const baseList = new Set(wordlist.reverse());
  const loweredList = wordlist.reduce(
    (map, word) => ((map[normalize(word)] = word), map),
    {}
  );
  const replacedList = wordlist.reduce(
    (map, word) => ((map[repVowels(word)] = word), map),
    {}
  );
  return queries.map(
    (word) =>
      (baseList.has(word) && word) ||
      loweredList[normalize(word)] ||
      replacedList[repVowels(word)] ||
      ''
  );
};
const normalize = (word) => {
  return word.toLowerCase();
};
const repVowels = (word) => {
  return normalize(word).replace(/[eiou]/g, 'a');
};
