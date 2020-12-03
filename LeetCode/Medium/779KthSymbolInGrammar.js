var kthGrammar = function (N, K) {
  if (N === 1) return 0;
  const prev = kthGrammar(N - 1, parseInt((K + 1) / 2));
  return K % 2 === 0 ? !prev : prev;
};
