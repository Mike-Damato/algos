var smallestRepunitDivByK = function (K) {
  let remainder = 0;
  for (let i = 1; i <= K; i++) {
    remainder = (remainder * 10 + 1) % K;
    if (remainder === 0) {
      return i;
    }
  }
  return -1;
};
