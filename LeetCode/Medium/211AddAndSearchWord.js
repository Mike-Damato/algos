class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.trie = new TrieNode();
  }
  addWord(word) {
    let node = this.trie;
    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isWord = true;
  }
  search(word) {
    return this.searchInNode(word, this.trie);
  }

  searchInNode(word, node) {
    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if (!node.children.has(char)) {
        if (char === '.') {
          for (const childTrie of node.children.values()) {
            if (this.searchInNode(word.slice(i + 1), childTrie)) {
              return true;
            }
          }
        }
        return false;
      } else {
        node = node.children.get(char);
      }
    }
    return node.isWord;
  }
}
