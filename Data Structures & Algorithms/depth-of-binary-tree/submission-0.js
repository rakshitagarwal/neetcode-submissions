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
    maxDepth(root) {
        // Initialize a stack with the root node and its initial depth of 1
        const stack = [[root, 1]];
        let res = 0; // Tracks the maximum depth found

        // Loop until all nodes in the stack have been processed
        while (stack.length > 0) {
            const current = stack.pop();
            const node = current[0];
            const depth = current[1];

            // Process the node only if it is not null
            if (node !== null) {
                // Update the maximum depth if the current depth is greater
                res = Math.max(res, depth);

                // Push child nodes onto the stack with an incremented depth
                stack.push([node.left, depth + 1]);
                stack.push([node.right, depth + 1]);
            }
        }

        return res;
    }
}
