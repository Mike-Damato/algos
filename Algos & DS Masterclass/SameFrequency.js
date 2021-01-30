function sameFrequency(n1, n2) {
  // good luck. Add any arguments you deem necessary.
  let num1 = n1.toString();
  let num2 = n2.toString();
  if (num1.length !== num2.length) {
    return false;
  }
  let hash1 = {};
  for (const num of num1) {
    hash1.hasOwnProperty(num) ? (hash1[num] += 1) : (hash1[num] = 1);
  }
  for (const num of num2) {
    hash1.hasOwnProperty(num) ? (hash1[num] -= 1) : false;
  }
  return Object.values(hash1).every((num) => num === 0);
}
