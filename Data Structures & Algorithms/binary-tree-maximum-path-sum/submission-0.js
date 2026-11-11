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
    maxPathSum(root) {
        // Initialize result with the root's value to handle trees with all negative numbers
        let maxVal = root.val;

        const dfs = (node) => {
            if (!node) return 0; // Base case: if node is null, path sum contribution is 0

            // Recursively get the maximum branch sum from left and right subtrees
            let leftMax = dfs(node.left);
            let rightMax = dfs(node.right);

            // Ignore negative path sums by taking Math.max with 0
            leftMax = Math.max(leftMax, 0);
            rightMax = Math.max(rightMax, 0);

            // Update global maximum path sum passing through the current node as the peak
            maxVal = Math.max(maxVal, node.val + leftMax + rightMax);

            // Return the max sum of a path extending from this node downward (to its parent)
            return node.val + Math.max(leftMax, rightMax);
        };

        dfs(root);
        return maxVal;
    }
}
