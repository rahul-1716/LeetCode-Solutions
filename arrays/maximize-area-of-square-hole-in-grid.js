/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    const longest = (arr) => {
        arr.sort((a, b) => a - b);
        let best = 1, curr = 1;
        for(let i = 1; i < arr.length; i++){
            if(arr[i] === arr[i-1] + 1) curr++;
            else curr = 1;
            if(curr > best) best = curr;
        }
        return best + 1;
    }
    const side = Math.min(longest(vBars), longest(hBars))
    return side * side;
};

console.log(
    maximizeSquareHoleArea(
        2,
        2,
        [1],
        [1]
    )
); // 4

console.log(
    maximizeSquareHoleArea(
        5,
        5,
        [1, 2, 3],
        [2, 3]
    )
); // 9

console.log(
    maximizeSquareHoleArea(
        6,
        6,
        [2, 3, 4],
        [1, 2, 3, 4]
    )
); // 16

console.log(
    maximizeSquareHoleArea(
        3,
        3,
        [],
        []
    )
); // 1

console.log(
    maximizeSquareHoleArea(
        10,
        10,
        [3, 4, 5, 6],
        [7, 8]
    )
); // 9
