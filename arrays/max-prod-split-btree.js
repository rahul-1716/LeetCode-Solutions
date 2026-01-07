function TreeNode(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
}

const maxProduct = (root) => {
    const MOD = 1e9 + 7;

    const dfs = (node) => {
        if (!node) return 0;
        node.val += dfs(node.left) + dfs(node.right);
        return node.val;
    }

    const q = [root];
    let ans = 0;
    const total = dfs(root)

    while(q.length){
        const node = q.shift()
        if(!node) continue;

        const cur = (total - node.val) * node.val;
        ans = Math.max(ans, cur)

        if(node.left) q.push(node.left)
        if(node.right) q.push(node.right)
    }
return ans % MOD;
}

const root = 
    new TreeNode(
        1,
        new TreeNode(
            2,
            new TreeNode(4),
            new TreeNode(5)
        ),
        new TreeNode(
            3,
            null,
            new TreeNode(6)
        )
    );

    console.log(maxProduct(root)); //110