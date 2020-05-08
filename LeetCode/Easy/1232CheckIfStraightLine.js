var checkStraightLine = function (arr) {
  // if there are maximum 2 points, it's a line
  if (arr.length <= 2) return true;

  // slope is diff between 1st and 2nd point
  let x1 = arr[0][0];
  let y1 = arr[0][1];
  let slope = (arr[1][1] - y1) / (arr[1][0] - x1);

  // slope for all other points should be same as first 2
  for (let i = 2; i < arr.length; i++) {
    if (arr[i][1] - y1 !== slope * (arr[i][0] - x1)) return false;
  }
  return true;
};

//Alternate

var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) {
    return true;
  }
  let x0 = coordinates[0][0];
  let y0 = coordinates[0][1];
  let x1 = coordinates[1][0];
  let y1 = coordinates[1][1];

  for (let i = 2; i < coordinates.length; i++) {
    let x = coordinates[i][0];
    let y = coordinates[i][1];

    if ((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)) {
      return false;
    }
  }
  return true;
};
