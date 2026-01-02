/**
 * You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const repi = new Set();
    for( let num of nums){
        if(repi.has(num)){
            return num
        }
        repi.add(num)
    }
};

console.log(repeatedNTimes([1,2,3,3]))//3