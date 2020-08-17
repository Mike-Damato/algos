class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
      this.insertSuffixAt(i, string);
    }
  }

  contains(string) {
    // Write your code here.
    let node = this.root;
    for (const letter of string) {
      if (!node.hasOwnProperty(letter)) {
        return false;
      }
      node = node[letter];
    }
    return node.hasOwnProperty(this.endSymbol);
  }
  insertSuffixAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      let letter = string[j];
      if (!node.hasOwnProperty(letter)) {
        node[letter] = {};
      }
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }
}
