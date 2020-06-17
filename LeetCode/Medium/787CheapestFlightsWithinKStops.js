var findCheapestPrice = function (n, flights, src, dst, K) {
  let map = new Map();

  for (let i = 0; i < flights.length; i++) {
    const [start, end, price] = flights[i];
    let edges = map.get(start) || [];
    edges.push([end, price]);
    map.set(start, edges);
  }

  let queue = [[0, src, K + 1]];

  while (queue.length) {
    const [price, city, stops] = queue.shift();
    if (city === dst) return price;
    if (stops > 0) {
      const nextFlights = map.get(city) || [];
      for (let i = 0; i < nextFlights.length; i++) {
        const [next, cost] = nextFlights[i];
        queue.push([cost + price, next, stops - 1]);
      }
      queue.sort((a, b) => a[0] - b[0]);
    }
  }

  return -1;
};

//Alt
var findCheapestPrice = function (n, flights, src, dst, K) {
  let graph = {}; // {from: {to: price, to2: price2...}}

  for (let [source, destination, price] of flights) {
    // { '0': { '1': 100, '2': 500 }, '1': { '2': 100 } }
    if (!graph.hasOwnProperty(source)) {
      graph[source] = {};
    }
    graph[source][destination] = price;
  }
  // console.log(graph)
  let queue = [[src, 0, 0]];

  while (queue.length) {
    let [city, price, stops] = queue.shift();
    if (city == dst) return price;
    if (stops > K) continue;

    if (graph[city]) {
      for (let neighbor in graph[city]) {
        let currPrice = graph[city][neighbor]; // weighted edge aka price of this leg
        queue.push([neighbor, currPrice + price, stops + 1]);
      }
    }
    queue.sort((a, b) => a[1] - b[1]);
  }
  return -1;
};
