function isValidSubsequence(array, sequence) {
  // Write your code here.
  let aPtr = 0;
  let sPtr = 0;
  while (aPtr < array.length && sPtr < sequence.length) {
    if (array[aPtr] === sequence[sPtr]) {
      sPtr++;
      aPtr++;
    } else {
      aPtr++;
    }
  }
  return sPtr === sequence.length;
}
