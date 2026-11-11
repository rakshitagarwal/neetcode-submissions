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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];
        if (!root) return res; // Return empty array if the tree is empty

        let queue = [root]; // Initialize queue for Level Order Traversal (BFS)

        while (queue.length) {
            let rightside = null;
            let n = queue.length;

            // Traverse all nodes at the current level
            for (let i = 0; i < n; i++) {
                let node = queue.shift();

                if (node) rightside = node; // Keep updating to track the rightmost node of this level

                // Push left and right children into the queue for the next level
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            // Add the value of the rightmost node of the current level to the result
            if (rightside) res.push(rightside.val);
        }

        return res;
    }
}
