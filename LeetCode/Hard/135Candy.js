var candy = function (ratings) {
  let candies = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    let left = i - 1;
    if (ratings[i] > ratings[left]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    let right = i + 1;
    if (ratings[i] > ratings[right]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  return candies.reduce((a, b) => a + b, 0);
};

// Time Complexity: O(N)    Space Complexity: O(N)
// Greedy Algorithm, min candies
// we don't need to sort for greedy
// 1) Create candies array of same length as ratings, fill with 1 candy to start
// 2) Start loop start from index 1, compare ratings[i] to ratings[i-1]
//    If ratings[i] is greater than ratings[i-1], assign candies[i] to candies[i-1] + 1
// 3) Start another loop starting from ratings.length - 2 (2nd to last element)
//    Now, we compare ratings[i] to ratings[i+1]
//    If ratings[i] is greater than ratings[i+1], assign cadies[i] to candies[i+1] + 1
// Return sum of candies array
