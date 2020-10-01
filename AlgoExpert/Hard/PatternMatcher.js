//Time - O(N^2 + M) | Time O(N + M)
function patternMatcher(pattern, string) {
  if (pattern.length > string.length) return [];
  const newPattern = getNewPattern(pattern);
  let didSwitch = newPattern[0] !== pattern[0];
  let counts = new Map();
  counts.set('x', 0);
  counts.set('y', 0);

  let firstYPos = getCountsAndFirstYPos(newPattern, counts);

  if (counts.get('y') !== 0) {
    for (let lengthOfX = 1; lengthOfX < string.length; lengthOfX++) {
      const lengthOfY =
        (string.length - lengthOfX * counts.get('x')) / counts.get('y');
      if (lengthOfY <= 0 || lengthOfY % 1 !== 0) continue;
      const yIdx = firstYPos * lengthOfX;
      const x = string.slice(0, lengthOfX);
      const y = string.slice(yIdx, yIdx + lengthOfY);
      const potentialMatch = newPattern.map((char) => (char === 'x' ? x : y));
      if (string === potentialMatch.join('')) {
        return !didSwitch ? [x, y] : [y, x];
      }
    }
  } else {
    const lengthOfX = string.length / counts.get('x');
    if (lengthOfX % 1 === 0) {
      const x = string.slice(0, lengthOfX);
      const potentialMatch = newPattern.map((char) => (char === 'x' ? x : ''));
      if (string === potentialMatch.join('')) {
        return !didSwitch ? [x, ''] : ['', x];
      }
    }
  }
  return [];
}

const getNewPattern = (pattern) => {
  let letters = pattern.split('');
  if (pattern[0] === 'x') {
    return letters;
  } else {
    return letters.map((char) => (char === 'y' ? 'x' : 'y'));
  }
};

const getCountsAndFirstYPos = (pattern, counts) => {
  let firstYPos = -1;
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    counts.set(char, counts.get(char) + 1);
    if (char === 'y' && firstYPos === -1) {
      firstYPos = i;
    }
  }
  return firstYPos;
};
