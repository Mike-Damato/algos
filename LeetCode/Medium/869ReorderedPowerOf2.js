var reorderedPowerOf2 = function (N) {
  const pow2 = new Array(31)
    .fill()
    .map((_, i) => ('' + 2 ** i).split('').sort().join(''));
  N = ('' + N).split('').sort().join('');
  return pow2.some((num) => num === N);
};
