var calculateTime = function (keyboard, word) {
  let map = new Map();
  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i);
  }

  let time = map.get(word[0]);

  for (let i = 1; i < word.length; i++) {
    let prev = map.get(word[i - 1]);
    let current = map.get(word[i]);
    time += Math.abs(prev - current);
  }
  return time;
};
