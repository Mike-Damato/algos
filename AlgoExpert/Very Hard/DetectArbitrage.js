function detectArbitrage(exchangeRates) {
  const logExchangeRates = convertToLogMatrix(exchangeRates);
  return foundNegativeWeightCycle(logExchangeRates, 0);
}

const foundNegativeWeightCycle = (graph, start) => {
  const distancesFromStart = new Array(graph.length).fill(Infinity);
  distancesFromStart[start] = 0;

  for (let i = 0; i < graph.length - 1; i++) {
    if (!updateEdgesAndDistances(graph, distancesFromStart)) return false;
  }
  return updateEdgesAndDistances(graph, distancesFromStart);
};

const updateEdgesAndDistances = (graph, distances) => {
  let updated = false;

  for (let source = 0; source < graph.length; source++) {
    const edges = graph[source];
    for (let dest = 0; dest < edges.length; dest++) {
      const weight = edges[dest];
      const newDistance = distances[source] + weight;
      if (newDistance < distances[dest]) {
        updated = true;
        distances[dest] = newDistance;
      }
    }
  }
  return updated;
};

const convertToLogMatrix = (matrix) => {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    const rates = matrix[i];
    arr.push([]);
    for (const rate of rates) {
      arr[i].push(-Math.log10(rate));
    }
  }
  return arr;
};
