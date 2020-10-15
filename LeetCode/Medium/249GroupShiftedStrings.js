var groupStrings = function (strings) {
  let map = new Map();

  for (const word of strings) {
    let key = '';
    for (let i = 1; i < word.length; i++) {
      let diff = word.charCodeAt(i) - word.charCodeAt(i - 1);
      if (diff < 0) diff += 26;
      key += diff;
    }
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return [...map.values()];
};
