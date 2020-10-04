//O(bns) time | O(n) space
function multiStringSearch(bigString, smallStrings) {
  return smallStrings.map((smallString) =>
    isInBigString(bigString, smallString)
  );
}

const isInBigString = (bigString, smallString) => {
  for (let i = 0; i < bigString.length; i++) {
    if (i + smallString.length > bigString.length) break;
    if (isInBigStringHelper(bigString, smallString, i)) {
      return true;
    }
  }
  return false;
};

const isInBigStringHelper = (bigString, smallString, idx) => {
  let leftBigIdx = idx;
  let rightBigIdx = idx + smallString.length - 1;
  let leftSmallIdx = 0;
  let rightSmallIdx = smallString.length - 1;

  while (leftBigIdx <= rightBigIdx) {
    if (
      bigString[leftBigIdx] !== smallString[leftSmallIdx] ||
      bigString[rightBigIdx] !== smallString[rightSmallIdx]
    ) {
      return false;
    }
    leftBigIdx++;
    rightBigIdx--;
    leftSmallIdx++;
    rightSmallIdx--;
  }
  return true;
};

//O(bs + ns) time | O(ns) space
function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  for (const string of smallStrings) {
    trie.insert(string);
  }
  let containedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStrings(bigString, i, trie, containedStrings);
  }
  return smallStrings.map((string) => string in containedStrings);
}

const findSmallStrings = (string, idx, trie, containedStrings) => {
  let current = trie.root;
  for (let i = idx; i < string.length; i++) {
    let char = string[i];
    if (!current.hasOwnProperty(char)) break;
    current = current[char];
    if (current.hasOwnProperty(trie.endSymbol)) {
      containedStrings[current[trie.endSymbol]] = true;
    }
  }
};

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  insert(string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!current.hasOwnProperty(string[i])) {
        current[string[i]] = {};
      }
      current = current[string[i]];
    }
    current[this.endSymbol] = string;
  }
}
