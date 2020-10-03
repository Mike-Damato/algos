function smallestSubstringContaining(bigString, smallString) {
  const targetCharCounts = getCharCounts(smallString);
  const subStringBounds = getSubstringBounds(bigString, targetCharCounts);
  return getStringFromBounds(bigString, subStringBounds);
}

const getCharCounts = (str) => {
  const map = new Map();
  for (const char of str) {
    increaseCharCount(char, map);
  }
  return map;
};

const getSubstringBounds = (str, map) => {
  let substringBounds = [0, Infinity];
  const substringMap = new Map();
  const unique = [...map.keys()].length;
  let numDone = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    let rightChar = str[right];
    if (!map.has(rightChar)) {
      right++;
      continue;
    }
    increaseCharCount(rightChar, substringMap);
    if (substringMap.get(rightChar) === map.get(rightChar)) {
      numDone++;
    }
    while (unique === numDone && left <= right) {
      substringBounds = getCloserBounds(
        left,
        right,
        substringBounds[0],
        substringBounds[1]
      );
      let leftChar = str[left];
      if (!map.has(leftChar)) {
        left++;
        continue;
      }
      if (substringMap.get(leftChar) === map.get(leftChar)) {
        numDone--;
      }
      decreaseCharCount(leftChar, substringMap);
      left++;
    }
    right++;
  }
  return substringBounds;
};

const getCloserBounds = (idx1, idx2, idx3, idx4) => {
  return idx2 - idx1 < idx4 - idx3 ? [idx1, idx2] : [idx3, idx4];
};

const getStringFromBounds = (str, bounds) => {
  const [start, end] = bounds;
  if (end === Infinity) return '';
  return str.slice(start, end + 1);
};

const increaseCharCount = (char, map) => {
  map.set(char, (map.get(char) || 0) + 1);
};

const decreaseCharCount = (char, map) => {
  map.set(char, map.get(char) - 1);
};
