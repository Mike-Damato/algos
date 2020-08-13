class CombinationIterator {
  constructor(characters, combinationLength) {
    this.currentIdx = 0;
    this.subSets = [];
    const traverse = (str, idx) => {
      if (str.length === combinationLength) {
        this.subSets.push(str);
        return;
      }
      for (let i = idx; i < characters.length; i++) {
        traverse(str + characters[i], i + 1);
      }
    };
    traverse('', 0);
    this.combos = this.subSets;
    this.currentIdx = 0;
  }
  next() {
    this.currentIdx++;
    return this.combos[this.currentIdx - 1];
  }
  hasNext() {
    if (this.currentIdx >= this.combos.length) {
      return false;
    }
    return true;
  }
}
