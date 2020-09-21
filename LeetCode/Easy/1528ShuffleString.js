var restoreString = function (s, indices) {
  let t = new Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    t[indices[i]] = s[i];
  }
  return t.join('');
};
