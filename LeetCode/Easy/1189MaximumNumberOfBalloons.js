var maxNumberOfBalloons = function (text) {
  let map = new Map();
  let count = 0;
  for (const char of text) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  while (
    map.get('b') > 0 &&
    map.get('a') > 0 &&
    map.get('l') > 1 &&
    map.get('o') > 1 &&
    map.get('n') > 0
  ) {
    count++;
    decrement1('b', map);
    decrement1('a', map);
    decrement2('l', map);
    decrement2('o', map);
    decrement1('n', map);
  }
  return count;
};

const decrement1 = (letter, map) => {
  return map.set(letter, map.get(letter) - 1);
};

const decrement2 = (letter, map) => {
  return map.set(letter, map.get(letter) - 2);
};
