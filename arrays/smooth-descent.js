/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let count = 1;
    let result = 1;

    for(let i =1 ;i < prices.length; i++){
        if(prices[i] === prices[i-1]-1){
            count++;
        }else{
            count = 1;
        }
        result += count;
    }
    return result;
};

console.log(getDescentPeriods([3,2,1,4])); // 7
console.log(getDescentPeriods([8,6,7,7])); // 4