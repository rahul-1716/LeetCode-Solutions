/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    const n = positions.length;

    const indices = Array.from({ length: n }, (_, i) => i);

    indices.sort((a, b) => positions[a] - positions[b]);

    const stack = [];

    for (const idx of indices) {
        if (directions[idx] === 'R') {
            stack.push(idx);
        } else {
            while (stack.length > 0 && healths[idx] > 0) {
                const topIdx = stack[stack.length - 1];

                if (healths[topIdx] < healths[idx]) {
                    stack.pop();
                    healths[idx]--;
                    healths[topIdx] = 0;
                } else if (healths[topIdx] === healths[idx]) {
                    stack.pop();
                    healths[topIdx] = 0;
                    healths[idx] = 0;
                } else {
                    healths[topIdx]--;
                    healths[idx] = 0;
                }
            }
        }
    }

    const result = [];

    for (const health of healths) {
        if (health > 0) {
            result.push(health);
        }
    }

    return result;
};