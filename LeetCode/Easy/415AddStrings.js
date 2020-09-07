var addStrings = function (num1, num2) {
  let carry = 0;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let n1, n2, val;
  let ans = [];
  while (p1 >= 0 || p2 >= 0) {
    n1 = p1 >= 0 ? num1[p1] - '0' : 0;
    n2 = p2 >= 0 ? num2[p2] - '0' : 0;
    val = (n1 + n2 + carry) % 10;
    carry = Math.floor((n1 + n2 + carry) / 10);
    ans.push(val);
    p1--;
    p2--;
  }
  if (carry !== 0) {
    ans.push(carry);
  }
  return ans.reverse().join('');
};
