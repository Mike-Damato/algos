const { isLong } = require('long');

//O(b^2*r) time & O(b) space - where b is blocks and r is reqs
function apartmentHunting(blocks, reqs) {
  let maxDistAtBlocks = new Array(blocks.length).fill(-Infinity);
  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      let closestReq = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReq = Math.min(closestReq, distanceBetween(i, j));
        }
      }
      maxDistAtBlocks[i] = Math.max(maxDistAtBlocks[i], closestReq);
    }
  }
  return getIdxAtMinValue(maxDistAtBlocks);
}

const getIdxAtMinValue = (arr) => {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
};

const distanceBetween = (a, b) => {
  return Math.abs(a - b);
};

//O(br) time & O(br) space
function apartmentHunting(blocks, reqs) {
  let minDistancesFromBlocks = reqs.map((req) => getMinDistances(blocks, req));
  let maxDistancesAtBlocks = getMaxDistances(blocks, minDistancesFromBlocks);
  return getIdxAtMinValue(maxDistancesAtBlocks);
}

const getMinDistances = (blocks, reqs) => {
  let minDistances = new Array(blocks.length);
  let closestReq = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][reqs]) {
      closestReq = i;
    }
    minDistances[i] = distanceBetween(i, closestReq);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][reqs]) {
      closestReq = i;
    }
    minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closestReq));
  }
  return minDistances;
};

const getMaxDistances = (blocks, minDistancesFromBlocks) => {
  let maxDistancesAtBlocks = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    let minDistanceAtBlock = minDistancesFromBlocks.map(
      (distances) => distances[i]
    );
    maxDistancesAtBlocks[i] = Math.max(...minDistanceAtBlock);
  }
  return maxDistancesAtBlocks;
};

const getIdxAtMinValue = (arr) => {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
};

const distanceBetween = (a, b) => Math.abs(a - b);
