//Brute Force
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = nums1.concat(nums2);
  merged.sort((a, b) => a - b);

  if (merged.length % 2 !== 0) {
    return merged[Math.floor(merged.length / 2)];
  } else {
    let midIdx = Math.floor(merged.length / 2);
    let mid1 = merged[midIdx];
    let mid2 = merged[midIdx - 1];
    return (mid1 + mid2) / 2;
  }
};

//Optmized
const findMedianSortedArrays = (nums1, nums2) => {
  let length = nums1.length + nums2.length;
  let idx1 = 0;
  let idx2 = 0;
  let current, last;

  while (idx1 + idx2 <= length / 2) {
    if (current !== undefined) {
      last = current;
    }
    let num1 = nums1[idx1];
    let num2 = nums2[idx2];
    if (num1 === undefined) {
      current = num2;
      idx2++;
    } else if (num2 === undefined) {
      current = num1;
      idx1++;
    } else if (num1 < num2) {
      current = num1;
      idx1++;
    } else {
      current = num2;
      idx2++;
    }
  }
  return length % 2 === 0 ? (last + current) / 2 : current;
};
