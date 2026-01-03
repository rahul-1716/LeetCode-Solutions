/**  You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).

Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7.
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const mod = 1000000007;
     let aba = 6
     let abc = 6
    for( let i = 2; i <= n; i++){
        const newaba = (aba * 3  + abc*2) % mod;
        const newabc = (aba * 2 + abc*2) % mod;
        aba = newaba;
        abc = newabc;
    }
    return (aba + abc) % mod;
};

console.log(numOfWays(1))