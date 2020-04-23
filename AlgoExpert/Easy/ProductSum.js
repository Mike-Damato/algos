const productSum = (array, count = 1) => {
  // Write your code here.
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (Array.isArray(num)) {
      count++;
      sum += count * productSum(num, count);
      count--;
    } else {
      sum += num;
    }
  }
  return sum;
};
