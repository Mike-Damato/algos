var thousandSeparator = function (n) {
  n = n.toString().split('');
  if (n.length <= 3) return n.join('');

  let final = '';
  let count = 0;

  for (let i = n.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && count !== 0) {
      final += '.';
    }
    final += n[i];
    count++;
  }
  return final.split('').reverse().join('');
};
