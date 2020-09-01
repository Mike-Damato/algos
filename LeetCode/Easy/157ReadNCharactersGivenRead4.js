var solution = function (read4) {
  return function (buf, n) {
    while (buf.length < n) {
      const nibble = [];
      read4(nibble);
      if (nibble.length === 0) break;
      buf.push(...nibble);
    }
    buf.splice(n);
    return buf.length;
  };
};
