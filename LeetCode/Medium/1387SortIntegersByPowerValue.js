var getKth = function (lo, hi, k) {
  const map = new Map();

  for (let i = lo; i <= hi; i++) {
    let steps = getSteps(i);

    map.set(i, steps);
  }

  const sorted = [...map.keys()].sort((a, b) => map.get(a) - map.get(b));
  return sorted[k - 1];
};

const getSteps = (num) => {
  let steps = 0;
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }
    steps++;
  }
  return steps;
};
