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
     * @return {boolean}
     */
    isBalanced(root) {
        // Helper function that returns [isBalanced, height] for each subtree
        function dfs(node) {
            // Base case: an empty tree is balanced and has height 0
            if (!node) return [true, 0];

            // Recursively check left and right subtrees
            let left = dfs(node.left);
            let right = dfs(node.right);

            // Check if current node is balanced:
            // 1. Left subtree must be balanced
            // 2. Right subtree must be balanced
            // 3. Difference in height between left and right must be <= 1
            let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

            // Return balance status and the calculated height of the current node
            return [balanced, 1 + Math.max(left[1], right[1])];
        }

        // Start DFS from root and return just the boolean balance result
        return dfs(root)[0];
    }
}
