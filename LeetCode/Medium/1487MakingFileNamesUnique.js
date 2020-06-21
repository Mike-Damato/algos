var getFolderNames = function (names) {
  let hash = new Set();
  for (const name of names) {
    if (!hash.has(name)) {
      hash.add(name);
    } else {
      let k = 1;
      let temp = name;
      while (hash.has(temp)) {
        temp = name + `(${k})`;
        k++;
      }
      hash.add(temp);
    }
  }
  return [...hash];
};
