var champagneTower = function (poured, query_row, query_glass) {
  let cups = [poured];
  for (let i = 0; i < query_row; i++) {
    let newRow = new Array(cups.length + 1).fill(0);
    for (let j = 0; j < cups.length; j++) {
      let extra = Math.max(0, cups[j] - 1);
      newRow[j] += extra / 2;
      newRow[j + 1] += extra / 2;
    }
    cups = newRow;
  }
  return Math.min(1, cups[query_glass]);
};
