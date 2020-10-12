var destCity = function (paths) {
  let set = new Set();

  for (const path of paths) {
    let [start, _] = path;
    set.add(start);
  }

  for (const path of paths) {
    let [_, end] = path;
    if (!set.has(end)) {
      return end;
    }
  }
};
