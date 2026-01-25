/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let min = Infinity;
    nums.sort((a,b) => a - b);
    for(let i = 0; i + k - 1 < nums.length; i++)
        min = Math.min(min, nums[i + k - 1] - nums[i])
    return min;
};

nums = [9,4,1,7];
k = 2;
console.log(minimumDifference(nums, k))