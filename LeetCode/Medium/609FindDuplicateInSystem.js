var findDuplicate = function (paths) {
  const map = new Map();
  for (const path of paths) {
    let files = path.split(' ');
    for (let i = 1; i < files.length; i++) {
      let open = files[i].indexOf('(');
      let content = files[i].slice(open + 1, files[i].length - 1);
      if (!map.has(content)) {
        map.set(content, []);
      }
      map.get(content).push(`${files[0]}/${files[i].slice(0, open)}`);
    }
  }
  return [...map.values()].filter((item) => item.length > 1);
};

//Alternate solution
const findDuplicate = (paths) => {
  const map = new Map();
  for (const path of paths) {
    const [dir, ...files] = path.split(' ');
    for (let i = 0; i < files.length; i++) {
      let [fileName, content] = files[i].split('(');

      if (!map.has(content)) {
        map.set(content, []);
      }

      map.get(content).push(`${dir}/${fileName}`);
    }
  }
  return [...map.values()].filter((item) => item.length > 1);
};
