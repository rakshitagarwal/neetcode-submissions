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
    goodNodes(root) {
        // Helper DFS function to traverse the tree and track the maximum value along the path
        function dfs(node, max) {
            // Base case: if the node is null, return 0 good nodes
            if (!node) return 0;

            // Check if the current node is "good" (its value is greater than or equal to the path maximum)
            let count = node.val >= max ? 1 : 0;

            // Update the maximum value encountered so far on this path
            max = Math.max(max, node.val);

            // Recursively traverse left and right subtrees, accumulating the good node counts
            count += dfs(node.left, max);
            count += dfs(node.right, max);

            return count;
        }

        // Start DFS from the root, initializing the path maximum with the root's value
        return dfs(root, root.val);
    }
}
