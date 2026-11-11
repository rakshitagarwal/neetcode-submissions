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
    isValidBST(root) {
        function dfs(node, left, right) {
            // Base case: an empty node is a valid subtree
            if (!node) return true;

            // Ensure the current node's value falls strictly within the allowed range
            if (node.val <= left || node.val >= right) return false;

            // Recursively validate left subtree (upper bound becomes node.val)
            // and right subtree (lower bound becomes node.val)
            return dfs(node.left, left, node.val) && dfs(node.right, node.val, right);
        }

        // Start DFS with initial boundaries spanning all real numbers
        return dfs(root, -Infinity, Infinity);
    }
}
