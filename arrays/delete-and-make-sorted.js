/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let rows = strs.length;
    let cols = strs[0].length;
    let deletions = 0;

    for(let c = 0; c < cols; c++){
        for(let r = 1; r < rows; r++){
            if(strs[r][c] < strs[r-1][c]){
                deletions++;
                break;
            }
        }
    }
    return deletions;
};

console.log(minDeletionSize(["cba","daf","ghi"])); // 1
console.log(minDeletionSize(["a","b"]));           // 0
console.log(minDeletionSize(["zyx","wvu","tsr"])); // 3