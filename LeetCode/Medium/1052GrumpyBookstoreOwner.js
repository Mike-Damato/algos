var maxSatisfied = function (customers, grumpy, X) {
  let satisfiedCustomers = 0;
  let largestContiguous = [];
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      largestContiguous.push(0);
      satisfiedCustomers += customers[i];
    }
    if (grumpy[i] === 1) {
      largestContiguous.push(customers[i]);
    }
  }
  let left = 0;
  let right = 0;
  let maxSatsify = -Infinity;
  // console.log(largestContiguous)
  //   console.log(satisfiedCustomers)
  let insideSum = 0;
  while (right < largestContiguous.length) {
    if (right - left < X) {
      insideSum += largestContiguous[right];
      right++;
    } else {
      insideSum -= largestContiguous[left];
      left++;
    }

    maxSatsify = Math.max(maxSatsify, insideSum);
  }
  return satisfiedCustomers + maxSatsify;
};
