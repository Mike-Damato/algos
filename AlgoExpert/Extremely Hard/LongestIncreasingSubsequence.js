//O(n^2) time | O(n) space
function longestIncreasingSubsequence(array) {
  const sequences = new Array(array.length);
  const lengths = array.map((num) => 1);

  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    for (let j = 0; j < i; j++) {
      let other = array[j];
      if (other < current && lengths[j] + 1 >= lengths[i]) {
        lengths[i] = lengths[j] + 1;
        sequences[i] = j;
      }
    }
    if (lengths[i] >= lengths[max]) {
      max = i;
    }
  }
  return buildSequence(array, sequences, max);
}

const buildSequence = (arr, sequences, idx) => {
  const sequence = [];
  while (idx !== undefined) {
    sequence.unshift(arr[idx]);
    idx = sequences[idx];
  }
  return sequence;
};

//Optimized
//O(n log(n)) time | O(n) space
function longestIncreasingSubsequence(array) {
  const sequences = new Array(array.length);
  const indices = new Array(array.length + 1);
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const newLength = binarySearch(1, length, indices, array, num);
    sequences[i] = indices[newLength - 1];
    indices[newLength] = i;
    length = Math.max(length, newLength);
  }
  return buildSequence(array, sequences, indices[length]);
}

const binarySearch = (start, end, indices, arr, num) => {
  if (start > end) return start;
  const mid = start + Math.floor((end - start) / 2);
  if (arr[indices[mid]] < num) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
  return binarySearch(start, end, indices, arr, num);
};

const buildSequence = (arr, sequences, idx) => {
  const sequence = [];
  while (idx !== undefined) {
    sequence.unshift(arr[idx]);
    idx = sequences[idx];
  }
  return sequence;
};
