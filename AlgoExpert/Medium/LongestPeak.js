function longestPeak(array) {
  // Write your code here.
  let longestPeak = 0;
  //start at 1 as we need a smaller value to left & right of idx to be a peak
  let ptr = 1;
  while (ptr < array.length - 1) {
    let prev = ptr - 1;
    let next = ptr + 1;
    let isPeak = array[prev] < array[ptr] && array[ptr] > array[next];
    if (!isPeak) {
      ptr++;
      continue;
    }
    prev--;
    while (prev >= 0 && array[prev] < array[prev + 1]) {
      prev--;
    }
    next++;
    while (next < array.length && array[next] < array[next - 1]) {
      next++;
    }
    let currentLength = next - prev - 1;
    longestPeak = Math.max(longestPeak, currentLength);
    ptr = next;
  }
  return longestPeak;
}
