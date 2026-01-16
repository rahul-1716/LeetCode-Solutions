/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = (m,n,hFences,vFences) => {
    const MOD = 1000000007n;
    const prep = (cuts, limit) => [1,...cuts.sort((a,b) => a - b), limit];

    const h = prep(hFences, m)
    const v = prep(vFences, n)

    const set = new Set();

    let best = 0;

    for(let i = 0; i < h.length; i++)
        for(let j = i+1; j<h.length; j++)
            set.add(h[j] - h[i])
    
    for(let i = 0; i < v.length; i++)
        for(let j = i+1; j<v.length; j++){
            const d = v[j] - v[i]
            if(d > best && set.has(d)) best = d;
    }
    if(best === 0) return -1

    return Number(BigInt(best) * BigInt(best) % MOD)
}

console.log("Result:", maximizeSquareArea(4, 3, [2], [2]));
console.log("Result:", maximizeSquareArea(5, 4, [2,4], [2]));
console.log("Result:", maximizeSquareArea(3, 3, [], []));
