var countBits = function (num) {
  let result = [0];
  let switches = 1; // each switch doubles
  for (let i = 1; i <= num; i++) {
    if (i === switches * 2) switches *= 2;
    result[i] = result[i - switches] + 1;
  }
  return result;
};
