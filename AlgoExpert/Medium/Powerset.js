function powerset(array) {
  // Write your code here.
  const sets = [[]];
  for (const num of array) {
    let length = sets.length;
    for (let i = 0; i < length; i++) {
      let currentSet = sets[i];
      sets.push(currentSet.concat(num));
    }
  }
  return sets;
}
