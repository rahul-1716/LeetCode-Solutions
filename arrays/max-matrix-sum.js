/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let totalSum = 0;
    let negatives = 0;
    let minAbs = Infinity;

    for(const row of matrix){
        for(const value of row){
            if( value < 0) negatives++;
            const absoluteValue = Math.abs(value)
            totalSum += absoluteValue;
            minAbs = Math.min(minAbs , absoluteValue)
        }
    }
    return negatives % 2 === 0 ? totalSum : totalSum - 2 * minAbs ;
};

const matrix1 = [[1, -1], [-1, 1]];
const matrix2 = [[1, 2, 3], [-1, -2, -3], [1, 2, 3]];
const matrix3 = [[-5]];

console.log(maxMatrixSum(matrix1)); // expected 4
console.log(maxMatrixSum(matrix2)); // expected 16
console.log(maxMatrixSum(matrix3)); // expected -5