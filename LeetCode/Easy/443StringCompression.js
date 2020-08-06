const compress = (chars) => {
  let count = 1;
  let compressed = '';
  for (let i = 0; i < chars.length; i++) {
    let current = chars[i];
    let next = chars[i + 1];
    if (current === next) {
      count++;
    } else if (count !== 1) {
      //No need to String(count) JS will coerce the type to a string
      compressed += current + count;
      count = 1;
    } else {
      compressed += current;
    }
  }

  for (let i = 0; i < compressed.length; i++) {
    chars[i] = compressed[i];
  }

  const ans = chars.slice(0, compressed.length).length;
  return ans < chars.length ? ans : chars.length;
};
