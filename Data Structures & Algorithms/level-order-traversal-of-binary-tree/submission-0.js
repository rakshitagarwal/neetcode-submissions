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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        let res = [];
        let queue = [root]; // Initialize queue with the root node

        while (queue.length) {
            let level = [];
            let levelSize = queue.length; // Store queue length to process only current level nodes

            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift(); // Remove the front node from the queue
                level.push(node.val); // Add its value to the current level list

                // Push child nodes into the queue for the next level
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            res.push(level); // Add the completed level to the result array
        }

        return res;
    }
}
