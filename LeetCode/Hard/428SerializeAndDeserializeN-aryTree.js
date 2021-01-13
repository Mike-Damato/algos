class Codec {
  constructor() {}

  serialize = function (root) {
    if (!root) return '';
    const queue = [root];
    const ans = [root.val];

    while (queue.length) {
      let current = queue.shift();
      for (const child of current.children) {
        queue.push(child);
        ans.push(child.val);
      }
      ans.push('null');
    }
    return ans.join(',');
  };

  deserialize = function (data) {
    if (!data) return null;

    const split = data.split(',');
    const root = new Node(split.shift(), []);
    const queue = [root];

    while (queue.length) {
      let current = queue.shift();
      while (split[0]) {
        let child = new Node(split.shift(), []);
        current.children.push(child);
        queue.push(child);
      }
      split.shift();
    }
    return root;
  };
}
