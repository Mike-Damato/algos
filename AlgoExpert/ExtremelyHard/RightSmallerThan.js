function rightSmallerThan(array) {
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans;
}
