/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = (nums) => {
    nums.map((element , index) => element[index] === '0' ? '1' : '0').join('')
}


function findDifferentBinaryString(nums){
    let result = '';
    let n = nums.length;

    for(let i = 0; i < n; i++){
        result += nums[i][i] === '0' ? '1' : '0';
    }
    return result;
}