const alienOrder = (words) => {
  const map = new Map();
  for (const word of words) {
    let chars = word.split('');
    for (const char of chars) {
      if (!map.has(char)) {
        map.set(char, new Set());
      }
    }
  }

  for (let i = 1; i < words.length; i++) {
    let current = words[i];
    let prev = words[i - 1];
    if (prev.length > current.length && prev.startsWith(current)) {
      return '';
    }

    for (let j = 0; j < Math.min(prev.length, current.length); j++) {
      if (prev[j] !== current[j]) {
        map.get(prev[j]).add(current[j]);
        break;
      }
    }
  }

  //Topological sort
  const visited = new Set();
  const marked = new Set();
  let str = '';
  let hasCycle = false;

  const visit = (node) => {
    if (marked.has(node)) return;
    if (visited.has(node)) {
      hasCycle = true;
      return;
    }
    visited.add(node);
    map.get(node).forEach((neighbor) => visit(neighbor));
    marked.add(node);
    str = node + str;
  };

  [...map.keys()].map(visit);
  return hasCycle ? '' : str;
};
