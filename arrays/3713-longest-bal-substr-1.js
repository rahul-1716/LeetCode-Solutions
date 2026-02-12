/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let ans = 0;
    for(let i = 0; i < s.length; i++){
        let freq = new Array(26).fill(0);
        let distinct = 0;
        let maxFreq = 0;

        for(let j = i; j < s.length; j++){
            let index = s.charCodeAt(j) - 97;
            if(freq[index] === 0)
                distinct++;

            freq[index]++;
            maxFreq = Math.max(maxFreq, freq[index])

            
        let length = j - i + 1;
        
        if(length === maxFreq * distinct)
            ans = Math.max(ans, length)
        }
    }
    return ans;
};

console.log(longestBalanced("abbac")); // 4
