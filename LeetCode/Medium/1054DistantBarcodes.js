var rearrangeBarcodes = function (barcodes) {
  let map = new Map();
  for (const code of barcodes) {
    if (!map.has(code)) {
      map.set(code, 1);
    } else {
      let count = map.get(code);
      map.set(code, count + 1);
    }
  }

  let sorted = [...map.keys()].sort((a, b) => map.get(a) - map.get(b));

  let idx = 1;

  for (const key of sorted) {
    let temp = map.get(key);

    for (let i = 0; i < temp; i++) {
      if (idx >= barcodes.length) {
        idx = 0;
      }
      barcodes[idx] = key;
      idx += 2;
    }
  }
  return barcodes;
};
