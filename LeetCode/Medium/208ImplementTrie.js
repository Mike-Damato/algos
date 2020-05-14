/**
 * Initialize your data structure here.
 */
var Trie = function (root) {
  this.children = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!current.children[char]) {
      current.children[char] = new Trie();
    }
    current = current.children[char];
  }
  current.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
  }
  return current.isWord === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this;
  for (let i = 0; i < prefix.length; i++) {
    let char = prefix[i];
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
