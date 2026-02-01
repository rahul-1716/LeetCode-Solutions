/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let first = nums[0];
    let rest = nums.slice(1).sort((a,b) => a - b);
    return first + rest[0] + rest[1]
};

nums = [1,2,3,12];
console.log(minimumCost(nums));//6
