function diskStacking(disks) {
  // Write your code here.
  disks.sort((a, b) => a[2] - b[2]);
  const heights = disks.map((disk) => disk[2]);
  const sequences = new Array(disks.length);
  let maxIdx = 0;
  for (let i = 1; i < disks.length; i++) {
    let current = disks[i];
    for (let j = 0; j < i; j++) {
      let otherDisk = disks[j];
      if (validDimensions(otherDisk, current)) {
        if (heights[i] <= current[2] + heights[j]) {
          heights[i] = current[2] + heights[j];
          sequences[i] = j;
        }
      }
    }
    if (heights[i] >= heights[maxIdx]) maxIdx = i;
  }
  return buildSequence(disks, sequences, maxIdx);
}

const validDimensions = (other, current) => {
  return (
    other[0] < current[0] && other[1] < current[1] && other[2] < current[2]
  );
};

const buildSequence = (disks, sequences, idx) => {
  let ans = [];
  while (idx !== undefined) {
    ans.unshift(disks[idx]);
    idx = sequences[idx];
  }
  return ans;
};
