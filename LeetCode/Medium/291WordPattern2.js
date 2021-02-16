var wordPatternMatch = function (pattern, str) {
  if (!pattern.length && !str.length) return true;
  if (!pattern.length || !str.length) return false;

  const map = new Map();
  const set = new Set();
  return helper(pattern, str, 0, 0, map, set);
};

const helper = (pattern, str, i, j, map, set) => {
  if (i === pattern.length && j === str.length) {
    return true;
  } else if (i >= pattern.length || j >= str.length) {
    return false;
  }

  let char = pattern[i];
  for (let k = j + 1; k <= str.length; k++) {
    let sub = str.substring(j, k);
    if (!map.has(char) && !set.has(sub)) {
      map.set(char, sub);
      set.add(sub);
      if (helper(pattern, str, i + 1, k, map, set)) {
        return true;
      }
      map.delete(char);
      set.delete(sub);
    } else if (map.has(char) && map.get(char) === sub) {
      if (helper(pattern, str, i + 1, k, map, set)) {
        return true;
      }
    }
  }
  return false;
};
