function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  let numCities = distances.length;
  let milesRemaining = 0;

  let candidate = 0;
  let milesAtCandidate = 0;

  for (let i = 1; i < numCities; i++) {
    const prevDist = distances[i - 1];
    const prevFuel = fuel[i - 1];
    milesRemaining += prevFuel * mpg - prevDist;

    if (milesRemaining < milesAtCandidate) {
      milesAtCandidate = milesRemaining;
      candidate = i;
    }
  }
  return candidate;
}
