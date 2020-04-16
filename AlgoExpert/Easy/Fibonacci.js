//Solution 1
const getNthFib = (n, memo = {}) => {
  if (n === 1 || n === 0) {
    return 0;
    //Have I calculated this before? If so, then skip it.
  } else if (n === 2) {
    return 1;
  } else if (memo[n]) {
    return memo[n];
  } else {
    let num = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
    memo[n] = num;
  }
  return memo[n];
};

//Solution 2
function getNthFib(n) {
  // Write your code here.
  //[0,1,1,2,3,5]
  //edge case protection
  if (n === 1 || n === 0) {
    return 0;
  }
  //starting counter @ 4 because we know everything prior contains a 0
  const lastTwo = [1, 1];
  let counter = 4;
  while (counter <= n) {
    //This is important, we are adding the numbers together before reassigning the values
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  //is n > 1? if so return 1st index in array as thats the running total
  //if not return 0th index in array as that was prior total
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
