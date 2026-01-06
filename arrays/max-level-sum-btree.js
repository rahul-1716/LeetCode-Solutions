function TreeNode (val , left , right){
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var maxLevelSum = function(root){
    if(root === null) return 0;

    const q = [];
    q.push(root);

    let level = 1;
    let maxLevel = 1;
    let maxSum = -Infinity;

    while(q.length){
        const size = q.length;
        let levelSum = 0;

        for( let i = 0 ; i < size ; i++){
            const node = q.shift();
            levelSum += node.val;

            if(node.left !== null) q.push(node.left)
            if(node.right !== null) q.push(node.right)
        }
    if(levelSum > maxSum){
        maxSum = levelSum;
        maxLevel = level;
    }
    level++
    }
    return maxLevel
}

const root = new TreeNode(
    1,
    new TreeNode(
        7,
        new TreeNode(7),
        new TreeNode(-8)
    ),
    new TreeNode(0)
);

console.log(maxLevelSum(root)) // expected output : 2