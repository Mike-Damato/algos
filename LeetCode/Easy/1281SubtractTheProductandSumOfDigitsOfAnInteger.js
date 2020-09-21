var subtractProductAndSum = function (n) {
  let arr = n.toString().split('');
  let sum = arr.reduce((a, b) => Number(a) + Number(b));
  let product = arr.reduce((a, b) => Number(a) * Number(b));

  return product - sum;
};

const subtractProductAndSum = (n) => {
  let sum = 0;
  let prod = 1;
  while (n > 0) {
    const mod = n % 10;
    sum += mod;
    prod *= mod;
    n = Math.floor(n / 10);
  }
  return prod - sum;
};
