//DFS
const minReorder = (n, connections) => {
  let count = 0;
  const map = new Map();
  const set = new Set();

  //Build Graph
  for (const connection of connections) {
    let [start, end] = connection;
    if (!map.has(start)) {
      map.set(start, []);
    }
    if (!map.has(end)) {
      map.set(end, []);
    }
    map.get(start).push([end, 'out']);
    map.get(end).push([start, 'in']);
  }

  const dfs = (node) => {
    //Mark unvisited as visited
    set.add(node);
    //Check the neighbors of the current node
    for (const neighbor of map.get(node)) {
      const [newNode, dir] = neighbor;
      //If we havent seen it..
      if (!set.has(newNode)) {
        //If the direction is going out we can "flip" the direction and add to our count
        if (dir === 'out') {
          count++;
        }
        //Regardless call DFS on all neighbors we have not seen yet
        dfs(newNode);
      }
    }
  };
  dfs(0);
  return count;
};
