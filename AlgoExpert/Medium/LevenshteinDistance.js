//O(N*M) Time N is length of str1 & M is length of str2
//O(min(N, M))
function levenshteinDistance(str1, str2) {
  // Write your code here.
  const edits = [];
  //need + 1 to account for empty string
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
        edits[i][j] =
          1 + Math.min(edits[i][j - 1], edits[i - 1][j - 1], edits[i - 1][j]);
      }
    }
  }
  return edits[str2.length][str1.length];
}

//Alternate

const levenshteinDistance = (str1, str2) => {
  let small = str1.length < str2.length ? str1 : str2;
  let big = str1.length >= str2.length ? str1 : str2;

  let evenEdits = [];
  let oddEdits = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }

  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, prevEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      prevEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      prevEdits = oddEdits;
    }
    currentEdits[0] = i;

    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = prevEdits[j - 1];
      } else {
        currentEdits[j] =
          1 + Math.min(prevEdits[j - 1], prevEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0
    ? evenEdits[small.length]
    : oddEdits[small.length];
};

//we want min of:
/*
if equal character dp[r-1][c-1]

else 1+ min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1])
*/
