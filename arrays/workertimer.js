/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    let low = 1, high = 1e16, res = high;

    while(low <= high){
        let mid = Math.floor(low + (high - low) / 2);
        let total = 0;
        for(let i = 0; i < workerTimes.length && total < mountainHeight; i++)
            total += Math.floor(Math.sqrt(mid / workerTimes[i] * 2 + 0.25) - 0.5);
            if(total >= mountainHeight){
                res = mid;
                high = mid - 1
            }else
                low = mid + 1;
    }
    return res
};