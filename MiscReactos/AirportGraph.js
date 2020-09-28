const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

//create graph
const adjList = new Map();

//Build Graph
const addNode = (airport) => {
  adjList.set(airport, []);
};

const addEdge = (origin, dest) => {
  adjList.get(origin).push(dest);
  adjList.get(dest).push(origin);
};

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

//BFS
const bfs = (start) => {
  const visited = new Set();
  const queue = [start];
  let airport;
  let dests;
  while (queue.length) {
    airport = queue.shift();
    dests = adjList.get(airport);

    for (const dest of dests) {
      if (dest === 'BKK') {
        console.log(airport, 'Found BKK!');
      }

      if (!visited.has(dest)) {
        visited.add(dest);
        queue.push(dest);
        console.log(dest);
      }
    }
  }
};

//DFS
const dfs = (start, visited = new Set()) => {
  console.log(start);
  visited.add(start);
  const dests = adjList.get(start);

  for (const dest of dests) {
    if (dest === 'BKK') {
      console.log('Found BKK');
      return;
    }
    if (!visited.has(dest)) {
      dfs(dest, visited);
    }
  }
};
