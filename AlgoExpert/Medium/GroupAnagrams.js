function groupAnagrams(words) {
  // Write your code here.
  let map = new Map();
  for (const word of words) {
    let sortedWord = word.split('').sort().join();
    if (map.has(sortedWord)) {
      map.set(map.get(sortedWord).push(sortedWord));
    }
    map.set(sortedWord, [word]);
  }
}
