var validIPAddress = function (IP) {
  const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
  const ipv6 = /^([\da-f]{1,4}:){8}$/i;
  return ipv4.test(IP + '.')
    ? 'IPv4'
    : ipv6.test(IP + ':')
    ? 'IPv6'
    : 'Neither';
};

//Pure Javascript no Regex
var validIPAddress = function (IP) {
  let output = 'Neither';
  if (IP.length === 0) return output;
  let ipv4 = IP.split('.');
  let ipv6 = IP.split(':');
  if (ipv4.length === 4 && ipv4.every((el) => validIPv4(el))) {
    output = 'IPv4';
  }
  if (ipv6.length === 8 && ipv6.every((el) => validIPv6(el))) {
    output = 'IPv6';
  }
  return output;
};
function validIPv4(str) {
  let num = '0123456789';
  if (str === '' || str.length > 4) return false;
  if (str.length > 1 && str.charAt(0) === '0') return false;
  if (str.split('').some((char) => !num.includes(char))) return false;
  if (Number(str) < 0 || Number(str) > 255) return false;
  return true;
}
function validIPv6(str) {
  let hex = '0123456789abcdefABCDEF';
  if (str.length === 0 || str.length > 4) return false;
  for (let char of str) {
    if (!hex.includes(char)) return false;
  }
  return true;
}
