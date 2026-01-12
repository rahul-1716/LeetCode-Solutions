/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let total = 0;

    for ( let i = 1; i < points.length; i++){
        total += Math.max(
            Math.abs(points[i][0] - points[i-1][0]),
            Math.abs(points[i][1] - points[i-1][1])
        )
    }
    return total;
};


const points1 = [[1,1],[3,4],[-1,0]];
const points2 = [[3,2],[-2,2]];

console.log(minTimeToVisitAllPoints(points1)); // Expected: 7
console.log(minTimeToVisitAllPoints(points2)); // Expected: 5