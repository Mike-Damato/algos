function maxSumIncreasingSubsequence(array) {
  // Write your code here.
  let sequences = new Array(array.length);
  let sums = [...array];
  let maxIdx = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    for (let j = 0; j < i; j++) {
      let otherNum = array[j];
      if (otherNum < current && sums[j] + current >= sums[i]) {
        sums[i] = sums[j] + current;
        sequences[i] = j;
      }
    }
    if (sums[i] >= sums[maxIdx]) maxIdx = i;
  }
  return [sums[maxIdx], makeSequence(array, sequences, maxIdx)];
}

const makeSequence = (arr, sequences, idx) => {
  const sequence = [];
  while (idx !== undefined) {
    sequence.unshift(arr[idx]);
    idx = sequences[idx];
  }
  return sequence;
};
