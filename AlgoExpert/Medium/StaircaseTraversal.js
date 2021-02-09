//O(N) Time | O(N) space
function staircaseTraversal(height, maxSteps) {
  const arr = [1];
  let total = 0;

  for (let i = 1; i <= height; i++) {
    const start = i - maxSteps - 1;
    const end = i - 1;
    if (start >= 0) {
      total -= arr[start];
    }
    total += arr[end];
    arr.push(total);
  }
  return arr[height];
}

//O(N*K) Time | O(N) space
function staircaseTraversal(height, maxSteps) {
  // Write your code here.
  const arr = new Array(height + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= height; i++) {
    let step = 1;
    while (step <= maxSteps && step <= arr[i] + arr[i - step]) {
      arr[i] = arr[i] + arr[i - step];
      step++;
    }
  }
  return arr[arr.length - 1];
}
