/**
 * @param{number[]} nums1
 * @param{number[]} nums2
 * @return {number}
 */

function maxDotProduct(nums1, nums2){
    const n = nums1.length, m = nums2.length;
    const NEG = -Infinity

    const dp = Array.from({length: n+1}, () => Array(m+1).fill(NEG));

    for(let i = 1; i<=n; i++){
        for(let j=1; j<=m; j++){
            const take = nums1[i-1]*nums2[j-1] + Math.max(0, dp[i-1][j-1]);
            dp[i][j] = Math.max(take, dp[i-1][j] , dp[i][j-1])
        }
    }
    return dp[n][m];
}

console.log(maxDotProduct([2, 1, -2, 5], [3, 0, -6])); //18