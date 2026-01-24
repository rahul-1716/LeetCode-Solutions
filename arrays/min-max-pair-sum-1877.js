/**
 * @param {number[]}nums
 * @return {number}
 */
var minPairSum = function(nums){
    nums.sort((a,b) => a - b)
    let left = 0;
    let right = nums.length-1;
    let maxSumPair = 0;
    while(left < right){
        const pairSum = nums[left] + nums[right];
        if(pairSum > maxSumPair){
            maxSumPair = pairSum
        }
        left++;
        right--;
    }
    return maxSumPair;
}

nums=[3,5,2,3];
console.log(minPairSum(nums)) //7