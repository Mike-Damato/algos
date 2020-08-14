var longestPalindrome = function (s) {
  let map = new Map();
  let odds = 0;
  let count = 0;
  for (const char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (const [key, val] of map) {
    if (val % 2 === 0) {
      count += val;
    } else {
      odds = 1;
      count += val - 1;
    }
  }

  return count + odds;
};

/**
1. store count of each char in a map
2. now loop thru map adding up the counts of each char
***have to account for odd counts
if a character is odd just add its value - 1 to make it even to the count
make an odds variable = 0 and if we run across and odd make it a 1 that will account easily for letters that occur 3 times
count += 3 - 1 === 2 + odds(1)

O(N) time to loop through entire string and map
O(N) Space for creating the map
 */
