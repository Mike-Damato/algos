function underscorifySubstring(string, substring) {
  // Write your code here.
  let locations = merge(getLocations(string, substring));
  return underscore(string, locations);
}

//Need to find locations of substring in our main string
const getLocations = (string, substring) => {
  const locations = [];
  let start = 0;
  while (start < string.length) {
    let nextIdx = string.indexOf(substring, start);
    if (nextIdx !== -1) {
      locations.push([nextIdx, nextIdx + substring.length]);
      start = nextIdx + 1;
    } else {
      break;
    }
  }
  return locations;
};

//Get final locations of where underscores should be, merge intervals if needed
const merge = (locations) => {
  if (!locations.length) return locations;
  const newLocations = [locations[0]];
  let prev = newLocations[0];
  for (let i = 1; i < locations.length; i++) {
    let current = locations[i];
    if (current[0] <= prev[1]) {
      prev[1] = current[1];
    } else {
      newLocations.push(current);
      prev = current;
    }
  }
  return newLocations;
};

//add the underscores with the final locations
const underscore = (string, locations) => {
  let locationsIdx = 0;
  let stringIdx = 0;
  let inBetween = false;
  const final = [];
  let i = 0;
  while (stringIdx < string.length && locationsIdx < locations.length) {
    if (stringIdx === locations[locationsIdx][i]) {
      final.push('_');
      inBetween = !inBetween;
      if (!inBetween) {
        locationsIdx++;
      }
      i = i === 1 ? 0 : 1;
    }
    final.push(string[stringIdx]);
    stringIdx++;
  }
  if (locationsIdx < locations.length) {
    final.push('_');
  } else if (stringIdx < string.length) {
    final.push(string.slice(stringIdx));
  }
  return final.join('');
};
