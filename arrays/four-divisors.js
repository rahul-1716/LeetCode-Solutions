/**
 * Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.

@param {number[]} nums;
@return {number}
*/
var sumFourDivisons = function(nums){
    let divSum = 0;

    for (let n of nums){
        let divCount = 0 , inSum = 0;
        for(let d = 1; d * d <=n; d++){
            if(n % d === 0){
                let other = n / d;
                if(d === other){
                    divCount++
                    inSum += d;
                }else{
                    divCount += 2;
                    inSum += d + other;
                }
                if(divCount > 4) break;
            }
        }
        if( divCount === 4)
            divSum += inSum
    }
    return divSum
};


console.log(sumFourDivisons([21 , 4 , 7])) // 32


