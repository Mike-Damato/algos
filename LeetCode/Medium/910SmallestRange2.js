var smallestRangeII = function(A, K) {
    A.sort((a,b) => a-b);
    let ans = A[A.length-1] - A[0];

    for(let i = 0; i < A.length-1; i++){
        let current = A[i];
        let next = A[i+1];
        let max = Math.max(A[A.length-1] - K, current + K);
        let min = Math.min(A[0] + K, next - K);
        ans = Math.min(ans, max - min)
    }
    return ans;
};
