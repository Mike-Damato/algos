class ValidWordAbbr {
  constructor(dictionary) {
    this.dict = dictionary;
    this.map = new Map();

    this.buildMap(this.dict, this.map);
  }
  isUnique(word) {
    let abbrev = this.makeAbbrev(word);
    let list = this.map.get(abbrev);
    if (list) {
      return list.has(word) && list.size === 1;
    }
    return true;
  }
  buildMap(dict, map) {
    for (const word of dict) {
      let abbrev = this.makeAbbrev(word);
      if (!map.has(abbrev)) {
        map.set(abbrev, new Set());
      }
      map.get(abbrev).add(word);
    }
  }
  makeAbbrev(str) {
    if (str.length <= 2) {
      return str;
    } else {
      return `${str.charAt(0)}${str.length - 2}${str.charAt(str.length - 1)}`;
    }
  }
}
