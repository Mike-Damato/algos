function mergeOverlappingIntervals(array) {
  const arr = array.sort((a, b) => a[0] - b[0]);
  const ans = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let prev = ans[ans.length - 1];
    let current = arr[i];

    if (current[0] > prev[1]) {
      ans.push(current);
    } else {
      prev[1] = Math.max(prev[1], current[1]);
    }
  }
  return ans;
}
