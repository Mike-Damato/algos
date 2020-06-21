var getFolderNames = function (names) {
  let hash = new Set();
  for (const name of names) {
    //If the file name is not in our set we can immediately add it.
    if (!hash.has(name)) {
      hash.add(name);
    } else {
      let k = 1;
      let temp = name;
      //Otherwise we assign temp to the name then while that "temp" name exists in the set we appeand (k) to the end of it
      while (hash.has(temp)) {
        temp = name + `(${k})`;
        k++;
      }
      hash.add(temp);
    }
  }
  //Lastly return everything as an array
  return [...hash];
};
