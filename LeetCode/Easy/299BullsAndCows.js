var getHint = function (secret, guess) {
  let map = new Map(); // {num:count}
  let cows = 0;
  let bulls = 0;
  for (let i = 0; i < secret.length; i++) {
    let g = guess[i];
    let s = secret[i];
    if (s === g) {
      bulls++;
    } else {
      if (map.has(s) && map.get(s) < 0) cows++;
      if (map.has(g) && map.get(g) > 0) cows++;
      map.set(s, (map.get(s) || 0) + 1);
      map.set(g, (map.get(g) || 0) - 1);
    }
  }
  return `${bulls}A${cows}B`;
};
