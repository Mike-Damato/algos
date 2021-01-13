var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
    count++;
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
  }
  return count;
};
