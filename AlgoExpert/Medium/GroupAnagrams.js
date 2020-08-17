function groupAnagrams(words) {
  // Write your code here.
  let hash = {};
  for (const word of words) {
    let sortedWord = word.split('').sort().join('');
    if (hash.hasOwnProperty(sortedWord)) {
      hash[sortedWord].push(word);
    } else {
      hash[sortedWord] = [word];
    }
  }
  return Object.values(hash);
}
