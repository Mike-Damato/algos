function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  const red = redShirtHeights.sort((a, b) => a - b);
  const blue = blueShirtHeights.sort((a, b) => a - b);
  const backRow = red[red.length - 1] >= blue[blue.length - 1] ? red : blue;
  const frontRow = red[red.length - 1] < blue[blue.length - 1] ? red : blue;

  for (let i = 0; i < backRow.length; i++) {
    if (backRow[i] <= frontRow[i]) return false;
  }
  return true;
}
