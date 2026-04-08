var xorAfterQueries = function(nums, queries){
    const MOD = 1000000007n;

    for(const [l,r,k,v] of queries){
        for(let i = l; i <= r; i += k){
            nums[i] = Number((BigInt(nums[i]) * BigInt(v)) % MOD);
        }
    }
    let ans = 0;
    for(const num of nums){
        ans ^= num;
    }

    return ans;
}

console.log(xorAfterQueries([1,1,1],[[0,2,1,4]]));
