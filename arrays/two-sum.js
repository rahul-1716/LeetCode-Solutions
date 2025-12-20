// Two Sum - LeetCode 1
// Brute Force: O(n^2), Space: O(1)
// Hashmap Optimal: O(n), Space: O(n)

// BRUTE FORCE
var twoSumBrute = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};

// OPTIMAL HASHMAP
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};




var twoSumB = (nums , target) => {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++ ){
            if(nums[i] + nums[j] === target) return [i, j];
        } 
    }
};

const twoSumHash = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if(map.has(complement)){
            return[map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}