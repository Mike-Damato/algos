function airportConnections(airports, routes, startingAirport) {
  const airportGraph = createAirportGraph(airports, routes);
  const unreachableAirportNodes = getUnreachableAirportNodes(
    airportGraph,
    airports,
    startingAirport
  );
  markUnreachableConnections(airportGraph, unreachableAirportNodes);
  return getMinNumberOfConnections(airportGraph, unreachableAirportNodes);
}

const createAirportGraph = (airports, routes) => {
  const airportGraph = {};
  for (const airport of airports) {
    airportGraph[airport] = new AirportNode(airport);
  }
  for (const route of routes) {
    const [airport, connection] = route;
    airportGraph[airport].connections.push(connection);
  }
  return airportGraph;
};

const getUnreachableAirportNodes = (
  airportGraph,
  airports,
  startingAirport
) => {
  const visitedAirports = {};
  depthFirstTraverseAirports(airportGraph, startingAirport, visitedAirports);

  const unreachableAirportNodes = [];
  for (const airport of airports) {
    if (visitedAirports.hasOwnProperty(airport)) continue;
    const airportNode = airportGraph[airport];
    airportNode.isReachable = false;
    unreachableAirportNodes.push(airportNode);
  }
  return unreachableAirportNodes;
};

const depthFirstTraverseAirports = (airportGraph, airport, visitedAirports) => {
  if (visitedAirports.hasOwnProperty(airport)) {
    return;
  }
  visitedAirports[airport] = true;
  const { connections } = airportGraph[airport];
  for (const connection of connections) {
    depthFirstTraverseAirports(airportGraph, connection, visitedAirports);
  }
};

const markUnreachableConnections = (airportGraph, unreachableNodes) => {
  for (const airportNode of unreachableNodes) {
    const { airport } = airportNode;
    const unreachableConnections = [];
    depthFirstAddUnreachableConnections(
      airportGraph,
      airport,
      unreachableConnections,
      {}
    );
    airportNode.unreachableConnections = unreachableConnections;
  }
};

const depthFirstAddUnreachableConnections = (
  airportGraph,
  airport,
  unreachableConnections,
  visitedAirports
) => {
  if (airportGraph[airport].isReachable) {
    return;
  }
  if (visitedAirports.hasOwnProperty(airport)) {
    return;
  }
  visitedAirports[airport] = true;
  unreachableConnections.push(airport);
  const { connections } = airportGraph[airport];
  for (const connection of connections) {
    depthFirstAddUnreachableConnections(
      airportGraph,
      connection,
      unreachableConnections,
      visitedAirports
    );
  }
};

const getMinNumberOfConnections = (airportGraph, unreachableAirportNodes) => {
  unreachableAirportNodes.sort(
    (a, b) => b.unreachableConnections.length - a.unreachableConnections.length
  );

  let numberOfNewConnections = 0;
  for (const airportNode of unreachableAirportNodes) {
    if (airportNode.isReachable) continue;
    numberOfNewConnections += 1;
    for (const connection of airportNode.unreachableConnections) {
      airportGraph[connection].isReachable = true;
    }
  }
  return numberOfNewConnections;
};

class AirportNode {
  constructor(airport) {
    this.airport = airport;
    this.connections = [];
    this.isReachable = true;
    this.unreachableConnections = [];
  }
}
