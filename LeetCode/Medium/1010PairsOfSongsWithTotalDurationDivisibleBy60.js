var numPairsDivisibleBy60 = function (time) {
  let count = 0;
  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      let sum = time[i] + time[j];
      if (sum % 60 === 0) count++;
    }
  }
  return count;
};

//Optimized
var numPairsDivisibleBy60 = function (time) {
  let count = 0;
  const map = new Map();
  for (const num of time) {
    let mod = num % 60;
    let diff = mod === 0 ? 0 : 60 - mod;

    if (map.has(diff)) {
      count += map.get(diff);
    }

    map.set(mod, (map.get(mod) || 0) + 1);
  }
  return count;
};
