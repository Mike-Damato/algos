class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
  add(char) {
    this.children[char] = new TrieNode();
  }

  addWord(word) {
    let current = this;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!current.children.hasOwnProperty(char)) {
        current.add(char);
      }
      current = current.children[char];
    }
    current.isEnd = true;
  }
}

class StreamChecker {
  constructor(words) {
    this.trie = new TrieNode(null);
    this.searches = [];

    for (let i = 0; i < words.length; i++) {
      let currentNode = this.trie;
      const word = words[i].split('').reverse();
      currentNode.addWord(word);
    }
  }
  query(letter) {
    this.searches.push(letter);
    let currentNode = this.trie;
    for (let i = this.searches.length - 1; i >= 0; i--) {
      let char = this.searches[i];

      if (!currentNode.children.hasOwnProperty(char)) {
        return false;
      } else {
        currentNode = currentNode.children[char];
        if (currentNode.isEnd) {
          return true;
        }
      }
    }
    return false;
  }
}
