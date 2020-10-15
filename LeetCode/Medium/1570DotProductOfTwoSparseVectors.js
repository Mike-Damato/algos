 */
class SparseVector{
    constructor(nums){
        this.nums = nums
    }
    dotProduct(vec){
        let ans = 0
        for(let i = 0; i < this.nums.length; i++){
            ans += this.nums[i] * vec[i];
    }
        return ans;
}
