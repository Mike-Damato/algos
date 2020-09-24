function interweavingStrings(one, two, three) {
  if (three.length !== one.length + two.length) {
    return false;
  }
  return helper(one, two, three, 0, 0);
}

const helper = (one, two, three, i, j) => {
  const k = i + j;
  if (k === three.length) return true;

  if (i < one.length && one[i] === three[k]) {
    if (helper(one, two, three, i + 1, j)) return true;
  }

  if (j < two.length && two[j] === three[k]) {
    if (helper(one, two, three, i, j + 1)) return true;
  }

  return false;
};

//Optimized using a cache
function interweavingStrings(one, two, three) {
  if (three.length !== one.length + two.length) {
    return false;
  }

  const cache = new Array(one.length + 1)
    .fill(0)
    .map((_) => new Array(two.length + 1).fill(null));

  return helper(one, two, three, 0, 0, cache);
}

const helper = (one, two, three, i, j, cache) => {
  if (cache[i][j]) {
    return cache[i][j];
  }

  let k = i + j;
  if (k === three.length) return true;

  if (i < one.length && one[i] === three[k]) {
    cache[i][j] = helper(one, two, three, i + 1, j, cache);
    if (cache[i][j]) return true;
  }

  if (j < two.length && two[j] === three[k]) {
    cache[i][j] = helper(one, two, three, i, j + 1, cache);
    return cache[i][j];
  }
  cache[i][j] = false;
  return false;
};
