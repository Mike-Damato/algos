var distributeCandies = function (candies, num_people) {
  let arr = new Array(num_people).fill(0);
  let i = 0;
  while (candies - i > 0) {
    arr[i % num_people] += i + 1;
    i++;
    candies -= i;
  }
  arr[i % num_people] += candies;
  return arr;
};
