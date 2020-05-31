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

//Alternate
function maxSubarraySum(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < n) {
    return null;
  }
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[i - n];
    max = Math.max(sum, max);
  }
  return max;
}
