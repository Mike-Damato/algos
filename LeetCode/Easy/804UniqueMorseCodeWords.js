var uniqueMorseRepresentations = function (words) {
  const morse = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };

  if (!words) return 0;
  const set = new Set();
  for (const word of words) {
    let newStr;
    for (const char of word) {
      newStr += morse[char];
    }

    if (!set.has(newStr)) {
      set.add(newStr);
    }
  }
  return set.size;
};
