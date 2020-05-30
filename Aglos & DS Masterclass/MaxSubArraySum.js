const maxSubArraySum = (arr, n) => {
  if (n > arr.length) {
    return null;
  }
  let max = 0;
  let temp;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  temp = max;
  for (let j = n; j < arr.length; j++) {
    temp = temp - arr[j - n] + arr[j];
    max = Math.max(max, temp);
  }
  return max;
};
