var intervalIntersection = function (A, B) {
  let output = [];
  let Aptr = 0;
  let Bptr = 0;
  let start;
  let end;
  while (Aptr < A.length && Bptr < B.length) {
    start = Math.max(A[Aptr][0], B[Bptr][0]);
    end = Math.min(A[Aptr][1], B[Bptr][1]);
    //Overlap found
    if (start <= end) {
      output.push([start, end]);
    }
    if (A[Aptr][1] < B[Bptr][1]) {
      Aptr++;
    } else {
      Bptr++;
    }
  }
  return output;
};

A = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
B = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];

A[Aptr][0] = 5;
A[Aptr][1] = 10;
B[Bptr][0] = 8;
B[Bptr][1] = 12;
max = 5;
min = 5;

Output: [
  [1, 2],
  [5, 5],
  [8, 10],
  [15, 23],
  [24, 24],
  [25, 25],
];
