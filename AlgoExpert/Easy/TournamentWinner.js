//O(N) Time | O(K) Space where N is number of competitions and K is number of Teams
function tournamentWinner(competitions, results) {
  const map = new Map();
  let current = '';
  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [home, away] = competitions[i];
    const winner = result === 1 ? home : away;

    updateMap(winner, 3, map);

    if (map.get(winner) > map.get(current) || map.get(current) === undefined) {
      current = winner;
    }
  }

  return current;
}

const updateMap = (team, points, map) => {
  if (!map.has(team)) {
    map.set(team, 0);
  }
  map.set(team, map.get(team) + points);
};
