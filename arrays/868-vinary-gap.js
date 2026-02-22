/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let maxDistance = 0;
    let currentPosition = 0;
    let lastPosition = -1

    while(n > 0){
        if((n & 1) === 1){
            if(lastPosition !== -1){
                maxDistance = Math.max(currentPosition - lastPosition, maxDistance)
            }
            lastPosition = currentPosition
        }
        n = n >> 1;
        currentPosition++;
    }
    return maxDistance
};