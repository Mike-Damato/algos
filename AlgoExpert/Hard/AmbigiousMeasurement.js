function ambiguousMeasurements(measuringCups, low, high) {
  const map = new Map();
  return canMeasureInRange(measuringCups, low, high, map);
}

const canMeasureInRange = (cups, low, high, map) => {
  const key = buildKey(low, high);

  if (map.has(key)) return map.get(key);

  if (low <= 0 && high <= 0) return false;
  let canMeasure = false;

  for (const cup of cups) {
    const [singleLow, singleHigh] = cup;
    if (low <= singleLow && singleHigh <= high) {
      canMeasure = true;
      break;
    }

    const newLow = Math.max(0, low - singleLow);
    const newHigh = Math.max(0, high - singleHigh);
    canMeasure = canMeasureInRange(cups, newLow, newHigh, map);
    if (canMeasure) break;
  }
  map.set(key, canMeasure);
  return canMeasure;
};

const buildKey = (low, high) => `${low}-${high}`;
