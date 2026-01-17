/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
   const n = bottomLeft.length;
   let maxSquare = 0;
   
   for(let i = 0; i < n - 1; i++){
    for( let j = i + 1; j < n; j++){
        const maxX = Math.min(topRight[i][0], topRight[j][0])
        const minX = Math.max(bottomLeft[i][0], bottomLeft[j][0])
        const maxY = Math.min(topRight[i][1], topRight[j][1])
        const minY = Math.max(bottomLeft[i][1], bottomLeft[j][1])
        

        if(minX < maxX && minY < maxY){
            const square = Math.min(maxX - minX , maxY - minY)
            maxSquare = Math.max(maxSquare, square ** 2)
        }
    }
   }
   return maxSquare
};

console.log(largestSquareArea([[1,1],[2,2],[3,1]],[[3,3],[4,4],[6,6]])) // 1