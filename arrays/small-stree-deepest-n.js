/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left = null, right = null){
    this.val = val
    this.left = left
    this.right = right
}

/**
 * @param{TreeNode} root
 * @return {TreeNode} 
 */

function subtreeWithAllDeepest(root){
    function dfs(node){
        if (!node) return [0 ,null]

        const [ld, ln] = dfs(node.left)
        const [rd , rn] = dfs(node.right)

        if(ld>rd) return [ld + 1 , ln]
        if(rd>ld) return [rd + 1, rn]
        return [ld+1 , node]
    }
    return dfs(root)[1]
}

const root =
  new TreeNode(
    3,
    new TreeNode(
      5,
      new TreeNode(6),
      new TreeNode(
        2,
        new TreeNode(7),
        new TreeNode(4)
      )
    ),
    new TreeNode(
      1,
      null,
      new TreeNode(8)
    )
  );
const answer = subtreeWithAllDeepest(root);

console.log("Subtree root with all deepest nodes:", answer.val);
console.log("Subtree root with all deepest nodes:", answer);
