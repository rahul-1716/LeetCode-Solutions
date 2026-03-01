var minPartitions = function(n){
    let maxDigit = 0;
    for(let char of n)
        maxDigit = Math.max(maxDigit, char)
    return maxDigit;
}