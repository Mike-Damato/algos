let hash = {};
var encode = function (longUrl) {
  let unique = Date.now().toString(36);
  hash[unique] = longUrl;
  return `http://tinyurl.com/${unique}`;
};

var decode = function (shortUrl) {
  return hash[shortUrl.split('com/')[1]];
};
