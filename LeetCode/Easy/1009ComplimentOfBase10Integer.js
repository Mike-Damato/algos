var bitwiseComplement = function (N) {
  let split = N.toString(2).split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '1') {
      split[i] = 0;
    } else if (split[i] === '0') {
      split[i] = 1;
    }
  }
  return parseInt(split.join(''), 2);
};
