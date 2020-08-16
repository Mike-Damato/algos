function deletionDistance(str1, str2) {
  if (str1 === str2) {
    return 0;
  }
  // your code goes here
  const edits = [];

  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        //                             left           above
        edits[i][j] = 1 + Math.min(edits[i][j - 1], edits[i - 1][j]);
      }
    }
  }

  return edits[str2.length][str1.length];
}
