/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const MOD = 1000000007n;
    const dp = Array.from({length: zero + 1}, () =>
        Array.from({length: one + 1}, () => [0n, 0n])
    );
    for (let i = 1; i <= Math.min(zero, limit); i++) dp[i][0][0] = 1n;
    for (let j = 1; j <= Math.min(one, limit); j++) dp[0][j][1] = 1n;
    for (let i = 1; i <= zero; i++) {
        for (let j = 1; j <= one; j++) {
            dp[i][j][0] = (dp[i-1][j][0] + dp[i-1][j][1]) % MOD;
            if (i - limit - 1 >= 0)
                dp[i][j][0] = (dp[i][j][0] - dp[i-limit-1][j][1] + MOD) % MOD;
            dp[i][j][1] = (dp[i][j-1][0] + dp[i][j-1][1]) % MOD;
            if (j - limit - 1 >= 0)
                dp[i][j][1] = (dp[i][j][1] - dp[i][j-limit-1][0] + MOD) % MOD;
        }
    }
    return Number((dp[zero][one][0] + dp[zero][one][1]) % MOD);
};