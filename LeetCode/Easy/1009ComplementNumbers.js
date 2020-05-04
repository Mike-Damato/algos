var findComplement = function (num) {
  let temp = num;
  let bit = 1;
  while (temp) {
    num = num ^ bit;
    bit = bit << 1;
    temp = temp >> 1;
  }
  return num;
};
