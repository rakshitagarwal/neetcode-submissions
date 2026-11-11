/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0;

        function dfs(node) {
            if (!node) return 0; // leaf means 0 height

            // find max depth in left and right
            const left = dfs(node.left);
            const right = dfs(node.right);

            // Update diameter if the path through current node is greater
            res = Math.max(res, left + right);

            return 1 + Math.max(left, right); // 1 comes from current node
        }

        dfs(root);

        return res;
    }
}
