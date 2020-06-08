var isPowerOfTwo = function (n) {
  const num = Math.log2(n);
  return num % 1 === 0;
};
