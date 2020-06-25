var findDuplicate = function (nums) {
  let tortoise = nums[0];
  let hare = nums[0];
  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    if (tortoise === hare) {
      break;
    }
  }

  let p1 = nums[0];
  let p2 = tortoise;

  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }
  return p1;
};
