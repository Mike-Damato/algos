function isMonotonic(array) {
  // Write your code here.
  let increase = true;
  let decrease = true;
  for (let i = 1; i < array.length; i++) {
    let prev = i - 1;
    if (array[i] < array[prev]) {
      decrease = false;
    }
    if (array[i] > array[prev]) {
      increase = false;
    }
  }
  return increase || decrease;
}
