var splitListToParts = function (root, k) {
  let ans = [];
  let length = 0;
  let current = root;

  while (current) {
    length++;
    current = current.next;
  }

  let parts = Math.floor(length / k);
  let remainder = length % k;

  let start = root;
  let end = root;

  while (end) {
    let count = 1;
    let target = parts;

    if (remainder > 0) {
      target += 1;
      remainder--;
    }
    while (end.next && count < target) {
      end = end.next;
      count++;
    }
    let next = end.next;
    end.next = null;
    ans.push(start);
    start = next;
    end = next;
  }

  for (let i = ans.length; i < k; i++) {
    ans[i] = null;
  }
  return ans;
};
